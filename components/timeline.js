import styles from '../styles/timeline.module.css'

import TimeEvent from   './timeevent'

export default function Timeline() {
    return (
        <>
            <h3>Timeline</h3>
            <ul class={styles.timeline}>
                <TimeEvent date="3rd May 2020" time="7:00 PM" details="Chris Serrano posted a photo on your wall." />
            </ul>
        </>
    )
}