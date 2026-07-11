import React from 'react';

import { UserData } from '../type';
import { RegionalTeam } from './regional-team';
import { RegionalBuild } from './regional-build';
import { RegionalAllPlayers } from './regional-all-players';

type Props = {
  userData: UserData,
  vkId: string,
  isLoading: boolean,
  onCallback: () => void,
}

export function RegionalSelector(props: Props): JSX.Element {
const [page, setPage] = React.useState<string>('all');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <button onClick={() => setPage('all')} disabled={page==='all'}>Все игроки</button>
        <button onClick={() => setPage('team')} disabled={page==='team'}>Команда</button>
        <button onClick={() => setPage('build')} disabled={page==='build'}>Строения</button>
      </div>

      {page === 'all' && <RegionalAllPlayers />}
      {page === 'team' && <RegionalTeam locationId={props.userData.locationId.value} />}
      {page === 'build' && <RegionalBuild locationId={props.userData.locationId.value} />}
    </div>
  )
}