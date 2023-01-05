import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  let { id } = useParams();

  return (
    <div className='Detail'>
      Detail
    </div>
  );
}

export default Detail;
