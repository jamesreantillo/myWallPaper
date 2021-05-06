import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const More = () => {
  return (
    <MoreButton>
      <div className='nav-button'>
        <button className='more'>More</button>
      </div>
    </MoreButton>
  );
};

const MoreButton = styled(motion.div)`
  .nav-button {
    min-height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button:focus {
    outline: none !important;
  }

  .more {
    padding: 1rem 3rem;
    color: rgb(65, 51, 51);
    background: rgb(183, 243, 186);
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none !important;
    border-color: rgb(59, 168, 64);
    box-shadow: 0 0 10px #719ece;
  }
`;

export default More;
