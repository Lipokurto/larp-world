import React from 'react';
import ReactSelect from 'react-select';

import medium from '../../../assets/armor-preset/medium.png';
import heavy from '../../../assets/armor-preset/heavy.png';
import full from '../../../assets/armor-preset/full.png';

import wRegular from '../../../assets/weapon-preset/regular.png';
import wDistant from '../../../assets/weapon-preset/distant.png';
import wHeavy from '../../../assets/weapon-preset/heavy.png';
import wSpetial from '../../../assets/weapon-preset/spetial.png';

import sword from '../../../assets/icons/damage/sword.png';
import arrow from '../../../assets/icons/damage/arrow.png';
import claw from '../../../assets/icons/damage/claw.png';
import blast from '../../../assets/icons/damage/blast.png';

import tomb from '../../../assets/icons/tombNew.png';

import heart from '../../../assets/icons/health/heart.png';
import shield from '../../../assets/icons/health/shield.png';
import heal from '../../../assets/icons/health/heal.png';
import repair from '../../../assets/icons/health/repair.png';

import healPack from '../../../assets/icons/items/healPack.png';
import healPotion from '../../../assets/icons/items/healPotion.png';
import repairPack from '../../../assets/icons/items/repairPack.png';
import repairPotion from '../../../assets/icons/items/repairPotion.png';

import swordHitSound from '../../../assets/sounds/hits/swordHitSound.wav';
import arrowHitSound from '../../../assets/sounds/hits/arrowHitSound.wav';
import spetialHitSound from '../../../assets/sounds/hits/spetialHitSound.wav';
import cannonHitSound from '../../../assets/sounds/hits/cannonHitSound.wav';
import medkitSound from '../../../assets/sounds/items/medkitSound.wav';
import repairkitSound from '../../../assets/sounds/items/repairkitSound.wav';
import potionSound from '../../../assets/sounds/items/potionSound.wav';
import timeSound from '../../../assets/sounds/timeSound.wav';

import { decimalText } from '../../../components';

import s from './damage-calc.module.css';

type Armor = {
  label: string,
  value: {
    src: string,
    hits: number,
  },
};

type Weapon = {
  label: string,
  value: {
    src: string,
    damage: number,
    breakShields: boolean,
    sound: any,
  },
};

type Status = 'Мертв' | 'Тяжело ранен' | 'Ранен' | 'Здоров';
type UsableItems = 'Медкомплект' | 'Целебная мазь' | 'Ремкомплект' | 'Оружейное масло';

const weapon: Weapon[] = [
  { label: 'Обычное оружие', value: { src: wRegular, damage: 1, breakShields: false, sound: swordHitSound } },
  { label: 'Стрелковое оружие', value: { src: wDistant, damage: 2, breakShields: false, sound: arrowHitSound } },
  { label: 'Особое оружие', value: { src: wSpetial, damage: 5, breakShields: false, sound: spetialHitSound } },
  { label: 'Тяжелое оружие', value: { src: wHeavy, damage: 10, breakShields: true, sound: cannonHitSound } },
];

const armor: Armor[] = [
  { label: 'Средний доспех', value: { src: medium, hits: 3 } },
  { label: 'Тяжелый доспех', value: { src: heavy, hits: 4 } },
  { label: 'Полный доспех', value: { src: full, hits: 5 } },
];

const items = [
  { label: 'Медкомплект', src: healPack, sound: medkitSound },
  { label: 'Целебная мазь', src: healPotion, sound: potionSound },
  { label: 'Ремкомплект', src: repairPack, sound: repairkitSound },
  { label: 'Оружейное масло', src: repairPotion, sound: potionSound },
];

type Props = {
  isManual: boolean,
  isSoundOn: boolean,
}

export function DamageCalc({ isManual, isSoundOn }: Props): JSX.Element {
  const [maxHits, setMaxHits] = React.useState<number>(0);
  const [timer, setTimer] = React.useState<number | null>(null);
  const [status, setStatus] = React.useState<Status>('Здоров');
  const [currentHits, setCurrentHits] = React.useState<number>(0);
  const [weaponDamage, setWeaponDamage] = React.useState<number>(0);
  const [currentItem, setCurrentItem] = React.useState<UsableItems | null>(null);
  const [armorImg, setArmorImg] = React.useState<string>('');
  const [weaponImg, setWeaponImg] = React.useState<string>('');
  const [weaponSound, setWeaponSound] = React.useState();

  React.useEffect(() => {
    handleArmorChange(armor[0]);
    setMaxHits(armor[0].value.hits);
    handleWeaponChange(weapon[0]);
    setCurrentHits(armor[0].value.hits);
    setWeaponSound(weapon[0].value.sound);
  }, []);

  const playSound = React.useCallback((sound: any) => {
    if (isSoundOn) {
      const audio = new Audio(sound);
      audio.volume = 0.2;
      audio.play();
    }
  }, [isSoundOn]);

  const handleArmorChange = React.useCallback((option: Armor) => {
    setMaxHits(option.value.hits);
    setCurrentHits(option.value.hits);
    setArmorImg(option.value.src);
    setTimer(0);
    setStatus('Здоров');
  }, []);

  const resetCharacter = React.useCallback(() => {
    const newArmor = armor.find(p => p.value.hits === maxHits) || armor[0];
    handleArmorChange(newArmor);
    setStatus('Здоров');
    setTimer(null);
    playSound(timeSound);
  }, [handleArmorChange, maxHits, playSound]);

  const handleWeaponChange = React.useCallback((option: Weapon) => {
    setWeaponDamage(option.value.damage);
    setWeaponImg(option.value.src);
    setWeaponSound(option.value.sound);
  }, []);

  const attackType = React.useMemo(() => {
    if (weaponDamage === 1) {
      return <div className={s.attackRegular}><img src={sword} alt='' width='100' /></div>
    }

    if (weaponDamage === 2) {
      return <div className={s.attackDistant}><img src={arrow} alt='' width='100' /></div>
    }

    if (weaponDamage === 5) {
      return <div className={s.attackSpecial}><img src={claw} alt='' width='100' /></div>
    }

    if (weaponDamage === 10) {
      return <div className={s.attackHeavy}><img src={blast} alt='' width='100' /></div>
    }
  }, [weaponDamage]);

  const healType = React.useMemo(() => {
    if (currentItem === 'Медкомплект') {
      return <div className={s.heal}><img src={heal} alt='' width='100' /></div>
    }

    if (currentItem === 'Ремкомплект') {
      return <div className={s.repair}><img src={repair} alt='' width='100' /></div>
    }
  }, [currentItem]);

  const handleAttack = React.useCallback(() => {
    playSound(weaponSound);

    if (status !== 'Мертв') {
      const restHits = currentHits - weaponDamage;

      if (restHits >= 1 && restHits <= maxHits) {
        setStatus('Ранен');
        setCurrentHits(restHits);
        setCurrentItem(null);
        setTimer(0);
        return;
      }

      if (status === 'Тяжело ранен') {
        setStatus('Мертв');
        setTimer(120)
        setCurrentHits(0);
        setCurrentItem(null);
        return;
      }

      if (restHits <= 0) {
        setStatus('Тяжело ранен');
        setCurrentHits(0);
        setCurrentItem(null);
        setTimer(0);
        return;
      }
    }
  }, [currentHits, maxHits, playSound, status, weaponDamage, weaponSound]);

  const color = React.useMemo(() => {
    if (status === 'Здоров') {
      return 'green';
    }

    if (status === 'Ранен') {
      return 'yellow';
    }

    if (status === 'Тяжело ранен' ) {
      return 'red';
    }

    if (status === 'Мертв' ) {
      return 'violet';
    }

    return 'white'
  }, [status]);

  const renderStatus = React.useMemo(() => {
    return <div>Статус персонажа: <b style={{ color: color }}>{status}</b></div>
  }, [color, status]);

  const renderHealth = React.useMemo(() => {
    const shields = Array(currentHits).fill(shield);

    if (currentHits !== 0 ) {
      shields[0] = heart;
    }

    return (
      <div className={s.health}>
        Вид хитов:
        {shields.map((p,i) => {
          return (
            <img src={p} key={p+i} alt='' width='20' />
          )
        })}
      </div>
    )
  }, [currentHits]);

  const handleHeal = React.useCallback((item: string) => {
    if (item === 'Медкомплект' && currentHits === 0 && status === 'Тяжело ранен') {
      setCurrentItem('Медкомплект');
      setTimer(15);
      playSound(items[0].sound);
      return;
    }

    if (item === 'Целебная мазь' && currentHits === 0 && status === 'Тяжело ранен') {
      setTimer(0);
      setCurrentHits(1);
      setStatus('Ранен');
      playSound(items[1].sound);
      return;
    }

    if (item === 'Ремкомплект' && currentHits >= 1 && status === 'Ранен') {
      setCurrentItem('Ремкомплект');
      setTimer(15);
      playSound(items[2].sound);
      return;
    }

    if (item === 'Оружейное масло' && currentHits >= 1 && status === 'Ранен') {
      setTimer(0);
      setCurrentHits(maxHits);
      setStatus('Здоров');
      playSound(items[3].sound);
      return;
    }
  }, [currentHits, maxHits, playSound, status]);

  const itemsList = React.useMemo(() => {
    return (
      <div className={s.items}>
        {items.map(p => {
          return (
            <div className={s.usableItem} key={p.label} onClick={() => handleHeal(p.label)}>
              <img src={p.src} alt='' width='65' />
              <div style={{ height: '48px' }}>{p.label}</div>
            </div>
          )
        })}
      </div>
    )
  }, [handleHeal]);

  const handleHealWait = React.useCallback(() => {
    if (currentItem === 'Медкомплект' && currentHits === 0 && status === 'Тяжело ранен') {
      setCurrentHits(1);
      setStatus('Ранен');
      setTimer(null);
      setCurrentItem(null);
      playSound(timeSound);
      return;
    }

    if (currentItem === 'Ремкомплект' && currentHits >= 1 && status === 'Ранен') {
      setCurrentHits(maxHits);
      setStatus('Здоров');
      setTimer(null);
      setCurrentItem(null);
      playSound(timeSound);
      return;
    }

  }, [currentHits, currentItem, maxHits, playSound, status]);

  const renderTimer = React.useMemo(() => {
    if (timer) {
      return (
        <button
          className={s.waitButton}
          onClick={status === 'Мертв' ? resetCharacter : handleHealWait}
        >
            Подождать {timer} {decimalText(timer, ['минуту', 'минуты', 'минут'])}
        </button>
      )
    }
  }, [handleHealWait, resetCharacter, status, timer]);

  const renderDescription = React.useMemo(() => {
    if (currentItem === null) {
      if (status === 'Здоров') {
        return (
          <div>Вы полностью здоровы и готовы к бою</div>
        )
      }

      if (status === 'Ранен') {
        return (
          <div>Вы ранены, но можете продолжать сражаться без ограничений</div>
        )
      }

      if (status === 'Тяжело ранен') {
        return (
          <div>На вас действует травмы: "Кровотечение", "Травма ноги", "Истощение"</div>
        )
      }

      if (status === 'Мертв') {
        return (
          <div>Одевайте хайратник и возвращайтесь кратчайшим маршрутом в свой мертвяк, вам предстоит там пробыть</div>
        )
      }
    }

    if (currentItem === 'Медкомплект') {
      return (
        <div>Вы лечитесь, любой урон в течении лечения переводит вас в состояние мертв. На время лечения действует травма "Истощение"</div>
      )
    }

    if (currentItem === 'Ремкомплект') {
      return (
        <div>Ваша броня ремонтируется, любой урон отменяет ремонт и снимает хит с состояния ДО начала ремонта. На время ремонта действует травма "Истощение"</div>
      )
    }
  }, [currentItem, status]);

  return (
    <div className={s.calcContainer}>
      <div className={s.char}>
        {isManual ? <div className={s.charManual}>1 шаг: Выберете шаблон брони персонажа</div> : null}

        <ReactSelect
          className={s.select}
          options={armor}
          defaultValue={armor[0]}
          onChange={(option) => handleArmorChange(option as Armor)}
          styles={{
            menu: (provided: any) => ({ ...provided, zIndex: 5 }),
          }}
        />

        <div className={s.charItem}>
          {isManual ? <div className={s.charItemManual}>Тут отображаются текущие показатели персонажа</div> : null}

          {renderStatus}

          {renderHealth}

          <div> Осталось хитов: <b>{currentHits}</b></div>

          {isManual ? <div className={s.fullCharManual}>3 шаг: Кликните на персонажа чтоб нанести урон выбранным оружием</div> : null}
          <div onClick={handleAttack} className={s.attack}>
            <div className={s.attackType}>{currentItem ? healType : attackType}</div>
            <img
              src={status === 'Мертв' ? tomb : armorImg}
              alt='' height='500'
              style={{ position: 'relative', marginTop: '-90px' }}
            />
          </div>
        </div>
      </div>

      <div className={s.weapon}>
        <b style={{ color: 'wheat' }}>АРСЕНАЛ</b>
        <div className={s.itemContainer}>
          {isManual ? <div className={s.itemContainerManual}>2 шаг: Выберете оружие из арсенала</div> : null}

          <ReactSelect
            className={s.select}
            options={weapon}
            defaultValue={weapon[0]}
            onChange={(option) => handleWeaponChange(option as Weapon)}
            styles={{
              menu: (provided: any) => ({ ...provided, zIndex: 5 }),
            }}
          />

          {isManual ? <div className={s.weaponManual}>Тут отображается пример внешнего вида оружия и его урон</div> : null}

          <div> Урон оружия: <b>{weaponDamage} {decimalText(weaponDamage, ['хит', 'хита', 'хитов'])}</b></div>

          <div style={{ margin: 'auto 0 auto 0' }}>
            <img src={weaponImg} alt='' width='300 '/>
          </div>
        </div>

        <b style={{ color: 'wheat' }}>ПРЕДМЕТЫ</b>
        <div className={s.inventory}>
          {isManual ? <div className={s.inventoryManual}>4 шаг: Излечите полученный урон</div> : null}

          {itemsList}
        </div>

        <b style={{ color: 'wheat' }}>ОПИСАНИЕ</b>
        <div className={s.description}>
          {renderDescription}

          {renderTimer}
        </div>

      </div>
    </div>
  );
}