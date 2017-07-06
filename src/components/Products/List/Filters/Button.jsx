import styled from 'styled-components';

export default styled.button`
  font-family: AvenirNext-Bold;
  font-size: 24px;
  margin: 0 auto;
  vertical-align: middle;
  border: none;
  background: none;
  color: ${props => (props.isSelected ? '#4d42f8' : '#dedede')};
  outline: none;
  padding: 0;
  padding-right: 10px;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${props => (props.isSelected ? '#3d32f8' : '#aaa')};
  }
  @media only screen and (min-width: 768px){
    padding-right: 10px;
  }
`;
