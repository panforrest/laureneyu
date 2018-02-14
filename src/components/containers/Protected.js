import React, { Component } from 'react'

class Protected extends Component {
	render(){
		return(
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
	    )
	}
}

export default Protected