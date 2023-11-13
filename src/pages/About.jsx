import { Helmet } from 'react-helmet'
import './About.css'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import {fill} from '@cloudinary/url-gen/actions/resize'

const cldAboutProfileImage = new CloudinaryImage('portfolio_photo/AX8A6957_oitvok.jpg', {cloudName: 'dmkyrjr2d'}).resize(fill().width(300))

export default function About() {
  return (
    <section id="about">
        <Helmet>
            <title>À Propos - Mathieu Constantin</title>
            <meta name="description" content="À propos de Mathieu Constantin" />
        </Helmet>
        <h1>Mathieu Constantin</h1>
        <AdvancedImage cldImg={cldAboutProfileImage} alt="Photo de Mathieu Constantin" />
        <div className="texts-container">
            <p>Bienvenue sur mon portfolio ! Je suis Mathieu Constantin, un passionné de la photographie basé à Aubenas et capturant des moments uniques à travers mon objectif. La photographie n'est pas simplement une profession pour moi, c'est une manière de raconter des histoires, de figer l'éphémère et de créer des souvenirs qui durent toute une vie.</p>

            <h2>Mon Style</h2>
            <p>Mon style photographique est ancré dans la créativité, la spontanéité et la recherche de la beauté dans chaque instant. Que ce soit en capturant la tendresse d'un moment partagé lors d'un mariage, la majesté d'un paysage naturel, ou la personnalité unique d'un individu lors d'une séance portrait, je m'efforce de créer des images qui vont au-delà de la simple représentation visuelle, cherchant à susciter des émotions et à raconter des histoires.</p>

            <h2>Mon Parcours</h2>
            <p>Photographe depuis 2019, mon parcours dans le monde de la photographie a été une aventure constante d'apprentissage et de découverte. Chaque session de photo est une opportunité pour moi d'explorer de nouvelles perspectives, de travailler avec des personnes extraordinaires et de capturer des moments uniques. Mon engagement envers l'excellence et la passion pour mon métier se reflètent dans chaque image que je crée.</p>

            <h2>Pourquoi la Photographie ?</h2>
            <p>La photographie pour moi est bien plus qu'un simple métier. C'est un moyen de communiquer, de capturer l'instant, de créer des souvenirs et de partager des émotions. Chaque projet est une nouvelle aventure, et je m'efforce constamment d'innover, d'apprendre et de grandir en tant que photographe.</p>

            <h2>Travaillons Ensemble</h2>
            <p>Que ce soit pour immortaliser votre journée spéciale, créer des portraits qui capturent votre essence, ou documenter un événement mémorable, je suis prêt à travailler avec vous pour donner vie à votre vision. N'hésitez pas à me contacter pour discuter de vos idées et besoins pour vos futurs projets.</p>
        </div>
    </section>
  )
}
