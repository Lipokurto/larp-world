import React from 'react';

import { Rules, Videos, UsersSelector, BuildsSelector } from './pages';
import { BuildingItem, LocationItem } from '../type';

type Props = {
  locationsList: LocationItem[],
  buildingsList: BuildingItem[],
}

export function AdminSelector(props: Props): JSX.Element {
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

    if (page === 'build') {
      return (
        <BuildsSelector
          locationsList={props.locationsList}
          buildingsList={props.buildingsList}
        />
      )
    }

    return <UsersSelector locationsList={props.locationsList} />
  }, [page]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setPage('users')} disabled={page === 'users'}>Игроки</button>
        <button onClick={() => setPage('build')} disabled={page === 'build'}>Строения</button>
        <button onClick={() => setPage('rules')} disabled={page === 'rules'}>Правила</button>
        <button onClick={() => setPage('videos')} disabled={page === 'videos'}>Видео</button>
      </div>

      {renderPage}

    </div>
  )
}