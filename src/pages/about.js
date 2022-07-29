import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Mecca from "../images/Mecca.JPG";
import TyWanda from "../images/TyWanda.JPEG";
import Medina from "../images/Medina.jpg";

function About() {
    return(
        <div>
            <div style={{width:"80vw", margin:"auto", marginTop:"15px"}}>
            <MDBRow>
  <MDBCol md="3">
    <img src={Mecca} style={{height:"50vh"}}className="rounded float-left" alt="Mecca" />
  </MDBCol>
  <MDBCol md="9">
        <p style={{background:"white", padding:"5px", opacity:".9"}}>
        <h3 style={{textAlign:"center"}}>Mecca Williams: Founder, CEO, and Teacher</h3>
        <br/>Mecca Williams has always had a passion for improving the lives of children. While obtaining her bachelor’s degree in psychology, she realized that there are many things that interest her.  She received college training in Early Childhood Education. After taking some child development and Early Childhood Education training and courses, she was so intrigued with how the child’s mind works in relation to the environment that the child is in.. Upon starting her master's degree in psychology with a specialization in applied behavioral analysis, Mecca got a job working with young children with autism in the clinical setting. After working in the field of applied behavior analysis (ABA) she realized that working with children in order to improve their future lives is her passion. Mecca had a mother who homeschooled her and her siblings to get them kindergarten ready and has the opportunity to homeschool her own children and has provided educational sessions with other children in her life.
        </p>
  </MDBCol>
</MDBRow>
</div>
<br/>
<div style={{width:"80vw", margin:"auto"}}>
            <MDBRow>
  <MDBCol md="3">
    <img src={TyWanda} style={{height:"50vh"}}className="rounded float-left" alt="aligment" />
  </MDBCol>
  <MDBCol md="9">
        <p style={{background:"white", padding:"5px", opacity:".9"}}>
        <h3 style={{textAlign:"center"}}>Tywanda Cox: COO, and Teacher</h3>
        <br/>Tywanda Cox is a retired state government employee and current public school guidance counselor. Tywanda has two Master’s Degrees in Educational Leadership and Rehabilitation Counseling as well as a B.S. in Cultural Studies and an A.A. in Sociology. Tywanda’s philosophy on education is ‘Early and Intentional Education is the Foundationand Cornerstone to Academic Success’.
        </p>
  </MDBCol>
</MDBRow>
</div>
<br/>
<div style={{width:"80vw", margin:"auto"}}>
            <MDBRow>
  <MDBCol md="3">
    <img src={Medina} style={{height:"50vh"}}className="rounded float-left" alt="aligment" />
  </MDBCol>
  <MDBCol md="9">
        <p style={{background:"white", padding:"5px", opacity:".9"}}>
        <h3 style={{textAlign:"center"}}>Medinah Williams: Operational Manager</h3>
        <br/>Medinah Williams have a BS in administration of Justice. an operational manager. As OM, she oversees the company’s organizational processes, implement policies and strategies to improve productivity at efficient levels while building an enjoyable companyculture. She joined this company because she believes in the vision that Mec’s has because she’s seen her in action. Exposing children to early education is extremely beneficial for them because at a young age kids' minds absorbs so much information. Medinah believes that Mec’s Munchkins will achieve in providing your kids the necessary tools to jump start their educational knowledge.
        </p>
  </MDBCol>
</MDBRow>
</div>
<br/>

        </div>
    )
}

export default About;