import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

import { InputForm, SelectForm } from '../ui-kit';
import { BuildingsData } from '../../admin/pages/build/builds-table';
import { editBuilding } from '../../../../api/buildings';
import { useAppSelector } from '../../../../redux/hooks';

import s from './form.module.scss';

type Props = BuildingsData & {
  vkId: string,
  isLoading: boolean,
  isAdmin?: boolean,
}

export function BuildForm(props: Props): JSX.Element {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [buildingData, setBuildingData] = React.useState<BuildingsData>({
    id: props.id,
    fullName: props.fullName,
    vkLink: props.vkLink,
    name: props.name,
    type: props.type,
    locationId: props.locationId,
  });
  const { locations, buildings } = useAppSelector((state) => state.appData);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBuildingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsTouched(true);
  }, [buildingData]);

  const handleSubmit = React.useCallback(async () => {
    if (!isTouched) {
      setIsEditing(false);

      return undefined;
    }

    try {
      await axios.post(editBuilding, {
        id: props.id,
        name: buildingData.name,
        building_id: buildings.find(p => p.id.toString() === buildingData.type)?.id,
        location_id: buildingData.locationId,
      });

      toast.success('Данные успешно обновлены');
    } catch (error) {
      toast.error('Что-то пошло не так');
      }

    setIsEditing(false);

    return undefined;
  }, [buildingData, props]);

  const renderButton = React.useMemo(() => {
    return isEditing
      ? <div onClick={handleSubmit} className={props.isAdmin ? s.buttonAdmin : s.button}>Сохранить</div>
      : <div onClick={() => setIsEditing(true)} className={props.isAdmin ? s.buttonAdmin : s.button}>Редактировать</div>;
  }, [isEditing, buildingData]);

  const renderTypeOptions = React.useMemo(() => {
    return (
      <>
        {buildings.map(p => <option value={p.id} key={p.id}>{p.type}</option>)}
      </>
    )
  }, [buildings]);

  return (
    <div className={s.container}>
      <div className={s.labelContainer}>
        <div className={s.label}>Строение</div>
        <div>{renderButton}</div>
      </div>

    <div className={s.inputContainer}>
      <InputForm
        label='ФИО владельца'
        type="text"
        name="fullName"
        value={buildingData.fullName || ''}
        onChange={handleChange}
        disabled
        isLoading={props.isLoading}
      />

      <InputForm
        label='Ссылка ВК владельца'
        type="text"
        name="vkLink"
        value={buildingData.vkLink}
        onChange={handleChange}
        disabled
        isLoading={props.isLoading}
      />

      <InputForm
        label='Название строения'
        type="text"
        name="name"
        value={buildingData.name}
        onChange={handleChange}
        disabled={!isEditing}
        isLoading={props.isLoading}
      />

      <SelectForm
        label='Тип строения'
        value={buildingData.type}
        name='type'
        onSelectChange={handleChange}
        disabled={!isEditing}
        options={renderTypeOptions}
      />

      <SelectForm
        label='Локация'
        value={buildingData.locationId}
        name='locationId'
        disabled={!isEditing}
        onSelectChange={handleChange}
        locationsList={locations}
        isAdmin
      />
    </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  );
}