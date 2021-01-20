import { Component } from 'react'
import { connect } from 'react-redux'
import { getAssets } from './actions/assetAction'
import { getAssetSellLst } from './actions/assetAction'
import { Redirect } from 'react-router';
import AssetSellLst from './AssetSellLst'
import {removetoselllstAsset} from './actions/assetAction'


class AssetsSellLst extends Component {

    componentDidMount() {
        console.log("DIDMount gets called")
        !this.props.isAuthenticated ? <Redirect to='/login'></Redirect>:
          this.props.getAssetSellLst(this.props.username);
    }

    removetoselllstAsset = (assetObj) => {
      console.log("removetoselllstAsset:Start")
      console.log(assetObj)
      this.props.removetoselllstAsset(assetObj)
    }

    render() {

      let loading = true;
      if (this.props.assetLstSell !== null) {
        loading = false;
      }

      console.log("AssetsSellLst:Start")
      console.log(this.props.isAuthenticated)
      console.log(loading)

      return  !this.props.isAuthenticated ? <Redirect to='/login'></Redirect> : loading ? <Redirect to='/getSellAsset'></Redirect> :
      <div>
           
      <div className="jumbotron">
          {this.props.assetLstSell.map(asset => (
             
            asset ?  <AssetSellLst key={asset.assetid} assetDetails={asset}
            removetoselllstAsset={this.removetoselllstAsset} /> : <h1>Asset is not present</h1>
            // removetobuylstAsset={this.removetobuylstAsset}
          ))}
      </div>
      </div>


    }
}

const mapStatetoProps = state => (
    {
        assetLstSell:  state.asset.assetLstSell,
        isAuthenticated: state.login.isAuthenticated,
        username: state.login.username
    }

)

export default connect(mapStatetoProps, { getAssets , getAssetSellLst, removetoselllstAsset})(AssetsSellLst);
