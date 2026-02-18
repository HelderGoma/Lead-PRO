import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import FilterBar from './components/Games/FilterBar';
import GameCard from './components/Games/GameCard';
import { INITIAL_GAMES } from './data';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import SortBar from './components/SortBar/SortBar';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState(INITIAL_GAMES);

  const [provider, setProvider] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const loader = useRef(null);

  const EmptyPage = ({ title }) => (
    <main className="p-4 md:p-8 max-w-[1600px] mx-auto lg:ml-50 text-white">
      <Breadcrumbs />
      <h1 className="text-2xl md:text-3xl font-bold mb-8">{title}</h1>
    </main>
  );

  const filteredGames = useMemo(() => {
    let result = games.filter(game => {
      const matchesTab = activeTab === 'all' || game.category === activeTab;
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesProvider = provider === 'all' || game.provider === provider;

      return matchesTab && matchesSearch && matchesProvider;
    });

    if (sortBy === 'name') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'new') {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [games, activeTab, searchTerm, provider, sortBy]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setGames(prev => [...prev, ...INITIAL_GAMES.map(g => ({ ...g, id: Math.random() }))]);
        }, 500);
      }
    }, { threshold: 0.1 });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter  basename="/lead-pro/">
      <div className="flex min-h-screen bg-[#040312]">
        <Sidebar />
        <div className="flex-1">
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/games" element={
              <main className="main p-4 md:p-8 max-w-100% mx-auto lg:ml-50 bg-[#040312]" >
                <Breadcrumbs />
                <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white">Игры</h1>
                <SortBar setSortBy={setSortBy} setProvider={setProvider} />

                <FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-8" >
                  {filteredGames.map(game => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>

                {filteredGames.length === 0 && (
                  <div className="text-center py-20 text-gray-500">
                    По запросу "{searchTerm}" ничего не найдено
                  </div>
                )}

                <div ref={loader} className="h-40 flex items-center justify-center" >
                  <div className="w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                </div>
              </main>
            } />
            <Route path="/home" element={<EmptyPage title="Главная" />} />
            <Route path="/updates" element={<EmptyPage title="Обновления" />} />
            <Route path="/brands" element={<EmptyPage title="Бренды" />} />
            <Route path="/providers" element={<EmptyPage title="Провайдеры" />} />
            <Route path="/bonuses" element={<EmptyPage title="Бонусы" />} />
            <Route path="/apps" element={<EmptyPage title="Приложения" />} />
            <Route path="/" element={<Navigate to="/games" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}