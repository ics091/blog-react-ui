import React from 'react'
import Glolayout from '../../components/global_layout'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
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
    return(
        <Glolayout>
            <>
            <ReactMarkdown renderers={renderers} source={this.props.json_data['content']} />
            </>
        </Glolayout>
    )
  }
}

export default Post
