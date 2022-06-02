import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.css';
import me from '../../assets/hero_assets/hohoy.png';
import myPdf from '../../assets/cv_certificate/CV-Rian-Hidayat.pdf';

const Hero = () => {
  return (
    <section id='hero'>
      <div className='container pt-5'>
        <div className='row align-items-center  mt-5'>
          <div className='col-lg-6 text-center'>
            <div className='hero-text'>
              <span className='hello'>Hello, im</span>
              <p className='fresh'>
                <span className='rh'>Rian Hidayat</span> <br />
                Fresh Graduate of Institut Teknologi dan Bisnis Asia Malang
              </p>
            </div>
            <a href={myPdf} className='btn-cv' download>
              Download CV
            </a>
          </div>
          <div className='col-lg-6 pt-5'>
            <div className='profile text-center'>
              <img src={me} alt='me' className='me' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
