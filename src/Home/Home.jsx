import List from './components/List/List';
import Search from './components/Search/Search';
import './Home.css';
import Pagination from '../App/common/components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, CARD_LIMIT } from '../App/common/constants/constant';

const Home = () => {
  const [animes, setAnimes] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const getAnimeList = () => {
    // Blocked by cors! Fix temporary by remove params to keep the list shown
    let url = "";
    if (page > 1 || search)
      url = `${API_BASE_URL}/?page=${page}&limit=${CARD_LIMIT}&q=${search}`;
    else
      url = API_BASE_URL;

    axios.get(url).then((response) => {
      if (response.data)
        setAnimes(response.data);
    });
  };

  const handleSearchChange = (e) => {
    if (e?.target?.value) {
      clearTimeout(searchTimeout);

      setSearchTimeout(setTimeout(() => {
        setSearch(e.target.value);
      }, 1000));
    }
  };

  const selectPage = (value) => {
    setPage(value);
  };

  useEffect(() => {
    getAnimeList();
  }, [page]);

  useEffect(() => {
    if (search !== "")
      getAnimeList();
  }, [search]);

  return (
    <div className='Home'>
      <Search onChange={handleSearchChange} />
      <List list={animes} />
      <Pagination
        isNextAvailable={animes?.pagination?.has_next_page}
        page={page - 1}
        onChange={selectPage}
      />
    </div>
  );
}

export default Home;
