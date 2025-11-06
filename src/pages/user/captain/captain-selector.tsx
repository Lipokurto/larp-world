import React from 'react';

import { UserData } from '../type';
import { CharForm, PlayerForm, StatusTable } from '../components/forms';
import { CaptainTeam } from './captain-team';
import { CaptainBuild } from './captain-build';

type Props = {
  userData: UserData,
  vkId: string,
  isLoading: boolean,
  onCallback: () => void,
}

export function CaptainSelector(props: Props): JSX.Element {
const [page, setPage] = React.useState<string>('player');

const renderPlayerData = React.useMemo(() => {
  const { userData, isLoading, vkId } = props;

  return (
    <>
      <PlayerForm
        vkId={vkId}
        lastName={userData.lastName}
        firstName={userData.firstName}
        middleName={userData.middleName}
        achivments={userData.achivments}
        isLoading={isLoading}
        onCallback={props.onCallback}
      />

      <CharForm
        vkId={vkId}
        charName={userData.charName}
        role={userData.role}
        locationId={userData.locationId}
        isLoading={isLoading}
      />

      <StatusTable
        vkId={vkId}
        playerRequest={userData.playerRequest}
        payment={userData.payment}
        photoCheck={userData.photoCheck}
        isLoading={isLoading}
        isAdmin={false}
      />
    </>
  )
}, [props])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <button onClick={() => setPage('player')} disabled={page==='player'}>Игрок</button>
        <button onClick={() => setPage('team')} disabled={page==='team'}>Команда</button>
        <button onClick={() => setPage('build')} disabled={page==='build'}>Строения</button>
      </div>

      {page === 'player' && renderPlayerData}
      {page === 'team' && <CaptainTeam locationId={props.userData.locationId.value} />}
      {page === 'build' && <CaptainBuild locationId={props.userData.locationId.value} />}
    </div>
  )
}