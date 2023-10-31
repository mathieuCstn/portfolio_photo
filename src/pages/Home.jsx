import { Link } from 'react-router-dom'
import {CloudinaryImage} from '@cloudinary/url-gen'
import {AdvancedImage} from '@cloudinary/react'
import {fill} from '@cloudinary/url-gen/actions/resize'
import './Home.css'
import { Helmet } from 'react-helmet'

const cldImage = new CloudinaryImage('portfolio_photo/AX8A9491_vo9nu2', {cloudName: 'dmkyrjr2d'}).resize(fill().width(1000))

function Home() {
    return (
        <section id='home'>
            <Helmet>
                <title>Accueil</title>
                <meta name="description" content="Accueil du site Mathieu Constantin" />
            </Helmet>
            <section id="hero">
                <div className='hero-first-container'>
                    <div className="hero-texts-container">
                        <h1>Mathieu Constantin</h1>
                        <p>Je suis un photographe partageant des histoires racontées par ces photos.</p>
                    </div>
                    <Link to='/gallery' className='call-to-action hero-link'>Voire le portfolio</Link>
                </div>
                <div className='hero-second-container'>
                    <AdvancedImage cldImg={cldImage} />
                </div>
            </section>
        </section>
    )
}

export default Home