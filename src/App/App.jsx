import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import HomeLayout from './layouts/HomeLayout';
import { PAGE } from './common/constants/constant';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGE.HOME} element={
          (
            <HomeLayout>
              <Home />
            </HomeLayout>
          )
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
