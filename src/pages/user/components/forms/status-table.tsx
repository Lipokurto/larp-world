import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import ContentLoader from 'react-content-loader';

import { infoStatus } from '../../api/paths';
import { StatusBar } from '../ui-kit';

import s from './form.module.scss';

type StatusData = {
  playerRequest: boolean,
  payment: boolean,
  photoCheck: boolean,
}

type Props = {
  vkId: string,
}

export function StatusTable(props: Props): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [statusData, setStatusData] = React.useState<StatusData>({
    playerRequest: false,
    payment: false,
    photoCheck: false,
  });

  React.useEffect(() => {
    const fetchStatusInfo = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(infoStatus, {
          params: { vk_id: props.vkId },
        });
        const validResponse = {
          playerRequest: response.data.player_request,
          payment: Boolean(response.data.payment),
          photoCheck: response.data.photo_check,
        }
        setStatusData(validResponse);
        setIsLoading(false);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
  }

  fetchStatusInfo();
}, [props]);

const renderTable = React.useMemo(() => {
  if (isLoading) {
    return (
      <ContentLoader
        speed={1}
        width={180}
        height={25}
        backgroundColor="#000000"
        foregroundColor="#a39329"
      >
        <rect x="0" y="0" rx="5" ry="5" width="180" height="25" />
      </ContentLoader>
    );
  }

  return (
    <div className={s.statusContainer}>
      <StatusBar status={statusData.playerRequest} label='Заявка' />
      <StatusBar status={statusData.payment} label='Взнос' />
      <StatusBar status={statusData.photoCheck} label='Фотодопуск' />
    </div>
  )
}, [isLoading]);

  return (
    <div className={s.container}>
      <div className={s.labelStatusContainer}>
        <div className={s.label}>Статус</div>
      </div>

      {renderTable}

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  )
}