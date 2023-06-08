import { useState, useEffect } from "react"
import axios from "../api/axios"
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react"
import { fill } from "@cloudinary/url-gen/actions/resize"
import config from '../config'
import './Products.css'

function Products() {
    const [productsList, setProductsList] = useState([])
    const [showNewProductForm, setShowNewProductForm] = useState(false)
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        const newProductForm = document.getElementById('new-product-form')
        if(showNewProductForm) {
            newProductForm.showModal()
        } else {
            newProductForm.close()
        }
    }, [showNewProductForm])

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

    const handleSubmitNewProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const response = await axiosPrivate.post('/api/products/add', formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
        console.log(response.data)
    }

    return (
        <section id="products">
            <dialog id="new-product-form">
                <button onClick={() => setShowNewProductForm(false)}>Fermer le formulaire d'envoi ❌</button>
                <form onSubmit={handleSubmitNewProduct}>
                    <label htmlFor="new-article-form-image">Votre image</label>
                    <input type="file" name="image" id="new-article-form-image" />

                    <label htmlFor="new-article-form-title">Titre</label>
                    <input type="text" name="title" id="new-article-form-title" />

                    <label htmlFor="new-article-form-description">Description</label>
                    <input type="text" name="description" id="new-article-form-description" />

                    <label htmlFor="new-article-form-price">Prix</label>
                    <input type="number" name="price" id="new-article-form-price" />

                    <label htmlFor="new-article-form-quantity">Quantité</label>
                    <input type="number" name="quantity" id="new-article-form-quantity" />

                    <label htmlFor="new-article-form-avalible">Rendre disponible</label>
                    <input type="checkbox" name="avalible" id="new-article-form-avalible" defaultChecked={true} />

                    <button>Soumettre ✅</button>
                </form>
            </dialog>
            <button onClick={() => setShowNewProductForm(true)} className="NewProductButton">Nouvel Article</button>
            <div className="products-display">
                {
                    productsList.map(product => (
                        <div key={product.id} className="product-container">
                            <div className="product-overview">
                                <AdvancedImage cldImg={cld.image(product.cld_public_id).resize(fill().width(245))}/>
                            </div>
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <p>x{product.id}</p>
                                <p>{product.price}€</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Products