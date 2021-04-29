import styles from '../styles/timeevent.module.css'

export default function TimeEvent({date, time, details}) {
    return (
        <li className={styles.timeevent}>
            <div className={styles.timestamp}>{date}<br />{time}</div>
            <div className={styles.eventdetails}>{details}</div>
        </li>
    )
}