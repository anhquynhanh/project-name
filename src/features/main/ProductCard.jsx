import React from 'react'

const ProductCard = ({ name, variants, isSale, reviews, originPrice, salePrice }) => {
    const priceToDisplay = variants.length >= 2 ? (variants[1].originPrice) : (variants[0].originPrice);
    const priceToDisplay2 = variants.length >= 2 ? (variants[1].salePrice) : (variants[0].salePrice);

    let priceComponent;

    if (name === 'Special Item' || name === 'Sale Item') {
        priceComponent = <p><span className="p-thr">{priceToDisplay}</span> {priceToDisplay2}</p>;
    } else if (name === 'Fancy Product') {
        priceComponent = <p>{priceToDisplay2} - {priceToDisplay}</p>;
    } else if (name === 'Popular Item') {
        priceComponent = <p>{priceToDisplay}</p>;
    } else {
        priceComponent = <p>{priceToDisplay}</p>;
    }
    return (
        <div className="product">
            <div className="img-product">
                <p>450 x 300</p>
                {isSale && (
                    <div className='saleDiv'>Sale</div>
                )}
            </div>

            <h3>{name}</h3>

            <div className="price">
                {priceComponent}
            </div>

            <div className="stars">
                <i className="fa-solid fa-star" style={{ color: "#FFC107" }} />
                <i className="fa-solid fa-star" style={{ color: "#FFC107" }} />
                <i className="fa-solid fa-star" style={{ color: "#FFC107" }} />
                <i className="fa-solid fa-star" style={{ color: "#FFC107" }} />
                <i className="fa-solid fa-star" style={{ color: "#FFC107" }} />
            </div>

            {name === 'Fancy Product' ? (
                <button type="button" className="btn btn-primary">
                    View options
                </button>
            ) : (
                <button type="button" className="btn btn-primary">
                    Add to cart
                </button>
            )}
        </div>
    )
}

export default ProductCard
