const initialState = { accessToken: '' }

function storeToken(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'SET_TOKEN':
                nextState = {
                    accessToken: action.value
                }

            return nextState || state
        default:
            return state
    }
}

export default storeToken