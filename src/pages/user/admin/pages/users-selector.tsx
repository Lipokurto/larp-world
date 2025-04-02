import React from 'react';

import { UserEdit, UsersTable, UserCreate } from './users';

export function UsersSelector(): JSX.Element {
  const [action, setAction] = React.useState<string>('table');

  const renderUserAction = React.useMemo(() => {
    if (action === 'create') {
      return <UserCreate />
    }

    if (action === 'edit') {
      return <UserEdit />
    }

    return <UsersTable />
  }, [action]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setAction('table')} disabled={action === 'table'}>Таблица</button>
        <button onClick={() => setAction('edit')} disabled={action === 'edit'}>Редактировать</button>
        <button onClick={() => setAction('create')} disabled={action === 'create'}>Создать</button>
      </div>

      {renderUserAction}
    </>
  )
}