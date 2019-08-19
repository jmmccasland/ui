import React, { Component } from 'react';
import Meta from './Meta.js';
import Header from './Header.js';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  black: '#35355a',
  white: '#fff',
  silver: '#f8f8f8',
  blue: '#4e6ffb',
  red: '#df3b00',

  success: 'lightgreen',
  error: 'lightcoral',

  disabled_txt: '#8b8b8b',
  disabled_bg:' #d0d0d9',

  border: '#ececec',
  overlay: 'rgba(27,27,33,0.50)',

  lg: '24px',
  reg: '20px',
  sm: '18px',
  xs: '14px',

  alert: '9993',
  modal: '9992',
  overlay: '9991',

  max_width: '44rem',
  gutter: '20px',
  border_radius:' 8px'
}

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: ${theme.silver};
    color: ${theme.black};
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
	  text-decoration: none;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Meta />
          <Header />
          {this.props.children}
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Page;