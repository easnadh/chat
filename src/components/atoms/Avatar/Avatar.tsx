import { Avatar as UIAvatar } from 'react95';
import './Avatar.css';

export function Avatar({ src }: { src: string }) {
  return (
    <>
      <UIAvatar
        className='avatar'
        square
        size={50}
        src={src}
        alt='user avatar'
      />
    </>
  );
}
