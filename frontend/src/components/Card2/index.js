import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const card2 = () => { 
    return ( 
        <div>
            <div className='box-card2'>
                <h2 className='titre-card'>SIGN IN</h2>
                <FontAwesomeIcon icon={faUser} class='logo-user'></FontAwesomeIcon>
                <label for="email" class="labelEmail">EMAIL</label>
                <input type="text" name="emailInp" id="email" class="emailInp" required maxlength="35"></input>
                <br /><br />
                <div className='ligne1'></div>
                <FontAwesomeIcon icon={faLock} class='logo-lock'></FontAwesomeIcon>
                <label for="password" class="labelPassword">PASSWORD</label>
                <input type="text" name="passwordInp" id="password" class="passwordInp" required maxlength="35"></input>
                <div className='ligne2'></div>
                <h3 class='f_pass'>Forgotten password ?</h3>
                <button type='submit' Value='Submit' class='buttonInp'>Log In</button>
            </div>
        </div>
     );
}
 
export default card2;