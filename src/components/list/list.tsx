import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '../navigation/lists/type';

import s from './list.module.css';

type Props = {
  list: ListItem[] | null,
  link: string,
  setIsOpen: (arg0: boolean) => void,
}

export function List(props: Props): JSX.Element {
  const handleClose = React.useCallback(() => {
    document.body.style.overflowY = 'visible';

    props.setIsOpen(false);
  }, [props]);

  const content = React.useMemo(() => {
    if (props.list) {
      return (
        props.list.map((p) => {
          return (
            <Link
              to={`${props.link}${p.link}`}
              key={p.label}
              className={s.item}
              onClick={handleClose}
            >
              <span className={s.label}>{p.label}</span>
              <br />
            </Link>
          )
        })
      )
    }

    return <div>А нету контенту</div>
  }, []);

  return (
    <div className={s.container}>
      {content}
    </div>
  )
}