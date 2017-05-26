import React from 'react';
import styled from 'styled-components';

import ThumbImg from './ThumbImg';
import Card from './Card';

const Cards = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media only screen and (min-width: 768px){
    justify-content: space-around;
  }
`;

const cards = [0, 1, 2, 3];

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
    };
    this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
  }

  handleSelectionChanged(id) {
    this.setState(() => ({
      selectedId: id,
    }));
  }

  render() {
    return (
      <section>
        <ThumbImg id={this.state.selectedId} />
        <Cards>
          {cards.map(id => (
            <Card
              isSelected={id === this.state.selectedId}
              onSelect={() => this.handleSelectionChanged(id)}
            />
          ))}
        </Cards>
      </section>
    );
  }
}
