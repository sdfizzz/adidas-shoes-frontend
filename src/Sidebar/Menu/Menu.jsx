import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: AvenirNext-Bold;
  font-size: 18px;
  outline: none;
  background: none;
  border: none;
  margin: 0;
  color: ${props => (props.isOpened ? '#fff' : '#3c3c3c')};
  &.active{
    color: #fff;
  }
  &:hover{
    transition: color 0.5s ease-out;
    color: #fff;
  }
`;

const Container = styled.div`
  margin-bottom: 0;
  margin-top: 20px;
`;

const Img = styled.img`
  margin-top: 20px;
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
      <Container isOpened={this.state.isOpened} src={this.props.src}>
        <Img src={this.props.src} alt="" />
        <Button isOpened={this.state.isOpened} onClick={this.toggle}>
          <div>
            {this.props.title}
          </div>
        </Button>
        {this.state.isOpened && this.props.children}
      </Container>
    );
  }
}
