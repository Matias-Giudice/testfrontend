import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Image from 'next/image'
import LogoNissan from '../public/Brand.png'
import stylesNav from '../styles/Nav.module.css'
import CardBackground from '../components/CardBackground'
import Container from 'react-bootstrap/Container'

const Nav = () => {
	return (
		<nav id={stylesNav.navbar} className="navbar navbar-expand-lg navbar-light bg-light">
		  <div className="container-fluid">
		    <a id={stylesNav.navbarBrand} className="navbar-brand" href="/">
		      <img src="Brand.png" alt="" width="102" height="102" className="d-inline-block align-text-top"/>
		    </a>
		    <button id={stylesNav.navbarToggler} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul id={stylesNav.navbarItems} className="navbar-nav me-auto mb-2 mb-lg-0">
			    	<li className="nav-item">
			        	<a className="nav-link active" aria-current="page" href="/store">vehículos</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" href="https://www.nissan.com.uy/">descubrí nissan</a>
			        </li>
			    </ul>
		      	<form className="form-flex">
					<input id={stylesNav.search} placeholder="BUSCAR POR MODELO O VEHÍCULO" aria-label="Search" className="form-control me-2" type="text"/>
				</form>
		    </div>
		  </div>
		</nav>
	);
};
export default Nav;