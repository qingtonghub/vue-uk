
<template>
    <div>
        count:{{count}},{{evenOrOdd}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">incrementIfOdd</button>
        <button @click="incrementAsync">incrementAsync</button>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        computed: {
            ...mapGetters('counter',{
                evenOrOdd: 'evenOrOdd'
            }),
            count(){
                return this.$store.state.counter.count
            }
        },
        methods: {
            ...mapActions('counter',{
                increment: 'increment',
                decrement: 'decrement',
                incrementIfOdd: 'incrementIfOdd',
                incrementAsync: 'incrementAsync'
            })
        }
    }
</script>

<style scoped>

</style>