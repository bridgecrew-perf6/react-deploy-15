import React from 'react';
import './project.css';
import calculatorZ from '../../assets/project_assets/finance-accounting-paper-desk-using.jpg';
import portf from '../../assets/project_assets/portfgf.jpg';
import form from '../../assets/project_assets/form.jpg';

const Project = () => {
  return (
    <section id='project'>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col text-center pt-3'>
            <p className='title'>PROJECT</p>
          </div>
        </div>
        <div className='row pt-3'>
          <div className='col-lg-4 p-4'>
            <div className='card bg-dark'>
              <img src={portf} className='card-img-top' alt='personal-porto' />
              <div className='card-body'>
                <p className='card-title'>Portfolio Website</p>
                <p className='card-text'>Create website using framework React-JS and Bootstrap5</p>
                <a href='https://github.com/rianhz/portfolio-react' className='tombol-crd'>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 p-4'>
            <div className='card bg-dark'>
              <img src={calculatorZ} className='card-img-top' alt='incoming' />
              <div className='card-body'>
                <p className='card-title'>Calculator</p>
                <p className='card-text'>Create calculator on website using HTML, CSS and Javascript</p>
                <a href='https://github.com/rianhz/learn-javascript-calculator-project' className='tombol-crd'>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-4 p-4'>
            <div className='card bg-dark'>
              <img src={form} className='card-img-top' alt='face-recog' />
              <div className='card-body'>
                <p className='card-title'>Form Validate</p>
                <p className='card-text'>Create simple form validate with HTML,CSS, Javascript and Sweet Alert</p>
                <a href='https://github.com/rianhz/react-deploy' class='tombol-crd'>
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
