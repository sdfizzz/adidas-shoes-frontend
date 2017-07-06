import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: auto;
`;

const Check = styled.div`
  color: #fff;
  margin: 0 auto;
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.checked ? 'blue' : '#fff')};
  border: 2px blue solid;
  outline: none;
  margin-bottom: 5px;
  p{
    margin: 2px 4px;
  }
`;

const Label = styled.span`
  display: inline-block;
  padding-left: 20px;
`;

export default class MyCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(oldState => ({
      checked: !oldState.checked,
    }));
  }

  render() {
    return (
      <Container>
        <Check checked={this.state.checked} onClick={this.handleChange}>
          {this.state.checked && <p>✓</p>}
        </Check>
        <Label onClick={this.handleChange}>{this.props.label}</Label>
      </Container>
    );
  }
}
