import React from 'react';

import { UserData } from '../type';
import { CharForm, PlayerForm, StatusTable } from '../components/forms';
import { CaptainTeam } from './captain-team';

type Props = {
  userData: UserData,
  vkId: string,
  isLoading: boolean,
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
        birthDate={userData.birthDate}
        isLoading={isLoading}
      />

      <CharForm
        vkId={vkId}
        charName={userData.charName}
        role={userData.role}
        location={userData.location}
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
      </div>

      {page === 'player' && renderPlayerData}
      {page === 'team' && <CaptainTeam location={props.userData.location.value}/>}
    </div>
  )
}