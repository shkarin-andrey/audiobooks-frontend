import BookPage from '../pages/BookPage';
import BooksPage from '../pages/BooksPage';
import { IRouter } from './router.interface';

export const router: IRouter[] = [
  {
    name: 'Аудиокниги',
    path: '/',
    element: <BooksPage />,
  },
  {
    path: '/books/:id',
    element: <BookPage />,
  },
];
