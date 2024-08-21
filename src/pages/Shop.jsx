import "../styles/Shop.scss"
import { useContext, useState } from "react";
import { productContext } from "../components/ProductProvider";
import { Link } from "react-router-dom";
import { cartContext } from "../components/CartProvider";
export default function Shop () {
    const products = useContext(productContext);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const {setCart} = useContext(cartContext);
    // Handle category checkbox change
    const handleCategoryChange = (event) => {
        const { name, checked } = event.target;
        setSelectedCategories(prev => 
            checked ? [...prev, name] : prev.filter(category => category !== name)
        );
    };

    // Filter products based on selected categories
    const filteredProducts = products.filter(product =>
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
    );

    function addProducttoCart (item) {
        setCart(prevCart => {
            const existingProduct = prevCart.find(p => p.id === item.id);
            if (!existingProduct) {
                return [...prevCart, {...item, quantity: 1}];
            } else {
                return prevCart.map(p => p.id === item.id ? {...p, quantity: p.quantity + 1} : p)
            }
            
        })
      }
    return (
        <div className="shop-page">
            <div className="result-navbar">
                <p>Shop All</p>
                <label>Sort &nbsp;
                    <select className="sorter-select" name="SortProduct">
                        <option value="all">All Products</option>
                        <option value="price-low">PRICE: LOW TO HIGH</option>
                        <option value="price-high">PRICE: HIGH TO LOW</option>
                        <option value="alphabet">ALPHABETICAL: A TO Z</option>
                        <option value="rating">HIGHEST RATING</option>
                        
                    </select>
                </label>
            </div>
            <div className="shop-section">
                <div className="main-sidebar">
                    <div className="filter-title">Filter By</div>
                    <div className="filter-option-title">Categories</div>
                    <div className="filter-option-content">
                        <ul className="items">
                            <li className="filter-item">
                                <input type="checkbox" name="men's clothing" id="men's clothing"  onChange={handleCategoryChange}/>
                                <label htmlFor="clothes">Men&apos;s Clothing</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="electronics" id="electronics"  
                                onChange={handleCategoryChange}/>
                                <label htmlFor="electronics">Electronics</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="jewelery" id="jewelery"
                                 onChange={handleCategoryChange}/>
                                <label htmlFor="jewelery">Jewelery</label>
                            </li>
                            <li className="filter-item">
                                <input type="checkbox" name="women's clothing" id="women's clothing"
                                 onChange={handleCategoryChange}/>
                                <label htmlFor="women's clothing">Women&apos;s Clothing</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-ctn">
                    {filteredProducts.map(product => {
                    return (                     
                            <div className="product" key={product.id}>
                                    <div className="img-wrapper">
                                        <Link to = {`/productInfo/${product.id}`}>
                                        <img src={product.image}></img>
                                        </Link>
                                        <div className="product_img-layer">
                                            <i 
                                            className="fa-solid fa-cart-shopping" 
                                            onClick={() => addProducttoCart(product)}>
                                            </i>
                                        </div>
                                    </div>
                            <div className="p-description">
                                <p className="title">{product.title}</p>
                                <p className="price">${product.price}</p>
                            </div>
                            </div>

                    )
                })}
                </div>
            </div>
        </div>
    )
}