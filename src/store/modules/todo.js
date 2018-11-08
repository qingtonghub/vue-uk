
const STORAGE_KEY = 'todos-vuejs'
export default{
    namespaced: true,
    state: {
        todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    actions: {
        addTodo: ({ commit }, text) => {
            commit('addTodo',{
                text,
                done: false
            })
        },
        toggleTodo: ({ commit }, todo) => {
            commit('editTodo',{
                todo,
                done: !todo.done
            })
        },
        removeTodo: ({ commit },todo) => {
            commit('removeTodo',todo)
        },
        toggleAll: ({ state, commit }, done) => {

        },
        clearCompleted: ({ state, commit }) => {
            state.todos.filter(todo => todo.done).forEach(todo => commit('removeTodo',{ todo }))
        }
    },
    mutations: {
        addTodo: (state,todo) => state.todos.push(todo),
        editTodo: (state,{todo, text = todo.text, done = todo.done}) => {
            todo.text = text;
            todo.done = done
        },
        removeTodo: (state,todo) => {
            state.todos.splice(state.todos.indexOf(todo),1)
        }
    },
}