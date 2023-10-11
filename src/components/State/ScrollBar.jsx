import React, { useState, useEffect } from 'react';

const Scrollbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`text-white bg-primary px-1 z-40 fixed bottom-14 right-7 transition-opacity duration-300 ease-in-out text-[30px] 2xl:px-4 2xl:py-2 2xl:text-[35px] 2xl:right-12 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};
export default Scrollbar;


