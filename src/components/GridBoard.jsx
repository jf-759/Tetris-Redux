import React from 'react'
import GridSquare from './GridSquare.jsx'

export default function GridBoard() {
  const grid = [];

  for (let row = 0; row < 18; row++) {
    grid.push([]);
    for (let col = 0; col < 10; col++) {
      grid[row].push(<GridSquare key={`${col}${row}`} color="1" />);
    }
  }

  return <div className="grid-board">{grid}</div>;
}