import styled from 'styled-components';

export default styled.button`
  font-family: AvenirNext-Bold;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
  padding-right: 10px;
  vertical-align: middle;
  border: none;
  background: none;
  color: ${props => (props.isSelected ? '#4d42f8' : '#dedede')};
  font-weight: bold;
  outline: none;
`;
