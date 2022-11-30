import { Slider } from "@mui/material";
import React, { Fragment, useEffect } from "react";

import { Link } from "react-router-dom"
import productImg from "../assets/img/product/1.jpg"
function HomeScreen() {






	return (


		<Fragment>
			{/* <Slider></Slider> */}
			<div class="shop-area shop-full">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="shop-content">

								<ul class="shop-tab" role="tablist">
									<li><span class="sorting-name"> View as:  </span></li>
									<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i class="fa fa-th" aria-hidden="true"></i></a></li>
									<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i class="fa fa-th-list" aria-hidden="true"></i></a></li>
								</ul>
								<div class="short-by">
									<span class="sorting-show"> Sort by:</span>
									<select>
										<option value="volvo">popularity</option>
										<option value="saab">Default</option>
										<option value="mercedes">average rating</option>
										<option value="audi">newness</option>
										<option value="audi">low to high</option>
										<option value="audi">high to low</option>
									</select>
								</div>
								<div class="shop-show">
									<span class="sorting-show"> Show:</span>
									<select>
										<option value="volvo">9</option>
										<option value="saab">10</option>
										<option value="mercedes">11</option>
										<option value="audi">12</option>
										<option value="audi">15</option>
										<option value="audi">16</option>
									</select>
								</div>
								<div class="shop-breadcrumb">
									<ul>
										<li class="active"><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
									</ul>
								</div>

								<div class="clear"></div>

								<div class="tab-content">
									<div role="tabpanel" class="tab-pane active" id="home">
										<div class="row">

											<div class="col-md-4 col-sm-4">
												<div class="single-product">
													<div class="product-img">
														<a href="product-details.html">
															<img src={productImg} alt="" />
															<img class="secondary-img" src={productImg} alt="" />
														</a>
														<span class="tag-line">new</span>
														<div class="product-action">
															<div class="button-top">
																{/* <Link to={`/product/${product.id}`}> */}
																<a href="#" data-toggle="modal" data-target="#productModal"><i class="fa fa-search"></i></a>
																{/* </Link> */}
																<a href="#" ><i class="fa fa-heart"></i></a>
															</div>
															<div class="button-cart">
																<button><i class="fa fa-shopping-cart"></i> add to cart</button>
															</div>
														</div>
													</div>
													<div class="product-content">
														<h3><a href="product-details.html">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, officiis! Repellat provident quos architecto enim unde quae aut sapiente a nemo perspiciatis, exercitationem fugit in corporis corrupti deleniti nihil labore?</a></h3>
														<div class="price">
															<span>123</span>
															<span class="old">$90.11</span>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-4 col-sm-4">
												<div class="single-product">
													<div class="product-img">
														<a href="product-details.html">
															<img src={productImg} alt="" />
															<img class="secondary-img" src={productImg} alt="" />
														</a>
														<span class="tag-line">new</span>
														<div class="product-action">
															<div class="button-top">
																{/* <Link to={`/product/${product.id}`}> */}
																<a href="#" data-toggle="modal" data-target="#productModal"><i class="fa fa-search"></i></a>
																{/* </Link> */}
																<a href="#" ><i class="fa fa-heart"></i></a>
															</div>
															<div class="button-cart">
																<button><i class="fa fa-shopping-cart"></i> add to cart</button>
															</div>
														</div>
													</div>
													<div class="product-content">
														<h3><a href="product-details.html">Lorem ipsum dolor sit amet consectetur adipisicing elit. </a></h3>
														<div class="price">
															<span>123</span>
															<span class="old">$90.11</span>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-4 col-sm-4">
												<div class="single-product">
													<div class="product-img">
														<a href="product-details.html">
															<img src={productImg} alt="" />
															<img class="secondary-img" src={productImg} alt="" />
														</a>
														<span class="tag-line">new</span>
														<div class="product-action">
															<div class="button-top">
																{/* <Link to={`/product/${product.id}`}> */}
																<a href="#" data-toggle="modal" data-target="#productModal"><i class="fa fa-search"></i></a>
																{/* </Link> */}
																<a href="#" ><i class="fa fa-heart"></i></a>
															</div>
															<div class="button-cart">
																<button><i class="fa fa-shopping-cart"></i> add to cart</button>
															</div>
														</div>
													</div>
													<div class="product-content">
														<h3><a href="product-details.html">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, officiis! Repellat provident quos architecto enim unde quae aut sapiente a nemo perspiciatis, exercitationem fugit in corporis corrupti deleniti nihil labore?</a></h3>
														<div class="price">
															<span>123</span>
															<span class="old">$90.11</span>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-4 col-sm-4">
												<div class="single-product">
													<div class="product-img">
														<a href="product-details.html">
															<img src={productImg} alt="" />
															<img class="secondary-img" src={productImg} alt="" />
														</a>
														<span class="tag-line">new</span>
														<div class="product-action">
															<div class="button-top">
																{/* <Link to={`/product/${product.id}`}> */}
																<a href="#" data-toggle="modal" data-target="#productModal"><i class="fa fa-search"></i></a>
																{/* </Link> */}
																<a href="#" ><i class="fa fa-heart"></i></a>
															</div>
															<div class="button-cart">
																<button><i class="fa fa-shopping-cart"></i> add to cart</button>
															</div>
														</div>
													</div>
													<div class="product-content">
														<h3><a href="product-details.html"> architecto enim unde quae aut sapiente a nemo perspiciatis, exercitationem fugit in corporis corrupti deleniti nihil labore?</a></h3>
														<div class="price">
															<span>123</span>
															<span class="old">$90.11</span>
														</div>
													</div>
												</div>
											</div>

											{/* <>{renderList}</> */}

										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			




		</Fragment>

	)
} export default HomeScreen