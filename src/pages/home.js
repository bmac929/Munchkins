import React from 'react';
import Cards from '../components/cards';
import Logo from '../components/logobox'
import Story from '../components/story';
import Mission from '../components/Mission';
import FooterPage from '../components/Footer';

function Home() {
    return(        
        <div>       
            <Logo/>
            <br/>
            <Mission/>
            <br/>
            <Cards/>
            <br/>
            
            <Story/>
        </div>
        


    );
}

export default Home;