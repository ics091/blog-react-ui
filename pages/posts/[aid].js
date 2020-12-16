import React from 'react'
import Glolayout from '../../components/global_layout'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { Tag } from 'antd';
import { TagOutlined } from '@ant-design/icons';

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter language={language} children={value} />
  }
}

class Post extends React.Component{

  static async getInitialProps(context) {
    let url = context.query.aid
    if (Array.isArray(url)) {
      url = url[0];
    }
    const res = await fetch(process.env.serverIP + '/article/' + url)
    const json_data = await res.json()
  
    return {
        json_data
    }
  }

  render() {
    const tags = this.props.json_data['tags'].split(",")
    const show_tags = []
    const tag_colors = ["purple", "green", "cyan", "blue", "geekblue"]
    for (var t in tags) {
      show_tags.push(<Tag key={t} color={tag_colors[t]} >{tags[t]}</Tag>);
    }
    return(
        <Glolayout>
            <>
            { show_tags }
            <ReactMarkdown renderers={renderers} source={this.props.json_data['content']} />
            <br />
            <p>发布于{this.props.json_data['datetime']}</p>
            </>
        </Glolayout>
    )
  }
}

export default Post
