import React from 'react';

import { BuildsTable, BuildEdit, BuildCreate } from './build';

export function BuildsSelector(): JSX.Element {
  const [action, setAction] = React.useState<string>('table');

  const renderUserAction = React.useMemo(() => {
    if (action === 'create') {
      return <BuildCreate />;
    }

    if (action === 'edit') {
      return <BuildEdit />;
    }

    return <BuildsTable />
  }, [action]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setAction('table')} disabled={action === 'table'}>Все строения</button>
        <button onClick={() => setAction('edit')} disabled={action === 'edit'}>Редактировать</button>
        <button onClick={() => setAction('create')} disabled={action === 'create'}>Создать</button>
      </div>

      {renderUserAction}
    </>
  )
}