<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price | currency }} * {{ product.inventory }}
                <button :disabled="!product.inventory"
                        @click="addProductToCart(product)">
                        Add to cart
                </button>
            </li>
        </ul>
        <Loading></Loading>
    </div>
</template>

<script>
    import { mapState,mapActions } from 'vuex'
    import currency from '../../utils/currency.js'
    export default {
        filters: {
            currency: currency
        },
        created(){
            this.$store.dispatch('products/getAllProducts')
        },
        computed: {
            ...mapState({
                products: state => state.products.all
            })
        },
        methods: {
            ...mapActions('cart',[
                'addProductToCart'
            ])
        }
    }
</script>

<style scoped>

</style>