import { Avatar } from '../atoms/Avatar/Avatar.tsx';

export function Info({ name, tag }: { name: string; tag: string }) {
  return (
    <div id={'info'} className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Avatar src='/bg.webp' />
        <div className='flex flex-col gap-1'>
          <div id={'name'} className='font-bold'>
            {name}
          </div>
          <div id={'userTag'} className=''>
            {tag}
          </div>
        </div>
      </div>

      <img src='/menu.svg' alt='' className='h-4 cursor-pointer' />
    </div>
  );
}
