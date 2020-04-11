import * as actions from './actionTypes';

export function fetchCategoriesPending() {
    return {
        type: actions.FETCH_CATEGORIES_PENDING
    }
}

export function fetchCategoriesSuccess(categories) {
    return {
        type: actions.FETCH_CATEGORIES_FULFILLED,
        categories: categories
    }
}

export function fetchCategoriesError(error) {
    return {
        type: actions.FETCH_CATEGORIES_REJECTED,
        error: error
    }
}
