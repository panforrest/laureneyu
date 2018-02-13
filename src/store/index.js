import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import { profileReducer, accountReducer, reviewReducer, campReducer } from '../reducers'
import { accountReducer } from '../reducers'

var store;

export default {

    configureStore: () => {
    	
    	const reducers = combineReducers({
    		// profile: profileReducer, 
    	    account: accountReducer,
            // review: reviewReducer
        }),

    	store = createStore(
    		reducers,
    		applyMiddleware()
    	)


    	return store
    },

    currentStore: () => {
    	return store
    }

}

// // export default {

// //     configureStore: () => {
    	
// //     	const reducers = combineReducers({
// //     		profile: profileReducer, 
// //     	    account: accountReducer,
// //             review: reviewReducer,
// //             camp: campReducer
// //         }),

// //     	store = createStore(
// //     		reducers,
// //     		applyMiddleware()
// //     	)


// //     	return store
// //     },

// //     currentStore: () => {
// //     	return store
// //     }

// // }

// var reducers = combineReducers({
//     // profile: profileReducer, 
//     account: accountReducer,
//     // review: reviewReducer,
//     // camp: campReducer
// })

// var store = createStore(
//     reducers,
//     applyMiddleware(thunk)
// )

// export default store