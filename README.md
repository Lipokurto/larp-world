# Структура проекта

Придерживаемся логики "весь интерактив пользователя только в личном кабинете"
Авторизация вся реализована через ВК

src/pages/user - Личный кабинет
src/pages/user/components - компоненты для интерактива с пользователем
src/pages/user/utils - функции для работы с данными

Строки запросов формируются в папке src/api

# Старт проекта

старт проекта:
npm run build:dev

.env не хранятся в репозитории

ДЛЯ ЗАПУСКА ПРОЕКТА ЛОКАЛЬНО:
в файле src\pages\main\main.tsx

const handleLogin = React.useCallback(async (e: React.MouseEvent) => {
e.nativeEvent.stopImmediatePropagation();

    try {
      dispatch(loginSuccess({
        id: '№№№№№№',
        href: 'https://vk.com/id№№№№№№№',
        accessToken: 'userResponse.access_token',
      }));
      navigate('/user');
    } catch (error: any) {
      dispatch(loginFailure(error.message));
      toast.error('Ошибка авторизации');
    }

}, [dispatch]);

НЕ КОММИТИМ ЭТИ ИЗМЕНЕНИЯ

запускаем сервер через node server.js

# Смена года мероприятия

Для смены года мероприятия меняем значение на год проведения в этом файле
src\GAME_YEAR.ts

Следим чтоб все места где используется год брали его из этого файла
