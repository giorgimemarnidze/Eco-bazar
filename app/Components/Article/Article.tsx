import styles from './Article.module.scss';
import Image from 'next/image';
import Article1 from './Article1/Article1';
import Article2 from './Article2/Article2';

const Article = () => {

    return(
        <div className={styles.container}>
            <Image src={'./woman.svg'} alt='image' width={872} height={600} className={styles.woman} />

            <div className={styles.lil}>
                <Article1 />
                <Article2 />
            </div>
        </div>
    )
}

export default Article;
