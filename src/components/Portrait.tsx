import photo from '../assets/photo.jpg';

interface PortraitProps {
  name: string;
}

export function Portrait({ name }: PortraitProps) {
  return (
    <div className="portrait">
      <img src={photo} alt={`Portrait of ${name}`} width={634} height={640} decoding="async" />
    </div>
  );
}
