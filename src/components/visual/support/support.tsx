import React from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, Text } from 'react-hexgrid';
import { Item } from '../../../rules-text/type';
import { ItemModal } from '../../item-modal/item-modal';
import { supportItems } from './support-data';

import s from './support.module.css';

export function Support(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

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
  }, [])

  return (
    <>    
      <div className={s.container}>
          <HexGrid width={700} height={700}>
            <Layout 
              size={{ x: 10, y: 10 }}
              className={s.hexagon} 
            >
              {hexagons.map((hex, i) => getHexItem(hex.q, hex.r, hex.s, i)) }
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