import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Welcome = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>Les APIs utilisées:</h1>
            <br/>
            <ul>
                <li> - Une API qui permet d'afficher une liste (exhaustive) de pays associées à leur drapeau ainsi que leur population, capitale et un ensemble d'autres informations: <h3><a href='https://restcountries.eu/'>https://restcountries.eu/</a></h3></li>
                <li> - Une API qui permet d'afficher la météo de la ville indiquée: <h3><a href='https://home.openweathermap.org/'>https://home.openweathermap.org/</a></h3></li>
                
            </ul>
        </div>
    );
};

export default Welcome;