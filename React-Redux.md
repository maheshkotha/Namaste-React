
# Redux in not Mandatary to use in React app

# Redux-Toolkit
- dispatch
- action
- reducer
- selector
- subscribing

- Click Add button --> dispatch (action) ---> call Reducers --> update slice

- Component <--- Subscribing to the store <--- Selector <--- Slice

# Implementation

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our App
- Create Slice
- dispatch(action)
- Selector

# Build Store
 import { configureStore } from '@reduxjs/toolkit'
 const appStore = configureStore({})

 export default appStore


# Connect our Store to Our App
    import { Provider } from 'react-redux'
    import appStore from 'utils/appStore.js'

    const App = () => {
        return <Provider store={appStore}>
        
        </Provider>
    }



# Create A Slice
    import {createSlice} from 'reduxjs/toolkit'

    const cardSlice = createSlice({
        name: 'cart',
        initialState: {
            items: []
        },
        reducers: {
            addItem: (state, action) => {
                state.items.push(action.payload)
            },
            removeItem: (state, action) => {
                state.items.pop()
            },
            clearCart: (state, action) => {
                state.items.length = 0;
            }
        }
    })