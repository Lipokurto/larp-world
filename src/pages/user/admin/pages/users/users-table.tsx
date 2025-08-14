import axios from 'axios';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import DataTable, { TableColumn } from 'react-data-table-component';

import { playersTable } from '../../../../../api/user';
import { renderStatusIcon, renderStatusIconFloat } from '../../../components/ui-kit/status';
import { SelectForm, Statistic } from '../../../components/ui-kit';
import { getLocationNameById } from '../../../utils/get-location-name-by-id';
import { useAppSelector } from '../../../../../redux/hooks';

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

export type PlayersData = {
  id: number,
  fullName: string,
  char?: string,
  vkLink: string,
  locationId?: string,
  role?: string,
  photo: string,
  payment: string,
  request: boolean,
}

export function UsersTable(): JSX.Element {
  const [filterLocation, setFilterLocation] = React.useState<string | undefined>(undefined);
  const [storePlayersData, setStorePlayersData] = React.useState<PlayersData[]>([]);
  const [playersData, setPlayersData] = React.useState<PlayersData[]>([]);
  const { locations } = useAppSelector((state) => state.appData);

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await axios.get(playersTable);
        const playersDataDTO: PlayersData[] = response.data
          .filter((e: any) => e.status !== 'ADMIN')
          .map((p: any) => ({
            id: p.vk_id,
            fullName: `${p.last_name} ${p.first_name} ${p.mid_name || ''}`,
            char: p.char_name,
            vkLink: p.vk_link,
            locationId: p.location_id.toString(),
            request: p.player_request,
            role: p.role,
            photo: p.photo_check,
            payment: p.payment,
          }))
          setStorePlayersData(() => playersDataDTO);
          setPlayersData(() =>playersDataDTO);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

    fetchPlayerInfo();
  }, []);

  React.useEffect(() => {
    const filteredData = storePlayersData.filter(e => e.locationId === filterLocation);
    setPlayersData(filterLocation ? filteredData : storePlayersData);
  }, [filterLocation])

  const renderTable = React.useMemo(() => {
    const columns: TableColumn<PlayersData>[] = [
      { name: '№', selector: (row: PlayersData, index) => (index || 0) + 1, width: '40px' },
      { name: 'ФИО', selector: (row: PlayersData) => row.fullName, width: '200px' },
      { name: 'ВК', selector: (row: PlayersData) => row.vkLink, width: '200px' },
      { name: 'Персонаж', selector: (row: PlayersData) => row.char || '-', maxWidth: '200px' },
      { name: 'Роль', selector: (row: PlayersData) => row.role || '-', maxWidth: '200px' },
      { name: 'Локация', selector: (row: PlayersData) => getLocationNameById(Number(row.locationId)), width: '150px' },
      { name: 'Заявка', cell: (row: PlayersData) => renderStatusIcon(Boolean(row.request)), width: '50px' },
      { name: 'Фото', cell: (row: PlayersData) => renderStatusIconFloat(row.photo?.toString()), width: '50px' },
      { name: 'Взнос', cell: (row: PlayersData) => row.payment || renderStatusIcon(false), width: '50px' },
    ];

    const data: PlayersData[] = playersData.map((p, i) => ({
      id: i,
      fullName: p.fullName,
      vkLink: p.vkLink,
      char: p.char,
      role: p.role,
      locationId: p.locationId,
      photo: p.photo,
      payment: p.payment,
      request: p.request,
    }))

    if (playersData.length > 0) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DataTable columns={columns} data={data} theme='dark' customStyles={darkTheme}/>
        </div>
      )
    }

    return null;
  }, [playersData, storePlayersData, filterLocation]);

  const handleChangeFilter = React.useCallback((e: any) => {
    const { value } = e.target;
    setFilterLocation(value);
  }, [storePlayersData, filterLocation, playersData]);

  const handleReset = React.useCallback(() => {
    setFilterLocation(undefined);
  }, [storePlayersData, filterLocation, playersData]);

  const renderFilter = React.useMemo(() => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SelectForm
          label='Фильтр по локации'
          name='locationId'
          value={filterLocation || ''}
          onSelectChange={handleChangeFilter}
          locationsList={locations}
          isAdmin={true}
        />
        <button style={{ marginTop: '-10px' }} onClick={handleReset}>Сброс фильтра</button>
      </div>
    )
  }, [filterLocation]);

  const renderBudgetStatistic = React.useMemo(() => {
    let sum = 0;
    storePlayersData.map((e: PlayersData) => {
      sum = sum + Number(e.payment);
    })

    return <Statistic label='Бюджет' value={sum.toString()} />;
  }, [storePlayersData]);

  const renderRequestStatistic = React.useMemo(() => {
    const requestAmount = storePlayersData.filter(p => p.request).length;
    const totalAmount = storePlayersData.length;

    return <Statistic label='Заявки' value={`${requestAmount}/${totalAmount}`} />;
  }, [storePlayersData]);

  const renderPhotoStatistic = React.useMemo(() => {
    const photoAmount = storePlayersData.filter(p => p.photo).length;
    const totalAmount = storePlayersData.length;

    return <Statistic label='Фотодопуск' value={`${photoAmount}/${totalAmount}`} />;
  }, [storePlayersData]);

  const renderPaymentStatistic = React.useMemo(() => {
    const paymentAmount = storePlayersData.filter(p => p.payment).length;
    const totalAmount = storePlayersData.length;

    return <Statistic label='Взносов' value={`${paymentAmount}/${totalAmount}`} />;
  }, [storePlayersData]);

  return (
    <>
      <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Список всех заявок</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderFilter}
          {renderBudgetStatistic}
          {renderRequestStatistic}
          {renderPhotoStatistic}
          {renderPaymentStatistic}
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