import React from "react";

import { Chapter, ItemModal, RoleContainer } from '../../../components';
import { Item } from "../../../rules-text/type";

import {
  artist, burgomaster, captain,
  civil, craftsman, executor,
  fighter, inquisitor, foreman,
  monk, owner, quartermaster,
  apostol, obsessed, dungeonMaster, wild,
} from "../../../rules-text/examples/characters";

import s from './role.module.css';

const mercenaryRoles = [quartermaster, captain, fighter];
const religionRoles = [inquisitor, executor, monk];
const socialRoles = [burgomaster, craftsman, foreman, owner, artist, civil ];
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
        <Chapter chapter='РОЛИ' />
        <div>Каждый игрок на данном мероприятии должен иметь одну из выбранных ролей. Роли физически не ограничивают игроков, лишь дают возможность реализовать некоторые особые игромеханики. В случае если игрок при регистрации не соответствует требованиям выбранной роли ему будет выдана ближайшая роль, соответствующая его внешнему виду.</div>

        <div className={s.label}>Роли отряда наемников</div>
        {mercenaryList}

        <div className={s.label}>Гражданские роли</div>
        {socialList}

        <div className={s.label}>Религиозные роли</div>
        {religionList}

        <div className={s.label}>Чудовищные роли</div>
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