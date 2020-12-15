import React from 'react'
import Glolayout from '../components/global_layout'
import { List, Avatar, Space } from 'antd';
import Link from 'next/link';

class Archive extends React.Component{

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
            <List
                itemLayout="horizontal"
                dataSource={this.props.data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={ item.top_img } />}
                            //title={<a href={ process.env.thisIP + '/posts/' + item.id }>{ item.title }</a>}
                            title={ <Link href={ "/posts/" + item.id }>{item.title}</Link> }
                            description={ item.detail }
                        />
                    </List.Item>
                )}
            />
            </>
        </Glolayout>
    )
  }
}

export default Archive
