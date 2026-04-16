import React from 'react';
import styles from './Card.module.css'

export default function Card({ text, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        
        <p>{text}</p>
      </div>
      <button className={styles.deleteBtn} onClick={onDelete}>
        Apagar
      </button>
    </div>
  );
}