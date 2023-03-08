import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.scss'
import Logo from '../../../../../public/image/logo.png'
import { socialLink, contactUs } from './navData'
import { Menu } from '../../header/headerData'
import { Context } from '@/app/components/ui/Context/Context'

const Nav = () => {

    const { lan } = React.useContext(Context)

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <section className={styles.nav}>
                <div className={`${styles.container} container`}>
                    <div className={styles.container__item1}>
                        <Link
                            className={styles.container__item1__img}
                            href='/'>
                            <Image
                                src={Logo}
                                width={107}
                                height={50}
                                alt='logo'
                            />
                        </Link>
                        <p className={styles.container__item1__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque illum delectus iste, unde pariatur culpa at quod. Tempora est expedita blanditiis praesentium illo reiciendis odit ratione iste harum modi!
                        </p>
                        <ul className={styles.container__item1__list}>
                            {
                                socialLink?.map((e) => (
                                    <li
                                        className={styles.container__item1__list__item}
                                        key={e.id}
                                    >
                                        <Link
                                            href={e.link}
                                            target="_blank"
                                        >
                                            <i className={`bi bi-${e.icon}`}></i>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.container__item2}>
                        <h3 className={styles.container__item2__title}>
                            Quick Links
                        </h3>
                        <ul className={styles.container__item2__list}>
                            {
                                Menu?.map((e) => (
                                    <li>
                                        <Link key={e.id} href={e.link}>
                                            <i className="bi bi-chevron-right"></i>
                                            {e[`name_${lan}`]}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.container__item3}>
                        <h3 className={styles.container__item3__title}>
                            Contact Us
                        </h3>
                        <ul className={styles.container__item3__list}>
                            {
                                contactUs?.map((e) => (
                                    <li key={e.id}>
                                        <Link
                                            href={e.tel ? `tel:${e.tel}` : e.email ? `mailto:${e.email}` : e.link}
                                            target="_blank"
                                        >
                                            <i className={`bi bi-${e.icon}-fill`}></i>
                                            {e.text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Nav;