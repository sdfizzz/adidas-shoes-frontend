export function filterCards(cards, sizes) {
  return sizes.length > 0
    ? cards.filter(card => card.sizes.some(size => sizes.indexOf(size) > -1))
    : cards;
}

export function getUniqueSizes(cards) {
  return Array.from(
    new Set(
      cards
        .map(card => card.sizes)
        .reduce((prevSizes, currSizes) => [...prevSizes, ...currSizes], []),
    ),
  );
}
