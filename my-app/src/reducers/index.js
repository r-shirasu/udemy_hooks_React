export const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            return state
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALLEVENTS':
            return []

        default: return state
    }
}