import React from 'react';
import ContentLoader from 'react-content-loader';
import { Toaster } from 'react-hot-toast';
import Tooltip from 'react-tooltip-lite';

import { StatusBar } from '../ui-kit';
import { StatusAdminForm } from './status-admin-form';
import { StatusBarFloat } from '../ui-kit/status';

import s from './form.module.scss';

type StatusData = {
  playerRequest: boolean,
  payment: string,
  photoCheck: string,
  story?: string,
}

type Props = StatusData & {
  vkId: string,
  isLoading: boolean,
  isAdmin?: boolean,
}

export function StatusTable(props: Props): JSX.Element {
const renderTable = React.useMemo(() => {
  if (props.isLoading) {
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

  if (props.isAdmin) {
    return (
      <StatusAdminForm
        vkId={props.vkId}
        playerRequest={{ value: props.playerRequest ? '1' : '0', error: '' }}
        payment={{ value: props.payment, error: '' }}
        photoCheck={{ value: props.photoCheck, error: '' }}
        story={{ value: props.story || '', error: '' }}
        isLoading={props.isLoading}
      />
    )
  }

  return (
    <div className={s.statusContainer}>
      <Tooltip
        direction='top'
        content='Все данные о персонаже заполнены'
        background='wheat'
      >
        <StatusBar status={props.playerRequest} label='Заявка' />
      </Tooltip>

      <Tooltip
        direction='top'
        content='Пройден фотодопуск'
        background='wheat'
      >
        <StatusBarFloat status={props.photoCheck} label='Фотодопуск' />
      </Tooltip>

      <Tooltip
        direction='top'
        content='Сдан благотворительный взнос'
        background='wheat'
      >
        <StatusBar status={Boolean(props.payment)} label='Взнос' />
      </Tooltip>

      <Tooltip
        direction='top'
        content='Квента подана и обработана'
        background='wheat'
      >
        <StatusBar status={Boolean(props.story)} label='История' />
      </Tooltip>
    </div>
  )
}, [props.isLoading]);

  return (
    <div className={s.container}>
      {!props.isAdmin && (
        <div className={s.labelStatusContainer}>
          <div className={s.label}>Статус</div>
        </div>
      )}

      {renderTable}

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  )
}