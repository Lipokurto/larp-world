import React from 'react';
import { Rules, Users, Videos } from './pages';

export function AdminSelector(): JSX.Element {
  const [page, setPage] = React.useState<string>('users');

  const renderPage = React.useMemo(() => {
    if (page === 'rules') {
      return (
        <Rules />
      )
    }

    if (page === 'videos') {
      return (
        <Videos />
      )
    }

    return <Users />
  }, [page]);

  return (
    <div>
      <div>
        <button onClick={() => setPage('users')}>Игроки</button>
        <button onClick={() => setPage('rules')}>Правила</button>
        <button onClick={() => setPage('videos')}>Видео</button>
      </div>

      {renderPage}

    </div>
  )
}