type Props = {
  src: string,
  title: string,
  width?: number,
  height?: number,
};

export function Video(props: Props): JSX.Element {
  return (
    <div>
      <iframe
        src={props.src}
        title={props.title}
        width={props.width || 640}
        height={props.height || 480}
        allowFullScreen
      />
    </div>
  )
}