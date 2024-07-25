import { Sidebar } from '../organisms/Sidebar.tsx';
import { Chat } from '../organisms/Chat.tsx';
import { Detail } from '../organisms/Detail.tsx';

export const Home = () => {
  return (
    <div id={'home'} className='flex p-1 gap-5 h-full'>
      <Sidebar />
      <Chat />
      <Detail />
    </div>
  );
};
