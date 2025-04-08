import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { getIdWithLink } from '../../../utils/get-id-by-link';
import { InputForm, SelectForm } from '../../../components/ui-kit';
import { BuildingsData } from './builds-table';
import { createBuilding } from '../../../../../api/buildings';
import { useAppSelector } from '../../../../../redux/hooks';

export function BuildCreate(): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [buildingData, setBuildingData] = React.useState<BuildingsData>({
    name: '',
    type: '',
    vkLink: '',
    locationId: '',
  });
  const [isDisableSubmit, setIsDisableSubmit] = React.useState<boolean>(true);
  const { locations, buildings } = useAppSelector((state) => state.appData);

  React.useEffect(() => {
    setIsDisableSubmit(
      isLoading ||
      buildingData.name === '' ||
      buildingData.type === '' ||
      buildingData.vkLink === '' ||
      buildingData.locationId === '',
    );
  }, [isLoading, buildingData]);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBuildingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, [buildingData]);

  const handleSubmit = React.useCallback(async () => {
    const userId = await getIdWithLink(buildingData.vkLink, true);

      setIsLoading(true);
      try {
        await axios.post(createBuilding, {
          owner_id: userId,
          name: buildingData.name,
          building_id: buildings.find(p => p.id.toString() === buildingData.type)?.id,
          location_id: buildingData.locationId,
        });

        toast.success('Данные успешно обновлены');
      } catch (error) {
        toast.error('Что-то пошло не так');
      }
      setIsLoading(false);

    return undefined;
  }, [buildingData]);

  const renderTypeOptions = React.useMemo(() => {
    return (
      <>
        {buildings.map(p => <option value={p.id} key={p.id}>{p.type}</option>)}
      </>
    )
  }, [buildings]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Создать строение</h3>
        <InputForm
          label='Ссылка на профиль ВК хозяина'
          type='text'
          name="vkLink"
          onChange={handleChange}
          isLoading={isLoading}
          disabled={isLoading}
          value={buildingData.vkLink}
        />

        <InputForm
          label='Название заведения'
          type='text'
          name="name"
          onChange={handleChange}
          isLoading={isLoading}
          disabled={isLoading}
          value={buildingData.name}
        />

        <SelectForm
          label='Тип строения'
          value={buildingData.type}
          name='type'
          onSelectChange={handleChange}
          options={renderTypeOptions}
        />

        <SelectForm
          label='Локация'
          value={buildingData.locationId}
          name='locationId'
          onSelectChange={handleChange}
          locationsList={locations}
          isAdmin
        />

        <div>
          <button onClick={handleSubmit} disabled={isDisableSubmit}>СОЗДАТЬ строение</button>
        </div>
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}