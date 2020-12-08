import { Layout } from 'antd';
import { Row, Col } from 'antd'
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
                    { children }
                </Col>
                <Col span={5}></Col>
            </Row>
            </Content>
            <Footer>
            <Row>
                <Col span={5}></Col>
                <Col span={14}>...</Col>
                <Col span={5}></Col>
            </Row>
            </Footer>
        </Layout>
    )
}
