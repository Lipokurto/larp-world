import axios from 'axios';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import DataTable, { TableColumn } from 'react-data-table-component';

import { playersTable } from '../../../../../api/user';

type PlayersData = {
  id: number,
  fullName: string,
  char?: string,
  vkLink: string,
  location?: string,
  role?: string,
  photo: boolean,
  payment: string,
}

export function UsersTable(): JSX.Element {
  const [isTableShown, setIsTableShown] = React.useState<boolean>(false);
  const [playersData, setPlayersData] = React.useState<PlayersData[]>([]);

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await axios.get(playersTable);
        const playersDataDTO: PlayersData[] = response.data.map((p: any) => ({
          id: p.vk_id,
          fullName: `${p.last_name} ${p.first_name} ${p.middle_name || ''}`,
          char: p.char_name,
          vkLink: p.vk_link,
          location: p.location,
          role: p.role,
          photo: p.photo_check,
          payment: p.payment,
        }))
        setPlayersData(playersDataDTO);
        setIsTableShown(true);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

    fetchPlayerInfo();
  }, []);

  const renderTable = React.useMemo(() => {
    const columns: TableColumn<PlayersData>[] = [
      { name: 'ФИО', selector: (row: PlayersData) => row.fullName, width: '200px' },
      { name: 'ВК', selector: (row: PlayersData) => row.vkLink, width: '200px' },
      { name: 'Персонаж', selector: (row: PlayersData) => row.char || '-' },
      { name: 'Роль', selector: (row: PlayersData) => row.role || '-' },
      { name: 'Локация', selector: (row: PlayersData) => row.location || '-', width: '150px' },
      { name: 'Фотодопуск', selector: (row: PlayersData) => row.photo, width: '80px' },
      { name: 'Взнос', selector: (row: PlayersData) => row.payment, width: '80px' },
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
    }))

    if (playersData.length > 0) {
      return <DataTable columns={columns} data={data} pagination />
    }

    return null;
  }, [playersData]);

  return (
    <>
      <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Список всех заявок</h3>
        {isTableShown && renderTable}
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}