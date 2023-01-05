import { useParams } from 'react-router-dom';
import './Detail.css';
import {ReactComponent as UserRatingIcon} from "../App/common/assets/images/icon/star-comment-alt.svg";
import { formatNumber } from '../App/common/utils/numberUtils';
import axios from 'axios';
import { API_BASE_URL } from '../App/common/constants/constant';
import { useEffect, useState } from 'react';

const Detail = () => {
  let { id } = useParams();
  const [detail, setDetail] = useState(null);

  const getGenres = () => {
    let genres = [];

    detail?.genres.map((genre) => genres.push(genre.name));

    return genres.join(", ");
  };

  const getAnimeDetail = () => {
    axios.get(`${API_BASE_URL}/${id}`).then((response) => {
      if (response.data.data)
        setDetail(response.data.data);
    });
  };

  useEffect(() => {
    getAnimeDetail();
  }, [id]);

  return (
    <>
      {detail && (
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
      )}
    </>
  );
}

export default Detail;
