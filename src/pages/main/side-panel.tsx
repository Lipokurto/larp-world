import Tooltip from 'react-tooltip-lite';

import vkImage from './../../assets/icons/social/vk.png';
import ruStore from './../../assets/icons/social/ruStore.png';

import excelIcon from './../../assets/icons/social/excel.png';
import { Rules } from './main';

type Props = {
  rulesDTO: Rules,
}

export function SidePanel({ rulesDTO }: Props): JSX.Element {
  return (
    <>
      <Tooltip
        content='Группа в Вконтакте'
        background='wheat'
        direction="left"
      >
        <a href='https://vk.com/larpdarkage' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>
          <img src={vkImage} alt="" width={30} />
        </a>
      </Tooltip>

      <Tooltip
        content='Наше приложение в RuStore'
        background='wheat'
        direction="left"
      >
        <a href='https://apps.rustore.ru/app/com.darkapk03' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>
          <img src={ruStore} alt="" width={30} />
        </a>
      </Tooltip>

      <Tooltip
        content={rulesDTO.common.label}
        background='wheat'
        direction="left"
      >
        <a href={rulesDTO.common.link} target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }} download={rulesDTO.common.label}>
          <img src={rulesDTO.common.icon} alt="" width={30} />
        </a>
      </Tooltip>

      <Tooltip
        content={rulesDTO.battle.label}
        background='wheat'
        direction="left"
      >
        <a href={rulesDTO.battle.link} target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }} download={rulesDTO.battle.label}>
          <img src={rulesDTO.battle.icon} alt="" width={30} />
        </a>
      </Tooltip>

      <Tooltip
        content={rulesDTO.vote.label}
        background='wheat'
        direction="left"
      >
        <a href={rulesDTO.vote.link} target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }} download={rulesDTO.vote.label}>
          <img src={rulesDTO.vote.icon} alt="" width={30} />
        </a>
      </Tooltip>

      {/* <Tooltip
        content='Таблица всех ролей'
        background='wheat'
        direction="left"
      >
        <a href='https://docs.google.com/spreadsheets/d/1l5G5-vJ56_ibip1hng414RTNg3HXjJtS7RmQ0ACPdvE/edit?usp=sharing' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>
          <img src={excelIcon} alt="" width={30} />
        </a>
      </Tooltip> */}
    </>
  )
}