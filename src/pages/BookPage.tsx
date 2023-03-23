import { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';
import Layout from '../components/Layout';
import PageSpinner from '../components/PageSpinner';
import { getBookId } from '../services/getBookId';

const BookPage: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery('bookId', () => getBookId(id || ''), {
    refetchOnWindowFocus: false,
  });

  if (isLoading || isFetching) {
    return <PageSpinner />;
  }

  return (
    <Layout title={data?.title || ''}>
      <div className='grid grid-cols-4 gap-5'>
        <img src={data?.img} alt={data?.title} className='w-full' />
        <div className='col-span-3'>
          <h3>
            <span className='font-bold'>Автор:</span> {data?.author}
          </h3>
          {data?.reader && (
            <h3>
              <span className='font-bold'>Чтец:</span> {data?.reader}
            </h3>
          )}
          {data?.series && (
            <h3>
              <span className='font-bold'>Серия:</span> {data?.series}
            </h3>
          )}
          {data?.year && (
            <h3>
              <span className='font-bold'>Год:</span> {data?.year}
            </h3>
          )}
          {data?.duration && (
            <h3>
              <span className='font-bold'>Длительность:</span> {data?.duration}
            </h3>
          )}
          <p className='mt-5'>
            <span className='font-bold'>Описание</span>: {data?.description}
          </p>

          <div className='mt-10'>
            <AudioPlayer playlist={data?.playlist || []} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookPage;
