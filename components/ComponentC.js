import styles from "../styles/ComponentC.module.css";

export default function ComponentC({recommendation}) {
    return (
        <div className={styles.recommendation}>
            <span className={styles.recommendationText}>{recommendation.text}</span>
        </div>
    );
}