import ban_forever from '../assets/achivments/ban_foravar.png';
import ban_year from '../assets/achivments/ban_year.png';
import strike from '../assets/achivments/strike.png';
import oscar from '../assets/achivments/oscar.png';
import ahch from '../assets/achivments/ahch.png';
import captain from '../assets/achivments/captain.png';
import colloboration from '../assets/achivments/colloboration.png';
import test from '../assets/achivments/test.png';
import wording from '../assets/achivments/wording.png';
import invention from '../assets/achivments/invention.png';

export const achivmentslist = [
  { id: 1, img: ban_forever },
  { id: 2, img: ban_year },
  { id: 3, img: strike },
  { id: 4, img: oscar },
  { id: 5, img: ahch },
  { id: 6, img: captain },
  { id: 7, img: colloboration },
  { id: 8, img: test },
  { id: 9, img: wording },
  { id: 10, img: invention },
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