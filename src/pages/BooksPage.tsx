import { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import Layout from '../components/Layout';
import PageSpinner from '../components/PageSpinner';
import { IBooks } from '../interfaces/books.interface';
import { getBooks } from '../services/getBooks';

const BooksPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  const {
    data: books,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['books', page],
    queryFn: () => getBooks(page),
    refetchOnWindowFocus: false,
  });

  const handlePageClick = (event: { selected: number }): void => {
    const page = event.selected + 1;

    setPage(page);
    setSearchParams({ page: page.toString() });
  };

  if (isLoading || isFetching) {
    return <PageSpinner />;
  }

  return (
    <Layout title='Аудиокниги'>
      <div className='flex flex-col gap-5'>
        {books?.result?.map((book: IBooks) => (
          <Card
            id={book._id}
            key={book._id}
            img={book.img}
            title={book.title}
            author={book.author}
            series={book?.series}
            reader={book?.reader}
            year={book?.year}
            duration={book?.duration}
            description={book.description}
          />
        ))}
        <div className='flex justify-center'>
          <ReactPaginate
            nextLabel='Следующая'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={books?.pages || 1}
            previousLabel='Предыдущая'
            pageLinkClassName='inline-flex items-center px-4 h-full text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            previousLinkClassName='inline-flex items-center rounded-l-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            nextLinkClassName='inline-flex items-center rounded-r-md px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
            breakLabel='...'
            breakLinkClassName='inline-flex items-center px-4 h-full text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'
            containerClassName='isolate inline-flex -space-x-px rounded-md shadow-sm'
            activeLinkClassName='text-white bg-indigo-600 hover:bg-indigo-700'
            disabledLinkClassName='!text-gray-400 cursor-not-allowed hover:bg-transparent'
            renderOnZeroPageCount={() => null}
            forcePage={page - 1}
          />
        </div>
      </div>
    </Layout>
  );
};

export default BooksPage;
