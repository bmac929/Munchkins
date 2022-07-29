import React from "react";
import { Link } from "react-router-dom";

function Nav(){
   return( 
       <div>
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark" style={{background: 'rgb(181,106,119)'}}>
    <a class="navbar-brand" href="/">Mec's Munchkins</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul class="navbar-nav mr-auto">


        </ul>
        <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item">
                <a class="nav-link" href="/">Home
                </a>
            </li>
            <div className="vr" style ={{color:"white"}} />
            
            <li class="nav-item">
                <a class="nav-link" href="/about">About Us</a>
            </li>
            <div className="vr" style ={{color:"white"}} />
            
            <li class="nav-item">
                <a class="nav-link" href="/programs">Programs</a>
            </li>
            <div className="vr" style ={{color:"white"}} />
            <li class="nav-item">
                <a class="nav-link" href="/curriculum">Curriculum</a>
            </li>
            <div className="vr" style ={{color:"white"}} />
            
            <li class="nav-item">
                <a class="nav-link" href="/faqs">FAQs</a>
            </li>
            
            <li class="nav-item">
                <a class="nav-link waves-effect waves-light"
                href="https://www.facebook.com/mecsmunchkins"
                target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link waves-effect waves-light"
                href="https://www.instagram.com/mecsmunchkins_preschool" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
        </ul>
    </div>
</nav>
</div>
)}

export default Nav;