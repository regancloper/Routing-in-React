import React from 'react';
import '../App.css'


const Item = (props) => {

    return (
        <div className="col-md-4 py-2">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{props.item.title}</h5>
                    <p className="card-text line-clamp">{props.item.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Release Date: {props.item.release_date}</small>
                </div>
            </div>
        </div>

    );

}


export default Item;