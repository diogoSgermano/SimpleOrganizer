import React, { useState, useRef, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Column.module.css'

export default function Column({ column, addCard, deleteColumn, deleteCard }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  // Ajusta a altura do textarea automaticamente com base no conteúdo
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleDeleteColumn = () => {
    const confirmExclusion = window.confirm("Tem certeza que deseja excluir este quadro?");
    if (confirmExclusion) {
      deleteColumn(column.id);
    }
  };

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h3 className={styles.name}>{column.title}</h3>
        <button 
          className={styles.deleteColumnBtn} 
          onClick={handleDeleteColumn}
        >
          Deletar quadro
        </button>
      </div>

      {column.cards.map((card, index) => (
        <Card 
          key={index} 
          text={card} 
          onDelete={() => deleteCard(column.id, index)} 
        />
      ))}

      <textarea
        ref={textareaRef}
        className={styles.input}
        placeholder="Descreva sua tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="1"
      />

      <button
        onClick={() => {
          addCard(column.id, input);
          setInput("");
        }}
      >
        + Adicionar tarefa
      </button>
    </div>
  );
}