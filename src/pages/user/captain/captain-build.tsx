import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { darkTheme } from '../admin/pages/users/users-table';
import { getLocationNameById } from '../utils/get-location-name-by-id';
import { BuildingItem, LocationItem } from '../type';
import { buildingsTable, getBuildingsLimits } from '../../../api/buildings';
import { BuildingsData, BuildingsRow } from '../admin/pages/build/builds-table';
import { Statistic } from '../components/ui-kit';

type Props = {
  locationId: string,
  locationsList: LocationItem[],
  buildingsList: BuildingItem[],
};

type BuildingLimit = {
  buildingId: number,
  count: number,
}

export function CaptainBuild(props: Props): JSX.Element {
  const [buildingsData, setBuildingsData] = React.useState<BuildingsData[]>([]);
  const [buildingsLimits, setBuildingsLimits] = React.useState<BuildingLimit[]>([]);

  React.useEffect(() => {
    const fetchBuildingsInfo = async () => {
      try {
        const response = await axios.get(buildingsTable, { params: { location_id: props.locationId } });
        const buildingsDataDTO: BuildingsData[] = response.data
          .map((p: any) => ({
            name: p.name,
            type: p.building_type,
            owner: {
              fullName: `${p.last_name} ${p.first_name} ${p.mid_name || ''}`,
              vkLink: p.vk_link,
            },
            locationId: p.location_id.toString(),
          }))
          setBuildingsData(() => buildingsDataDTO);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

    const fetchBuildingsLimits = async () => {
      try {
        const response = await axios.get(getBuildingsLimits, { params: { location_id: props.locationId } });
        const buildingsLimitsDTO: BuildingLimit[] = response.data
          .map((p: any) => ({
            buildingId: p.building_id,
            count: p.count,
          }))
          setBuildingsLimits(() => buildingsLimitsDTO);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

    fetchBuildingsInfo();
    fetchBuildingsLimits();
  }, []);

  const renderTable = React.useMemo(() => {
    const columns: TableColumn<BuildingsRow>[] = [
      { name: '№', selector: (_row: BuildingsRow, index) => (index || 0) + 1, width: '40px' },
      { name: 'Название', selector: (row: BuildingsRow) => row.name, width: '100px' },
      { name: 'Тип', selector: (row: BuildingsRow) => row.type, width: '100px' },
      { name: 'Владелец', selector: (row: BuildingsRow) => row.fullName, width: '300px' },
      { name: 'ВК', selector: (row: BuildingsRow) => row.vkLink, maxWidth: '200px' },
      { name: 'Локация', selector: (row: BuildingsRow) => getLocationNameById(Number(row.locationId), props.locationsList), width: '150px' },
    ];

    const data: BuildingsRow[] = buildingsData.map((p, i) => ({
      id: i,
      name: p.name,
      fullName: p.owner.fullName,
      vkLink: p.owner.vkLink,
      type: p.type,
      locationId: p.locationId,
    }))

    if (buildingsData.length > 0) {
      return <DataTable columns={columns} data={data} theme='dark' customStyles={darkTheme}/>
    }

    return null;
  }, [buildingsData]);

  const renderLimits = React.useMemo(() => {
    const items = buildingsLimits.map(p => {
      const label = props.buildingsList.find(pp => p.buildingId === pp.id)?.type;
      return (
        <Statistic
          label={label || ''}
          value={p.count.toString()}
        />
      )
    })

    return <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>{items}</div>;
  }, [buildingsLimits]);
  return (
    <>
      <h3 style={{ color: 'white' }}>Строения команды</h3>
      {renderLimits}
      {renderTable}

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}