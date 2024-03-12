import styles from '../styles/Main.module.css'
import Image from "next/image";
import img1 from "/public/images/Group1-1.png";
import img2 from "/public/images/Group1-2.png";
import img4 from "/public/images/Group4.png";
import img7 from '/public/images/Group7.png';
import img8 from '/public/images/Group8.png';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export default function Main({survivability, strategies, recommendations}) {

    console.log([img1, img2])
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <header className={styles.header}>ХОБЛ: мифы и реальность</header>
                <ComponentA 
                    title={<span>ХОБЛ болеют <strong>преимущественно мужчины?</strong></span>}
                    text={<span>В десятилетнем исследовании <strong>«Генетическая эпидемиология ХОБЛ» (COPDGene)</strong> 
                        среди пациентов с ХОБЛ, 
                        <br />
                        диагностированной до 55 лет, было выявлено
                        <strong> преобладание женщин (66%),</strong> а в возрасте 60-64 лет количество женщин и мужчин.
                        <br />
                        Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более 
                        <strong>высокий процент площади стенок,</strong>
                         но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.
                        </span>}
                    image={img1}
                    btn={img8}
                >
                    {img4}
                </ComponentA>
                <ComponentA
                    title={<span><strong>Опасно</strong> не наличие заболевания, а обострения?</span>}
                    text={<span><strong>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение
                        <br />
                        3 лет у 77% пациентов<sup>1</sup>.</strong> <br/>
                        В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> 
                        <br />
                        Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности,
                        инфаркте миокарда и некоторых злокачественных опухолях.
                        <br />
                        <br />
                        <h3 style={{textAlign: 'center'}}>Пятилетняя выживаемость пациентов</h3></span>}
                    image={img2}
                    btn={img7}
                >
                    {survivability}
                </ComponentA>
            </section>
            <section className={styles.section}>
                <header className={styles.header}> Терапия ХОБЛ: что в фокусе?</header>
                <div className={styles.headerYellow}>Даже 1 среднетяжелое обстроение - сигнал к увеличению объема терапии</div>
                <div className={styles.mainStrategy}>
                    <div className={styles.mainStrategyHeader}>
                        <span>Приоритетные направления фармакотерапевтической сратегии при ХОБЛ<sup>1</sup>:</span>
                    </div>
                    <div className={styles.strategies}>
                        {   
                            strategies?.map((strategy) => (
                                    <ComponentB key={strategy.id} strategy={strategy} />
                            ))
                        }
                    </div>
                    <div className={styles.between}>  
                        <div>
                        <Image
                                src={'/images/Group9.png'}
                                width={425}
                                height={55}
                                alt="Диаграмма"
                            />  
                        </div>                  
                        <div>
                            <Image
                                src={'/images/Group9.png'}
                                width={425}
                                height={55}
                                alt="Диаграмма"
                            />  
                        </div>                 
                    </div>
                    <div className={styles.recommendations}>
                        {
                            recommendations?.map((recommendation) => (
                                    <ComponentC key={recommendation.id} recommendation={recommendation}  />
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

