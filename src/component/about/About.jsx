import React from 'react';
import './about.css';
import personality from '../../assets/about_assets/personality.png';
import exp from '../../assets/about_assets/exp.png';
import hob from '../../assets/about_assets/hobb.png';
import { BsFillFileMusicFill } from 'react-icons/bs';
import { BsFilm } from 'react-icons/bs';
import { BiBasketball } from 'react-icons/bi';
import { GiJungle } from 'react-icons/gi';
import { FaHiking } from 'react-icons/fa';
import { AiOutlineCoffee } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const About = () => {
  return (
    <section id='about'>
      <div className='container pt-5'>
        <div className='row text-center'>
          <div className='col text-center pt-3'>
            <p className='title'>ABOUT ME</p>
          </div>
        </div>
        <div className='row align-items-center text-center pt-5'>
          <div className='col-md-6 text-center'>
            <img src={personality} alt='person' className='img-konten' />
          </div>
          <div className='col-md-6 '>
            <p className='tittle-content'>PERSONALITY</p>
            <p className='about-text'>
              My name is Rian Hidayat, i was born in Tangerang and grew up in Bali. Easy for me to adapt to a new environment and communicate with people I meet for the first time, because i'am friendly and polite person.
            </p>
          </div>
        </div>
        <div className='row expp align-items-center text-center pt-5'>
          <div className='col-md-6'>
            <p className='tittle-content'>EXPERIENCE</p>
            <p className='about-text'>
              The experiences that I have are intern at the Buleleng DPRD Secretariat Office and participating in the Hackthon event. Also after graduation, i've join the Web Development Bootcamp for learning new things.
            </p>
          </div>
          <div className='col-md-6'>
            <img src={exp} alt='exp' className='img-konten' />
          </div>
        </div>
        <div className='row align-items-center text-center pt-5'>
          <div className='col-md-6'>
            <img src={hob} alt='hobbies' className='img-konten' />
          </div>
          <div className='col-md-6'>
            <p className='tittle-content'>HOBBIES</p>
            <p className='about-text'>In addition to learning new thing and sharpening my knowledge of Web Development, to improve my health I also like sports such as playing basketball, soccer and futsal.</p>
          </div>
        </div>

        <div className='row text-center mt-5 pt-5'>
          <div className='col'>
            <small>What are you interested with?</small>
            <p className='tittle-content-sec'>Favorite & Interest</p>
          </div>
        </div>

        <div className='row pt-3'>
          <div className='col-lg-6'>
            <div className='wrapper'>
              <div className='konten-item'>
                <p className='emotic'>
                  <BsFillFileMusicFill />
                </p>
                EDM Songs
              </div>
              <div className='konten-item'>
                <p className='emotic'>
                  <BsFilm />
                </p>
                K-Drama
              </div>
              <div className='konten-item'>
                <p className='emotic'>
                  <BiBasketball />
                </p>
                Basketball
              </div>
            </div>
          </div>
          <div className='col-lg-6 '>
            <div className='wrapper'>
              <div className='konten-item'>
                <p className='emotic'>
                  <GiJungle />
                </p>
                Adventure
              </div>
              <div className='konten-item'>
                <p className='emotic'>
                  <FaHiking />
                </p>
                Hiking
              </div>
              <div className='konten-item'>
                <p className='emotic'>
                  <AiOutlineCoffee />
                </p>
                Coffee
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-5 pt-5'>
        <div className='col text-center'>
          <small>Also, Find me</small>
          <p className='tittle-content-sec'>Social Media</p>
          <div className='social-info'>
            <div className='social-item'>
              <a href='https://web.facebook.com/rian.hidayat.73744/'>
                <BsFacebook />
                Facebook
              </a>
            </div>
            <div className='social-item'>
              <a href='https://www.instagram.com/rianhiday_/'>
                <BsInstagram />
                Instagram
              </a>
            </div>
            <div className='social-item'>
              <a href='https://www.linkedin.com/in/rian-hidayat-275a46226'>
                <BsLinkedin />
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
