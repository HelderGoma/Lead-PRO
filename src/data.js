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
  { id: 1, title: 'Gates of Olympus', category: 'popular', provider: 'Pragmatic Play', img: game1 },
  { id: 2, title: 'Alien Turtles', category: 'new', provider: 'Hacksaw Gaming', img: game2 },
  { id: 3, title: 'Wild Skyfire', category: 'slots', provider: 'Nolimit City', img: game3 },
  { id: 4, title: 'Batman Crash', category: 'fast', provider: 'Spribe', img: game4 },
  { id: 5, title: 'Sweet Bonanza', category: 'popular', provider: 'Pragmatic Play', img: game5 },
  { id: 6, title: 'Sugar Rush', category: 'slots', provider: 'Pragmatic Play', img: game6 },
  { id: 7, title: 'Creepy Circus', category: 'new', provider: 'Hacksaw Gaming', img: game7 },
  { id: 8, title: 'Aviator', category: 'fast', provider: 'Spribe', img: game8 },
  { id: 9, title: 'Live Roulette', category: 'live', provider: 'Evolution', img: game9 },
  { id: 10, title: 'Blackjack', category: 'live', provider: 'Evolution', img: game10 },
  { id: 11, title: 'Poker', category: 'casino', provider: 'Playtech', img: game11 },
  { id: 12, title: 'Roulette', category: 'bonus', provider: 'Pragmatic Play', img: game12 },
  { id: 13, title: 'Baccarat', category: 'live', provider: 'Evolution', img: game13 },
  { id: 14, title: 'Craps', category: 'new', provider: 'Playtech', img: game14 },
  { id: 15, title: 'Live Blackjack', category: 'new', provider: 'Pragmatic Play', img: game15 },
];
