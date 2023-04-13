import markEffect from '../../../assets/mark-effect.svg';
import markClear from '../../../assets/mark-clear.svg';
import { useResize } from '../../utils/use-resize';

import './mark.css';

export function Mark(): JSX.Element {
  const { width } = useResize();
  
  return (
    <div className='mark' >
      <div className='mark__clear'>
        <img src={markClear} alt='Mark' width={width >= 1024 ? 300 : 200}/>
      </div>

      <div className='mark__effect'>
        <img src={markEffect} alt='Mark' width={width >= 1024 ? 300 : 200}/>
      </div>
  </div>
  )
}