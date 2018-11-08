const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

export default {
    getProducts: cb => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(cb(_products))
            },1500)
        })
    },
    buyProducts: (products, cb, errorCb) => {
        return new Promise((resolve,reject) => {
            const flag = Math.random() > 0.5;
            setTimeout(() => {
                flag ? resolve(cb()) : reject(errorCb())
            },1000)
        })
    }
}