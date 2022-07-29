import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/mecsmunchkins" target="_blank" className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a> 
          <a href="https://www.instagram.com/mecsmunchkins" target="_blank" className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a> 
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon fas icon="book" /> Mec's Munchkins
              </h6>
              <p>
              We provide a safe, happy, nurturing environment for all that
              is involved with our school. We strive to always meet the needs of
              children and our actions are based on knowledge and accountability for
              what we do.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Programs</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Reading
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>                  
                  Writing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Counting
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Colors
                </a>
              </p>
            </div>

            

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Reno, NV 89521, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                mecsmunchkins@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> 775-386-2589
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
          Mac
        
      </div>
    </MDBFooter>
  );
}