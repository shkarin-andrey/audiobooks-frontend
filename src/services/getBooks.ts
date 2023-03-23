import { IBooks } from '../interfaces/books.interface';
import { api } from './api';

interface Books {
  result: IBooks[];
  pages: number;
}

export const getBooks = async (page = 1): Promise<Books> => {
  const { data } = await api('books', {
    params: {
      page,
    },
  });

  return data;
};
