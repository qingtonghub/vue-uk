<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo"
                    autofocus
                    autocomplete="off"
                    placeholder="What needs to be done?"
                    @keyup.enter="addTodo">
        </header>
        <section class="main" v-show="todos.length">
            <input class="toggle-all" id="toggle-all"
                    type="checkbox"
                    :checked="allChecked"
                    @change="toggleAll(!allChecked)">
            <label for="toggle-all"></label>
            <ul class="todo-list">
                <TodoItem v-for="(todo,index) in filteredTodos" :key="index" :todo="todo"/>
            </ul>
        </section>
        <section class="footer" v-show="todos.length">
            <span class="todo-count">{{ remaining }}</span>{{ remaining | pluralize('item') }} left
            <ul class="filters">
                <li v-for="(val, key) in filters" :key="key">
                    <a :href="'#/' + key" 
                        :class="{ selected: visibility === key }"
                        @click="visibility = key">{{key | capitalize}}</a>
                    
                </li>
            </ul>
            <button class="clear-completed"
                    v-show="todos.length > remaining"
                    @click="clearCompleted">
                    Clear completed
            </button>
        </section>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'
    import TodoItem from './TodoItem.vue'
    const filters = {
        all: todos => todos,
        active: todos => todos.filter(todo => !todo.done),
        completed: todos => todos.filter(todo => todo.done)
    }
    export default {
        components: { TodoItem },
        filters: {
            pluralize: (n, w) => n === 1 ? w : (w + 's'),
            capitalize: str => str.charAt(0).toUpperCase() + str.slice(1)
        },
        data(){
            return{
                visibility: 'all',
                filters: filters
            }
        },
        computed: {
            todos(){
                return this.$store.state.todo.todos
            },
            allChecked(){
                return this.todos.every(todo => todo.done)
            },
            remaining(){
                return this.todos.filter(todo => !todo.done).length
            },
            filteredTodos(){
                return filters[this.visibility](this.todos)
            }
        },
        mounted(){
            // console.log(this.$store);
        },
        methods: {
            ...mapActions('todo',[
                'toggleAll',
                'clearCompleted',
            ]),
            addTodo(e){
                const text = e.target.value;
                if(text.trim()){
                    this.$store.dispatch('todo/addTodo', text)
                }
                e.target.value = ''
            }
        }
    }
</script>

<style scoped src="./todo.css">

</style>