import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { addVideo } from '../../../../api/materials';
import { InputForm } from '../../components/ui-kit';

type Video = {
  name: string,
  link: string,
  page: string,
}

export function Videos(): JSX.Element {
  const [videoObject, setVideoObject] = React.useState<Video>({
    name: '',
    link: '',
    page: 'main',
  });

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVideoObject((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, [videoObject]);

  const handleSubmit = React.useCallback(async () => {
    try {
      await axios.post(addVideo, {
        name: videoObject.name,
        link: videoObject.link,
        page: videoObject.page,
      });

      toast.success('Видео успешно Добавлено');
    } catch (error) {
      toast.error('Что-то пошло не так');
      }

    return undefined;
  }, [videoObject]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'white' }}>Добавить видео</h3>

        <InputForm
          label='Название видео'
          name='name'
          type='text'
          onChange={handleChange}
          value={videoObject.name}
        />

        <InputForm
          label='Ссылка на видео в ВК'
          name='link'
          type='text'
          onChange={handleChange}
          value={videoObject.link}
        />

        <button onClick={handleSubmit} disabled={!videoObject.name || !videoObject.link}>Добавить видео</button>
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}