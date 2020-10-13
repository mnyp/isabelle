import React from "react";
import '../../../App.scss';
import './Card.scss';

function CategoryCard(props) {
    return (
        <a className={props.disabled ? "category-card mb-5 disabled" :"category-card mb-5 "} onClick={() => { props.onClick(); }}>
            <div className="category-card__content">
                <img src={props.img} />
                <span>{props.title}</span>
            </div>
        </a>
    )
}

export default CategoryCard;