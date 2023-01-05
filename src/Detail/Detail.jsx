import { useParams } from 'react-router-dom';
import './Detail.css';
import {ReactComponent as UserRatingIcon} from "../App/common/assets/images/icon/star-comment-alt.svg";

// TEST!!!
import animeList from '../Home/anime-list.json';
import { formatNumber } from '../App/common/utils/numberUtils';

const Detail = () => {
  let { id } = useParams();
  
  // TEST!!
  const detail = animeList.data[0];

  const getGenres = () => {
    let genres = [];

    detail?.genres.map((genre) => genres.push(genre.name));

    return genres.join(", ");
  };

  return (
    <div className='Detail'>
      <div>
        <img src={detail?.images?.webp?.image_url} className='Detail__image' />
      </div>
      <div>
        <div className='Detail__title'>{detail?.title} ({detail?.year})</div>
        <div className='Detail__label'>Rating</div>
        <div>
          <UserRatingIcon className='Detail__ratingicon' /> {detail?.score} ({formatNumber(detail?.scored_by)})
        </div>

        <div className='Detail__label'>Synopsis</div>
        <div>
          {detail?.synopsis}
        </div>

        <div className='Detail__label'>Genre</div>
        <div>
          {getGenres()}
        </div>

        <div className='Detail__label'>Watch Trailer</div>
        <div>
          <iframe width="350" height="200" src={detail?.trailer?.embed_url}></iframe> 
        </div>
      </div>
    </div>
  );
}

export default Detail;
