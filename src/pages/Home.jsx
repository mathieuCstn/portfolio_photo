import { Link } from 'react-router-dom'
import {CloudinaryImage} from '@cloudinary/url-gen'
import {AdvancedImage} from '@cloudinary/react'
import {fill} from '@cloudinary/url-gen/actions/resize'
import './Home.css'
import { Helmet } from 'react-helmet'

const cldCloudName = 'dmkyrjr2d'

const cldHeroImage = new CloudinaryImage('portfolio_photo/AX8A9491_vo9nu2', {cloudName: cldCloudName}).resize(fill().width(1000))

const cldEventImage = new CloudinaryImage('portfolio_photo/3563172_xqba4u', {cloudName: cldCloudName}).resize(fill().width(400))
const cldProductShootingImage = new CloudinaryImage('portfolio_photo/17545641_ucgfbn', {cloudName: cldCloudName}).resize(fill().width(400))
const cldInterviewImage = new CloudinaryImage('portfolio_photo/6883805_aybao5', {cloudName: cldCloudName}).resize(fill().width(400))
const cldEnterpriseShootingImage = new CloudinaryImage('portfolio_photo/7550298_vjzpzx', {cloudName: cldCloudName}).resize(fill().width(400))

function Home() {
    return (
        <section id='home'>
            <Helmet>
                <title>Accueil - Mathieu Constantin</title>
                <meta name="description" content="Accueil du site photo Mathieu Constantin" />
            </Helmet>
            <section id="hero">
                <div className='hero-first-container'>
                    <div className="hero-texts-container">
                        <h1>Mathieu Constantin</h1>
                        <p>Je suis un photographe qui partage des histoires à travers ces photos.</p>
                    </div>
                    <Link to='/gallery' className='call-to-action hero-link'>Voire le portfolio</Link>
                </div>
                <div className='hero-second-container'>
                    <AdvancedImage cldImg={cldHeroImage} alt="Photo page d'accueil" />
                </div>
            </section>
            <section id="home-section-2">
                <h2>Ce que je peux faire pour vous</h2>
                <div className="home-section-2-images">
                    <div className="home-section-2-image-container">
                        <AdvancedImage cldImg={cldEventImage} alt="Event shooting" />
                        <p>Reportage & Évènementiel</p>
                    </div>
                    <div className="home-section-2-image-container">
                        <AdvancedImage cldImg={cldProductShootingImage} alt="Product shooting" />
                        <p>Shooting produit</p>
                    </div>
                    <div className="home-section-2-image-container">
                        <AdvancedImage cldImg={cldInterviewImage} alt="Interview" />
                        <p>Tournage & Interview</p>
                    </div>
                    <div className="home-section-2-image-container">
                        <AdvancedImage cldImg={cldEnterpriseShootingImage} alt="Enterprise shooting" />
                        <p>Photo d'entreprise</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home