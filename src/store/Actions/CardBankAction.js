import axios from 'axios'

import {
    CREDIT_CARD_ADDED_SUCCESS,
    CREDIT_CARD_ADDED_FAIL,
	SET_ERRORS,
	CREDIT_CARD_LIST
} from './actionTypes';

const backendServerURL = process.env.REACT_APP_API_URL;


// addCreditCard 
export const addCreditCard = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/addCreditCard`,userData)
		.then((res) => {
            if (res && res.data && res.data.resultCode === '00') {
                dispatch({ type: CREDIT_CARD_ADDED_SUCCESS });
            }
            else{
                dispatch({type: CREDIT_CARD_ADDED_FAIL})
            }
            console.log('res on Login User', res)
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				// payload:err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally();
};

//getCreditCardList
export const getCreditCardList = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL+`/loadAllCreditCards`,userData)
		.then((res) => {
            if (res && res.data && res.data.resultCode === '00') {
                dispatch({ type: CREDIT_CARD_LIST });
            }
            console.log('res on Login User', res)
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				// payload:err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally();
};