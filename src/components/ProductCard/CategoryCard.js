import React, { Component } from "react";
import classNames from "classnames"
import css from "./ProductCard.module.css";
import { Link } from "react-router-dom";

class CategoryCard extends Component {
    render() {

        const {className, product} = this.props;
        return (
            <div className={classNames(css.ProductCard, className)}>
                <div className={css.ProductCard_header}>
                    <img src= {product.image} alt="Product"/>
                </div>
                <div className={css.ProductCard_body}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
                <Link to={product.route} className={css.ProductCard_button}>
                    <button>Ir a la Pagina</button>
                </Link>
            </div>
        )
    }

}

export default CategoryCard;