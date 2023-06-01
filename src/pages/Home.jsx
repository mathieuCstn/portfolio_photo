import { Link } from 'react-router-dom'
import {CloudinaryImage} from '@cloudinary/url-gen'
import {AdvancedImage} from '@cloudinary/react'
import {fill} from '@cloudinary/url-gen/actions/resize'
import './Home.css'

const cldImage = new CloudinaryImage('portfolio_photo/AX8A9491_vo9nu2', {cloudName: 'dmkyrjr2d'}).resize(fill().width(1000).height(997))

function Home() {
    return (
        <div>
            <section id="hero">
                <div>
                    <h1>Mathieu Constantin</h1>
                    <p>Je suis un photographe partageant des histoires racontées par ces photos.</p>
                    <Link to='/gallery' className='call-to-action'>Voire le portfolio</Link>
                </div>
                <div>
                    <AdvancedImage cldImg={cldImage} />
                </div>
            </section>
        </div>
    )
}

export default Home