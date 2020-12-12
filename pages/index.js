import Glolayout from '../components/global_layout'
import '../config/config.js'
import { List, Avatar, Space, Card } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import Link from 'next/link'

const marked = require('marked')

export default function All_Articles({ json_data }) {
    const data = []
    var l = json_data.length
    for (var i in json_data) {
        data.push(json_data[l-i-1])
    }

    function handleClick(e) {
      // console.log(e)
      window.location.href = "http://localhost:3000/posts/" + e
    }

    return(
        <Glolayout>
            <>
            <List
                grid={{column: 1 }}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                      <div onClick={()=>handleClick(item.id)}>
                         <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img src={item.top_img} />}
                         >
                         <Meta title={item.title} description={ item.detail }></Meta>
                         </Card>
                      </div>
                    </List.Item>
                )}
             />
            </>
        </Glolayout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:8080/article/all')
    const json_data = await res.json()

    return {
        props: {
            json_data,
        },
    }
}
