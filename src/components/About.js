import React from 'react';
import {WOW} from 'wowjs';

class ComoComprar extends React.Component {
	componentDidMount() {
		const wow = new WOW({
		  offset: 100,
		  mobile: false, 
		  live: true 
		})

		wow.init();
	}

	render() {
		return <section style={{backgroundColor:"#d3d3d3"}} className="d-flex align-items-center justify-content-center">
			<div className="container">
				<div className="row title-row">
					<div className="col-sm-8 mx-auto text-center">
						<h1 className="display-4 wow fadeIn" data-wow-delay="0.6s">About us</h1>
						<p className="wow fadeIn" data-wow-delay="0.9s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, aliquam! Ullam saepe, doloribus eos impedit nulla consequatur delectus vel iusto eligendi unde commodi minima quidem nemo enim officiis voluptate quibusdam.</p>
					</div>
				</div>
			</div>
		</section>
	}
}

export default ComoComprar;
