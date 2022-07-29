import React from 'react';
import Form from '../components/Form';

function Register() {
    return(
        <div>
            <div style={{width:"30vw", backgroundColor:"white", margin:"auto", opacity:".9", borderRadius:"15px"}}>
                <h3> Child Number 1:</h3>
            <div style={{width:"25vw", margin:"auto"}}>
                <Form/>
            </div>
            <h3> Child Number 2:</h3>
            <div style={{width:"25vw", margin:"auto"}}>
                <Form/>
            </div>
            </div>
        </div>
    )
}

export default Register;