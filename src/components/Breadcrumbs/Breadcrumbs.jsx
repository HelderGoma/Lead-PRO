import { useLocation } from 'react-router-dom';
function Breadcrumbs() {
  const location = useLocation();

  const breadcrumbNameMap = {
    '/home': 'Главная', 
    '/games': 'Игры', 
    '/updates': 'Обновления', 
    '/brands': 'Бренды',
    '/providers': 'Провайдеры', 
    '/bonuses': 'Бонусы', 
    '/apps': 'Приложения', 
  };

  const currentPath = location.pathname;
  const pageName = breadcrumbNameMap[currentPath] || '';

  if (!pageName) return null;

  return (
    <p className="text-gray-500 text-sm mb-4">
    Главная / <span className="text-white">{pageName}</span>
    </p>
  );
}

export default Breadcrumbs;