import { Frame, Separator } from 'react95';
import { Info } from '../molecules/Info.tsx';

export const Detail = () => {
  return (
    <Frame variant='well' className='flex-1 h-9.5/10 p-2 flex flex-col gap-2'>
      <div className=''>Users in chat: 2</div>
      <div className='flex flex-col gap-2'>
        <Info name={'angry dog'} tag={'@angryangryangry'} />
        <Separator />
        <Info name={'happy cat'} tag={'@happyhappyhappy'} />
        <Info name={'happy cat'} tag={'@happyhappyhappy'} />
        <Info name={'happy cat'} tag={'@happyhappyhappy'} />
      </div>
    </Frame>
  );
};
