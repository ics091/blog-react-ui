import React from 'react'
import { Input, Button } from 'antd';

class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _ID: '',
            _PSWD: '',
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        switch(target.name) {
            case '_ID':
                this.setState({ _ID: target.value });
                break;
            case '_PSWD':
                this.setState({ _PSWD: target.value });
                break;
            default:
        }
    }

    onClick = async () => {
        const author_result = await postAuthor(this.state);
        console.log(author_result['code'])
    }
 
    render() {
        return(
            <div>
                <Input name="_ID" value={this.state._ID} onChange={this.handleInputChange} />
                <Input.Password
                    name="_PSWD"
                    value={this.state._PSWD}
                    placeholder="input password"
                    onChange={this.handleInputChange}
                />
                <Button type="primary" shape="round" onClick={this.onClick}>Sign in</Button>
            </div>
        )
    }
}

async function postAuthor(json_post) {
    console.log(JSON.stringify(json_post))
    const res = await fetch(process.env.serverIP + '/admin/verify', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json_post)
    })
    const result = await res.json()
    return result
}

export default Author