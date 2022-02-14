import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => { 
    return ( 
        <div className='search-barre'>
            <div class='container'></div>
            <FontAwesomeIcon icon={faMagnifyingGlass} class='logo-glass'></FontAwesomeIcon>
            <input type="search" name="searchInp" id="search" class="searchInp" required maxlength="35"></input>
        </div>
     );
}
 
export default Search;