import { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAssets } from './actions/assetAction'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

class AssetSellLst extends Component {



    render() {

        //deleteCourse
        let asset = this.props.assetDetails;
        let assetObj = {
            'username': this.props.username,
            'assetid': asset._id
        }
        console.log("Asset Object _______________________________________")
        console.log(assetObj)
        //console.log(this.props.courseDetails.courseId)
        return  <table class="table table-bordered">
        <tbody>
          <tr>
            <td>
          <p>
              Area: {asset.area}, Address: {asset.address.city} {asset.address.colony} {asset.address.road} {asset.address.detailaddress}
              ,Price: {asset.price.value} {asset.price.negotiable}, Longitude {asset.longitude},Latitude {asset.latitude} 
              ,Area: {asset.area} ,Directions: {asset.maindoordirection}
          </p>
      
          </td>
          <td>
                <button type="button" class="btn btn-danger" 
                onClick={this.props.removetoselllstAsset.bind(this, assetObj)}>
                    Remove from AssetSellLst
                </button>      
            </td>
          </tr>
        </tbody>
      </table>
    }
}

AssetSellLst.propTypes={
    assetDetails: PropTypes.object.isRequired,
    
}

const mapStatetoProps = state => (
  {
     username: state.login.username
  }
)

//export default Asset;
export default connect(mapStatetoProps,{getAssets})(AssetSellLst)