import React from 'react';
import Customers from '../components/customers';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function Programs() {
    return(
        <div>
        <div style={{width:"50vw", margin:"auto", background:"white", padding:"5px", opacity:'.9'}}>
            <h1 className="text-center">Programs</h1>
            <h3 className="text-center"><br/>
            Shooting Stars & Rising Stars - $125/week<br/>
            Goal Setters & Goal Getters - $100/week<br/>
            Registration Fee - $150</h3>
            <p className="text-center" style={{marginTop:"-10px"}}>(Includes Assessment, placement, and postage for the curriculum & munchkins kit.)</p>
            
        </div>
            <br/>
            <div style={{width:"50vw", margin:"auto", background:"white", padding:"5px", opacity:".9"}}>
            <MDBTable>
      <MDBTableHead>
        <tr>
          
          <th>Days</th>
          <th>Rising Stars</th>
          <th>Shooting Stars</th>
          <th>Goal Getters</th>
          <th>Goal Setters</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          
          <td>Monday-Friday</td>
          <td>7am-9am</td>
          <td>9am-11am</td>
          <td>12pm-2pm</td>
          <td>2pm-4pm</td>
        </tr>
        <tr>
        <td colSpan={5}>Student will be placed in appropriate class and time based upon completed assessment with Mec's Munchkins.</td>
         
        </tr>
      </MDBTableBody>
    </MDBTable>

            </div>
            <br/>
        </div>
    )
}

export default Programs;