import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { darkTheme, PlayersData } from '../admin/pages/users/users-table';
import { renderStatusIcon } from '../components/ui-kit/status';
import { playersTable } from '../../../api/user';
import { Statistic } from '../components/ui-kit';

type Props = { location: string };

export function CaptainTeam(props: Props): JSX.Element {
  const [playersData, setPlayersData] = React.useState<PlayersData[]>([]);

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await axios.get(playersTable);
        const playersDataDTO: PlayersData[] = response.data
          .filter((e: any) => e.status !== 'ADMIN')
          .filter((e: any) => e.location === props.location)
          .map((p: any) => ({
            id: p.vk_id,
            fullName: `${p.last_name} ${p.first_name} ${p.mid_name || ''}`,
            vkLink: p.vk_link,
            location: p.location,
            request: p.player_request,
            role: p.role,
            photo: p.photo_check,
            payment: p.payment,
          }))
        setPlayersData(playersDataDTO);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

    fetchPlayerInfo();
  }, []);

  const columns: TableColumn<PlayersData>[] = [
    { name: '№', selector: (row: PlayersData, index) => (index || 0) + 1, width: '40px' },
    { name: 'ФИО', selector: (row: PlayersData) => row.fullName, width: '200px' },
    { name: 'ВК', selector: (row: PlayersData) => row.vkLink, width: '200px' },
    { name: 'Локация', selector: (row: PlayersData) => row.location || '-', width: '150px' },
    { name: 'Заявка', cell: (row: PlayersData) => renderStatusIcon(Boolean(row.request)), width: '50px' },
    { name: 'Фото', cell: (row: PlayersData) => renderStatusIcon(Boolean(row.photo)), width: '50px' },
    { name: 'Взнос', cell: (row: PlayersData) => renderStatusIcon(Boolean(row.payment)), width: '50px' },
  ];

  const data: PlayersData[] = playersData.map((p, i) => ({
    id: i,
    fullName: p.fullName,
    vkLink: p.vkLink,
    location: p.location,
    photo: p.photo,
    payment: p.payment,
    request: p.request,
  }))

  const renderRequestStatistic = React.useMemo(() => {
    const requestAmount = playersData.filter(p => p.request).length;
    const totalAmount = playersData.length;

    return <Statistic label='Заявки' value={`${requestAmount}/${totalAmount}`} />;
  }, [playersData]);

  const renderPhotoStatistic = React.useMemo(() => {
    const photoAmount = playersData.filter(p => p.photo).length;
    const totalAmount = playersData.length;

    return <Statistic label='Фотодопуск' value={`${photoAmount}/${totalAmount}`} />;
  }, [playersData]);

  const renderPaymentStatistic = React.useMemo(() => {
    const paymentAmount = playersData.filter(p => p.payment).length;
    const totalAmount = playersData.length;

    return <Statistic label='Взносы' value={`${paymentAmount}/${totalAmount}`} />;
  }, [playersData]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {renderRequestStatistic}
        {renderPhotoStatistic}
        {renderPaymentStatistic}
      </div>

      <DataTable columns={columns} data={data} theme='dark' customStyles={darkTheme}/>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}