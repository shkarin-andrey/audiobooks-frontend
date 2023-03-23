import { IPlaylist } from '../../interfaces/books.interface';

export interface IAudioPlay {
  audioRef: React.RefObject<HTMLMediaElement>;
  progressBarRef: React.RefObject<HTMLInputElement>;
  setDuration: (e: number) => void;
  currentTrack: IPlaylist;
  setTimeProgress: (e: number) => void;
  isPlaying: boolean;
  duration: number;
}
