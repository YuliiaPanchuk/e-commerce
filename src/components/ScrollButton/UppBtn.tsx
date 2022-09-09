import React from 'react';
import { useEffect, useState } from 'react';
import './UppBtn.css';

export function UppBtn() {
  const [visible, setVisible] = useState(false);

  function scroll() {
    const scrolled = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
    setVisible(scrolled);
  }

  function uppScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    document.addEventListener('scroll', scroll);

    return function () {
      document.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div className="btnWrapper">
      <button
        className="uppBtn"
        onClick={uppScroll}
        style={{ display: visible ? 'block' : 'none' }}
      >
        <i className="fa-solid fa-angle-up" />
      </button>
    </div>
  );
}