import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { darkTheme, PlayersData } from '../admin/pages/users/users-table';
import { playersTable } from '../../../api/user';
import { renderAchivments } from '../components/ui-kit';
import { getLocationNameById } from '../utils/get-location-name-by-id';

export function RegionalAllPlayers(): JSX.Element {
  const [playersData, setPlayersData] = React.useState<PlayersData[]>([]);

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await axios.get(playersTable);
        const playersDataDTO: PlayersData[] = response.data
          .filter((e: any) => e.status !== 'ADMIN')
          .filter((e: any) => e.status !== 'REGIONAL')
          .filter((e: any) => e.player_request !== 0)
          .filter((e: any) => e.location_id !== 7 && e.location_id !== 8 && e.location_id)
          .map((p: any) => ({
            id: p.vk_id,
            fullName: `${p.last_name} ${p.first_name} ${p.mid_name || ''}`,
            char: p.char_name,
            vkLink: p.vk_link,
            locationId: p.location_id?.toString(),
            request: p.player_request,
            role: p.role,
            photo: p.photo_check,
            payment: p.payment,
            story: p.story_link,
            achivments: p.achivments || [],
          }));
          setPlayersData(() =>playersDataDTO);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

    fetchPlayerInfo();
  }, []);

  const columns: TableColumn<PlayersData>[] = [
    { name: 'Ачивки', cell: (row: PlayersData) => renderAchivments(row.achivments), width: '50px' },
    { name: '№', selector: (row: PlayersData, index) => (index || 0) + 1, width: '40px' },
    { name: 'ФИO', selector: (row: PlayersData) => row.fullName, width: '200px' },
    { name: 'ВК', cell: (row: PlayersData) => <a href={row.vkLink} target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>{row.vkLink}</a>, width: '200px' },
    { name: 'Игровое имя', selector: (row: PlayersData) => row.char || '-', width: '200px' },
    { name: 'Роль', selector: (row: PlayersData) => row.role || '-', width: '200px' },
    { name: 'Локация', selector: (row: PlayersData) => getLocationNameById(Number(row.locationId)) || '-', width: '150px' },
  ];

  const data: PlayersData[] = playersData.map((p, i) => ({
    id: i,
    fullName: p.fullName,
    vkLink: p.vkLink,
    locationId: p.locationId,
    photo: p.photo,
    role: p.role,
    char: p.char,
    payment: p.payment,
    request: p.request,
    achivments: p.achivments,
  }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DataTable columns={columns} data={data} theme='dark' customStyles={darkTheme}/>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  )
}