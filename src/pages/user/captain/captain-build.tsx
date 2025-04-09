import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { darkTheme } from '../admin/pages/users/users-table';
import { getLocationNameById } from '../utils/get-location-name-by-id';
import { buildingsTable, getBuildingsLimits } from '../../../api/buildings';
import { BuildingsData } from '../admin/pages/build/builds-table';
import { Statistic } from '../components/ui-kit';
import { useAppSelector } from '../../../redux/hooks';
import { NavLink } from 'react-router-dom';

type Props = {
  locationId: string,
};

type BuildingLimit = {
  buildingId: number,
  count: number,
}

export function CaptainBuild(props: Props): JSX.Element {
  const [buildingsData, setBuildingsData] = React.useState<BuildingsData[]>([]);
  const [buildingsLimits, setBuildingsLimits] = React.useState<BuildingLimit[]>([]);
  const { buildings } = useAppSelector((state) => state.appData);

  React.useEffect(() => {
    const fetchBuildingsInfo = async () => {
      try {
        const response = await axios.get(buildingsTable, { params: { location_id: props.locationId } });
        const buildingsDataDTO: BuildingsData[] = response.data
          .map((p: any) => ({
            name: p.name,
            type: p.building_type,
            fullName: `${p.last_name} ${p.first_name} ${p.mid_name || ''}`,
            vkLink: p.vk_link,
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
    const columns: TableColumn<BuildingsData>[] = [
      { name: '№', selector: (_row: BuildingsData, index) => (index || 0) + 1, width: '40px' },
      { name: 'Название', selector: (row: BuildingsData) => row.name, width: '100px' },
      { name: 'Тип', selector: (row: BuildingsData) => row.type, width: '100px' },
      { name: 'Владелец', selector: (row: BuildingsData) => row.fullName || '', width: '300px' },
      { name: 'ВК', selector: (row: BuildingsData) => row.vkLink, maxWidth: '200px' },
      { name: 'Локация', selector: (row: BuildingsData) => getLocationNameById(Number(row.locationId)), width: '150px' },
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
      return (
        <>
          <h3 style={{ color: 'white' }}>Строения команды</h3>
          <DataTable columns={columns} data={data} theme='dark' customStyles={darkTheme}/>
        </>
    )
    }

    return (
      <div style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15px' }}>
        <div>В вашей команде нет строений</div>
        <div>Используйте <NavLink to='/player/regbuild'>регистрацию строений</NavLink> для того чтобы добавить строения в команду</div>
      </div>
    );
  }, [buildingsData]);

  const renderLimits = React.useMemo(() => {
    const items = buildingsLimits.map(p => {
      const label = buildings.find(pp => p.buildingId === pp.id)?.type;
      return (
        <Statistic
          label={label || ''}
          value={p.count.toString()}
        />
      )
    })

    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '15px' }}>
        <div style={{ color: 'white' }}>Лимиты строений вашей команды:</div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          {items}
        </div>
      </div>
    );
  }, [buildingsLimits]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {renderLimits}
      {renderTable}

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  )
}