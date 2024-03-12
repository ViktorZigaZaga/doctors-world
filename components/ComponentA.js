import styles from "../styles/ComponentA.module.css"
import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

export default function ComponentA(props) {

    const [modal, setModal] = useState(false);

    return (
        <div className={styles.mythReality}>
            <div className={styles.mythRealityBox}>
                <div className={styles.mythRealityBlob}>
                    <Image  
                        src={props.image}
                        width={42}
                        height={42}
                        alt="лого"
                    />
                </div>
                <div className={styles.mythRealityBorder}>
                    <div className={styles.mythRealityTitle}>
                        {props.title}
                    </div>
                </div>
                <i class={styles.mythRealityArrowRight}></i>
            </div>
            <span className={styles.mythRealityText}>{props.text}</span>
            <button className={styles.btnModalPosition} onClick={() => setModal(true)}>
                <Image
                    src={props.btn}
                    width={50}
                    height={50}
                    alt=""
                />  
            </button>
            <Modal visible={modal} setVisible={setModal} texts={props.text}>
                {props.children} 
            </Modal> 
        </div>
    );
}