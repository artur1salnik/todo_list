import React from "react";
import "./index.css";


class ItemAddForm extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        if (this.state.label.length) {
            this.props.onClickAdd(this.state.label)
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form className='item-add-form d-flex' onSubmit={this.onSubmitForm}>
                <input
                    type='text'
                    className='form-control'
                    placeholder='What do you need to do?'
                    value={this.state.label}
                    onChange={this.onLabelChange}
                />
                <button className='btn btn-outline-secondary add-todo'>Add todo</button>
            </form>
        )
    }
}

export default ItemAddForm;