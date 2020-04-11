import {
    fetchCategoriesPending, 
    fetchCategoriesSuccess, 
    fetchCategoriesError
} from '../../actions/categoryActions';

import axios from 'axios';

const fetchCategories = (url) => {
    return dispatch => {
        dispatch(fetchCategoriesPending())
        axios.get(url)
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            let response = res.data.map(category => {
                return ({ id: category.id, value: category.name })
            });
            dispatch(fetchCategoriesSuccess(response));
            return response;
        })
        .catch(error => {
            dispatch(fetchCategoriesError(error));
        })
    }
}

export default fetchCategories;