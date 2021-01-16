
import axios from 'axios'

const initialState = {
    assetList: null ,
    name:null,
    assetLstBuy:null
}


const assetReducer = (state = initialState, action) => {
    let assetListV;
    switch (action.type) {

        case "GET_ASSETS":

            console.log("GET_ASSETS: start")
            console.log(action.pload)
            return {
                ...state,
                assetList: action.pload,
                name: "Gopal Pawar"
            }

        case "DEL_ASSET":

            console.log("DEL_ASSET: Start")
            let alist = state.courseList.filter((asset) => { return asset.assetid !== action.pload.assetid })
            
            try {
               
                axios.delete('http://localhost:5001/asset/removeAsset', action.pload).then(res => {
                    console.log("DEL_ASSET: Successfully removed")
                })
            } catch (error) {  
                console.log("DEL_Asset: Error not able to remove asset with error"+ error)
                return {
                    ...state,
                    assetList: initialState.assetList
                }
            }          
            
            return {
                ...state,
                assetList: alist,
            }

        case "ADD_ASSET":
            console.log("ADD_ASSET:Start ")

            try {
               
                axios.post('http://localhost:5001/asset/createAsset', action.pload).then(res => {
                    console.log("ADD_ASSET: Successfully added")
                })
            } catch (error) {  
                console.log("ADD_Asset: Error not able to remove asset with error"+ error)
                return {
                    ...state,
                    assetList: initialState.assetList
                }
            }          
            
            return {
                ...state,
                assetList: [...state.assetList, action.pload]
            }

        case "FIL_ASSET":
            console.log("FIL_ASSET:Start ")
            try {
               
                axios.post('http://localhost:5001/asset/getAssets', action.pload).then(res => {
                    console.log("FIL_ASSET: Successfully added")
                    assetListV = res.data
                })
            } catch (error) {  
                console.log("ADD_Asset: Error not able to remove asset with error"+ error)
                return {
                    ...state,
                    assetList: initialState.assetList
                }
            }          
            
            return {
                ...state,
                assetList: assetListV,
                name: "Gopal Pawar"
            }
        case "UPDATE_ASSET":
            console.log("UPDATE_ASSET:Start ")
            try {
               
                axios.post('http://localhost:5001/asset/updateAsset', action.pload).then(res => {
                    console.log("UPDATE_ASSET: Successfully added")
                })
            } catch (error) {  
                console.log("UPDATE_Asset: Error not able to remove asset with error"+ error)
                return {
                    ...state,
                    assetList: initialState.assetList
                }
            }          
           
            try {
                axios.get('http://localhost:5001/asset/getAssets').then(res => {
                    console.log("UPDATE_ASSET: Got list")
                    assetListV = res.data
                })
            } catch (error) { console.log(error) }


            return {
                ...state,
                assetList: assetListV,
                name: "Gopal Pawar"
            }            

        case "ADD_ASSET_TO_BUYLST":
            console.log("ADD ASSET TO BUY LST:Start ")
            try {
               
                axios.post('http://localhost:5001/user/addtoBuyAssetlst', action.pload).then(res => {
                    console.log("ADD_ASSET_TO_BUY_LST: Successfully added")
                })
            } catch (error) {  
                console.log("ADD_ASSET_TO_BUY_LST:: Error not able to remove asset with error"+ error)
                return {
                    ...state,
                    assetList: initialState.assetList
                }
            }          
           
            return {
                ...state,
                assetList: initialState.assetList
            }        
        case 'GET_ASSET_TO_BUYLST':
            console.log("GET_ASSET_TO_BUYLST: start")
            console.log(action.pload)
            return {
                ...state,
                assetLstBuy: action.pload,
                name: "Gopal Pawar"
            }

        case 'REMOVE_ASSET_TO_BUYLST':
            console.log("REMOVE_ASSET_TO_BUYLST: start")
            console.log(action.pload)
            let alistp = state.assetLstBuy.filter((asset) => { 
                if(asset !== null )  {  
                    console.log("Asset that are removing")
                    console.log(asset)
                    return asset._id != action.pload.assetid
                }
                else {
                    console.log("Asset is null")
                } 
            })         
            try {
               console.log("action.pload")
               console.log(action.pload)
                axios.post('http://localhost:5001/user/removeBuyAssetlst', action.pload).then(res => {
                    console.log("REMOVE_ASSET_TO_BUYLST: Successfully removed")
                })
            } catch (error) {  
                console.log("REMOVE_ASSET_TO_BUYLST: Error not able to remove asset with error"+ error)
                return {
                    ...state,
                    assetLstBuy: initialState.assetLstBuy
                }
            }          
            console.log(alistp)
            return {
                ...state,
                assetLstBuy: alistp,
            }

        default:
            return state;
    }
}

export default assetReducer;