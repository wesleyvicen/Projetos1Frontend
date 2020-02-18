import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../styles/style.css"

function Noticia(props) {
	const { noticia } = props;
    return(
      <div className={"news"}>
            <Carousel fade={true} controls={false} interval={6000} pauseOnHover={false} indicators={false}>
				{noticia.map((noticias) => (
					<Carousel.Item>
						<h1>{noticias.title}</h1>

					</Carousel.Item>
				))}
			</Carousel>
      </div>
    );
}

export default Noticia;