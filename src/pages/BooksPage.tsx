import { FC } from 'react';
import { books } from '../../data/books.json';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

const BooksPage: FC = () => {
  return (
    <Layout title='Аудиокниги'>
      <div className='flex flex-col gap-5'>
        {books.map((book, i) => (
          <Card
            id={'123'}
            key={i + book.title}
            img={book.img}
            title={book.title}
            author={book.author}
            reader={book.reader}
            year={book.year}
            duration={book.duration}
            description={book.description}
          />
        ))}
        <Pagination />
      </div>
    </Layout>
  );
};

export default BooksPage;
