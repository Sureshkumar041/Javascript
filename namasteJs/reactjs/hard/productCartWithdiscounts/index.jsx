import React, { useState } from 'react';
import "./styles.css";

const ProductCart = ({ initialProducts }) => {
    // const [cart, setCart] = useState(
    //   initialProducts.map((p) => ({ ...p, qty: 1 }))
    // );
    const [cart, setCart] = useState(
        initialProducts.map((p) => ({ ...p, qty: 1 }))
    ), [appliedCoupon, setAppliedCoupon] = useState(""), [isCouponApplied, setIsCouponApplied] = useState(false);
    const initialValue = {
        name: "",
        price: "",
        qty: 1,
        description: ""
    }, couponCode = "GRAB50";
    const [newProd, setNewProd] = useState(initialValue);

    const handleNewProdChange = (k, v) => {
        setNewProd({
            ...newProd,
            [k]: v
        })
    }

    const handleAddProd = () => {
        const isValid = Object.keys(newProd).some((k, i) => !newProd[k])

        if (isValid) {
            alert("Please enter valid product name and price.")
            return
        }

        setCart([
            ...cart,
            newProd
        ])

        setNewProd(
            initialValue
        )
    }

    // TODO: Implement functionality to update quantity
    const updateQty = (id, delta) => {
        // Your code here
        const updatedItems = [...cart];
        updatedItems[id] = {
            ...delta
        }
        setCart(updatedItems)
    };

    // TODO: Implement functionality to remove products
    const removeProduct = (id) => {
        // Your code here
        const updatedItems = [...cart];
        updatedItems.splice(id, 1)
        setCart(updatedItems)
    };

    // TODO: Implement coupon functionality
    const applyCoupon = () => {
        // Your code here - use GRAB50 for 50% discount
        if (appliedCoupon !== couponCode) {
            alert("Invalid coupon code. Use GRAB50 for 50% discount.")
            setIsCouponApplied(false)
            return;
        }

        setIsCouponApplied(true)
    };

    return (
        <div className="cart-container">
            <h2 data-testid="cart-heading" className="cart-heading">
                🛒 Shopping Cart
            </h2>

            <div className="add-product-section">
                <h3 className="add-product-title">Add new product</h3>

                <div className="add-product-grid">
                    <div className="field">
                        <label className="form-label">Product Name:</label>
                        <input
                            className="input-field"
                            name="name"
                            value={newProd.name}
                            data-testid="new-product-name"
                            onChange={(e) => handleNewProdChange("name", e.target.value)}
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="field">
                        <label className="form-label">Price (₹):</label>
                        <input
                            className="input-field"
                            name="price"
                            type="number"
                            data-testid="new-product-price"
                            value={newProd.price}
                            onChange={(e) => handleNewProdChange("price", Number(e.target.value))}
                            placeholder="Enter price"
                        />
                    </div>
                    <div className="field">
                        <label className="form-label">Quantity</label>
                        <input
                            className="input-field"
                            type="number"
                            name="qty"
                            data-testid="new-product-qty"
                            value={newProd.qty}
                            onChange={(e) => handleNewProdChange("qty", e.target.value)}
                            placeholder="Enter quantity"
                        />
                    </div>
                    <div className="field">
                        <label className="form-label">Description</label>
                        <input
                            className="input-field"
                            name="description"
                            data-testid="new-product-description"
                            value={newProd.description}
                            onChange={(e) => handleNewProdChange("description", e.target.value)}
                            placeholder="Enter product description"
                        />
                    </div>
                    <button data-testid="add-product-button" className="btn add-btn" onClick={() => handleAddProd()}>Add Product</button>
                </div>

            </div>

            <div data-testid="cart-product-list">
                {cart.map((item, i) => (
                    <div key={item.id} className="product-card">
                        <div className="product-info">
                            <h4 data-testid="product-name" className="product-name">
                                {item.name}
                            </h4>
                            <p className="product-description">{item.description}</p>
                            <p data-testid="product-price" className="product-price">
                                Price: ₹{item.price}
                            </p>

                            <div className="qty-section">
                                <span>Quantity:</span>
                                {/* TODO: Add functionality to decrease quantity */}
                                <button className="btn dec-btn"
                                    onClick={() => item.qty !== 1 &&
                                        updateQty(i, {
                                            ...item,
                                            qty: Number(item.qty) - 1
                                        })
                                    }>-</button>
                                <input
                                    data-testid="product-qty"
                                    type="number"
                                    value={item.qty}
                                    readOnly
                                    className="qty-input"
                                />
                                {/* TODO: Add functionality to increase quantity */}
                                <button className="btn inc-btn" onClick={() =>
                                    updateQty(i, {
                                        ...item,
                                        qty: Number(item.qty) + 1
                                    })
                                }>+</button>

                            </div>


                            <p
                                data-testid="product-discounted-price-label"
                                className="product-subtotal"
                            >
                                Subtotal: ₹{(item.price * item.qty).toFixed(2)}
                            </p>
                        </div>

                        {/* TODO: Add functionality to remove product */}
                        <button data-testid="remove-product-button" className="btn remove-btn" onClick={() => removeProduct(i)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="summary-section">
                <div className="coupon-section">
                    <label className="form-label">Coupon Code:</label>
                    <div className="coupon-input-row">
                        {/* TODO: Add state management for coupon input */}
                        <input
                            data-testid="coupon-code-input"
                            type="text"
                            placeholder="Enter GRAB50 for 50% off"
                            className="input-field"
                            value={appliedCoupon}
                            onChange={(e) => setAppliedCoupon(e.target.value)}
                        />
                        {/* TODO: Add functionality to apply coupon */}
                        <button
                            data-testid="apply-coupon-button"
                            className="btn apply-btn"
                            onClick={() => applyCoupon()}
                        >
                            Apply
                        </button>
                    </div>
                    {isCouponApplied && <p data-testid="apply-coupon-message" className="coupon-success">GRAB50 coupon applied successfully!</p>}
                </div>

                <div className="total-section">
                    <div className="total-row">
                        <span>Subtotal:</span>
                        {/* TODO: Calculate dynamic subtotal */}
                        <span>
                            ₹
                            {cart
                                .reduce((sum, item) => sum + item.price * item.qty, 0)
                                .toFixed(2)}
                        </span>
                    </div>

                    {/* TODO: Show discount when coupon is applied */}

                    {isCouponApplied && <div className="total-row discount-row">
                        <p>Discount ({appliedCoupon}):</p>
                        <p>- ₹{(cart
                            .reduce((sum, item) => sum + item.price * item.qty, 0)
                            / 2).toFixed(2)}</p>
                    </div>}

                    <div data-testid="total-amount" className="total-row final-total">
                        <span>Total:</span>
                        {/* TODO: Calculate total with discount applied */}
                        <span>
                            ₹
                            {(cart
                                .reduce((sum, item) => sum + item.price * item.qty, 0)
                                / (isCouponApplied ? 2 : 1)).toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
