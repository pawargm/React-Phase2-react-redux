import { Component } from 'react'
import { connect } from 'react-redux'
import { getAssets } from './actions/assetAction'
import { Redirect } from 'react-router';

class testCom extends Component {

    componentDidMount() {
        console.log("DIDMount gets called")
    }

    render() {
        return <div><h1>HEllo Test</h1></div>
    }
}

const mapStatetoProps = state => (
    {
        assetList: state.asset.assetList,
        isAuthenticated: state.login.isAuthenticated,
        name:state.asset.name
    }

)

export default connect(mapStatetoProps, { getAssets})(testCom);
