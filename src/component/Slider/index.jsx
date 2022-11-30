import React, { Fragment } from "react";


function Slider(){
    return (
        <Fragment>
            <div class="slider-area">
			<div class="slider-active">
				<div class="single-slider slide-height d-flex align-items-center" style="background-image:url(img/slider/slide1.jpg)">
					<div class="container">
						<div class="row">
							<div class="col-xl-10 offset-xl-1">
								<div class="slide-content text-center">
									<h6 data-animation="fadeInUp" data-delay=".5s">Top fashion for men</h6>
									<h1 data-animation="fadeInUp" data-delay="1s"> Best Fashion For Men</h1>
									<a class="btn" href="#" data-animation="fadeInUp" data-delay="1.5s">learn more
										<i class="icofont icofont-location-arrow"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="single-slider slide-height d-flex align-items-center" style="background-image:url(img/slider/slide4.jpg)">
					<div class="container">
						<div class="row">
							<div class="col-xl-10 offset-xl-1">
								<div class="slide-content text-center">
									<h6 data-animation="fadeInUp" data-delay=".5s">We are the best</h6>
									<h1 data-animation="fadeInUp" data-delay="1s">Trendy Collection 2018</h1>
									<a class="btn" href="#" data-animation="fadeInUp" data-delay="1.5s">learn more
										<i class="icofont icofont-location-arrow"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="single-slider slide-height d-flex align-items-center" style="background-image:url(img/slider/slide2.jpg)">
					<div class="container">
						<div class="row">
							<div class="col-xl-10 offset-xl-1">
								<div class="slide-content text-center">
									<h6 data-animation="fadeInUp" data-delay=".5s">Best Fashion For Lady</h6>
									<h1 data-animation="fadeInUp" data-delay="1s">Top fashion for men</h1>
									<a class="btn" href="#" data-animation="fadeInUp" data-delay="1.5s">learn more
										<i class="icofont icofont-location-arrow"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </Fragment>
    )
} export default Slider;