import React, { useState } from 'react';
import { Row, Col, Card, Button, Input, Select, Modal, Typography, Tag} from 'antd';
import 'antd/dist/antd.css'
const { TextArea } = Input;
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { UploadOutlined, CheckOutlined, DashOutlined } from '@ant-design/icons';
import { render } from 'react-dom';

const { Option } = Select;
const { Text, Link } = Typography;

function ConfirmPop(props) {

    let title = props.submit_content.title;
    let text = props.submit_content.text;
    let text_len = props.submit_content.text_len;
    let detail = props.submit_content.description;
    let top_img = props.submit_content.top_img;
    let tags = props.submit_content.tags;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const show_tags = []
    for (var t in tags) {
        show_tags.push(<Tag key={t} color="magenta" >{ tags[t] }</Tag>);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        let post_data = props.submit_content;
        post_data.tags = post_data.tags.toString();

        // let jsonStr = JSON.stringify(post_data);
        // console.log(jsonStr)
        postArticle(post_data);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} shape="round" icon={<CheckOutlined />}>
                完成
            </Button>
            <Modal
                title="Check before publish"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Text strong>Title: { title }</Text>
                <br />
                <Text>Total: { text_len } characters</Text>
                <br />
                <Text type="secondary">Description: { detail }</Text>
                <br />
                <Link href={ top_img } target="_black">Image url</Link>
                <br />
                <div>Tags: { show_tags }</div>
            </Modal>
        </>
    );
}

class SoSo_Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            top_img: '',
            tags: [],
            text: '## Input markdown text here...',
            text_len: 30,
        }
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value,
            text_len: e.target.value.length
        });
    }

    handleTagChange = (value) => {
        console.log(value);
        this.setState({ tags: value });
    }

    handleOtherChange = (e) => {
        const target = e.target;
        switch(target.name) {
            case 'title':
                this.setState({ title: target.value });
                break;
            case 'desc':
                this.setState({ description: target.value });
                break;
            case 'top_img':
                this.setState({ top_img: target.value });
                break;
            default: 
        }
    }

    handelSubmit = (e) => {
        console.log(this.state.tags)
    }

    render() {
        return (
            <div className="site-card-border-less-wrapper">
                <Card title="SoSo编辑器" bordered={true}>
                    <Row>
                    <Col span={12}>
                    <form>
                        <TextArea rows={25}
                                bordered={true} 
                                showCount={true} 
                                value={this.state.text} 
                                onChange={this.handleInputChange} > 
                        </TextArea>

                        <Input name="title" 
                            placeholder={'Title'} 
                            value={this.state.title}
                            onChange={this.handleOtherChange} />

                        <TextArea name="desc"
                                showCount
                                maxLength={200} 
                                placeholder={'Simple description'}
                                value={this.state.description} 
                                onChange={this.handleOtherChange}
                                style={{ padding: '16px 0' }} />

                        <Input name="top_img" 
                            placeholder="Top image url..." 
                            value={this.state.top_img}
                            onChange={this.handleOtherChange} />

                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%', padding: '16px 0' }}
                            placeholder="Please select tags"
                            value={this.state.tags}
                            onChange={this.handleTagChange}
                        >
                            {this.props._tags.map(tag=><Option key={tag.tag_name}>{tag.tag_name}</Option>)}
                        </Select>

                        <br />

                        <Button type="link">资源上传</Button>

                        {/* <Button type="primary" 
                                shape="round" 
                                icon={<CheckOutlined />}
                                onClick={this.handelSubmit}
                        >
                        完成
                        </Button> */}
                        <ConfirmPop submit_content={ this.state } />
                        
                    </form>
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

export async function postArticle(json_post) {
    console.log(JSON.stringify(json_post))
    const res = await fetch(process.env.serverIP + '/admin/addArticle', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json_post)
    })
    const post_result = await res.json()
}

class Editor extends React.Component{

    static async getInitialProps() {
        const res = await fetch(process.env.serverIP + '/option/allTags')
        const json_tags = await res.json()

        const children = []

        // for(var t in json_tags) {
        //     //console.log(json_tags[t]['tag_name'])
        //     children.push(json_tags[t]);
        // }

        // console.log(children)
    
        return {
            json_tags
        }
    }

    render() {
        return(
            <>
            <SoSo_Editor _tags={this.props.json_tags} />
            </>
        )
    }
}

export default Editor