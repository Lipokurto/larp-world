import s from './video.module.css';

type Props = {
  src: string,
  title: string,
  width?: number,
  height?: number,
};

export function Video(props: Props): JSX.Element {
  return (
    <div className={s.container}>
      <iframe
        src={props.src}
        title={props.title}
        width={props.width || 640}
        height={props.height || 360}
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}