import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {

    const [res, setRes] = React.useState([])

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/info`)
            .then((response) => response.json())
            .then((data) => setRes(data));
    }, [])

    console.log(res);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <section>
                <div className='container'>
                    <div >
                        {
                            res?.map((e)=>(
                                e.tel
                            ))
                        }
                    </div>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
        </>
    )
}

export default Intro;