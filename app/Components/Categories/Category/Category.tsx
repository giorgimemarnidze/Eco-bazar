import styles from './Category.module.scss';
import Image from 'next/image';

type Props = {
    text: string;
    children: React.ReactNode;
    size?: string;
    favourite?: string;
}   

const Category = (props: Props) => {
    const font= props.size === 'big' ? '18px' : '15px';
    const favourite = props.favourite === 'fav' ? 'border: 1px solid #2C742F' : 'border: initial'
    return(
        <div className={styles.container} style={{fontSize:font,border:favourite}}>
                {props.children}
                {props.text}
        </div>
    )
}

export default Category;