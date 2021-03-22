import React from "react";
import "./index.css";


class Filter extends React.Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]

    render() {
        const buttons = this.buttons.map(btn => {
            const isActive = this.props.filter === btn.name
            const buttonClass = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key={btn.name}
                    type='button'
                    className={`btn ${buttonClass}`}
                    onClick={() => this.props.onChangeFilter(btn.name)}>
                    {btn.label}
                </button>
            )
        })
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}

export default Filter;