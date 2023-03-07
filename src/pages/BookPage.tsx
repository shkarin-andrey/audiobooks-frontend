import { FC } from 'react';
import Layout from '../components/Layout';

const BookPage: FC = () => {
  return (
    <Layout title='Аудиокнига'>
      <div className='flex flex-col gap-5'>
        <h1>Book</h1>
      </div>
    </Layout>
  );
};

export default BookPage;
