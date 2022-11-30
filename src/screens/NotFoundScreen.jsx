import React, { Fragment } from "react";
import {Link } from "react-router-dom"
function NotFound(){
    return (
        <Fragment>
            <div class="four-zero-four">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="four-zero-content">
							<h1><span>404</span> not found!</h1>
							<p>The page you are looking for is not found! Please check the url again. </p>
							<a href="index.html"><Link to='/'> Back to home</Link></a>
                            
						</div>
					</div>
				</div>
			</div>
		</div>
        </Fragment>
    )
} export default NotFound 