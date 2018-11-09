<template>
    <div>
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <ProductList/>
        <hr>
        <ShoppingCart/>
        <hr>
        <app-header>
            <div slot="left">left AppHeader</div>
            <div slot="center">center AppHeader</div>
            <div slot="right">right AppHeader</div>
        </app-header>
    </div>
</template>

<script>
    import ProductList from './ProductList';
    import ShoppingCart from './ShoppingCart';
    // import AppHeader from '@/components/AppHeader';
    export default {
        components: {
            ProductList,
            ShoppingCart,
            // AppHeader
        }
    }
</script>

<style scoped>

</style>