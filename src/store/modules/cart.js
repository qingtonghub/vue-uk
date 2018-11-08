
import shop from '../../api/shop'

export default {
    namespaced: true,
    state: {
        items: [],
        checkoutStatus: null
    },
    getters: {
        cartProducts: (state, getters, rootState) => {
            return state.items.map(({ id, quantity }) => {
                const product = rootState.products.all.find(product => product.id === id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity
                }
            })
        },
        cartTotalPrice: (state, getters) => {
            return getters.cartProducts.reduce((total,product) => {
                return total + product.price * product.quantity
            },0)
        }
    },
    actions: {
        addProductToCart: ({ state, commit }, product) => {
            commit('setCheckoutStatus',null)
            if(product.inventory > 0){
                const cartItem = state.items.find(item => item.id === product.id)
                if(!cartItem){
                    commit('pushProductToCart', { id: product.id } )
                }else{
                    commit('incrementItemQuantity', cartItem)
                }
                commit('products/decrementProductInventory', { id: product.id }, { root: true })
            }
        },
        checkout: ({ commit, state }, products) => {
            const savedCartItems = [...state.items]
            commit('setCheckoutStatus', null)
            commit('setCartItems', { items: [] })
            shop.buyProducts(products,
                () => commit('setCheckoutStatus', 'successful'),
                () => {
                  commit('setCheckoutStatus', 'failed')
                  // rollback to the cart saved before sending the request
                  commit('setCartItems', { items: savedCartItems })
                })
        }
    },
    mutations: {
        setCheckoutStatus: (state, status) => {
            state.checkoutStatus = status
        },
        pushProductToCart: (state, { id }) => {
            state.items.push({
                id,
                quantity: 1
            })
        },
        incrementItemQuantity: (state,{ id }) => {
            const cartItem = state.items.find(item => item.id === id)
            cartItem.quantity++
        }
    },
}