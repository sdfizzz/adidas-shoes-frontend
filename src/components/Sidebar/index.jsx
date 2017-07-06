import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';

const Wrapper = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0e0e0e;
  width: 100%;
  height: ${props => (props.isOpened ? 'auto' : '64px')};
  padding: 0;
  @media only screen and (min-width: 768px){
    display: block;
    width: 150px;
    padding: 0 20px;
    height: inherit;
  }
`;

const MenuButton = styled.button`
  background: url(${require('./img.svg')});
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 15px 25px;
  outline: none;
  border: none;
  @media only screen and (min-width: 768px){
    display: none;
  })
`;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      isOpened: !state.isOpened,
    }));
  }

  render() {
    return (
      <Wrapper isOpened={this.state.isOpened}>
        <Logo />
        <MenuButton onClick={this.toggle} />
        <Menu isOpened={this.state.isOpened} />
      </Wrapper>
    );
  }
}
