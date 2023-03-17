import React from "react";
import axios from "axios";

export function Registration() {
  const [fullName, setFullName] = React.useState<string>('');
  const [birthDate, setBirthDate] = React.useState<string>('');
  const [linkVK, setLinkVK] = React.useState<string>('');

  const handleChange = React.useCallback((e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    if (name === 'FIO') setFullName(value);

    if (name === 'BirthDate') setBirthDate(value);

    if (name === 'Link') setLinkVK(value);
  }, []);
  
  const handleSubmit = React.useCallback(() => {
    const playerData = {
      FIO: fullName,
      BirthDate: birthDate,
      Link: linkVK,
    };
    
  axios.post('https://sheet.best/api/sheets/6546198e-4df5-4627-8e68-bfa5e26e9514', playerData)
  .then(response => console.log(response));
}, [birthDate, fullName, linkVK]);

  return (
    <div>
      <h2>ФИО</h2>
      <input type='text' name='FIO' onChange={handleChange}/>
      
      <h2>Дата рождения</h2>
      <input type='text' name='BirthDate' onChange={handleChange}/>

      <h2>ВК ссылка</h2>
      <input type='text' name='Link' onChange={handleChange}/>

      <button onClick={handleSubmit}>Отправить</button>
    </div>
  )
}