import arMobileGif from '../public/ArShoppingApp.mp4';
import styles from '../styles/Projects.module.css';

export default function Shopping({ selected }) {
  return (
    <div>
      {selected === 'shopping' && (
        <div className={styles.project}>
          <div className={styles.description}>
            <p>
              The Augmented Reality Shopping app is a snapchat like virtual,
              ephemeral, social, shopping experience. It is built using Apples
              ARRealityKit, ARKit, SiwftUI and the images are pulled from
              googles poly. This POC allows users to try on hats or glasses and
              send an image to friends to see if they should buy them or not.
              Ideally this would expand into all sorts of clothing items such as
              makeup, shirts, shoes etc. The app can then evolve into sizing
              recommendations based off body scans and outfit recommendations
              based off style decisions/past and current purchase. Monetization
              can be added into taking a small percentage of each item sold.{' '}
            </p>
            <video autoPlay={true} muted loop="loop" className={styles.gif}>
              <source src={arMobileGif} />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
