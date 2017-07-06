import React from 'react';
import styled from 'styled-components';

import ThumbImg from './ThumbImg';
import Card from './Card';
import { getImage } from '../../functions';

const Cards = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media only screen and (min-width: 768px){
    justify-content: space-around;
  }
`;

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.images,
      isLoading: true,
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
    const imgs = this.props.images;
    const tmbImg = imgs[this.state.selectedId];
    const tmbImgSrc = getImage(tmbImg.id, tmbImg.fileName, 1024);
    return (
      <section>
        <ThumbImg src={tmbImgSrc} />
        <Cards>
          {this.state.cards.map((img, index) => (
            <Card
              key={img.id}
              isSelected={index === this.state.selectedId}
              onSelect={() => this.handleSelectionChanged(index)}
              src={getImage(img.id, img.fileName, 128)}
            />
          ))}
        </Cards>
      </section>
    );
  }
}
