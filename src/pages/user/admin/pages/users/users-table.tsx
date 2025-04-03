import axios from 'axios';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import DataTable, { TableColumn } from 'react-data-table-component';

import { playersTable } from '../../../../../api/user';
import { renderStatusIcon } from '../../../components/ui-kit/status';

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
  location?: string,
  role?: string,
  photo: boolean,
  payment: string,
  request: boolean,
}

export function UsersTable(): JSX.Element {
  // const [isTableShown, setIsTableShown] = React.useState<boolean>(false);
  const [playersData, setPlayersData] = React.useState<PlayersData[]>([]);

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

  const renderTable = React.useMemo(() => {
    const columns: TableColumn<PlayersData>[] = [
      { name: '№', selector: (row: PlayersData, index) => (index || 0) + 1, width: '40px' },
      { name: 'ФИО', selector: (row: PlayersData) => row.fullName, width: '200px' },
      { name: 'ВК', selector: (row: PlayersData) => row.vkLink, width: '200px' },
      { name: 'Персонаж', selector: (row: PlayersData) => row.char || '-', maxWidth: '200px' },
      { name: 'Роль', selector: (row: PlayersData) => row.role || '-', maxWidth: '200px' },
      { name: 'Локация', selector: (row: PlayersData) => row.location || '-', width: '150px' },
      { name: 'Заявка', cell: (row: PlayersData) => renderStatusIcon(Boolean(row.request)), width: '50px' },
      { name: 'Фото', cell: (row: PlayersData) => renderStatusIcon(Boolean(row.photo)), width: '50px' },
      { name: 'Взнос', cell: (row: PlayersData) => row.payment || renderStatusIcon(false), width: '50px' },
    ];

    const data: PlayersData[] = playersData.map((p, i) => ({
      id: i,
      fullName: p.fullName,
      vkLink: p.vkLink,
      char: p.char,
      role: p.role,
      location: p.location,
      photo: p.photo,
      payment: p.payment,
      request: p.request,
    }))

    if (playersData.length > 0) {
      return <DataTable columns={columns} data={data} theme='dark' customStyles={darkTheme}/>
    }

    return null;
  }, [playersData]);

  return (
    <>
      <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Список всех заявок</h3>
        {renderTable}
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}