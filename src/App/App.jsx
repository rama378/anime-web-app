import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import HomeLayout from './layouts/HomeLayout';
import { PAGE } from './common/constants/constant';
import Detail from '../Detail/Detail';

// TODO: implement react-redux
// TODO: implement redux-saga
// TODO: split backend to hooks
// TODO: split api call to hooks

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
        <Route exact path={`${PAGE.DETAIL}/:id`} element={
          (
            <HomeLayout>
              <Detail />
            </HomeLayout>
          )
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
