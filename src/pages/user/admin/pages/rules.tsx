import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { addRules } from '../../../../api/materials';
import { InputForm, SelectForm } from '../../components/ui-kit';

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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Добавить версию правил</h3>
          <SelectForm
            label='Тип правил'
            value={rules.type}
            name='type'
            onSelectChange={handleChange}
            options={
              <>
                <option value='common'>Общие правила</option>
                <option value='battle'>Боевые ивенты</option>
                <option value='vote'>Голосование</option>
              </>
            }
            />

          <InputForm
            label='Версия правил'
            name='version'
            type='text'
            onChange={handleChange}
            value={rules.version}
          />

          <InputForm
            label='Ссылка на файл правил в ВК'
            name='link'
            type='text'
            onChange={handleChange}
            value={rules.link}
          />

        <button onClick={handleSubmit} disabled={!rules.type || !rules.link || !rules.version}>Добавить правила</button>
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}