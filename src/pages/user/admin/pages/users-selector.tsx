import React from 'react';

import { UserEdit, UsersTable, UserCreate } from './users';

type Props = {
  status: string,
};

export function UsersSelector(props: Props): JSX.Element {
  const [action, setAction] = React.useState<string>('table');

  const renderUserAction = React.useMemo(() => {
    if (action === 'create') {
      return <UserCreate />
    }

    if (action === 'edit') {
      return <UserEdit status={props.status} />
    }

    return <UsersTable status={props.status} />
  }, [action, props.status]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setAction('table')} disabled={action === 'table'}>Таблица</button>
        <button onClick={() => setAction('edit')} disabled={action === 'edit'}>Редактировать</button>
        {props.status === 'ADMIN' && <button onClick={() => setAction('create')} disabled={action === 'create'}>Создать</button>}
      </div>

      {renderUserAction}
    </>
  )
}