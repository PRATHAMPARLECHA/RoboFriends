import React from "react";

function Card(Roboto) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${Roboto.id}?200x200`} alt='robot' />
            <div>
                <h2>{Roboto.name}</h2>
                <p>{Roboto.email}</p>
            </div>
        </div>
    );
}

export default Card;