import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Newsletter.module.scss'
import newslatter from '../../../../../public/image/newsletter.png'

const Newsletter = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <div className={styles.newsletter}>
                <div className={`${styles.container} container`}>
                    <form className={styles.container__form}>
                        <h2 className={styles.container__form__title}>
                            Subscribe Newsletter
                        </h2>
                        <input
                            className={styles.container__form__inp}
                            type="email"
                            placeholder="Enter Your Email"
                            name="EMAIL"
                            required
                        />
                        <button
                            className={styles.container__form__btn}
                            type="submit">
                            Subscribe
                        </button>
                    </form>
                    <Image
                        src={newslatter}
                        alt="Shape"
                        width={260}
                        height={205}
                    />
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Newsletter;