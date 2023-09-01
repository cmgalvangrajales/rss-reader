import { Route, Routes } from 'react-router-dom';

import NotFound from '@pages/404';
import HomePage from '@pages/Home';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
