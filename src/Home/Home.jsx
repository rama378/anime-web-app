import List from './components/List/List';
import Search from './components/Search/Search';
import './Home.css';
import animeList from './anime-list.json';

const Home = () => {
  return (
    <div className='Home'>
      <Search />
      <List list={animeList} />
    </div>
  );
}

export default Home;
