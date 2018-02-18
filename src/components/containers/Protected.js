import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Protected extends Component {

	logout(event){   //logout(){
		// console.log('logout: ')
		APIManager.get('/account/logout', null, (err, response) => {
            if (err){
            	const msg = err.message || err
            	alert(msg)
            	return
            }
            console.log(this.props.currentUser.email)
            window.location.href = '/'
		})

	}

	render(){
		return(
			<section id="content">

			    <div className="content-wrap">
			        

				    <section id="section-about" className="page-section">
						<div className="container clearfix">
						    <div className="col_one_third nobottommargin">
								<div className="feature-box media-box">
									<div className="fbox-media">
										<img src="images/laurene/LaureneYuActing.png" alt="What kind of Performing Artist?" />
									</div>
									<div className="fbox-desc">
										<h3>What kind of Performing Artist?<span className="subtitle">Acting and performing art redefine my brand.</span></h3>
										<p>Films, TV, Commercials, theatre, musical, you name it.</p>
									</div>
								</div>
							</div>

							<div className="col_one_third nobottommargin">
								<div className="feature-box media-box">
									<div className="fbox-media">
										<img src="images/laurene/laurene_design1.png" alt="Design What?" />
									</div>
									<div className="fbox-desc">
										<h3>Design What?<span className="subtitle">Artwork makes my customers enjoy life to the most.</span></h3>
										<p>I am inspired to perfect my craft everyday.</p>
									</div>
								</div>
							</div>

							<div className="col_one_third nobottommargin col_last">
								<div className="feature-box media-box">
									<div className="fbox-media">
										<img src="images/laurene/writing.jpeg" alt="Why writing?" />
									</div>
									<div className="fbox-desc">
										<h3>Why Writing?<span className="subtitle">Because it is my passion.</span></h3>
										<p>I do not necessarily invent. But my writing talents create what I really love.</p>
									</div>
								</div>
							</div>

							<div className="clear"></div>
						</div>
					</section>

					<section id="section-design" className="page-section topmargin-lg">

						<div className="heading-block center">
							<h2>Design</h2>
							<span>Some of the Awesome Visual Art Projects I've worked on.</span>
						</div>

						<div className="container clearfix center">

							
							<div id="portfolio" className="portfolio grid-container portfolio-nomargin clearfix">

								<article className="portfolio-item pf-media pf-icons">
									<div className="portfolio-image">
										<a href="portfolio-single.html">
											<img src="images/laurene/designWork.jpg" alt="Artwork 1" />
										</a>
										<div className="portfolio-overlay">
											<a href="images/laurene/designWork.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
											
										</div>
									</div>
									<div className="portfolio-desc">
										<h3><a href="portfolio-single.html">Artwork 1</a></h3>
										<span><a href="#">Artwork 1 desctiption</a></span>
									</div>
								</article>

								<article className="portfolio-item pf-illustrations">
									<div className="portfolio-image">
										<a href="portfolio-single.html">
											<img src="images/laurene/laurene_design.jpg" alt="Artwork 2" />
										</a>
										<div className="portfolio-overlay">
											<a href="images/laurene/laurene_design.jpg" className="left-icon" data-lightbox="image"><i className="icon-line-plus"></i></a>
											
										</div>
									</div>
									<div className="portfolio-desc">
										<h3><a href="portfolio-single.html">Artwork 2</a></h3>
										<span><a href="#">Artwork 2 description</a></span>
									</div>
								</article>

								<article className="portfolio-item pf-graphics pf-uielements">
									<div className="portfolio-image">
										<a href="#">
											<img src="images/laurene/laurene_design1_1.png" alt="Artwork 3" />
										</a>
										<div className="portfolio-overlay">
											
											
										</div>
									</div>
									<div className="portfolio-desc">
										<h3><a href="portfolio-single-video.html">Artwork 3</a></h3>
										<span><a href="#">Artwork 3 description</a></span>
									</div>
								</article>

								<article className="portfolio-item pf-illustrations pf-graphics">
									<div className="portfolio-image">
										<a href="#">
											<img src="images/laurene/design4.jpg" alt="Artwork 4" />
										</a>
										<div className="portfolio-overlay" data-lightbox="gallery">
											<a href="images/laurene/design4.jpg" className="left-icon" data-lightbox="gallery-item"><i className="icon-line-stack-2"></i></a>
											
											
										</div>
									</div>
									<div className="portfolio-desc">
										<h3><a href="portfolio-single-gallery.html">Artwork 4</a></h3>
										<span><a href="#">Artwork 4 description</a></span>
									</div>
								</article>

							</div>

						</div>
				    </section>

                    <section id="section-acting" className="page-section topmargin-lg">

						<div className="heading-block center">
							<h2>Acting</h2>
							<span>Roles that are highlights of my acting career.</span>
						</div>

						<div className="container clearfix">

							<div className="col-md-6 bottommargin">

								<div className="team team-list clearfix">
									<div className="team-image">
										<img src="images/laurene/acting4.png" alt="Role 1" />
									</div>
									<div className="team-desc">
										<div className="team-title"><h4>Role 1</h4><span>Film</span></div>
										<div className="team-content">Role 1 description and date.</div>
										
									</div>
								</div>

							</div>

							<div className="col-md-6 bottommargin">

								<div className="team team-list clearfix">
									<div className="team-image">
										<img src="images/laurene/acting3.png" alt="Role 2" />
									</div>
									<div className="team-desc">
										<div className="team-title"><h4>Role 2</h4><span>Television</span></div>
										<div className="team-content">Role 2 description and date.</div>
										
									</div>
								</div>

							</div>

							<div className="clear"></div>

							<div className="col-md-6 bottommargin">

								<div className="team team-list clearfix">
									<div className="team-image">
										<img src="images/laurene/acting2.png" alt="Role 3" />
									</div>
									<div className="team-desc">
										<div className="team-title"><h4>Role 3</h4><span>Theater</span></div>
										<div className="team-content">Role 3 description and date.</div>
										
									</div>
								</div>

							</div>

							<div className="col-md-6 bottommargin">

								<div className="team team-list clearfix">
									<div className="team-image">
										<img src="images/laurene/acting1.png" alt="Role 4" />
									</div>
									<div className="team-desc">
										<div className="team-title"><h4>Role 4</h4><span>Commercial</span></div>
										<div className="team-content">Role 4 description and date.</div>
										
										
									</div>
								</div>

							</div>

							<div className="clear"></div>

							
						</div>

				    </section>

				    <section id="section-writing" className="page-section topmargin-lg">

						<div className="heading-block center bottommargin-lg">
							<h2>Writing</h2>
							<span>List of some features included in my writing Career.</span>
						</div>

						<div className="container clearfix">

							<div className="col_one_third">
								<div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn">
									<div className="fbox-icon">
										<a href="#"><i className="icon-phone2"></i></a>
									</div>
									<h3>Web content</h3>
									<p>Web content description.</p>
								</div>
							</div>

							<div className="col_one_third">
								<div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn" data-delay="200">
									<div className="fbox-icon">
										<a href="#"><i className="icon-eye"></i></a>
									</div>
									<h3>Blogs</h3>
									<p>Blogs description.</p>
								</div>
							</div>

							<div className="col_one_third col_last">
								<div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn" data-delay="400">
									<div className="fbox-icon">
										<a href="#"><i className="icon-star2"></i></a>
									</div>
									<h3>Features writing</h3>
									<p>Features writing description.</p>
								</div>
							</div>

							<div className="clear"></div>

							<div className="col_one_third">
								<div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn" data-delay="600">
									<div className="fbox-icon">
										<a href="#"><i className="icon-video"></i></a>
									</div>
									<h3>News Reporting</h3>
									<p>News Reporting description.</p>
								</div>
							</div>



							<div className="col_one_third nobottommargin">
								<div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn" data-delay="1400">
									<div className="fbox-icon">
										<a href="#"><i className="icon-heart2"></i></a>
									</div>
									<h3>Non-Profit Writing</h3>
									<p>Non-Profit Writing description.</p>
								</div>
							</div>

							<div className="col_one_third nobottommargin col_last">
								<div className="feature-box fbox-center fbox-effect nobottomborder" data-animate="fadeIn" data-delay="1600">
									<div className="fbox-icon">
										<a href="#"><i className="icon-note"></i></a>
									</div>
									<h3>Business Plan Writing</h3>
									<p>Business Plan Writing description.</p>
								</div>
							</div>

							<div className="clear"></div>

						</div>

					    <div className="divider divider-short divider-center topmargin-lg"><i className="icon-star3"></i></div>

				    </section>

					<section id="section-testimonials" className="page-section section parallax dark" style={{backgroundImage: 'url(images/about/me-parallax.jpg)', padding: '200px 0'}} data-stellar-background-ratio="0.3">

						<div className="container clearfix">

							<div className="col_half nobottommargin">&nbsp;</div>

							<div className="col_half nobottommargin col_last">

								<div className="heading-block center">
									<h4>What Clients say?</h4>
									<span>My Clients love my work &amp; so do I!</span>
								</div>

								<div className="fslider testimonial testimonial-full nobgcolor noborder noshadow nopadding" data-arrows="false">
									<div className="flexslider">
										<div className="slider-wrap">
											<div className="slide">
												<div className="testi-content">
													<p>Laurene is the best. </p>
													<div className="testi-meta">
														Steve Jobs
														<span>Apple Inc.</span>
													</div>
												</div>
											</div>
											<div className="slide">
												<div className="testi-content">
													<p>Laurene blows all the other girls away.</p>
													<div className="testi-meta">
														Collis Ta'eed
														<span>Envato Inc.</span>
													</div>
												</div>
											</div>
											<div className="slide">
												<div className="testi-content">
													<p>Breath taking.</p>
													<div className="testi-meta">
														John Doe
														<span>XYZ Inc.</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>

					</section>

					<section id="section-contact" className="page-section">
						<div className="heading-block title-center">
							<h2>Get in Touch with me</h2>
							<span>Like My Work? Contact Me using the Form below.</span>
						</div>
						<div className="container clearfix">
							<div className="fancy-title title-dotted-border">
								<h3>Send me an Email</h3>
							</div>
							<div className="contact-widget">

								<div className="contact-form-result"></div>

								<form className="nobottommargin" id="template-contactform" name="template-contactform" action="include/sendemail.php" method="post">

									<div className="form-process"></div>

									<div className="col_one_third">
										<label>Name <small>*</small></label>
										<input type="text" id="template-contactform-name" name="template-contactform-name" value="" className="sm-form-control required" />
									</div>

									<div className="col_one_third">
										<label>Email <small>*</small></label>
										<input type="email" id="template-contactform-email" name="template-contactform-email" value="" className="required email sm-form-control" />
									</div>

									<div className="col_one_third col_last">
										<label>Phone</label>
										<input type="text" id="template-contactform-phone" name="template-contactform-phone" value="" className="sm-form-control" />
									</div>

									<div className="clear"></div>

									<div className="col_two_third">
										<label>Subject <small>*</small></label>
										<input type="text" id="template-contactform-subject" name="template-contactform-subject" value="" className="required sm-form-control" />
									</div>

									<div className="col_one_third col_last">
										<label>Topic</label>
										<select id="template-contactform-service" name="template-contactform-service" className="sm-form-control">
											<option value="">-- Select One --</option>
											<option value="Wordpress">Acting</option>
											<option value="PHP / MySQL">Design</option>
											<option value="HTML5 / CSS3">Writing</option>
											<option value="Graphic Design">Other</option>
										</select>
									</div>

									<div className="clear"></div>

									<div className="col_full">
										<label>Message <small>*</small></label>
										<textarea className="required sm-form-control" id="template-contactform-message" name="template-contactform-message" rows="6" cols="30"></textarea>
									</div>

									<div className="col_full hidden">
										<input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" className="sm-form-control" />
									</div>

									<div className="col_full">
										<button className="button button-3d nomargin" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
									</div>

							    </form>

							    


							</div>



							
							<div className="col_full nobottommargin clearfix">

								<div className="col_one_fourth">
									<div className="feature-box fbox-center fbox-bg fbox-plain">
										<div className="fbox-icon">
											<a href="#"><i className="icon-map-marker2"></i></a>
										</div>
										<h3>Email Address<span className="subtitle">laurene.yu@gmail.com</span></h3>
									</div>
								</div>

								<div className="col_one_fourth">
									<div className="feature-box fbox-center fbox-bg fbox-plain">
										<div className="fbox-icon">
											<a href="#"><i className="icon-phone3"></i></a>
										</div>
										<h3>Speak to Me<span className="subtitle">(123) 456 7890</span></h3>
									</div>
								</div>

								<div className="col_one_fourth">
									<div className="feature-box fbox-center fbox-bg fbox-plain">
										<div className="fbox-icon">
											<a href="#"><i className="icon-skype2"></i></a>
										</div>
										<h3>Make a Video Call<span className="subtitle">LaureneYuOnSkype</span></h3>
									</div>
								</div>

								<div className="col_one_fourth col_last">
									<div className="feature-box fbox-center fbox-bg fbox-plain">
										<div className="fbox-icon">
											<a href="#"><i className="icon-twitter2"></i></a>
										</div>
										<h3>Follow on twitter<span className="subtitle">1M Followers</span></h3>
									</div>
								</div>

							</div>

						</div>
						<div className="postcontent nobottommargin clearfix">
                              <div className="col_two_fifth bothsidebar nobottommargin">
                                    
                    			    <button onClick={this.logout.bind(this)}>logout</button>
                              </div>
                        </div>

					</section>



				</div>
			</section>		
	    )
	}
}

export default Protected