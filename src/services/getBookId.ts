import { IBooks } from '../interfaces/books.interface';
import { api } from './api';

export const getBookId = async (id: string): Promise<IBooks> => {
  const { data } = await api(`books/${id}`);

  return data;
};
