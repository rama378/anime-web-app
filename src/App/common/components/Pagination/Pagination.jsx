import PropTypes from 'prop-types';
import { CARD_LIMIT } from '../../constants/constant';
import Button from '../../components/Button/Button';
import './Pagination.css';

const Pagination = (props) => {
  return (
    <div className='Pagination'>
      {[...Array(props.maxPage)].map((n, index) => (
        <Button className='Pagination__bullet' style={index === props.page ? 'default' : 'clear'} key={index.toString()}>{index + 1}</Button>
      ))}
    </div>
  );
}

Pagination.propTypes = {
	limit: PropTypes.number,
  page: PropTypes.number,
  maxPage: PropTypes.number,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  limit: CARD_LIMIT,
  page: 0,
  maxPage: 1,
  onChange: () => {},
};

export default Pagination;
