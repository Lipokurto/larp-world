import ban_forever from '../assets/achivments/ban_foravar.png';
import ban_year from '../assets/achivments/ban_year.png';
import strike from '../assets/achivments/strike.png';
import oscar from '../assets/achivments/oscar.png';
import ahch_1 from '../assets/achivments/ahch_1.png';
import ahch_2 from '../assets/achivments/ahch_2.png';
import ahch_3 from '../assets/achivments/ahch_3.png';
import captain_1 from '../assets/achivments/captain_1.png';
import captain_2 from '../assets/achivments/captain_2.png';
import captain_3 from '../assets/achivments/captain_3.png';
import igrotech from '../assets/achivments/igrotech.png';
import colloboration from '../assets/achivments/colloboration.png';
import test from '../assets/achivments/test.png';
import wording from '../assets/achivments/wording.png';
import invention from '../assets/achivments/invention.png';
import champ from '../assets/achivments/champ.png';
import best_icon from '../assets/achivments/best_icon.png';

export const achivmentslist = [
  { id: 1, img: ban_forever },
  { id: 2, img: ban_year },
  { id: 3, img: strike },
  { id: 4, img: oscar },
  { id: 5, img: ahch_1 },
  { id: 6, img: captain_1 },
  { id: 7, img: colloboration },
  { id: 8, img: test },
  { id: 9, img: wording },
  { id: 10, img: invention },
  { id: 11, img: captain_2 },
  { id: 12, img: ahch_2 },
  { id: 13, img: igrotech },
  { id: 14, img: captain_3 },
  { id: 15, img: ahch_3 },
  { id: 16, img: champ },
  { id: 17, img: best_icon },
];

export function addIconFromList(obj: any): any {
  const foundItem = achivmentslist.find(item => item.id === obj.id);
  if (foundItem && foundItem.img !== undefined) {
    return {
      ...obj,
      img: foundItem.img,
    };
  }
  return obj;
}