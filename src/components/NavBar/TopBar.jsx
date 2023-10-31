import React, { useEffect, useState } from "react";

export default function TopBar() {
  const [scrolling, setScrolling] = useState(false);
  const [openToggle, setOpenToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggleClickListner = ()=>{
    setOpenToggle(!openToggle)
  }
  return (
    <header className={scrolling && 'sticky'}>
      <a href="#" className="logo">
        <span>::</span>Food
      </a>
      <div className={openToggle? "active menuToggle":"menuToggle"} onClick={menuToggleClickListner} />
      <ul className={openToggle? "active nevigation":"nevigation"}>
        <li>
          <a href="#banner">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#expart">Expert</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
