import { FC, useRef, useState } from 'react';
import AudioControls from '../AudioControls/AudioControls';
import AudioPlay from '../AudioPlay/AudioPlay';
import PlayList from '../PlayList';
import { IAudioPlayer } from './AudioPlayer.interface';

const AudioPlayer: FC<IAudioPlayer> = ({ playlist }) => {
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLMediaElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='max-w-xl w-full bg-white rounded-lg shadow-lg overflow-hidden'>
        <AudioPlay
          {...{
            audioRef,
            currentTrack,
            progressBarRef,
            playlist,
            setDuration,
            setTimeProgress,
            isPlaying,
            duration,
          }}
        />
        <AudioControls
          {...{
            trackIndex,
            setTrackIndex,
            setCurrentTrack,
            playlist,
            audioRef,
            setIsPlaying,
            timeProgress,
            duration,
            isPlaying,
          }}
        />
        <PlayList
          {...{ playlist, currentTrack, isPlaying, trackIndex, setTrackIndex, setCurrentTrack }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
