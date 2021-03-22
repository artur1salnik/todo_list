import React from "react";
import "./index.css";


class ListItem extends React.Component {

    render() {
        const {
            label,
            isDone,
            isImportant,
            onClickDelete,
            onClickImportant,
            onClickDone
        } = this.props
        let classNames = 'todo-item'
        let btnSuccessClassName = 'btn btn-outline-success btn-sm'
        let btnPrimaryClassName = 'btn btn-outline-primary btn-sm float-end'
        if (isDone) {
            classNames += ' done'
            btnSuccessClassName = 'btn btn-success btn-sm'
        }
        if (isImportant) {
            classNames += ' important'
            btnPrimaryClassName = 'btn btn-primary btn-sm float-end'
        }

        return (
            <div className={classNames}>
                <button onClick={onClickDone} type='button' className={btnSuccessClassName}>
                    <i class='fa fa-check-square-o' />
                </button>
                <span className='todo-item-label'>
                    {label}
                </span>
                <button onClick={onClickDelete} type='button' className='btn btn-outline-danger btn-sm float-end'>
                    <i className="fa fa-trash-o" />
                </button>
                <button onClick={onClickImportant} type='button' className={btnPrimaryClassName}>
                    <i className="fa fa-exclamation-circle" />
                </button>
            </div>
        )
    }
}

export default ListItem;