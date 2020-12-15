import React from 'react'
import Glolayout from '../components/global_layout'
import { List, Typography, Space, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Link from 'next/link'

class All_Articles extends React.Component {
    static async getInitialProps() {
        const res = await fetch(process.env.serverIP + '/article/all')
        const json_data = await res.json()
        const data = []
        var l = json_data.length
        for (var i in json_data) {
            data.push(json_data[l-i-1])
        }
        // console.log(data)
        return {
            data
        }
    }

    render() {
        return(
            <Glolayout>
                <>
                <p>页面正在编写中，建议在
                <Link href="/archive">
                    归档
                </Link>查看所有文章😊
                </p>
                <List
                    grid={{column: 1 }}
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                        <Link href={ "/posts/" + item.id }>
                        <a>
                        <List.Item>
                             <Card
                                hoverable
                                style={{ width: 280 }}
                                cover={<img src={item.top_img} />}
                             >
                             <Meta title={item.title} description={ item.detail }></Meta>
                             </Card>
                        </List.Item>
                        </a>
                        </Link>
                    )}
                 />
                </>
            </Glolayout>
        )
    }
}

export default All_Articles
