import { useState, useEffect, useContext } from 'react';
import '/src/styles/navbar.css';
import CartWidget from '../CartWidget.jsx';
import { Link } from 'react-router-dom';
import { searchProducts } from '../../firebase/firebase';
import { CartContext } from '../CartContext.jsx';

const NavBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const { cart } = useContext(CartContext);

    useEffect(() => {
        const handleSearch = async () => {
            if (query.trim() !== '') {
                const searchResults = await searchProducts(query);
                setResults(searchResults);
            } else {
                setResults([]);
            }
        };

        handleSearch();
    }, [query]);

    const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <header>
                <Link to='/'><img src="src/assets/RushLogo.png" alt="Logo de La empresa" className='imgheader'/></Link>
                <div className="container">
                    <form className="search-box" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="text" 
                            placeholder='Encuentra lo que buscas.' 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type='submit'><img src="/src/assets/search.png" alt="Boton de busqueda" /></button>
                    </form>
                    {results.length > 0 && (
                        <ul className="search-results">
                            {results.map(product => (
                                <li key={product.Id}>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.Image} alt={product.Title} width="50" height="50" />
                                        <span>{product.Title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <nav>
                    <ul>
                        <li><Link to='/Ropa_de_Futbol'>Ropa de Fútbol</Link></li>
                        <li><Link to='/Ropa_Deportiva'>Ropa deportiva</Link></li>
                    </ul>
                </nav>
                <div>
                    <Link to='/Carrito'>
                        <div className='carrito'>
                            <CartWidget />
                            {totalItemsInCart > 0 && <span className='cart-count'>{totalItemsInCart}</span>}
                        </div>
                    </Link>
                </div>
                <div className='usuario'>
                    <img src="/src/assets/user.svg" alt="User logo" />
                    <p>Bienvenido, Usuario</p>
                </div>
            </header>
        </>
    );
};

export default NavBar;
