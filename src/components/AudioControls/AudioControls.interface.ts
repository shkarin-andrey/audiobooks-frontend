import { IPlaylist } from '../../interfaces/books.interface';

export interface IAudioControls {
  trackIndex: number;
  setTrackIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTrack: (e: IPlaylist) => void;
  playlist: IPlaylist[];
  audioRef: React.RefObject<HTMLMediaElement>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  timeProgress: number;
  duration: number;
  isPlaying: boolean;
}
