import { FC } from 'react';
import { BeatLoader } from 'react-spinners';

const PageSpinner: FC = () => {
  return (
    <div className='bg-white fixed left-0 top-0 w-full h-screen flex justify-center items-center'>
      <BeatLoader color='#4B79ED' loading margin={5} size={30} />
    </div>
  );
};

export default PageSpinner;
