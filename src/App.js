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

    useEffect(() => {
    // Load Google tag script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17522582965";
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "AW-17522582965");
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
