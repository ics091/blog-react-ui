import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import 'antd/dist/antd.css'
import { Input } from 'antd';
const { TextArea } = Input;
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Glolayout from '../../components/global_layout'
import { UploadOutlined, CheckOutlined } from '@ant-design/icons';

class SoSo_Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '## Input markdown text here...',
        }
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <div className="site-card-border-less-wrapper">
                <Card title="SoSo编辑器" bordered={true}>
                    <Row>
                    <Col span={12}>
                    <TextArea rows={30} bordered={true} showCount={true} value={this.state.text} onChange={this.handleInputChange}></TextArea>
                    <Button type="primary" shape="round" icon={<CheckOutlined />}>完成</Button>
                    </Col>
                    <Col span={12}>
                    <div style={{ padding: '0 16px' }}>
                    <ReactMarkdown plugins={[gfm]} children={ this.state.text } />
                    </div>
                    </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default function Editor() {
    return(
        <>
        <SoSo_Editor />
        </>
    )
}
