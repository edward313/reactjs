import React, { useEffect,Fragment } from 'react'
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'

function CartScreen(){



  const navigate = useNavigate()
 

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  
  console.log("cart item",cartItems)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  console.log(cart)
    return (
        <Fragment>
            <div class="cart-main-area">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12">
						<form action="#">				
							<div class="table-content table-responsive">
								<table>
									<thead>
										<tr>
											<th class="product-thumbnail">Image</th>
											<th class="product-name">Product</th>
											<th class="product-price">Price</th>
											<th class="product-quantity">Quantity</th>
											<th class="product-subtotal">Total</th>
											<th class="product-remove">Remove</th>
										</tr>
									</thead>
									<tbody>
										{cartItems.map((item) => (
											<tr>
											<td class="product-thumbnail"><a href="#"><img src={item.image} alt="" /></a></td>
											<td class="product-name"><a href="#">Lorem ipsum dolor</a></td>
											<td class="product-price"><span class="amount">£125.00</span></td>
											<td class="product-quantity"><input type="number" value="1" /></td>
											<td class="product-subtotal">£125.00</td>
											<td class="product-remove"><a href="#"><i class="fa fa-times"></i></a></td>
										</tr>
										))}
										
									
									</tbody>
								</table>
							</div>
							<div class="row">
								<div class="col-md-8 col-sm-7 col-xs-12">
									<div class="buttons-cart">
										<input type="submit" value="Update Cart" />
										<a href="#">Continue Shopping</a>
									</div>
									<div class="coupon">
										<h3>Coupon</h3>
										<p>Enter your coupon code if you have one.</p>
										<input type="text" placeholder="Coupon code" />
										<input type="submit" value="Apply Coupon" />
									</div>
								</div>
								<div class="col-md-4 col-sm-5 col-xs-12">
									<div class="cart_totals">
										<h2>Cart Totals</h2>
										<table>
											<tbody>
												<tr class="cart-subtotal">
													<th>Subtotal</th>
													<td><span class="amount">£215.00</span></td>
												</tr>
												<tr class="shipping">
													<th>Shipping</th>
													<td>
														<ul id="shipping_method">
															<li>
																<input type="radio" /> 
																<label>
																	Flat Rate: <span class="amount">£7.00</span>
																</label>
															</li>
															<li>
																<input type="radio" /> 
																<label>
																	Free Shipping
																</label>
															</li>
															<li></li>
														</ul>
														<p><a class="shipping-calculator-button" href="#">Calculate Shipping</a></p>
													</td>
												</tr>
												<tr class="order-total">
													<th>Total</th>
													<td>
														<strong><span class="amount">£215.00</span></strong>
													</td>
												</tr>											
											</tbody>
										</table>
										<div class="wc-proceed-to-checkout">
											<a href="#">Proceed to Checkout</a>
										</div>
									</div>
								</div>
							</div>
						</form>	
					</div>
				</div>
			</div>
		</div>
        </Fragment>
    )
} export default CartScreen;