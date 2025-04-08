import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { BuildForm } from '../../../components/forms';
import { getIdWithLink } from '../../../utils/get-id-by-link';
import { InputForm } from '../../../components/ui-kit';
import { BuildingsData } from './builds-table';
import { getBuilding } from '../../../../../api/buildings';
import { useAppSelector } from '../../../../../redux/hooks';

export function BuildEdit(): JSX.Element {
  const [userLink, setUserLink] = React.useState<string>('');
  const [userId, setUserId] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [buildingData, setBuildingData] = React.useState<BuildingsData | undefined>(undefined);
  const { buildings } = useAppSelector((state) => state.appData);

  const handleLinkChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLink(e.target.value);
  }, []);

  const handleSubmit = React.useCallback( async () => {
    const userId = await getIdWithLink(userLink);
    setUserId(userId);
    fetchBuildingsInfo(userId);
  }, [userLink]);

const fetchBuildingsInfo = React.useCallback((innerUserId: string) => {
  const fetchBuildingInfo = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(getBuilding, {
        params: { owner_id: innerUserId },
      });

      const validResponse: BuildingsData = {
        id: data.id,
        name: data.name,
        type: buildings.find(p => p.id === data.building_id)?.type || '',
        fullName: `${data.last_name} ${data.first_name} ${data.mid_name || ''}`,
        vkLink: data.vk_link,
        locationId: data.location_id,
      }
      setBuildingData(validResponse);
      setIsLoading(false);
    } catch (err) {
      toast.error('Ошибка при получении данных');
    }
  }

  fetchBuildingInfo();
}, [userId]);

const renderData = React.useMemo(() => {
  if (buildingData) {
    return (
      <BuildForm
        vkId={userId}
        name={buildingData.name}
        type={buildingData.type}
        fullName={buildingData.fullName}
        vkLink={buildingData.vkLink}
        locationId={buildingData.locationId}
        id={buildingData.id}
        isLoading={isLoading}
        isAdmin
      />
    )
  }
}, [buildingData, isLoading, userId]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Редактировать строение</h3>
        <InputForm
          label='Ссылка на страницу ВК хозяина постройки'
          type='text'
          name='link'
          value={userLink}
          onChange={handleLinkChange}
        />

        <button onClick={handleSubmit} disabled={!userLink}>Найти постройку</button>
      </div>

      {renderData}

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}