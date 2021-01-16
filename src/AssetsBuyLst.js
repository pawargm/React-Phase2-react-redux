import { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAssets } from './actions/assetAction'
import { getAssetBuyLst } from './actions/assetAction'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Redirect } from 'react-router';
import AssetBuyLst from './AssetBuyLst'
import {removetobuylstAsset} from './actions/assetAction'
import $ from 'jquery';
import Popper from 'popper.js';

class AssetsBuyLst extends Component {

  componentDidMount() {
    console.log("Username")
    console.log(this.props.username)
    
    
    this.props.getAssetBuyLst(this.props.username);

  }

  removetobuylstAsset = (assetObj) =>{
    console.log("removetobuylstAsset:Start ")
    console.log(assetObj)
    this.props.removetobuylstAsset(assetObj)
  }

    render() {

        //deleteCourse
        //let asset = this.props.assetDetails;
        //let assetObj = {
        //    'username': this.props.username,
        //    'assetid': asset._id
        //}
        let loading = true;
        if (this.props.assetLstBuy !== null) {
            loading = false;
        }
        console.log("AssetsBuyLst:Start")
        console.log(this.props.assetLstBuy)
        //console.log(this.props.courseDetails.courseId)
        return  !this.props.isAuthenticated ? <Redirect to='/login'></Redirect> : loading ? <h1> loading</h1> :
        <div>
           
            <div className="jumbotron">
                {this.props.assetLstBuy.map(asset => (
                   
                  asset ?  <AssetBuyLst key={asset.assetid} assetDetails={asset} 
                  removetobuylstAsset={this.removetobuylstAsset} /> : <h1>Asset is not present</h1>
                
                ))}
            </div>
        

    </div> 
    }
}



const mapStatetoProps = state => (
  {
     username: state.login.username,
     isAuthenticated: state.login.isAuthenticated,
     assetLstBuy: state.asset.assetLstBuy
  }
)

//export default Asset;
export default connect(mapStatetoProps,{getAssets, getAssetBuyLst, removetobuylstAsset})(AssetsBuyLst)