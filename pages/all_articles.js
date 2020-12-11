import Glolayout from '../components/global_layout'
import '../config/config.js'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const marked = require('marked')

export default function All_Articles({ json_data }) {
    const data = []
    for (var i in json_data) {
        data.push(json_data[i])
    }

    return(
        <Glolayout>
            <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={ item.top_img } />}
                            title={<a href={ 'http://localhost:3000/articles/' + item.id }>{ item.title }</a>}
                            description={ item.detail }
                         />
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
