import arMobileGif from '../public/ArMobileGame.mp4'
import styles from '../styles/Projects.module.css'

export default function Game({ selected }) {
  return (
    <div>
      {selected === 'game' ? 
          <div className={styles.project}>
            <div className={styles.description}>
            <p>The Augmented Reality Multiplayer Location Based Game is a capture
               the flag based game experienced in augmented reality and based off 
               geolocations of the user. It’s built with ARKit, SwiftUI, CoreLocations,
                Combine and then AWS Amplify for the backend. It allows users to capture
                 AR objects and collect points based off their captures. This would 
                 expand into different style games such as free for all or team based 
                 and could expand to games being dropped anywhere all over the world. 
                 It would be fun to host competitions to pit cities against each other. 
                 This could be monetized by having players pay $1 to join a round and 
                 to give winners of the game part of the pot, and keeping the rest of 
                 the entry fees for the company. </p>
                 <video autoPlay="autoplay" loop="loop" className={styles.gif}>
                  <source src={arMobileGif} />
                </video>
            </div>
          </div> : null}
    </div>
  )
}
