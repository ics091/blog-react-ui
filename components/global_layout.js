import { Layout } from 'antd';
import { Row, Col } from 'antd'
import Head from 'next/head'
import Link from 'next/link';
import Navi from '../components/navi'

const { Header, Footer, Sider, Content } = Layout;

export default function glo_Layout({ children }) {
    return (
        
        <Layout>
            <Head>
                <title>icskkk's blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Row>
                <Col span={5}></Col>
                <Col span={14}>
                    <Navi />
                </Col>
                <Col span={5}></Col>
            </Row>
            <Content>
            <Row>
                <Col span={5}></Col>
                <Col span={14}>
                <br />
                    { children }
                </Col>
                <Col span={5}></Col>
            </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            ICSKKK BLOG ©2020 Created by icskkk
            <br />
            <Link href="https://beian.miit.gov.cn/#/home">赣ICP备2020014661号</Link>
            </Footer>
        </Layout>
    )
}
