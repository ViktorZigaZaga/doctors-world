import styles from "../styles/ComponentB.module.css";
import Image from "next/image";

export default function ComponentB({strategy}) {

    return (
        <div className={styles.strategy}>
            <div>
                <Image
                    src={strategy.image}
                    width={125}
                    height={105}
                    alt="стратегии" 
                />
                <div className={styles.strategyIndex}>
                    <span class={styles.strategyIndexCircle}>{strategy.id}</span>
                </div>
            </div>
            <span className={styles.strategyHeader}>Ингаляционный <br/><strong>{strategy.header}</strong></span>
            <span className={styles.strategyText}>{strategy.text}</span>
        </div>
    );
}