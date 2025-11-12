import Tooltip from 'react-tooltip-lite';

import { useAppSelector } from '../../../../redux/hooks';
import { AchivmentItem } from '../../../../redux/app-data-slice';

function renderAchivmentIcon(achivment: AchivmentItem): JSX.Element {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: 'inherit' }} key={achivment.id}>
      <img src={achivment.img} style={{ marginRight: '10px', height: '40px' }} />

      <div>
        <div style={{ fontWeight: 'bold' }}>{achivment.label}</div>
        <div style={{ fontSize: 12 }}>{achivment.about}</div>
      </div>
    </div>
  );
}

export function renderAchivments(achivmentsData?: {achivment_id: number}[]): JSX.Element {
  const { achivments } = useAppSelector((state) => state.appData);

  if (achivmentsData && achivmentsData.length > 0) {
    const hasBan = achivmentsData.find((a) => a.achivment_id === 1 || a.achivment_id === 2);
    const hasAttention = achivmentsData.find((a) => a.achivment_id === 3);
    const achivmentInfo = achivments.filter((a) => achivmentsData.find((ad) => ad.achivment_id === a.id));

    return (
      <Tooltip
        content={achivmentInfo.map((p) => renderAchivmentIcon(p))}
        background='wheat'
        >
        {hasBan ? '‼️' : (hasAttention ? '⚠️' : '🎖️')}
      </Tooltip>
    )
  }

  return (
    <span title="Нет ачивок">➖</span>
  )
}