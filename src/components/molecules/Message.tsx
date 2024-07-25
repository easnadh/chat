import { Avatar } from '../atoms/Avatar/Avatar.tsx';
import { Frame } from 'react95';

export const Message = ({ isMine }: { isMine?: boolean }) => {
  return (
    <>
      <div
        className={`flex gap-2 max-w-7/10 ${isMine ? 'self-end flex-row-reverse' : ''}`}
      >
        <Avatar src='/bg.webp' />
        <Frame variant='well' className='px-2 py-1 leading-normal'>
          <img src='/bg.webp' alt='' className='max-w-10/10' />
          <p>
            you are cringe! you are cringe! you are cringe! you are cringe! you
            are cringe! you are cringe! you are cringe! you are cringe! you are
            cringe! you are cringe! you are cringe! you are cringe! you are
            cringe! you are cringe! you are cringe!
          </p>
        </Frame>
      </div>
    </>
  );
};
