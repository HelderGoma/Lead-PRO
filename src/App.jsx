import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import FilterBar from './components/Games/FilterBar';
import GameCard from './components/Games/GameCard';
import { INITIAL_GAMES } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [games, setGames] = useState(INITIAL_GAMES);
  const loader = useRef(null);

  const filteredGames = activeTab === 'all'
    ? games
    : games.filter(g => g.category === activeTab);

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
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <Header />
        <main className="p-4 md:p-8 max-w-[1600px] mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Игры</h1>
          <FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
            {filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div ref={loader} className="h-40 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        </main>
      </div>
    </div>
  );
}