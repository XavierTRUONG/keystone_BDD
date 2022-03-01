import Search from '../../components/Search';
import Burger from '../../components/BurgerIcon';
import './home.css';


const Home = () => {
    return (
        <div className="home">
            <h2 className='titre'>KEYSTONE FILMS</h2>
            <>
                <Search/>
                <Burger/>
            </>
            <div className="ligne-home"></div>
        </div>
    )
}

export default Home;