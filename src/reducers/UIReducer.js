import UIActionTypes from '../actionTypes/UIActionsType'

function UIReducer() {
    return function (state, action) {
        if (!state) {
            return {
                text: '',
                loading: false,
            }
        }

        switch(action.type) {
            case UIActionTypes.updateUI: {
                return {
                    ...state,
                    ...action.payload,
                };
            }
            default: {
                return state;
            }
        }
    }
}

export default UIReducer;
