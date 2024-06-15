import Filter from '@/app/Components/Filter/Filter';
import Styles from './FirstSection.module.scss';
import Sort from '@/app/Components/Sort/Sort';



const FirstSection = () => {

    return (
        <div className={Styles.container}>
            <Filter />
            <Sort />
            <p><span>52</span> <span>Results</span></p>
        </div>
    )
}


export default FirstSection;