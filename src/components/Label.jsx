import styled from 'styled-components';

export default styled.div`
  font-family: AvenirNext-Bold;
  position: absolute;
  ${props => `background-color: ${props.color};`}
  color: #fff;
  font-size: 14px;
  font-weight: 100;
  padding: 10px 20px;
  text-transform: uppercase;
`;
