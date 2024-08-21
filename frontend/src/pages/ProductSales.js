import React, { useEffect, useState } from 'react';

const ProductSales = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Ventes par Produit</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}: {product.sales} ventes, ${product.revenue} revenus
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductSales;
