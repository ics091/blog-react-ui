import { Layout } from 'antd';
import Head from 'next/head'
import Navi from '../components/navi'

const { Header, Footer, Sider, Content } = Layout;

export default function glo_Layout({ children }) {
    return (
        
        <Layout>
            <Head>
                <title>icskkk's blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navi />
            <Content>
                { children }
            </Content>
            <Footer>
                Footer
            </Footer>
        </Layout>
    )
}
