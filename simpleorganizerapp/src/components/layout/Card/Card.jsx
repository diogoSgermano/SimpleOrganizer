import React from 'react';
import styles from './Card.module.css'

export default function Card({ text, onDelete }) {
  const handleDeleteClick = () => {
    const confirmExclusion = window.confirm("Tem certeza que deseja excluir esta tarefa?");
    if (confirmExclusion) {
      onDelete();
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        
        <p>{text}</p>
      </div>
      <button className={styles.deleteBtn} onClick={handleDeleteClick}>
        Apagar
      </button>
    </div>
  );
}