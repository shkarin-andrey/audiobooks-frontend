import { IPlaylist } from '../../interfaces/books.interface';

export interface IPlayItem {
  currentTrack: IPlaylist;
  id: string;
  onClick: () => void;
  isPlaying: boolean;
  title: string;
  link: string;
}
