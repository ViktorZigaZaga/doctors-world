import styles from "../styles/ComponentD.module.css";
import Image from "next/image";

export default function ComponentD({survival}) {

    console.log(survival)

    return (
            <div className={styles.survival}>
                <Image
                    src={survival.image}
                    width={115}
                    height={135}
                    alt="живучесть" 
                />
                <span className={styles.survivalPercent}>{survival.percent}</span>
                <span className={styles.survivalHeader}>пациентов с <strong>{survival.header}</strong></span>
                <span className={styles.survivalText}>{survival.text}</span>
            </div>
    );
}
