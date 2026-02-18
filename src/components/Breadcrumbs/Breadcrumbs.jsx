import { useLocation } from 'react-router-dom';
import main from '../../assets/images/main.png';
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
        <div className="flex items-center">
            <p className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <img className="w-4 h-4" src={main} alt="icon" />
                <span>
                    Главная / <span className="text-white">{pageName}</span>
                </span>
            </p>
        </div>
    );
}

export default Breadcrumbs;