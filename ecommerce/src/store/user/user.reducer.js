import USER_ACTION_TYPES from './user.types'

export const INITIAL_STATE = {
    currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state; // redux때문에, 모든 action에 반응하기 떄문에  default로 현재 상태를 리턴해야 한다.
    }
};