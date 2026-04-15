import React, { useState } from 'react';
import Column from '../Column/Column';
import styles from './Board.module.css'

export default function Board() {
  const [columns, setColumns] = useState([]);

  function addColumn() {
    const newColumn = {
      id: Date.now(),
      title: `Quadro ${columns.length + 1}`,
      cards: []
    };

    setColumns([...columns, newColumn]);
  }

  function addCard(columnId, text,) {
    if (!text) return;

    setColumns(
      columns.map((col) =>
        col.id === columnId
          ? { ...col, cards: [...col.cards, text] }
          : col
      )
    );
  }

  return (
    <div>
      <button className={styles.createChart} onClick={addColumn}>+ Criar quadro</button>

      <div className={styles.board}>
        {columns.map((col) => (
          <Column key={col.id} column={col} addCard={addCard} />
        ))}
      </div>
    </div>
  );
}