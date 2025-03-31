import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { addRules } from '../../../../api/materials';

type Rules = {
  type: string,
  link: string,
  version: string,
}

export function Rules(): JSX.Element {
  const [rules, setRules] = React.useState<Rules>({
    type: 'common',
    link: '',
    version: '',
  });

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRules((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, [rules]);

  const handleSubmit = React.useCallback(async () => {
    try {
      await axios.post(addRules, {
        type: rules.type,
        link: rules.link,
        version: rules.version,
      });

      toast.success('Видео успешно Добавлено');
    } catch (error) {
      toast.error('Что-то пошло не так');
      }

    return undefined;
  }, [rules]);

  return (
    <>
      <div>
        <div>
          <label style={{ color: 'white' }}>Тип правил</label>
          <select name='type' onChange={handleChange}>
            <option value='common'>Общие правила</option>
            <option value='battle'>Боевые ивенты</option>
            <option value='vote'>Голосование</option>
          </select>
        </div>

        <div>
          <label style={{ color: 'white' }}>Введите версию правил</label>
          <input type='text' name='version' onChange={handleChange} />
        </div>

        <div>
          <label style={{ color: 'white' }}>Ссылка на файл правил в ВК</label>
          <input type='text' name='link'onChange={handleChange} />
        </div>

        <button onClick={handleSubmit} disabled={!rules.type || !rules.link || !rules.version}>Добавить правила</button>
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}