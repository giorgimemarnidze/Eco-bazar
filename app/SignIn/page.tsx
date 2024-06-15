import Link from 'next/link';
import SignInUp from '../Components/SignInUpInput/SignInUp';
import styles from './page.module.scss';



const SignIn = () => {

    return (
        <div className={styles.container}>
            <h2>Sign In</h2>
            <div className={styles.inputs}>
                <SignInUp text={'Email'} />
                <SignInUp text={'Password'} icon={'openeye.svg'} />
                <div className={styles.check}>
                    <div className={styles.inside__check}>
                        <input type="checkbox" />
                        <label htmlFor="">Remember me</label>
                    </div>

                    <span>Forget Password</span>
                </div>
                <Link href={'Page2'} className={styles.link}><button className={styles.btn}>Login</button></Link>
                <p className={styles.text}>Don’t have account? <Link className={styles.link2} href={'SignUp'}>Register</Link></p>
            </div>
        </div>
    )
}


export default SignIn;