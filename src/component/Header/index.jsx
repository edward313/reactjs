import React ,{Fragment} from "react";

import "../Header/style.css"
import {Link} from "react-router-dom"

function Header()
{
    return (
        <Fragment>
        <header class="header-pos">
			{/* <!-- header-bottom-area start --> */}
			<div class="header-bottom-area">
				<div class="container">
					<div class="inner-container">
						<div class="row">
							<div class="col-md-2 col-sm-4 col-xs-5">
								<div class="logo">
									<a href="index.html"><img src="img/logo-white-text.png" alt="" /></a>
								</div>
							</div>
							<div class="col-md-8 hidden-xs hidden-sm">
								<div class="main-menu">
									<nav>
										<ul>
											<li><a ><Link to="/">Home</Link></a>
												
											</li>
											
											
											<li class="static"><a ><Link to="/product">product</Link></a>
																				
											</li>
											
											<li><a ><Link to="/cart">Cart</Link></a>
																							
											</li>											
											
										</ul>
									</nav>
								</div>
							</div>
							<div class="col-md-2 col-sm-8 col-xs-7 header-right">
								<div class="my-cart">
									<div class="total-cart">
										<a href="cart.html">
											<i class="fa fa-shopping-cart"></i>
											<span>2</span>
										</a>								
									</div>
									<ul>
										<li>
											<div class="cart-img">
												<a href="#"><img alt="" src="img/cart/1.jpg"/></a>
											</div>
											<div class="cart-info">
												<h4><a href="#">Vestibulum suscipit</a></h4>
												<span>£165.00 <span>x 1</span></span>
											</div>
											<div class="del-icon">
												<i class="fa fa-times-circle"></i>
											</div>
										</li>
										<li>
											<div class="cart-img">
												<a href="#"><img alt="" src="img/cart/1.jpg"/></a>
											</div>
											<div class="cart-info">
												<h4><a href="#">Vestibulum suscipit</a></h4>
												<span>£165.00 <span>x 1</span></span>
											</div>
											<div class="del-icon">
												<i class="fa fa-times-circle"></i>
											</div>
										</li>
										<li class="cart-border">
											<div class="subtotal-text">Subtotal: </div>
											<div class="subtotal-price">£300.00</div>
										</li>
										<li>
											<a class="cart-button" href="checkout.html">view cart</a>
											<a class="checkout" href="checkout.html">checkout</a>
										</li>
									</ul>
								</div>
								<div class="user-meta">
									<a href="#"><i class="fa fa-cog"></i></a>
									<ul>
										
										<li><a ><Link to="/login"></Link>Login</a></li>
									</ul>								
								</div>
								<div class="header-search">
									<i class="fa fa-search"></i>
									<div class="header-form">
										<form action="#">
											<input type="text" placeholder="search" />
											<button><i class="fa fa-search"></i></button>
										</form>
									</div>
								</div>							
							</div>
						</div>
					</div>
				</div>
			</div>
		
						
		</header>

        <div class="breadcrumb-area">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="breadcrumb-list">
							<h1>Login</h1>
							<ul>
								<li><a href="index.html">home</a> <span class="divider">|</span></li>

								<li>Login</li>
							</ul>							
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
        </Fragment>
    )
} export default Header;

