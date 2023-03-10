import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'
import { Menu } from './headerData'

import Logo from '../../../../public/image/logo.png'
import Language from './language/Language'
import { Context } from '../../ui/Context/Context'

const Header = () => {

    const { lan } = React.useContext(Context)

    const [fil, setFil] = React.useState(Menu[0])

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
                            <Image src={Logo}
                                width={107}
                                height={50}
                                alt='logo'
                            />
                        </Link>
                        <ul className={styles.container__nav__list}>
                            {
                                Menu?.map((e) => (
                                    <Link key={e.id} href={e.link}>
                                        <li
                                            onClick={() => {
                                                setFil(e)
                                                localStorage.setItem('menu', e)
                                            }}
                                            className={`${styles.container__nav__list__item} ${fil === e ? styles.active : ''}`}>
                                            {e[`name_${lan}`]}
                                        </li>
                                    </Link>
                                ))
                            }
                            <Language />
                        </ul>
                        <button className={styles.container__nav__btn}>
                            <Link href='/contact' className={styles.container__nav__btn__a}>
                                Contact
                            </Link>
                        </button>
                    </nav>
                </div>
            </header>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Header;