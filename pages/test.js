import { Col, Row, Drawer, Button } from 'antd';
import React, { useState } from 'react'
import { UnorderedListOutlined } from '@ant-design/icons';

export default function Glob() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <Row>
                <Col xs={6}>1</Col>
                <Col xs={6}>2</Col>
                <Col xs={6}>3</Col>
                <Col xs={6}>4</Col>
            </Row>
            <Row>
                <Col xs={2}>
                <Button type="primary" onClick={showDrawer} shape="circle" icon={<UnorderedListOutlined />} />
                <Drawer title="Basic Drawer" placement="left" onClose={onClose} visible={visible}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                </Col>
                <Col xs={22}>1</Col>
            </Row>
            <Row>
            </Row>
        </div>
    );
} 