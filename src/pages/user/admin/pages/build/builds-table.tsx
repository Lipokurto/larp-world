import axios from 'axios';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import DataTable, { TableColumn } from 'react-data-table-component';

import { SelectForm } from '../../../components/ui-kit';
import { BuildingItem, LocationItem } from '../../../type';
import { getLocationNameById } from '../../../utils/get-location-name-by-id';
import { buildingsTable } from '../../../../../api/buildings';

export const darkTheme = {
  headCells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      fontSize: '15px',
      fontWeight: 'bold',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
      fontSize: '0.875rem',
      color: '#f8f8f8',
      backgroundColor: '#2d2d2d',
    },
  },
};

export type BuildingsData = {
  id?: number,
  name: string,
  type: string,
  fullName?: string,
  vkLink: string,
  locationId: string,
}

type Props = {
  locationsList: LocationItem[],
  buildingsList: BuildingItem[],
}

export function BuildsTable(props: Props): JSX.Element {
  const [filterLocation, setFilterLocation] = React.useState<string | undefined>(undefined);
  const [storeBuildingsData, setStoreBuildingsData] = React.useState<BuildingsData[]>([]);
  const [buildingsData, setBuildingsData] = React.useState<BuildingsData[]>([]);

  React.useEffect(() => {
    const fetchBuildingsInfo = async () => {
      try {
        const response = await axios.get(buildingsTable);
        const buildingsDataDTO: BuildingsData[] = response.data
          .map((p: any) => ({
            name: p.name,
            type: p.building_type,
            fullName: `${p.last_name} ${p.first_name} ${p.mid_name || ''}`,
            vkLink: p.vk_link,
            locationId: p.location_id.toString(),
          }))
          setStoreBuildingsData(() => buildingsDataDTO);
          setBuildingsData(() => buildingsDataDTO);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

    fetchBuildingsInfo();
  }, []);

  React.useEffect(() => {
    const filteredData = storeBuildingsData.filter(e => e.locationId === filterLocation);
    setBuildingsData(filterLocation ? filteredData : storeBuildingsData);
  }, [filterLocation])

  const renderTable = React.useMemo(() => {
    const columns: TableColumn<BuildingsData>[] = [
      { name: '№', selector: (_row: BuildingsData, index) => (index || 0) + 1, width: '40px' },
      { name: 'Название', selector: (row: BuildingsData) => row.name, width: '100px' },
      { name: 'Тип', selector: (row: BuildingsData) => row.type, width: '100px' },
      { name: 'Владелец', selector: (row: BuildingsData) => row.fullName || '', width: '300px' },
      { name: 'ВК', selector: (row: BuildingsData) => row.vkLink, maxWidth: '200px' },
      { name: 'Локация', selector: (row: BuildingsData) => getLocationNameById(Number(row.locationId), props.locationsList), width: '150px' },
    ];

    const data: BuildingsData[] = buildingsData.map((p, i) => ({
      id: i,
      name: p.name,
      fullName: p.fullName,
      vkLink: p.vkLink,
      type: p.type,
      locationId: p.locationId,
    }))

    if (buildingsData.length > 0) {
      return <DataTable columns={columns} data={data} theme='dark' customStyles={darkTheme}/>
    }

    return null;
  }, [buildingsData, storeBuildingsData, filterLocation]);

  const handleChangeFilter = React.useCallback((e: any) => {
    const { value } = e.target;
    setFilterLocation(value);
  }, [storeBuildingsData, filterLocation, buildingsData]);

  const handleReset = React.useCallback(() => {
    setFilterLocation(undefined);
  }, [storeBuildingsData, filterLocation, buildingsData]);

  const renderFilter = React.useMemo(() => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SelectForm
          label='Фильтр по локации'
          name='locationId'
          value={filterLocation || ''}
          onSelectChange={handleChangeFilter}
          locationsList={props.locationsList}
          isAdmin={true}
        />
        <button style={{ marginTop: '-10px' }} onClick={handleReset}>Сброс фильтра</button>
      </div>
    )
  }, [filterLocation]);

  return (
    <>
      <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Список всех строений</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderFilter}
        </div>

        {renderTable}
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}