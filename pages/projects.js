import { useState } from 'react';
import styles from '../styles/Projects.module.css'
import Workout from './workout'
import Game from './game'
import Shopping from './shopping'

export default function Projects({ reference }) {
  const [selected, setSelected] = useState('shopping');
  
  const toggleSelected = (project) => {
    setSelected(project);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div ref={reference} className={styles.project}>

        <div className={styles.tabBtns}>
          <p className={styles.tabBtn} onClick={() => toggleSelected('shopping')} >AR Shopping</p>
          <p className={styles.tabBtn} onClick={() => toggleSelected('workout')} >Focus</p>
          <p className={styles.tabBtn} onClick={() => toggleSelected('game')} >AR Game</p>
        </div>

        <div>
          <Shopping selected={selected} />
          <Workout selected={selected} />
          <Game selected={selected} />
        </div>               
        </div>
      </main>
    </div>
  )
}