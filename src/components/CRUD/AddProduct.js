import React, { Component } from 'react';

class AddProduct extends Component {

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        this.props.addProduct(this.nameInput.value, this.priceInput.value);

        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
                <form onSubmit={this.onFormSubmitHandler}>
                    <label>Name: </label>
                    <input 
                        placeholder='name'  
                        ref={nameInput => this.nameInput = nameInput}
                     />
                    <label>price: </label>
                    <input 
                        placeholder='price'  
                        ref={priceInput => this.priceInput = priceInput}
                     />
                     <button>Add</button>
                </form>
        );
    }
}

export default AddProduct;