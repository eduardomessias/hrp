import styles from '../styles/timeline.module.css'

export default function Timeline() {
    return (
        <>
            <h3>Timeline</h3>
            <ul class={styles.rb}>
                <li>
                    <div class={styles.timestamp}>3rd May 2020<br/> 7:00 PM</div>
                    <div class={styles.itemtitle}>Chris Serrano posted a photo on your wall.</div>
                </li>
                <li>
                    <div class={styles.timestamp}>19th May 2020<br/> 3:00 PM</div>
                    <div class={styles.itemtitle}>Mia Redwood commented on your last post.</div>
                </li>
                <li>
                    <div class={styles.timestamp}>17st June 2020<br/> 7:00 PM</div>
                    <div class={styles.itemtitle}>Lucas McAlister just send you a message.</div>
                </li>
            </ul>
        </>
    )
}