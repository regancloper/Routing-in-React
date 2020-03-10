import React from 'react';
import Item from './Item'

const Collection = (props) => {
    let collection = props.films.map((item) => {
        return (
            <Item key={item.id} item={item} />
        );
    });

    return (
        <div className="card-group">{collection}</div>
    );
};



export default Collection;