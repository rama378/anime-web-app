import List from './components/List/List';
import Search from './components/Search/Search';
import './Home.css';
import animeList from './anime-list.json';
import Pagination from '../App/common/components/Pagination/Pagination';

const Home = () => {
  return (
    <div className='Home'>
      <Search />
      <List list={animeList} />
      <Pagination maxPage={10} page={0} />
    </div>
  );
}

export default Home;
