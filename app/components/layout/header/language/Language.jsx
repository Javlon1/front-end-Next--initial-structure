import * as React from 'react'
import Head from 'next/head'
import styles from './Language.module.scss'
import { Lang } from './languageData';
import { Context } from '../../../ui/Context/Context'

const Language = () => {

    const { lan, setLan } = React.useContext(Context)

    
    const handleChange = (event) => {
        window.localStorage.getItem('lan') ? window.localStorage.getItem('lan') : 'uz'
        setLan(event.target.value);
    };

    React.useEffect(() => {
        window.localStorage.setItem('lan', lan)
    }, [lan])

    console.log(lan);
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <select className={styles.select} defaultValue={lan} onChange={handleChange} name="" id="">
                {
                    Lang?.map((e) => (
                        <option key={e.id} value={e.lang}>{e.lang}</option>
                    ))
                }
            </select>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Language;