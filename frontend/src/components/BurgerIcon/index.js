import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Burger = () => { 

    return ( 
        <div className='burger-icon'>
            <FontAwesomeIcon icon={faBars} class='logo-burger btn1'></FontAwesomeIcon>
        </div>
     );
}
 
export default Burger;