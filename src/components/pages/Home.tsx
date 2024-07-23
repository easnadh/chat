import { Sidebar } from '../organisms/Sidebar.tsx';
import { Chat } from '../organisms/Chat.tsx';
import { Detail } from '../organisms/Detail.tsx';

export const Home = () => {
  return (
    <>
      <Sidebar />
      <Chat />
      <Detail />
    </>
  );
};
