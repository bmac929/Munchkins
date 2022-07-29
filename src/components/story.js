import React from "react";
import {Row, Col, Button} from 'reactstrap'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {MDBBtn} from 'mdb-react-ui-kit';

function Story() {
    return(
        <div className="box story">
            
            <MDBRow>
                <MDBCol sm="4" className="historyPic">                    
                </MDBCol>
                <MDBCol sm="8" id="storyWords" >
                    <h1>Our Story</h1>
                    <hr style={{width:"50%", height:"3px",margin:"auto"}}/>
                    <br/>
                    
                    
                    <p> Mec’s Munchkins was started because we believe that what really matters is the child’s ability and not their age. We believe that all children need a strong, solid foundation of education that will allow them to be successful later in life. The earlier a child is exposed to education, the love for learning will develop and they will be more likely to succeed in school in their later years. Our focus is on child development, early literacy and numeracy. Our goal is to provide a warm and caring environment to inspire and nurturethe souls of the future in order to prepare children for success at school and in adulthood.By providing the highest quality of care and education while encouraging self-confidence, curiosity, self-discipline, we will assist in the development of the child’s intellect, social and emotional health.
                    </p>
                    <br/>
                </MDBCol>
            </MDBRow>

        </div>
    )
}

export default Story;