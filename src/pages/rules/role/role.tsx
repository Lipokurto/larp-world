import React from 'react';

import { Chapter, ItemModal, RoleContainer } from '../../../components';
import { Item } from '../../../rules-text/type';

import {
  artist, burgomaster, captain,
  civil, craftsman, fighter,
  inquisitor, foreman, monk,
  owner, quartermaster, apostol,
  obsessed, dungeonMaster, wild,
} from '../../../rules-text/examples/characters';

import s from './role.module.css';

const mercenaryRoles = [quartermaster, captain, fighter];
const religionRoles = [inquisitor, monk];
const socialRoles = [burgomaster, craftsman, foreman, owner, artist, civil];
const monsterRoles = [apostol, obsessed, dungeonMaster, wild];

export function Role(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  const mercenaryList = React.useMemo(() => {
    return (
      <div className={s.roleContainer}>
        {mercenaryRoles.map((p) => {
          return (
            <div className={s.roleItem} onClick={() => handleClick(p)}>
              <RoleContainer
                item={p.label}
                player={p.player}
                desc={p.desc}
              />
            </div>
          )
        })}
      </div>
    )
  }, [handleClick]);

  const socialList = React.useMemo(() => {
    return (
      <div className={s.roleContainer}>
        {socialRoles.map((p) => {
          return (
            <div className={s.roleItem} onClick={() => handleClick(p)}>
              <RoleContainer
                item={p.label}
                player={p.player}
                desc={p.desc}
              />
            </div>
          )
        })}
      </div>
    )
  }, [handleClick]);

  const religionList = React.useMemo(() => {
    return (
      <div className={s.roleContainer}>
        {religionRoles.map((p) => {
          return (
            <div className={s.roleItem} onClick={() => handleClick(p)}>
              <RoleContainer
                item={p.label}
                player={p.player}
                desc={p.desc}
              />
            </div>
          )
        })}
      </div>
    )
  }, [handleClick]);

  const monsterList = React.useMemo(() => {
    return (
      <div className={s.roleContainer}>
        {monsterRoles.map((p) => {
          return (
            <div className={s.roleItem} onClick={() => handleClick(p)}>
              <RoleContainer
                item={p.label}
                player={p.player}
                desc={p.desc}
              />
            </div>
          )
        })}
      </div>
    )
  }, [handleClick]);

  return (
    <>
      <div className={s.container}>
        <Chapter chapter='АРХЕТИПЫ' />
        <div>Каждый игрок на данном мероприятии должен соответствовать одному из перечисленных архетипов. В случае, если игрок при регистрации не соответствует требованиям выбранной роли МГ оставляет за собой право на наложение игрового штрафа, недопуск на заявленную роль с предложением замены роли или полный недопуск на проект данного игрока. Мера будет избираться в зависимости от степени несоответствия костюма заявленной роли.</div>

        <div className={s.label}>Наемники</div>
        {mercenaryList}

        <div className={s.label}>Гражданские</div>
        {socialList}

        <div className={s.label}>Религия</div>
        {religionList}

        <div className={s.label}>Чудовища</div>
        {monsterList}
      </div>

      {isOpen && (
        <ItemModal
          setIsOpen={setIsOpen}
          item={item}
        />
      )}
    </>
  )
}