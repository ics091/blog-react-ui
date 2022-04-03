import React from 'react';
import 'antd/dist/antd.css'
import { Menu } from 'antd';
import { RocketOutlined, ContainerOutlined, TagOutlined, ContactsOutlined, UserOutlined} from '@ant-design/icons';
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
            <Link href="/tags">
                <a>标签</a>
            </Link>
            </Menu.Item>
            <Menu.Item key="aboutme" icon={<ContactsOutlined />}>
            <Link href="/aboutme">
                <a>关于</a>
            </Link>
            </Menu.Item>
        </Menu>
        );
    }
}

export default withRouter(Navi);
