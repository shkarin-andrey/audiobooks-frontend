import { IPlaylist } from '../../interfaces/books.interface';

export interface IPlayList {
  playlist: IPlaylist[];
  currentTrack: IPlaylist;
  isPlaying: boolean;
  trackIndex: number;
  setTrackIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTrack: (e: IPlaylist) => void;
}
