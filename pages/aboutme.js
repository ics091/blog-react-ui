import React from 'react'
import Glolayout from '../components/global_layout'
import { GithubOutlined, WeiboCircleOutlined, MailOutlined, QqOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Avatar } from 'antd';

class Aboutme extends React.Component{

  render() {
    return(
        <Glolayout>
            <>
            <div style={{ textAlign: 'center' }}>
            <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={"https://wx1.sinaimg.cn/mw1024/e4160060ly1gkulfi8d35j20hs0hsha9.jpg"}
            />
            <br />
            如果可以，我想做一只懒狗
            <br />
            ⬇️
            <br />
            <GithubOutlined /> <Link href="https://github.com/ics091">ics091</Link>
            <br />
            <MailOutlined /> <Link href="">icsrighttrack@outlook.com</Link>
            <br />
            <WeiboCircleOutlined /> <Link href="https://weibo.com/u/3826647136">国足主帅穆里尼奥</Link>
            <br />
            <QqOutlined /><Link href="">837356957</Link>
            </div>
            </>
        </Glolayout>
    )
  }
}

export default Aboutme
