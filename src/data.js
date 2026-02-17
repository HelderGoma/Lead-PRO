import { game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15, games, live, news, slot, popular, fast, buy, all } from './assets/images/images.js';
export const CATEGORIES = [
  { id: 'all', label: 'Все', img: all },
  { id: 'fast', label: 'Быстрые Игры', img: fast },
  { id: 'slots', label: 'Слоты', img: games },
  { id: 'live', label: 'Live Казино', img: live },
  { id: 'popular', label: 'Популярные', img: popular },
  { id: 'casino', label: 'Казино', img: slot },
  { id: 'new', label: 'Новые', img: news },
  { id: 'bonus', label: 'Покупка бонусов', img: buy },
];

export const INITIAL_GAMES = [
  { id: 1, title: 'Gates of Olympus', category: 'popular', img: game1 },
  { id: 2, title: 'Alien Turtles', category: 'new', img: game2 },
  { id: 3, title: 'Wild Skyfire', category: 'slots', img: game3 },
  { id: 4, title: 'Batman Crash', category: 'fast', img: game4 },
  { id: 5, title: 'Sweet Bonanza', category: 'popular', img: game5 },
  { id: 6, title: 'Sugar Rush', category: 'slots', img: game6 },
  { id: 7, title: 'Creepy Circus', category: 'new', img: game7 },
  { id: 8, title: 'Aviator', category: 'fast', img: game8 },
  { id: 9, title: 'Live Roulette', category: 'live', img: game9 },
  { id: 10, title: 'Blackjack', category: 'live', img: game10 },
  { id: 11, title: 'Poker', category: 'casino', img: game11 },
  { id: 12, title: 'Roulette', category: 'bonus', img: game12 },
  { id: 13, title: 'Baccarat', category: 'live', img: game13 },
  { id: 14, title: 'Craps', category: 'new', img: game14 },
  { id: 15, title: 'Live Blackjack', category: 'new', img: game15 },
];