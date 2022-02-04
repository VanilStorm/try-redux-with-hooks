import {TYPES} from "../actionsType/types";

const initial = {
    count: 0
}

export const reposReducer = (state = initial, action) => {
    switch (action.type) {
        case TYPES.COUNT: {
            return {
                ...state, count: action.count
            }
        }

        default: return state
    }
}