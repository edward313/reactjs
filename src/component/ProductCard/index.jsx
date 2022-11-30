import React from "react";


function ProductCard() {
    return (
        <div class="col-md-12">
            <div class="single-product">
                <div class="product-img">
                    <a href="product-details.html">
                        <img src="img/product/1.jpg" alt="" />
                        <img class="secondary-img" src="img/product/2.jpg" alt="" />
                    </a>
                    <span class="tag-line">new</span>
                    <div class="product-action">
                        <div class="button-top">
                            <a href="#" data-toggle="modal" data-target="#productModal"><i class="fa fa-search"></i></a>
                            <a href="#" ><i class="fa fa-heart"></i></a>
                        </div>
                        <div class="button-cart">
                            <button><i class="fa fa-shopping-cart"></i> add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h3><a href="product-details.html">Lorem ipsum dolor</a></h3>
                    <div class="price">
                        <span>$70.00</span>
                        <span class="old">$80.11</span>
                    </div>
                </div>
            </div>
        </div>
    )
} export default ProductCard