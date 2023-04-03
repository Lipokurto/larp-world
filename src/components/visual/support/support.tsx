import React from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, Text } from 'react-hexgrid';

import { Item } from '../../../rules-text/type';
import { Chapter } from '../../chapter/chapter';
import { ItemModal } from '../../item-modal/item-modal';
import { useResize } from '../../utils/use-resize';
import { supportItems } from './support-data';

import s from './support.module.css';

export function Support(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const { isScreenSm, isScreenMd, width } = useResize();

  const hexagons = GridGenerator.hexagon(2);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);

  const getHexItem = React.useCallback((q: number, r: number, sh: number, i: number) => {
    const gotItem = supportItems.find(p => {
      return (
        q === p.coordinates.q &&
        r === p.coordinates.r &&
        sh === p.coordinates.s
      )
    });
  
    const style = {
      fill: gotItem?.color || 'gray',
      color: 'white',
    }
    
    return (
      <Hexagon 
        key={i} 
        q={q} r={r} s={sh} 
        className={s.hexItem}
        cellStyle={style}
        onClick={() => handleClick(gotItem?.element || {label: '', element: <></>})}
      >

        <Text className={s.hexText}>
          {gotItem?.label}
        </Text>
      </Hexagon>
    )
  }, [handleClick]);

  const reSize = React.useCallback(() => {
    if (isScreenMd) {
      return {
        x: 600,
        y: 600,
      }
    }

    if (isScreenSm || width <= 360) {
      return {
        x: 300,
        y: 300,
      }
    }

    return {
      x: 700,
      y: 700.
    }
  }, [isScreenMd, isScreenSm, width]);
  
  return (
    <>    
      <div className={s.container}>
          <Chapter chapter='Подготовка на игру' />
          <HexGrid width={reSize().x} height={reSize().y}>
            <Layout 
              size={{ x: 10, y: 10 }}
              className={s.hexagon} 
              spacing={1.05} origin={{ x: 0, y: 0 }}
            >
              {hexagons.map((hex, i) => getHexItem(hex.q, hex.r, hex.s, i))}
            </Layout>
          </HexGrid>
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