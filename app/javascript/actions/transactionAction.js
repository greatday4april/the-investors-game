export const {RECEIVE_TRANSACTION} = "RECEIVE_TRANSACTION";


export const receiveTransaction = transaction => ({
    typy: RECEIVE_TRANSACTION,
    transaction
})

