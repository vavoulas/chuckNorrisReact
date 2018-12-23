import React, { Component } from 'react';

class Search extends Component {
    render() {
        return ( 
            <div>
                <form className="form-group">
                    <input type="text" className="form-control" placeholder="Search....">
                    <input type="submit" className="btn btn-success" value="Search">
                </form>
            </div>    

            
        );
    }
}

export default Search;