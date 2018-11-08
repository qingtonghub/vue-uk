
import Vuex from 'vuex';
import Vue from 'vue';
import modules from './modules';
Vue.use(Vuex);

export default new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV !== 'production'
})



/**todo */
// import Vuex from 'vuex';
// import Vue from 'vue';

// Vue.use(Vuex);
// const STORAGE_KEY = 'todos-vuejs'
// export default new Vuex.Store({
//     state: {
//         todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
//     },
//     actions: {
//         addTodo: ({ commit }, text) => {
//             commit('addTodo',{
//                 text,
//                 done: false
//             })
//         },
//         toggleTodo: ({ commit }, todo) => {
//             commit('editTodo',{
//                 todo,
//                 done: !todo.done
//             })
//         },
//         removeTodo: ({ commit },todo) => {
//             commit('removeTodo',todo)
//         },
//         toggleAll: ({ state, commit }, done) => {

//         },
//         clearCompleted: ({ state, commit }) => {
//             state.todos.filter(todo => todo.done).forEach(todo => commit('removeTodo',{ todo }))
//         }
//     },
//     mutations: {
//         addTodo: (state,todo) => state.todos.push(todo),
//         editTodo: (state,{todo, text = todo.text, done = todo.done}) => {
//             todo.text = text;
//             todo.done = done
//         },
//         removeTodo: (state,todo) => {
//             state.todos.splice(state.todos.indexOf(todo),1)
//         }
//     },

// })





















/**counter */
// import Vuex from 'vuex';
// import Vue from 'vue';

// Vue.use(Vuex);
// const state = {
//     count: 0
// }
// const mutations = {
//     increment: state => state.count++,
//     decrement: state => state.count--,
// }
  
// const actions = {
//     increment: ({ commit }) => commit('increment'),
//     decrement: ({ commit }) => commit('decrement'),
//     incrementIfOdd: ({ commit,state  }) => {
//         if(state.count % 2 === 0){
//             commit('increment')
//         }
//     },
//     incrementAsync: ({ commit }) => {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve(commit('increment'))
//             },1000)
//         })
//     }
// }
  
// const getters = {
//     evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
// }
// export default new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations
// })
  
