<template>
    <li class="todo" :class="{ completed: todo.done, editing: editing }">
        <div class="view">
            <input class="toggle"
                    type="checkbox"
                    :checked="todo.done"
                    @change="toggleTodo(todo)">
            <label v-text="todo.text" @dblclick="editing = true"></label>
            <button class="destroy" @click="removeTodo(todo)"></button>
        </div>
        <!-- <input class="edit"
                v-show="editing"
                v-focus="editing"
                :value="todo.text"
                @keyup.enter="doneEdit"
                @keyup.esc="cancelEdit"
                @blur="doneEdit"> -->
    </li>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'Todo',
        props: ['todo'],
        data(){
            return{
                editing: false,
            }
        },
        methods: {
            ...mapActions('todo',[
                'editTodo',
                'toggleTodo',
                'removeTodo'
            ]),
            doneEdit(e){

            },
            cancelEdit(e){
                
            },
        }
    }
</script>

<style scoped src="./todo.css">

</style>