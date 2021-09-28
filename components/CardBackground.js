import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import stylesCardBackground from '../styles/CardBackground.module.css'
const CardBackground = () => {
	return(
		<Card className={stylesCardBackground.cardBackground}>
			<Card.Body>
				<Card.Title className={stylesCardBackground.cardBackgroundTitle}>ahora es online</Card.Title>
			    <Card.Text className={stylesCardBackground.cardBackgroundText}>
			      Con Nissan Store, podés acceder a tu nuevo 0km con todos los servicios asociados desde la comodidad de tu sofá.
			      Probanos!
			    </Card.Text>
			    <div className={stylesCardBackground.cardBackgroundButton}>
                	<Link href="/store">
                    	<div className="d-flex justify-content-between">
                    		<a className={stylesCardBackground.cardBackgroundButtonText}>ingresar a nissan store</a>
                            <div className={stylesCardBackground.cardBackgroundButtonArrow}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                	<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
			</Card.Body>
		</Card>
	);
};
export default CardBackground;