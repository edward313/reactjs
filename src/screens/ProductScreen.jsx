

import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import productImg from "../assets/img/product/1.jpg"
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, removeFromCart } from '../actions/cartActions'
import Loading from '../component/Loading';
function ProducerScreen(pros) {
    const products = useSelector((state) => state.productList)
    const dispatch = useDispatch()
    const { loading, error,objList } = products;
    useEffect(() => {
        dispatch(listProducts())

    }, [])
    


    const sayHello = (id) => {

        dispatch(addToCart(id, 1))
        toast.success('Thêm sản phẩm ', id, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    };

    function AddFromCartHandler(id) {


        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        dispatch(addToCart(id, 1))
        console.log('hello')



    }


    return (

        // <Fragment>
        //     <button onClick={AddFromCartHandler}>2331232</button>
        //     <ToastContainer></ToastContainer>
        //     <div class="shop-area shop-full">
        //         <div class="container">
        //             {loading ? (
        //                 <Loading></Loading>
        //             ) : error ? (
        //                 <div>{error} </div>
        //             ) : (
        //                 <>
        //                     <div class="row">
        //                         <div class="col-md-12">
        //                             <div class="shop-content">

        //                                 <ul class="shop-tab" role="tablist">
        //                                     <li><span class="sorting-name"> View as:  </span></li>
        //                                     <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i class="fa fa-th" aria-hidden="true"></i></a></li>
        //                                     <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i class="fa fa-th-list" aria-hidden="true"></i></a></li>
        //                                 </ul>
        //                                 <div class="short-by">
        //                                     <span class="sorting-show"> Sort by:</span>
        //                                     <select>
        //                                         <option value="volvo">popularity</option>
        //                                         <option value="saab">Default</option>
        //                                         <option value="mercedes">average rating</option>
        //                                         <option value="audi">newness</option>
        //                                         <option value="audi">low to high</option>
        //                                         <option value="audi">high to low</option>
        //                                     </select>
        //                                 </div>
        //                                 <div class="shop-show">
        //                                     <span class="sorting-show"> Show:</span>
        //                                     <select>
        //                                         <option value="volvo">9</option>
        //                                         <option value="saab">10</option>
        //                                         <option value="mercedes">11</option>
        //                                         <option value="audi">12</option>
        //                                         <option value="audi">15</option>
        //                                         <option value="audi">16</option>
        //                                     </select>
        //                                 </div>
        //                                 <div class="shop-breadcrumb">
        //                                     <ul>
        //                                         <li class="active"><a href="#">1</a></li>
        //                                         <li><a href="#">2</a></li>
        //                                         <li><a href="#">3</a></li>
        //                                         <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
        //                                     </ul>
        //                                 </div>

        //                                 <div class="clear"></div>

        //                                 <div class="tab-content">
        //                                     <div role="tabpanel" class="tab-pane active" id="home">
        //                                         <div class="row">
                                                    
        //                                             {products.map((objList) => (
        //                                                 <div class="col-md-4 col-sm-4">
        //                                                     <div class="single-product">
        //                                                         <div class="product-img">
        //                                                             {/* <a >
        //                                                                 <img src={productImg} alt="" />
        //                                                                 <img class="secondary-img" src={productImg} alt="" />
        //                                                             </a> */}
        //                                                             <span class="tag-line">new</span>
        //                                                             <div class="product-action">
        //                                                                 <div class="button-top">
        //                                                                     <Link to={`/product/${objList.id}`}>
        //                                                                         <a href="#" data-toggle="modal" data-target="#productModal"><i class="fa fa-search"></i></a>
        //                                                                     </Link>
        //                                                                     <a href="#" ><i class="fa fa-heart"></i></a>
        //                                                                 </div>
        //                                                                 <div class="button-cart">
        //                                                                     <button onClick={() => {
        //                                                                         AddFromCartHandler(objList.id)

        //                                                                     }}> add to cart</button>
        //                                                                     <ToastContainer />
        //                                                                 </div>

        //                                                             </div>
        //                                                         </div>
        //                                                         <div class="product-content">
        //                                                             <h3><a href="product-details.html">{objList..substring(0, 30)}</a></h3>
        //                                                             <div class="price">
        //                                                                 <span>{product.price}</span>
        //                                                                 <span class="old">$90.11</span>
        //                                                             </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             ))}
                                                   

        //                                         </div>
        //                                     </div>

        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 </>

                     
        //             )}

        //         </div>
        //     </div>
        // </Fragment>
        <h1></h1>

    )
}

export default ProducerScreen;