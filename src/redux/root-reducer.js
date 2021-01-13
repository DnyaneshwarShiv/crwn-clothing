import {combineReducers} from 'redux'
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import {persistReducer} from 'redux-persist';
import {storage} from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/es/storage/session';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key:'root',
    storage: sessionStorage,
    whitelist:['cart']
};
const  rootReducers = combineReducers({
    user:userReducer,
    cart: cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})
export default persistReducer(persistConfig,rootReducers);