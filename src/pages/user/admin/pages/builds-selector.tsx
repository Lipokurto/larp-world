import React from 'react';

import { BuildingItem, LocationItem } from '../../type';
import { BuildsTable } from './build/builds-table';

type Props = {
  locationsList: LocationItem[],
  buildingsList: BuildingItem[],
}

export function BuildsSelector(props: Props): JSX.Element {
  const [action, setAction] = React.useState<string>('table');

  const renderUserAction = React.useMemo(() => {
    if (action === 'create') {
      return null;
    }

    if (action === 'edit') {
      return null;
    }

    return <BuildsTable locationsLIst={props.locationsList} buildingsList={props.buildingsList}/>
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