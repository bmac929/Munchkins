import React from 'react';
import Logo from '../images/logo2.png';
import Hands from '../videos/hands.mp4';
import Alphabet from '../videos/alphabet.mp4';
import Write from '../videos/write.mp4';

function Logobox() {
    return(        
        <div class="intro" id="logobox" >
            <video autoPlay loop muted 
            style={{ width:"95vw", height:"80vh",}}>
            <source src={Hands} type="video/mp4"/> 
            </video>
            <img src={Logo} width={534.3} height={109.2} id="logo"/>
        </div>
        


    );
}

export default Logobox;