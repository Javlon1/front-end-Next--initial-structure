import Layout from "@/app/components/layout/Layout";
import '@/app/assets/globals.scss';

const myApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default myApp;