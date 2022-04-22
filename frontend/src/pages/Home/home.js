import Search from '../../components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import './home.css';


const Home = () => {
    const [toggle, setToggle] = useState(false);

    const changeState = () => {
        setToggle(!toggle);
    }
    return (
        <div className="home">
            <h2 className='titre'>KEYSTONE FILMS</h2>
            <>
                <Search/>
                <div className={toggle ? "box animated" : "box"}></div>
                <button onClick={changeState}><FontAwesomeIcon icon={faBars} class='logo-burger btn1'></FontAwesomeIcon></button>
            </>
            <div className="ligne-home"></div>
        </div>
    )
}

export default Home;