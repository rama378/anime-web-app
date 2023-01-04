import Input from '../../../App/common/components/Input/Input';
import './Search.css';
import {ReactComponent as SearchIcon} from "../../../App/common/assets/images/icon/search.svg";

const Search = () => {
  return (
    <div className='Search'>
        <div className='Search__wrapper'>
            <div className='Search__title'>Find your anime</div>
            <div>e.g. Cowboy Bebop, Trigun, Witch Hunter Robin</div>
        </div>
        <div className='Search__inputwrapper'>
            <Input
                size="large"
                className='Search__input'
                placeholder='Type your anime title...'
                icon={<SearchIcon />}
            />
        </div>
    </div>
  );
}

export default Search;
