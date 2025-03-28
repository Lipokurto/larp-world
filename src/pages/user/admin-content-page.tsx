import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { addVideo } from '../../api/materials';

type Video = {
  name: string,
  link: string,
  page: string,
}

export function AdminContentPage(): JSX.Element {
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
      <div>
        <div>
          <label style={{ color: 'white' }}>Название видео</label>
          <input type='text' name='name' onChange={handleChange} />
        </div>

        <div>
          <label style={{ color: 'white' }}>Ссылка на видео в ВК</label>
          <input type='text' name='link'onChange={handleChange} />
        </div>

        <button onClick={handleSubmit} disabled={!videoObject.name || !videoObject.link}>Добавить видео</button>
      </div>

      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </>
  )
}