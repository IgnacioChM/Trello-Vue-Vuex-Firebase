export default {
    //Aplicamos currying, que nos permite hacerlo de forma anidada
    getListsByBoard: (state) => (boardId) => {
        return Object.values(state.lists)
            .filter(list => list.board === boardId)
    },

    getTasksFromList: (state) => (listId) => {
        return Object.values(state.tasks)
            .filter(task => task.list === listId)
    }
}