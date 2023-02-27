import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'
import { Info, Menu } from './headerData'

const Header = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <header id='header' className={styles.header}>
                <div className={`${styles.container} container`}>
                    <nav className={styles.container__nav}>
                        <Link className={styles.container__nav__img} href='/'>
                            <Image src=''
                                width={50}
                                height={50}
                                alt='logo'
                            />
                        </Link>
                        <ul className={styles.container__nav__list}>
                            {
                                Menu?.map((e) => (
                                    <Link href={e.link}>
                                        <li className={styles.container__nav__list__item}>
                                            {e.name}
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </header>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Header;