import workoutGif from '../public/FocusCarterChavez.mp4';
import styles from '../styles/Projects.module.css';

export default function Workout({ selected }) {
  return (
    <div>
      {selected === 'workout' && (
        <div className={styles.project}>
          <div className={styles.description}>
            <p>
              Focus is a social media fitness app geared specifically towards
              weight lifting. It is built with Swift, UIKit, and uses firebase
              for the back end. It allows users to track, build, and share
              workouts. Users can post pictures/videos for their followers and
              take workouts others have posted. It makes it easy for weight
              lifting to know what your workout for the day is and to pull from
              your past workouts. It helps to know how much weight you d id last
              time for this workout and where to start at. Eventually I would
              like to add a section called the kitchen for food tracking and
              sharing and also for Focus to be able to generate workouts
              specifically for you based off your goals and past injuries.
              Monetization can be added into having trainers or teams pay for
              accounts and the ability to create team workouts/track their
              clients and athletes.{' '}
            </p>
            <video autoPlay={true} muted loop="loop" className={styles.gif}>
              <source src={workoutGif} />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
