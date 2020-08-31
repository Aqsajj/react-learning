export const INCREMENT = 'INCREMENT';

onDecrementCounter: () => {
    dispatch({ type: 'DECREMENT' })
},
    onAddCounter: () => {
        dispatch({ type: 'ADD', val: 10 })
    },
        onSubtractCounter: () => {
            dispatch({ type: 'SUBTRACT', val: 15 })
        },
            onStoreResult: () => {
                dispatch({ type: 'STORE_RESULT' })
            },
                onDeleteResult: (id) => {
                    dispatch({ type: 'DELETE_RESULT', elemId: id })
                }