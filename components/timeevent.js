import styles from '../styles/timeevent.module.css'

export default function TimeEvent({date, time, details}) {
    return (
        <li class={styles.timeevent}>
            <div class={styles.timestamp}>{date}<br />{time}</div>
            <div class={styles.eventdetails}>{details}</div>
        </li>
    )
}