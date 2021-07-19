
//초기 상태값 정의
const initialState = {
    userLike: []
}
//action 설정
export const likeAction = (data) => {
    return {
        type: 'LIKE',
        data: data
    }
}

//reducer 설정
const likeReducer = (state = initialState, action) => {
    const newState = state;
    switch (action.type) {
        case 'LIKE': {
            return {
                userLike: action.data.userLike
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default likeReducer