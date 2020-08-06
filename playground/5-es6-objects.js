// Object propety shorthand

const name = 'Leandro'

const userAge = 19

const user = {
    name,
    age: userAge,
    location: 'Cambuci'
}

console.log(user)

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const { label: productLabel, stock } = product

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)
