import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = () => {
  return ( 
  <StyledHeader>
    <h2 id='logo'>Wallpaper Downloader</h2>
      <form className="search-form">
        <input type="text" name="search" className="search-input" required />

        <button type="submit" className="submit-btn">Search</button>
      </form>
  </StyledHeader> );
}

const StyledHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 30vh;
  justify-content: center;
  align-items: center;

#logo {
  text-decoration: none;
  color: black;
}
header h2 {
  padding: 2rem;
}
.search-form {
  padding: 2rem;
  display: flex;
}

.search-form input {
  font-size: 2rem;
  padding: 0.5rem;
  width: 100%;
  border: none;
  border: 2px solid rgb(183, 243, 186);
  box-shadow: 0 0 10px #719ece;
}
input:focus {
  outline: none !important;
  border-color: rgb(59, 168, 64);
}

.search-form button {
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  background: rgb(183, 243, 186);
  color: rgb(65, 51, 51);
  cursor: pointer;
  box-shadow: 0 0 10px #719ece;
}

.search-form button:focus {
  outline: none !important;
  border-color: rgb(59, 168, 64);
}
`
 
export default Header;