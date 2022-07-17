import React, { useState } from 'react';
import './search.css'
const Search = () => {
   
    return (
        <div className="container">
           <div class="input-group mx-auto">
            <input type="text" class="form-control" placeholder="i am looking for...." aria-label="Recipient's username with two button addons"/>
            <button class="btn s-btn" type="button">Search</button>
            </div>
        </div>
    );
};

export default Search;