import axios from 'axios'
import { Redirect } from 'react-router'


export const getAssets = () =>
    
    async (dispatch) => {
        try {
            console.log("Actions")
            await axios.get('http://localhost:5001/asset/getAssets')
                .then(res => {
                    dispatch(
                        {
                            type: "GET_ASSETS",
                            pload: res.data
                        }
                    )
                })

        } catch (error) {
            console.log(error);
        }

    }

export const deleteAsset = (coursedata) => async (dispatch) => {
  
        
        dispatch(
            {

                type: "DEL_ASSET",
                pload: coursedata
            }
        )
    }

export const addAsset = (coursedata) => async (dispatch) => {
      
        
        dispatch(
            {

                type: "ADD_COURSE",
                pload: coursedata
            }
        )
    }

export const addtobuylstAsset = (assetdata) => async (dispatch) => {
      
        
        dispatch(
            {

                type: "ADD_ASSET_TO_BUYLST",
                pload: assetdata
            }
        )
}


export const getAssetBuyLst = (assetdata) => async (dispatch) => {
    console.log("getAssetBuyLst:Start")
    console.log(assetdata)
    var usrObj = {"username":assetdata}

    { 
        
        try {
               
        axios.post('http://localhost:5001/user/getBuyLst', usrObj).then(res => {
            console.log("GET_ASSET_TO_BUYLST: Successfully added")
            console.log(res.data)
            dispatch(
                {
                    type: "GET_ASSET_TO_BUYLST",
                    pload: res.data
                }
            )
        })
    } catch (error) {  
        console.log(error)
    }
    }
  
 }

 export const getAssetSellLst = (assetdata) => async (dispatch) => {
    console.log("getAssetSellLst:Start")
    console.log(assetdata)
    var usrObj = {"username":assetdata}

    { 
        
        try {
               
        axios.post('http://localhost:5001/user/getSellLst', usrObj).then(res => {
            console.log("GET_ASSET_TO_SELLLST: Successfully added")
            console.log(res.data)
            dispatch(
                {
                    type: "GET_ASSET_TO_SELLLST",
                    pload: res.data
                }
            )
        })
    } catch (error) {  
        console.log(error)
    }
    }
  
 }

 export const  removetobuylstAsset = (assetdata) => async (dispatch) => {
    
    console.log("removetobuylstAsset: Start")
    console.log(assetdata)
    dispatch(
        {

            type: "REMOVE_ASSET_TO_BUYLST",
            pload: assetdata
        }
    )
}

export const  removetoselllstAsset = (assetdata) => async (dispatch) => {
    
    console.log("removetoselllstAsset: Start")
    console.log(assetdata)
    dispatch(
        {

            type: "REMOVE_ASSET_TO_SELLLST",
            pload: assetdata
        }
    )
}

export const createAsset = (assetdata) => async (dispatch) => {

    dispatch(
        {
            type: "CREATE_ASSET", ///Action called all reducer and matched 
            //reducer by type like in above LOGIN_SUCCESS
            pload: assetdata
        }
    )
}