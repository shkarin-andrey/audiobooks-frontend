import { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { ICard } from './Card.interface';

const Card: FC<ICard> = ({
  id,
  img,
  title,
  author,
  reader,
  series,
  year,
  duration,
  description,
}) => {
  return (
    <Link
      to={`/books/${id}`}
      className='w-full rounded-md border shadow-md hover:shadow-lg transition-all p-5 flex gap-5 sm:flex-row flex-col'
    >
      <div className='sm:h-60 h-96 min-w-[160px]'>
        <img className='w-full h-full object-cover' src={img} alt={title} />
      </div>
      <div>
        <h2 className='font-bold text-2xl mb-2'>{title}</h2>
        <h3>
          <span className='font-bold'>Автор:</span> {author}
        </h3>
        {reader && (
          <h3>
            <span className='font-bold'>Чтец:</span> {reader}
          </h3>
        )}
        {series && (
          <h3>
            <span className='font-bold'>Серия:</span> {series}
          </h3>
        )}
        {year && (
          <h3>
            <span className='font-bold'>Год:</span> {year}
          </h3>
        )}
        {duration && (
          <h3>
            <span className='font-bold'>Длительность:</span> {duration}
          </h3>
        )}
        <p className='mt-2 mb-2 text-sm'>{description}</p>
        <div className='flex sm:justify-start justify-center'>
          <Button>Слушать аудиокнигу</Button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
