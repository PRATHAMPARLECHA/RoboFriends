import React from "react";
import Card from "./Card";


function CardList({ filterRobotovalue } ) {
    return (
        <div>
            {filterRobotovalue.map((user,i)=>{
        return <Card key={i} name={user.name} email={user.email} id={user.id} />
    })}
        </div>
    );
}

export default CardList;