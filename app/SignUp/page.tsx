import Link from 'next/link';
import SignInUp from '../Components/SignInUpInput/SignInUp';
import styles from './page.module.scss';



export default () => {

        return (
            <div className={styles.container}>
                <h2>Create Account</h2>
                <div className={styles.inputs}>
                    <SignInUp text={'Email'} />
                    <SignInUp text={'Password'} icon={'openeye.svg'} />
                    <SignInUp text={'Confirm Password'} icon={'openeye.svg'} />
                    <div className={styles.check}>
                        <div className={styles.inside__check}>
                            <input type="checkbox" />
                            <label htmlFor="">Accept all terms & Conditions</label>
                        </div>
                    </div>
                    <button className={styles.btn}>Create Account</button>
                    <p className={styles.text}>Already have account? <Link className={styles.link} href={'SignIn'}>Login</Link></p>
                </div>
            </div>
        )
}