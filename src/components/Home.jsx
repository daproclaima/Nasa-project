import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <Link className='home-link' to="/nasaphoto">Regarder les étoiles du jour</Link>
        </div>
    );
};

export default Home;