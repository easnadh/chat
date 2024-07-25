import { Frame } from 'react95';
import { Avatar } from '../atoms/Avatar/Avatar.tsx';

export const Preview = () => {
  return (
    <Frame variant='inside' className='flex gap-4 cursor-pointer'>
      <Avatar src='/bg.webp' />
      <div className='flex flex-col justify-center gap-1 overflow-hidden'>
        <span className='font-bold'>angry dog</span>
        <p className='message truncate'>
          you are cringe! you are cringe! you are cringe!
        </p>
      </div>
    </Frame>
  );
};
