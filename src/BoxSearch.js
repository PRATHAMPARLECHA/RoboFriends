import React from "react";

function BoxSearch({ onchangevalue }) {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type='search' placeholder='search roboto friend' onChange={onchangevalue} />
        </div>
    );
}

export default BoxSearch;