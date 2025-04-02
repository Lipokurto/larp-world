import React from 'react';

import { Rules, Videos, UsersSelector } from './pages';

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

    return <UsersSelector />
  }, [page]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setPage('users')} disabled={page === 'users'}>Игроки</button>
        <button onClick={() => setPage('rules')} disabled={page === 'rules'}>Правила</button>
        <button onClick={() => setPage('videos')} disabled={page === 'videos'}>Видео</button>
      </div>

      {renderPage}

    </div>
  )
}