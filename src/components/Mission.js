import React from "react";
import {Row, Col, Button} from 'reactstrap'
import { MDBBtn } from 'mdb-react-ui-kit';

function Mission() {
    return(
        <div className="box story">
            <Row>
                
                <Col sm="8" id="missionWords">
                    <h1>Our Mission</h1>
                    <hr style={{width:"50%", height:"3px",margin:"auto"}}/>
                    <br/>
                    <p style={{width:780}}> Our mission is to provide the highest quality of care and education to children aged 18 months to five years while valuing all children as individuals. We encourage self-confidence, curiosity, and self-discipline as well as assisting in the development of the child’s social and emotional health.
                    </p>
                    <br/>
                    
                </Col>
                
                <Col sm="4" className="missionPic">
                    
                </Col>
            </Row>

        </div>
    );
}

export default Mission;