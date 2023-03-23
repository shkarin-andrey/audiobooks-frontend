export interface IPlaylist {
  title: string;
  file: string;
  id: string;
}

export interface IBooks {
  _id: string;
  title: string;
  img: string;
  playlist: IPlaylist[];
  author: string;
  reader?: string;
  series?: string;
  year?: string;
  duration?: string;
  description: string;
}
