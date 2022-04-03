import * as React from 'react';
import ReactDOM from 'react-dom';
import Adminlayout from '../../components/admin_layout'
import Button from '@material-ui/core/Button';

class Main extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         auth: false,
    //     }
    // }

    // async componentDidMount() {
    //     const res = await fetch(process.env.serverIP + '/admin/auth')
    //     const json_data = await res.json()
    //     const _auth = json_data['status']
    //     console.log(_auth)
    //     if (_auth == 'yes') {
    //         // 校验成功
    //         this.setState({auth: true})
    //     }
    // }

    render() {
        return(
            <Adminlayout>
            <Button variant="contained">welcome</Button>
            </Adminlayout>
        )
    }

}

export default Main