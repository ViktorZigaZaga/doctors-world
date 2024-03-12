import styles from "../styles/Modal.module.css"
import Image from "next/image";
import ComponentD from './ComponentD';

export default function Modal(props) {

    const rootClasses = [styles.myModal];

    if (props.visible) {
        rootClasses.push(styles.myModalActive);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => props.setVisible(false)}>
            <div className={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
                {props.texts}
                {
                props.children.src ?
                    <Image
                    src={props.children.src}
                    width={1100}
                    height={390}
                    alt="Диаграмма"
                    />
                : 
                    <div className={styles.myModalcomponentsD}>
                        {
                        props.children?.map((survival) => (
                                <ComponentD key={survival.id} survival={survival} />
                            ))
                        }  
                    </div> 
                }
            </div>
        </div>
    );
}