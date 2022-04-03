import * as React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import {
  ContainerOutlined,
  UserDeleteOutlined,
  BuildOutlined,
  QqOutlined,
  EditOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          auth: false,
      }
  }

  async componentDidMount() {
      const res = await fetch(process.env.serverIP + '/admin/auth')
      const json_data = await res.json()
      const _auth = json_data['status']
      console.log(_auth)
      if (_auth == 'yes') {
          // 校验成功
          this.setState({auth: true})
      }
  }

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // 退出登录
  handleQuit = () => {
    console.log(document.cookie)
    cookieStore.delete('nana7mi')
    document.location.reload()
  }

  render() {
    const { collapsed } = this.state;
    // const { isAuth } = this.state.auth;
    if (this.state.auth) {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
              <Menu.Item key="0" icon={<QqOutlined />}>
                <Link href="/admin/main">
                    <a>icskkk</a>
                </Link>
              </Menu.Item>
              <SubMenu key="sub0" icon={<EditOutlined />} title="新建">
                <Menu.Item key="1">
                <Link href="/admin/soeditor">
                    <a>编辑器</a>
                </Link>
                </Menu.Item>
                <Menu.Item key="2">上传</Menu.Item>
              </SubMenu>
              <SubMenu key="sub1" icon={<ContainerOutlined />} title="管理">
                <Menu.Item key="3">全部</Menu.Item>
                <Menu.Item key="4">已发布</Menu.Item>
                <Menu.Item key="5">草稿</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<BuildOutlined />} title="关于">
                <Menu.Item key="6">个人信息</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<UserDeleteOutlined />} onClick={this.handleQuit}>
                退出
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
          {/* <Header className="site-layout-backgroun d" style={{ padding: 0 }} /> */}
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  { this.props.children }
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      )
    } else {
      return(
        <>
        <Link href="http://127.0.0.1/api/user/qq_login">You should login in...</Link>
        </>
      )
    }
  }
}

export default SiderDemo