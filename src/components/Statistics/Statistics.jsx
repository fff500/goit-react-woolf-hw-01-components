import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}

            <ul className={style['stat-list']}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li
                            className={style.item}
                            key={id}
                            style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                            <span className={style.label}>{label}</span>
                            <span className={style.percentage}>{percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}