import ListItem from "../ListItem";
import "./index.css";


const List = ({ todos, onClickDelete, onClickImportant, onClickDone }) => {

    const todoElements = todos.map(todo => {
        const { id, ...todoProps } = todo

        return (
            <li className='list-group-item' key={todo.id}>
                <ListItem
                    {...todoProps}
                    onClickDelete={() => onClickDelete(id)}
                    onClickImportant={() => onClickImportant(id)}
                    onClickDone={() => onClickDone(id)} />
            </li>
        )
    })

    return (
        <ul className='list-group'>
            {todoElements}
        </ul>
    )
}

export default List;