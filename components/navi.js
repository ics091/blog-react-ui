import React from 'react';
import 'antd/dist/antd.css'
import { Menu } from 'antd';
import { RocketOutlined, ContainerOutlined, TagOutlined, ContactsOutlined} from '@ant-design/icons';
import Link from 'next/link'
import { withRouter } from 'next/router'

const { SubMenu } = Menu;

class Navi extends React.Component {

    // componentDidMount() {
    //     console.log(this.props.router)
    // }
    
    state = {
        current: this.props.router.pathname.slice(1) == ''?'home':this.props.router.pathname.slice(1),
    };

    handleClick = e => {
        // console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home" icon={<RocketOutlined />}>
                <Link href="/">
                    <a>首页</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="archive" icon={<ContainerOutlined />}>
            <Link href="/archive">
                <a>归档</a>
            </Link>
            </Menu.Item>
            <Menu.Item key="tags" icon={<TagOutlined />}>
            标签
            </Menu.Item>
            <Menu.Item key="about" icon={<ContactsOutlined />}>
            <a href="https://github.com/ics091" target="_blank" rel="noopener noreferrer">
                关于
            </a>
            </Menu.Item>
        </Menu>
        );
    }
}

export default withRouter(Navi);
