/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: AvenirNext-Bold;
  font-size: 24px;
  outline: none;
  background: none;
  border: none;
  margin-bottom: 15px;
  color: ${props => (props.isOpened ? '#fff' : '#3c3c3c')};
`;

const Arrow = styled.img`
  opacity: ${props => (props.isOpened ? '1' : '0.2')};
  transform: rotate(${props => (props.isOpened ? '0' : '90deg')});
  padding: 4px;
  margin-left: 7px;
`;

const Container = styled.div`
  margin-bottom: ${props => (props.isOpened ? '50px' : '0')};
`;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ isOpened: !state.isOpened }));
  }

  render() {
    return (
      <Container isOpened={this.state.isOpened}>
        <Button isOpened={this.state.isOpened} onClick={this.toggle}>
          {this.props.title}
        </Button>
        <Arrow isOpened={this.state.isOpened} src={require('./arrow.svg')} />
        {this.state.isOpened && this.props.children}
      </Container>
    );
  }
}
