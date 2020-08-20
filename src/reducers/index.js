const Lists = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_List':
            const List = { title: action.title, price: action.price }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, { id, ...List }]
            // if (lenght === 0) {
            //     id =1
            // } else {
            //     id = state[length - 1]. id + 1
            // }
        case 'DELTE_List':
            return state.filter(List => List.id !== action.id)
        case 'DELETE_ALL_Lists':
            return []
        default:
            return state
    }
}

export default Lists