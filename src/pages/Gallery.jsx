import { useEffect, useState } from "react"
import axios from '../api/axios'
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react"
import { fill } from "@cloudinary/url-gen/actions/resize"
import config from '../config'
import './Gallery.css'
import { Helmet } from "react-helmet"

function Gallery() {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('/api/products')
            setProductsList(data.products)
        }
        getProducts()
    }, [])

    const cld = new Cloudinary({
        cloud: {
            cloudName: config.cloudinaryConfiguration.cloudName
        }
    })

    return (
        <section id="gallery">
            <Helmet>
                <title>Gallery - Mathieu constantin</title>
                <meta name="description" content="La galerie photos de Mathieu Constantin" />
            </Helmet>
            <div className="gallery-container">
                {
                    productsList.map(product => (
                        <div key={product.id}>
                            <AdvancedImage cldImg={cld.image(product.cld_public_id).resize(fill().width(600))} alt={product.cld_public_id} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Gallery