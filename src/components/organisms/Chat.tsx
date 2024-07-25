import { Button, Frame, Separator, TextInput } from 'react95';
import { Info } from '../molecules/Info.tsx';
import { useState } from 'react';
import { Message } from '../molecules/Message.tsx';

export const Chat = () => {
  const [text, setText] = useState('');

  return (
    <Frame variant='well' className='flex flex-col flex-2 h-9.5/10 p-2 gap-1'>
      <Info name={'angry dog'} tag={'@angryangryangry'} />
      <Separator />
      <div className='flex flex-col flex-1 gap-2.5 overflow-y-scroll'>
        <Message />
        <Message isMine />
        <Message />
        <Message isMine />
        <Message />
        <Message isMine />
        <Message />
      </div>
      <Separator />
      <div className='flex justify-between'>
        <Button square>📸︎</Button>
        <TextInput
          placeholder='Try to write something funny...'
          className='w-8.5/10'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button square>✉</Button>
      </div>
    </Frame>
  );
};
