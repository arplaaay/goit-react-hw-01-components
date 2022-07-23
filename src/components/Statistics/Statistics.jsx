import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statlist}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.item}
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={styles.label}>{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;
