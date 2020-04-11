import * as actions from '../actions/actionTypes';

const none = {id: 0, value: 'None'};

const initialState = {
    pending: false,
    categories: [none],
    category: '',
    name: '',
    password: '',
    website: '',
    error: null
}

export function categoryReducer(state = initialState, action) {
    console.log('state', state)
    switch(action.type) {
        case actions.FETCH_CATEGORIES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case actions.FETCH_CATEGORIES_FULFILLED:
            return {
                ...state,
                pending: false,
                categories: action.categories
            }
        case actions.FETCH_CATEGORIES_REJECTED:
            return {
                ...state,
                pending: false,
                categories: [none],
                error: action.error
            }
        default: 
            return state;
    }
}