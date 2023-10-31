import { Link } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
    return (
        <section id='not-found'>
            <h1>Page non trouvé</h1>
            <p>
                Il semblerait que ce soit une impasse...<br />
                Puis-je vous suggérer les liens suivants ?
            </p>
            <nav>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/login'>Se connecter</Link></li>
                    <li><Link to='/register'>S'enregistrer</Link></li>
                </ul>
            </nav>
        </section>
    );
}

export default NotFound;
