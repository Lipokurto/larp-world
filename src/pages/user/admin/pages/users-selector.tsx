import React from 'react';

import { UserEdit, UsersTable, UserCreate } from './users';
import { LocationItem } from '../../type';

type Props = {
  locationsList: LocationItem[],
}

export function UsersSelector(props: Props): JSX.Element {
  const [action, setAction] = React.useState<string>('table');

  const renderUserAction = React.useMemo(() => {
    if (action === 'create') {
      return <UserCreate locationsList={props.locationsList} />
    }

    if (action === 'edit') {
      return <UserEdit locationsList={props.locationsList} />
    }

    return <UsersTable locationsLIst={props.locationsList} />
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