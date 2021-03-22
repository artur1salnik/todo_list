import React from "react";
import "./index.css";


class Search extends React.Component {

    state = {
        searchValue: ''
    }

    onChangeSearch = (e) => {
        this.setState({
            searchValue: e.target.value
        })
        this.props.onChangeSearch(e.target.value)
    }

    render() {
        return (
            <input
                type='text'
                className='form-control search'
                placeholder='Search'
                value={this.state.searchValue}
                onChange={this.onChangeSearch}
            />
        )
    }

}

export default Search;