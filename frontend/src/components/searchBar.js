import React from 'react';
import PropTypes from 'prop-types'

const SearchBar = (props) => { 
    //console.log(props.onChangeCalled);
  
    return(
            
                <div className="card-body row no-gutters align-items-center">
                    <div className="col">
                        <input onKeyPress={props.onKeyPressCalled} onChange={props.onChangeCalled} value={props.query} 
                        className="form-control form-control-md" type="search" placeholder="Search for words"/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-md btn-success search" type="submit" onClick={props.onSearchClicked}>Search</button>
                    </div>
                </div>
           
 
    
    );
    }

SearchBar.propTypes = {
    onChangeCalled: PropTypes.func.isRequired,
    }
      


export default SearchBar;
