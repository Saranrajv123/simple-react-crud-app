import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';

const products = [
    {
        name: 'iphone',
        price: 200
    },
    {
        name: 'google pixel',
        price: 150
    }
]

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
    state = {
        products: JSON.parse(localStorage.getItem('products')),
    }

    componentWillMount() {
        this.getProductHandler();

    }

    getProductHandler = () => {
        return this.state.products;
    }

    onDeleteHandler = (name) => {
        console.log(name)
        const getProduct = this.getProductHandler();

        const getFilterProduct = getProduct.filter(product => {
            return product.name !== name;
        });

        console.log(getFilterProduct)
        this.setState({ products: getFilterProduct })
    }

    onAddProductHandler = (name, price) => {
        console.log(name, price);
        const products = this.getProductHandler();

        products.push({
            name,
            price,
        });

        this.setState({ products })
    }

    onEditHandler = (name, price, originalName) => {
        let products = this.getProductHandler();

        products = products.map(product => {
            if (product.name === originalName) {
                product.name = name;
                product.price = price;
            }
            return products;
        })
        this.setState({ products })
    }

    render() {
        return (
            <div>
            <AddProduct 
                addProduct={this.onAddProductHandler}
            />
                {this.state.products.map(product => {
                    return (
                        <ProductItem 
                            key={product.name}
                            {...product}
                            onDelete={this.onDeleteHandler}
                            onEditProduct={this.onEditHandler}
                        />
                    )
                })}
            </div>
        );
    }
}

export default App;