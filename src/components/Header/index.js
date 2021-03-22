import "./index.css";


const Header = ({ toDo, done }) => {
    return (
        <div className='header d-flex'>
            <h1>Todo list</h1>
            <h5>{toDo} more to do, {done} done</h5>
        </div>
    )
}

export default Header;