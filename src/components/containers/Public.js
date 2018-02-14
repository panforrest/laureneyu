import React, { Component } from 'react'

class Public extends Component {
	render(){
		return(
		  <div>	

	        <header id="header" className="full-header">

				<div id="header-wrap">

					<div className="container clearfix">

						<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

						
						
						<nav id="primary-menu" >

							<ul className="one-page-menu" data-easing="easeInOutExpo" data-speed="1500">
								<li><a href="#" data-href="#home"><div>Home</div></a></li>
								<li><a href="#" data-href="#section-about"><div>About</div></a></li>
								<li><a href="#" data-href="#section-design"><div>Design</div></a></li>
								<li><a href="#" data-href="#section-acting"><div>Acting</div></a></li>
								<li><a href="#" data-href="#section-writing"><div>Writing</div></a></li>
								
								
								<li><a href="#" data-href="#section-testimonials" data-offset="60"><div>Testimonials</div></a></li>
								<li><a href="#" data-href="#section-contact"><div>Contact</div></a></li>
								
							</ul>

							

						</nav>

					</div>

				</div>

			</header>

			<div className="heading-block center">
				<h2>MY NAME IS <span>Laurene Yu</span></h2>
				<span>I live my life as an artist; these are what I do, not necessary in that order.</span>
			</div>
		  </div>											
	    )
	}
}

export default Public