import PropTypes from 'prop-types';
import { CARD_LIMIT } from '../../constants/constant';
import Button from '../../components/Button/Button';
import './Pagination.css';

const Pagination = (props) => {
  const getPagination = () => {
    if (props?.page === 0 && props?.isNextAvailable)
      return [props?.page, props?.page + 1, props?.page + 2];
    else if (props?.page > 0 && props?.isNextAvailable)
      return [props?.page - 1, props?.page, props?.page + 1];
    else if (props?.page > 0 && !props?.isNextAvailable)
      return [props?.page - 2, props?.page - 1, props?.page];
    else
      return [];
  };

  return (
    <>
      {getPagination().length > 0 && (
        <div className='Pagination'>
          {getPagination().map((n) => (
            <Button className='Pagination__bullet' style={n === props?.page ? 'default' : 'clear'} key={n.toString()}>{n + 1}</Button>
          ))}
        </div>
      )}
    </>
  );
}

Pagination.propTypes = {
	limit: PropTypes.number,
  page: PropTypes.number,
  isNextAvailable: PropTypes.bool,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  limit: CARD_LIMIT,
  page: 0,
  isNextAvailable: true,
  onChange: () => {},
};

export default Pagination;
