import React from "react";
import axios from "axios";

import { 
  loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha,
} from 'react-simple-captcha';

import { ItemModal, LinkButton } from "../../components";
import { rulesTerms } from "../../rules-text/rules-terms";
import { Item } from "../../rules-text/type";

import s from './registration.module.css';

type Error = {
  errorType: ErrorType | null,
  text: string | null,
};

type ErrorType = 'FIO' | 'Link' | 'Captcha' | 'Rules' | 'Success';

export function Registration() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [item, setItem] = React.useState<Item | null>(null);

  const handleClick = React.useCallback((item: Item) => {
    setItem(item);
    setIsOpen(true);
  }, []);


  const [fullName, setFullName] = React.useState<string>('');
  const [linkVK, setLinkVK] = React.useState<string>('');
  const [captcha, setCaptcha] = React.useState<string>('');
  const [rules, setRules] = React.useState<boolean>(false);
  const [warning, setWarning] = React.useState<Error>({errorType: null, text: null});

  React.useEffect(() => {
    loadCaptchaEnginge(6, '', 'white', 'upper');
  }, []);

  const handleChange = React.useCallback((e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    
    if (name === 'FIO') {
      setFullName(value);

      const patternFIO = /^([А-Яа-я '-])+$/;
      const isValidFIO = patternFIO.test(value) || value.length === 0;

      if (isValidFIO || value.length <= 5) {
        setWarning({errorType: null, text: null });
        return;
      }

      setWarning({errorType: 'FIO', text: 'Неверный формат ФИО' });
    };

    if (name === 'Link') {
      setLinkVK(value);

      const patternLink = /(https{0,1}:\/\/)?(www\.)?(vk.com\/)(id\d|[a-zA-z][a-zA-Z0-9_.]{2,})/;
      const isValidLink = patternLink.test(value);

      if (isValidLink || value.length <= 17) {
        setWarning({errorType: null, text: null });
        return;
      }

      setWarning({errorType: 'Link', text: 'Неверная ссылка' });
    }

    if (name === 'Captcha') setCaptcha(value);
  }, []);

  const handleReset = React.useCallback(() => {
    setFullName('');
    setLinkVK('')
    setRules(false);
    setWarning({errorType: null, text: null });
  }, []);
  
  const isDisabled = React.useMemo(() => {
    const isFieldsFulled = fullName !== '' && linkVK !== '' && rules;
    return !isFieldsFulled;
  }, [fullName, linkVK, rules]);

  const handleLinkReset = React.useCallback(() => {
    if (linkVK !== '') {
      setLinkVK('')
      setWarning({errorType: null, text: null });
    };
  }, [linkVK]);

  const handleRulesChange  = React.useCallback(() => {
    setRules(!rules);
  }, [rules]);

  const checkboxContent = React.useMemo(() => {
    return <>  Согласен с <LinkButton text='правилами проведения мероприятия' onclick={() => handleClick(rulesTerms)} /></>
  }, [handleClick]);

  const handleSubmit = React.useCallback(() => {
    if (validateCaptcha(captcha) === true) {
      const playerData = {
        FIO: fullName,
        Link: linkVK,
        Agreement: rules ? 'СОГЛАСЕН' : 'НЕ СОГАЛСЕН',
        Status: 'НОВАЯ',
      };
      
      axios.post('https://sheet.best/api/sheets/6546198e-4df5-4627-8e68-bfa5e26e9514', playerData)
      .then(response => console.log(response));
    
      handleReset();
      setWarning({
        errorType: 'Success',
        text: 'Вы успешно зарегестрированны'
      });

      return;
    }

    setWarning({
      errorType: 'Captcha',
      text: 'Вы ввели неверные символы с картинки'
    });

  }, [captcha, fullName, handleReset, linkVK, rules]);

  return (
    <>    
      <div className={s.regContainer}>
        <div className={s.item}>
          <div style={{ color: 'wheat' }}><b>ФИО</b></div>

          <input 
            type='text'
            name='FIO'
            onChange={handleChange}
            value={fullName}
            placeholder='Фамилия Имя Отчество'
            required
          />
          {warning.errorType === 'FIO' ? <div style={{color: 'red'}}>{warning.text}</div> : null}
        </div>
        
        <div className={s.item}>
          <div style={{ color: 'wheat' }}><b>Профиль ВК</b></div>

          <input
            type='text'
            name='Link'
            onChange={handleChange}
            value={linkVK}
            placeholder='https://vk.com/idxxxxxxxxx'
            required
          />
          <button onClick={handleLinkReset} disabled={!linkVK}>Отчистить</button>

          {warning.errorType === 'Link' ? <div style={{color: 'red'}}>{warning.text}</div> : null}
        </div>

        <div className={s.item}>
          <input
            type='checkbox'
            name='Rules'
            onChange={handleRulesChange}
            required
          />

          {checkboxContent}

          {warning.errorType === 'Rules' ? <div style={{color: 'red'}}>{warning.text}</div> : null}
        </div>

        <div className={s.item}>
          <div style={{ color: 'wheat' }}><b>Введите символы с картинки</b></div>

          <LoadCanvasTemplateNoReload />
          <input
            type='text'
            name='Captcha'
            onChange={handleChange}
            value={captcha}
            required
          />

          {warning.errorType === 'Captcha' ? <div style={{color: 'red'}}>{warning.text}</div> : null}
        </div>

        <div className={s.submit}>
          <button onClick={handleSubmit} disabled={isDisabled}>Отправить</button>

          {warning.errorType === 'Success' ? <div style={{color: 'green'}}>{warning.text}</div> : null}
        </div>
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