import { FC, useCallback } from 'react';
import PlayItem from '../PlayItem';
import { IPlayList } from './PlayList.interface';

const PlayList: FC<IPlayList> = ({
  playlist,
  currentTrack,
  isPlaying,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
}) => {
  const handleClick = useCallback((index: number) => {
    if (trackIndex !== index) {
      setTrackIndex(index);
      setCurrentTrack(playlist[index]);
    }
  }, []);

  return (
    <ul className='text-xs sm:text-base divide-y border-t cursor-default max-h-[300px] h-full overflow-hidden overflow-y-auto'>
      {playlist.map((item, index) => (
        <PlayItem
          key={item.id}
          currentTrack={currentTrack}
          id={item.id}
          onClick={() => handleClick(index)}
          isPlaying={isPlaying}
          title={item.title}
          link={item.file}
        />
      ))}
    </ul>
  );
};

export default PlayList;
