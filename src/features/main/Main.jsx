import React from 'react'
import ProductCard from './ProductCard'

const Main = ({ products }) => {
    const productCards = products.map((product) => (
        <div key={product.id}>
            <ProductCard {...product} />
        </div>
    ));
    return (
        <main>
            <section id="products">
                <div className="banner">
                    <h2>Shop in style</h2>
                    <p>With this shop homepage template</p>
                </div>

                <div className="products">
                    {productCards}
                </div>
            </section>
        </main>
    )
}

export default Main
