import React from 'react';
import Tooltip from 'react-tooltip-lite';
import toast from 'react-hot-toast';
import axios from 'axios';

import vkImage from './../../assets/icons/social/vk.png';
import ruStore from './../../assets/icons/social/ruStore.png';
import commonPdfIcon from './../../assets/icons/social/commonPdfIcon.png';
import battlePdfIcon from './../../assets/icons/social/battlePdfIcon.png';
import votePdfIcon from './../../assets/icons/social/votePdfIcon.png';
import excelIcon from './../../assets/icons/social/excel.png';
import { getRules } from '../../api/materials';

type RuleItem = {
  label: string,
  link: string,
  icon: string,
}

type Rules = {
  common: RuleItem,
  battle: RuleItem,
  vote: RuleItem,
}

type Data = {
  type: string,
  version: string,
  link: string,
}

export function SidePanel(): JSX.Element {
  const [rules, setRules] = React.useState<Rules>({
    common: {
      label: '',
      link: '',
      icon: '',
    },
    battle: {
      label: '',
      link: '',
      icon: '',
    },
    vote: {
      label: '',
      link: '',
      icon: '',
    },
  });

  React.useEffect(() => {
    const fetchPlayerInfo = async () => {
      try {
        const response = await axios.get(getRules);
        const rulesDTO = {
          common: {
            link: response.data.find((p: Data) => p.type === 'common')?.link,
            label: `Общие правила v${response.data.find((p: Data) => p.type === 'common')?.version}`,
            icon: commonPdfIcon,
          },
          battle: {
            link: response.data.find((p: Data) => p.type === 'battle')?.link,
            label: `Боевые ивенты v${response.data.find((p: Data) => p.type === 'battle')?.version}`,
            icon: battlePdfIcon,
          },
          vote: {
            link: response.data.find((p: Data) => p.type === 'vote')?.link,
            label: `Голосование v${response.data.find((p: Data) => p.type === 'vote')?.version}`,
            icon: votePdfIcon,
          },
        }

        setRules(rulesDTO);
      } catch (err) {
        toast.error('Ошибка при получении данных');
      }
    }

  fetchPlayerInfo();
}, []);

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
        content={rules.common.label}
        background='wheat'
        direction="left"
      >
        <a href={rules.common.link} target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }} download={rules.common.label}>
          <img src={rules.common.icon} alt="" width={30} />
        </a>
      </Tooltip>

      <Tooltip
        content={rules.battle.label}
        background='wheat'
        direction="left"
      >
        <a href={rules.battle.link} target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }} download={rules.battle.label}>
          <img src={rules.battle.icon} alt="" width={30} />
        </a>
      </Tooltip>

      <Tooltip
        content={rules.vote.label}
        background='wheat'
        direction="left"
      >
        <a href={rules.vote.link} target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }} download={rules.vote.label}>
          <img src={rules.vote.icon} alt="" width={30} />
        </a>
      </Tooltip>

      <Tooltip
        content='Таблица всех ролей'
        background='wheat'
        direction="left"
      >
        <a href='https://docs.google.com/spreadsheets/d/1l5G5-vJ56_ibip1hng414RTNg3HXjJtS7RmQ0ACPdvE/edit?usp=sharing' target='_blank' rel="noreferrer" style={{ color: 'goldenrod' }}>
          <img src={excelIcon} alt="" width={30} />
        </a>
      </Tooltip>
    </>
  )
}