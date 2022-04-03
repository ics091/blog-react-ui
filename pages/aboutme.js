import React from 'react'
import Glolayout from '../components/global_layout'
import { GithubOutlined, WeiboCircleOutlined, MailOutlined, QqOutlined, ZhihuOutlined, InstagramOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Avatar, Timeline } from 'antd';

class Aboutme extends React.Component{

  render() {
    return(
        <Glolayout>
            <>
            <div style={{ textAlign: 'center' }}>
            <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={"https://resources.icskkk.com/site_logo.png"}
            />
            <br />
            👇
            <br />
            <GithubOutlined /> <Link href="https://github.com/ics091">ics091</Link>
            <br />
            <MailOutlined /> <Link href="">icsrighttrack@outlook.com</Link>
            <br />
            <WeiboCircleOutlined /> <Link href="https://weibo.com/u/3826647136">icskkk</Link>
            <ZhihuOutlined /> <Link href="https://www.zhihu.com/people/xie-jian-72">icskkk</Link>
            <InstagramOutlined /><Link href="https://www.instagram.com/icsrt1996/">icsrt1996</Link>
            <br />
            <QqOutlined /> <Link href="">837356957</Link>
            </div>
            <br />
            <h3>教育经历</h3>
            <Timeline>
              <Timeline.Item color="blue">北京邮电大学 软件工程 2019-09～NOW</Timeline.Item>
              <Timeline.Item color="green">江西师范大学 信息管理与信息系统 2014-09～2018-07</Timeline.Item>
            </Timeline>
            </>
        </Glolayout>
    )
  }
}

export default Aboutme
