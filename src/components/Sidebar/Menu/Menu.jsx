import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: AvenirNext-Bold;
  font-size: 14px;
  outline: none;
  background: none;
  border: none;
  margin: 0;
  color: ${props => (props.isOpened ? '#fff' : '#3c3c3c')};
  ${props => props.isOpened && 'margin-bottom: 10px;'}
  &:hover{
    transition: color 0.5s ease-out;
    color: #fff;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 20px;
`;

const Img = styled.object`
  width: 40px;
  height: 40px;
  color: #ddd;
  margin: 10px 0;
  fill: red;
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
        <Img data={this.props.src} type="image/svg+xml" isOpened={this.state.isOpened} alt="" />
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
