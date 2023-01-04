import PropTypes from 'prop-types';
import Card from '../../../App/common/components/Card/Card';
import './List.css';

const List = (props) => {
  return (
    <div className='List'>
      {props?.list?.data.map((anime) => (
        <Card detail={anime} className='List__item' key={anime?.mal_id.toString()} />
      ))}
    </div>
  );
}

List.propTypes = {
	list: PropTypes.object.isRequired,
};

List.defaultProps = {};

export default List;
