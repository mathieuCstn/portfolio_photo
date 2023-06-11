import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import axios from "axios"
import './Footer.css'
import 'leaflet/dist/leaflet.css'
import NewsletterForm from "./NewsletterForm"

function smoothScrollToTop() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        const position = document.body.scrollTop || document.documentElement.scrollTop
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        requestAnimationFrame(smoothScrollToTop);
    }
}

function Footer() {

    const [geoJsonGeometry, setGeoJsonGeometry] = useState({})

    useEffect(() => {
        const getGeoJsonGeometry = async () => {
            const response = await axios('https://nominatim.openstreetmap.org/lookup?osm_ids=R120083&polygon_geojson=1&format=geojson')
            setGeoJsonGeometry(response.data.features[0].geometry)
        }
        getGeoJsonGeometry()
    }, [])

    return (
        <footer>
            <div className="go-to-top" onClick={() => smoothScrollToTop()}>
                <p>Retour en haut</p>
            </div>
            <div className="footer-content">
                <div className="footer-links">
                    <div>
                        <h3>Liens pratiques</h3>
                        <nav>
                            <ul>
                                <li><Link to='/'>Accueil</Link></li>
                                <li><Link to='/gallery'>Gallery</Link></li>
                                <li><Link to='/login'>Se connecter</Link></li>
                                <li><Link to='/register'>s'enregistrer</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h3>Réseaux sociaux</h3>
                        <nav>
                            instagram...
                        </nav>
                    </div>
                </div>
                <div className="footer-map">
                    <div className="map-container">
                        <h3>Zone de d'activité</h3>
                        <MapContainer center={[44.6205476,4.3902399]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {geoJsonGeometry.coordinates ? <GeoJSON data={geoJsonGeometry} /> : null}
                        </MapContainer>
                    </div>
                </div>
                <div className="footer-newsletter">
                    <NewsletterForm />
                </div>
            </div>
        </footer>
    )
}

export default Footer