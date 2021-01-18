import { useState, useEffect } from "react";
import { login } from './actions/LoginAction'
import { createAsset } from './actions/assetAction'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

function CreateAsset(props) {

    const [asset, setAsset] = useState({
        title: '',
        username: '',
        area: '',
        description: '',
        longitude: '',
        latitude: '',
        price: {
            value: '',
            negotiable: ''
        },
        address: {
            city: '',
            colony: '',
            road: '',
            detailaddress: ''
        }
        
    })

    const [price, setPrice] = useState ({
       
            value:'',
            negotiable:''
 
    })

    const [address, setAddress] = useState({
 
            city: '',
            road: '',
            colony: '',
            detailaddress: '',


    })


    let setValues = (e) => setAsset({ ...asset, [e.target.name]: e.target.value })
    let setP = (e) => setPrice({...price, [e.target.name]: e.target.value})
    let setAdd = (e) => setAddress({...address, [e.target.name]: e.target.value})

    //const { username, password } = user;
    //const priceV = 'Ramesh'
    //const priceN = ''
   
    //const price = asset.price

    const {title,username,area,description,latitude,longitude} = asset;

    const {value,negotiable} = price

    const {city, road,colony,detailaddress} = address

    const formSubmit = (e) => {
        e.preventDefault()
        console.log("formSubmit: Start")
    
        asset.username = props.username
        //asset.push(price)
        //asset.push(address)
        //console.log(asset)
        asset.price = price
        asset.address = address
        //Call new Action for create Asset ----------
        props.createAsset(asset)
        //props.test(user)
    }

    return !props.isAuthenticated ? (<Redirect to="/" />) : (<div className='row'>
        <div className='col-md-6'>
            <form onSubmit={formSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input type="text" className='form-control'
                        value={title} name='title'
                        onChange={setValues}></input>
                </div>
                <div className='form-group'>
                    <label>Area</label>
                    <input type="text" className='form-control'
                        value={area} name='area'
                        onChange={setValues} required></input>
                </div>
                <div className='form-group'>
                    <label>Price</label>
                    <input contenteditable="true" type="text" className='form-control'
                        value ={value} name='value' onChange={setP}></input>
                </div>
                <div className='form-group'>
                    <label>Negotiable</label>
                    <input type="text" className='form-control'
                        value={negotiable} name='negotiable' onChange={setP} required></input>
                </div>

                <div className='form-group'>
                    <label>Description</label>
                    <input type="txt" className='form-control'
                        value={description} name='description' onChange={setValues}></input>
                </div>

                <div className='form-group'>
                    <label>Address</label>
                    <label>City</label>
                    <input type="txt" className='form-control'
                        value={city} name='city' onChange={setAdd} ></input>
                    <label>Road</label>
                    <input type='txt' className='form-control'
                        value={road} name='road' onChange={setAdd} required></input>
                    <label>Colony</label>
                    <input type='txt' className='form-control'
                        value={colony} name='colony' onChange={setAdd} required></input>
                    <label>DetailAddress</label>
                    <input type='txt' className='form-control'
                        value={detailaddress} name='detailaddress' onChange={setAdd} required></input>
                </div>

                <div className='form-group'>
                    <label>Longitude</label>
                    <input type='txt' className='form-control'
                        value={longitude} name='longitude' onChange={setValues}></input>
                </div>
                <div className='form-group'>
                    <label>Latitude</label>
                    <input type='txt' className='form-control'
                        value={latitude} name='latitude' onChange={setValues}></input>
                </div>

                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    </div>
    )

}

const mapStatetoProps = state => ({
    isAuthenticated: state.login.isAuthenticated,
    username: state.login.username
})


export default connect(mapStatetoProps, { login , createAsset })(CreateAsset);
