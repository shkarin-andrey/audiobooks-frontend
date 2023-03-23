import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from '@heroicons/react/20/solid';
import { FC, useCallback, useEffect } from 'react';
import formatTime from '../../utils/formatTime';
import { IAudioControls } from './AudioControls.interface';

const AudioControls: FC<IAudioControls> = ({
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  playlist,
  audioRef,
  setIsPlaying,
  timeProgress,
  duration,
  isPlaying,
}) => {
  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
    }
  };

  const handlePrevious = () => {
    if (trackIndex !== 0) {
      setTrackIndex((prev: number) => prev - 1);
      setCurrentTrack(playlist[trackIndex - 1]);
    } else {
      console.log('НАЧАЛО');
    }
  };

  const handleNext = () => {
    if (trackIndex >= playlist.length - 1) {
      console.log('КОНЕЦ');
    } else {
      setTrackIndex((prev: number) => prev + 1);
      setCurrentTrack(playlist[trackIndex + 1]);
    }
  };

  const handlePlay = () => {
    setIsPlaying((prev: boolean) => !prev);
  };

  const handleKeyDown = useCallback((e: any) => {
    if (e.code === 'ArrowRight') {
      console.log('ArrowRight');

      skipForward();
    }

    if (e.code === 'ArrowLeft') {
      console.log('ArrowLeft');
      console.log(e);

      if (e.key === 'Shift') {
        console.log('Shift');
      } else {
        skipBackward();
      }
    }
  }, []);

  const handleKeyUp = useCallback((e: any) => {
    if (e.code === 'Space') {
      console.log('Space');

      handlePlay();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className='flex justify-between text-xs font-semibold text-gray-500 px-4 py-2'>
      <div>{formatTime(timeProgress)}</div>
      <div className='flex items-center space-x-3 p-2'>
        <ArrowUturnLeftIcon
          className='w-6 h-6 text-gray-400 cursor-pointer'
          onClick={handlePrevious}
        />
        <BackwardIcon className='w-6 h-6 text-gray-400 cursor-pointer' onClick={skipBackward} />
        <div onClick={handlePlay}>
          {isPlaying ? (
            <PauseIcon className='w-8 h-8 text-gray-400 cursor-pointer' />
          ) : (
            <PlayIcon className='w-8 h-8 text-gray-400 cursor-pointer' />
          )}
        </div>
        <ForwardIcon className='w-6 h-6 text-gray-400 cursor-pointer' onClick={skipForward} />
        <ArrowUturnRightIcon
          className='w-6 h-6 text-gray-400 cursor-pointer'
          onClick={handleNext}
        />
      </div>
      <div>{formatTime(duration)}</div>
    </div>
  );
};

export default AudioControls;
