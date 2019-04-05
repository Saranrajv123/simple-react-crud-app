import React, { Component } from 'react';

class ProductItem extends Component {

    state = {
        isEdit: false,
    }

    onDeleteHandler = () => {
        this.props.onDelete(this.props.name)
    }

    onEditHandler = () => {
        this.setState({ isEdit: true })
    }

    onEditableFormHandler = (event) => {
        event.preventDefault();
        this.props.onEditProduct(this.nameInput.value, this.priceInput.value, this.props.name)
        this.setState({ isEdit: false })
    }
    render() {
        const { name, price } = this.props;
        return (
            <div>
                {
                    this.state.isEdit ? (
                        <div>
                            <form onSubmit={this.onEditableFormHandler}>
                                <input placeholder='Name'  
                                    ref={nameInput => this.nameInput = nameInput}
                                    defaultValue={name}

                                />
                                <input placeholder='price'  
                                    ref={priceInput => this.priceInput = priceInput}
                                    defaultValue={price}

                                />
                                <button>Save</button>
                            </form>

                        </div>
                    ) :
                        (
                            <div>
                                <div>{name}</div>
                                <div>{price}</div>
                                {`|`}
                                <button onClick={this.onEditHandler}>Edit</button>
                                {`|`}
                                <button onClick={this.onDeleteHandler}>Delete</button>
                            </div>
                        )
                }

            </div>
        );
    }
}

export default ProductItem;