import Search from '../../components/Search';
import Burger from '../../components/BurgerIcon';
import './index.css';


const Home = () => {
    return (
        <div className="home">
            <h2 className='titre'>KEYSTONE FILMS</h2>
            <Search/>
            <Burger/>
            <div className="ligne-home"></div>
            <img src="http://localhost:7000/static/ecosse(5).jpg" alt="batiment ecosse" />
        </div>
    )
}

export default Home;