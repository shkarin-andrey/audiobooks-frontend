import { FC, useCallback, useEffect, useRef } from 'react';
import { IAudioPlay } from './AudioPlay.interface';

const AudioPlay: FC<IAudioPlay> = ({
  audioRef,
  currentTrack,
  progressBarRef,
  setDuration,
  setTimeProgress,
  isPlaying,
  duration,
}) => {
  const playAnimationRef = useRef<number>();

  const handleProgressChange = () => {
    if (progressBarRef.current && audioRef.current) {
      audioRef.current.currentTime = +progressBarRef.current.value;
    }
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration || 0;

    setDuration(seconds);

    if (progressBarRef.current) {
      progressBarRef.current.max = seconds.toString();
    }
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current?.currentTime || 0;
    setTimeProgress(currentTime);

    if (progressBarRef.current) {
      progressBarRef.current.value = currentTime.toString();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(playAnimationRef.current!);
    }
  }, [isPlaying, audioRef, repeat]);

  return (
    <>
      <audio src={currentTrack.file} ref={audioRef} onLoadedMetadata={onLoadedMetadata} />
      <input
        type='range'
        ref={progressBarRef}
        className='transparent h-1.5 w-full cursor-pointer rounded-lg border-transparent bg-neutral-200'
        defaultValue='0'
        onChange={handleProgressChange}
      />
    </>
  );
};

export default AudioPlay;
