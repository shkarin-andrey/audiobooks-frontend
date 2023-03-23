import { PauseIcon, PlayIcon } from '@heroicons/react/20/solid';
import { FC } from 'react';
import { IPlayItem } from './PlayItem.interface';

const PlayItem: FC<IPlayItem> = ({ currentTrack, id, onClick, isPlaying, title }) => {
  const current = id === currentTrack.id;

  return (
    <li
      key={id}
      className={`flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer ${
        current ? 'bg-gray-100' : ''
      }`}
      onClick={onClick}
    >
      {isPlaying && current ? (
        <PauseIcon className='w-6 h-6 text-gray-400' />
      ) : (
        <PlayIcon className='w-6 h-6 text-gray-400' />
      )}
      <div className='flex-1'>{title}</div>
    </li>
  );
};

export default PlayItem;
