import React, { useEffect } from 'react';
import './styles/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import HomePage from './pages/landingpage';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
