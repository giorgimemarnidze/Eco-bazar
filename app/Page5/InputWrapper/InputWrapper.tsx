import styles from './InputWrapper.module.scss';
import InputItem from './InputItem/InputItem';
import Image from 'next/image';

const InputWrapper = () => {

    return (
        <div className={styles.container}>
            <h2>Billing Information</h2>
            <div className={styles.firstLine}>
                <InputItem title={'First name'} placeholder={'Your first name'} />
                <InputItem title={'Last name'} placeholder={'Your last name'} />
                <InputItem title={'Company Name (optional)'} placeholder={'Company name'} />
            </div>
            <div>
                <InputItem title={'Street Address'} placeholder={'Email'} length='big' />
            </div>

            <div className={styles.thirdLine}>
                <div className={styles.two}>
                    <div className={styles.select1}>
                        <label htmlFor="region">Country / Region</label>
                        <select name="" id="region" className={styles.select}>
                            <option value="">Select</option>
                        </select>
                    </div>

                    <div className={styles.select1}>
                        <label htmlFor="state">States</label>
                        <select name="" id="state" className={styles.selects}>
                            <option value="">Selects</option>
                        </select>
                    </div>
                </div>

                <div className={styles.select1 + ' ' + styles.last}>
                    <label htmlFor="">Zip Code</label>
                    <input type="text" placeholder='Zip Code' className={styles.zip} />
                </div>
            </div>

            <div className={styles.email}>
                <InputItem title={'Email'} placeholder={'Email Address'} />
                <InputItem title={'Phone'} placeholder={'Phone Number'} />
            </div>
             
            <div className={styles.check}>
                <input type="checkbox" />
                <p>Ship to a different address</p>
            </div>
            
            <div className={styles.containerArea}>
                <h3>Additional Info</h3>
                <label htmlFor="">Order Notes (Optional)</label>
                <textarea name="" id="" className={styles.area} placeholder='Notes about your order, e.g. special notes for delivery'></textarea>
            </div>
        </div>
    )
}

export default InputWrapper;