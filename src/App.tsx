import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { router } from './router/router';

const App: FC = () => {
  return (
    <Routes>
      {router.map((rout) => (
        <Route key={rout.path} path={rout.path} element={rout.element} />
      ))}
    </Routes>
  );
};

export default App;
