import React from 'react';
import '../../styles/footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">Luciano Tito - <i className='bx bx-copyright'></i> Academlo 2023</div>
      <div className="footer-icons">
        <a href="https://www.instagram.com/" target="_blank"><i className='bx bxl-instagram'></i></a>
        <a href="https://mx.linkedin.com/school/academlo/" target="_blank"><i className='bx bxl-linkedin' ></i></a>
        <a href="https://www.youtube.com/c/academlo/" target="_blank"><i className='bx bxl-youtube' ></i></a>
      </div>
    </div>
  );
}

export default Footer;
