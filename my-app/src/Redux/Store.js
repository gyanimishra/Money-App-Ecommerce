

import { legacy_createStore as createStore,combineReducers,applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import { Productsreducer } from './ProductsRedux/reducer'



const rootReducers= combineReducers({
    ECommerceData:Productsreducer
})




export const store = createStore(rootReducers,applyMiddleware(thunk))