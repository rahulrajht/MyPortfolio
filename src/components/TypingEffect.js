import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const TypingEffect = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          'Hi, I’m Rahul Gupta.',
          'I’m an experienced Frontend Developer.',
          'I create engaging and dynamic web apps.'
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: true
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div>
      <h1 className="typing-text">
        <span ref={typedRef}></span>
      </h1>
    </div>
  );
};

