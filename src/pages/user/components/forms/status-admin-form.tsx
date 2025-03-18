import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

import { editPlayerStatus } from '../../api/paths';
import { InputForm } from '../ui-kit';

import s from './form.module.scss';
import { SelectStatusForm } from '../ui-kit/select-status-form';

type Item = {
  value: string,
  error?: string,
}

type statusData = {
  playerRequest: Item,
  payment: Item,
  photoCheck: Item,
}

type Props = statusData & {
  vkId: string,
  isLoading: boolean,
}

export function StatusAdminForm(props: Props): JSX.Element {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [statusData, setStatusData] = React.useState<statusData>({
    playerRequest: { value: props.playerRequest.value, error: props.playerRequest.error },
    payment: { value: props.payment.value, error: props.payment.error },
    photoCheck: { value: props.photoCheck.value, error: props.photoCheck.error },
  });

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStatusData((prevData) => ({
      ...prevData,
      [name]: {
        value: value,
        error: undefined,
      },
    }));
    setIsTouched(true);
  }, [statusData]);

  const handleSubmit = React.useCallback(async () => {
    if (!isTouched) {
      setIsEditing(false);

      return undefined;
    }

    const validateCharData = {
      playerRequest: {
        value: statusData.playerRequest.value,
        error: '',
      },
      payment: {
        value: statusData.payment.value,
        error: '',
      },
      photoCheck: {
        value: statusData.photoCheck.value,
        error: '',
      },
    };

    try {
      await axios.post(editPlayerStatus, {
        player_request: validateCharData.playerRequest.value,
        payment: validateCharData.payment.value,
        photo_check: validateCharData.photoCheck.value,
        vk_id: props.vkId,
      });

      toast.success('Данные успешно обновлены');
    } catch (error) {
      toast.error('Что-то пошло не так');
      }

    setIsEditing(false);

    return undefined;
  }, [statusData]);

  const renderButton = React.useMemo(() => {
    return isEditing
      ? <div onClick={handleSubmit} className={s.button}>Сохранить</div>
      : <div onClick={() => setIsEditing(true)} className={s.button}>Редактировать</div>;
  }, [isEditing, statusData]);

  return (
    <div className={s.container}>
      <div className={s.labelContainer}>
        <div className={s.label}>Статус</div>
        <div>{renderButton}</div>
      </div>

      <div className={s.inputContainer}>
        <SelectStatusForm
          label='Заявка'
          name="playerRequest"
          value={statusData.playerRequest.value}
          onSelectChange={handleChange}
          disabled={!isEditing}
          error={statusData.playerRequest.error}
          isLoading={props.isLoading}
        />

        <InputForm
          label='Взнос'
          type="number"
          name="payment"
          value={statusData.payment.value}
          onChange={handleChange}
          disabled={!isEditing}
          error={statusData.payment.error}
          isLoading={props.isLoading}
        />

        <SelectStatusForm
          label='Фотодопуск'
          name='photoCheck'
          value={statusData.photoCheck.value}
          onSelectChange={handleChange}
          disabled={!isEditing}
          error={statusData.photoCheck.error}
          isLoading={props.isLoading}
        />
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  );
}