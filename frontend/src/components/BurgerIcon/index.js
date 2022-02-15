import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Burger = () => { 
    const btn = document.querySelector('.btn1');

    btn.addEventListener('click', presentation)

    function presentation(){

        btn.classList.toggle('active') // add = ajoute, toggle = ajoute et enlève //

    }
    return ( 
        <div className='burger-icon'>
            <FontAwesomeIcon icon={faBars} class='logo-burger btn1'></FontAwesomeIcon>
        </div>
     );
}
 
export default Burger;