import React from 'react'
import Glolayout from '../components/global_layout'
import { Tag } from 'antd';
const { CheckableTag } = Tag;

class Tags extends React.Component {

    static async getInitialProps() {
        const res = await fetch(process.env.serverIP + '/option/allTags')
        const json_tags = await res.json()

        const Tags = []

        for(var t in json_tags) {
            Tags.push(json_tags[t]['tag_name'])
        }

        return {
            Tags
        }
    }

    state = {
        selectedTags: [],
    };

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }

    render() {
        const { selectedTags } = this.state;
        return (
            <Glolayout>
                <>
                <p>页面编写中，功能暂不可用😊</p>
                {this.props.Tags.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => this.handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
                </>
            </Glolayout>
        )
    }
}

export default Tags