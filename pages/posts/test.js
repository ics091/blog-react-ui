import { FileMarkdownFilled } from '@ant-design/icons'
import Glolayout from '../../components/global_layout'
import '../../config/config.js'

const marked = require('marked')

export default function Blog({ json_data }) {
    return(
        <Glolayout>
            <>
                <h1>{json_data['title']}</h1>
                <h2>{json_data['datetime']}</h2>
                <div
                    dangerouslySetInnerHTML = {
                        {
                            __html: marked(json_data['content'])
                        }
                    }
                />
            </>
        </Glolayout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:8080/article/1')
    const json_data = await res.json()

    return {
        props: {
            json_data,
        },
    }
}
