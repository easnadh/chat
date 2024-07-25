import { Info } from '../molecules/Info.tsx';
import { Button, Frame, TextInput } from 'react95';
import { Preview } from '../molecules/Preview.tsx';

export const Sidebar = () => {
  return (
    <Frame
      variant='well'
      id={'sidebar'}
      className='flex-1 flex flex-col p-2 h-9.5/10 max-w-80'
    >
      <Info name={'happy cat'} tag={'@happyhappyhappy'} />
      <div
        id={'chatManagement'}
        className='flex justify-between gap-2 mt-2 mb-5'
      >
        <TextInput placeholder='Search...' className='w-11/12' />
        <Button square>✒️</Button>
      </div>
      <div
        id={'chatList'}
        className='flex flex-1 flex-col gap-2.5 overflow-y-scroll'
      >
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
      </div>
    </Frame>
  );
};
