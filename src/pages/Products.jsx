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
    const [showUpdateProductForm, setShowUpdateProductForm] = useState(false)
    const [product, setProduct] = useState({})
    const axiosPrivate = useAxiosPrivate()
    const getProducts = async () => {
        const { data } = await axios.get('/api/products')
        setProductsList(data.products)
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    useEffect(() => {
        const newProductForm = document.getElementById('new-product-form')
        if(showNewProductForm) {
            newProductForm.showModal()
        } else {
            newProductForm.close()
        }
    }, [showNewProductForm])

    useEffect(() => {
        const updateProductForm = document.getElementById('update-product-form')
        if(updateProductForm) {
            if(showUpdateProductForm) {
                updateProductForm.showModal()
            } else {
                updateProductForm.close()
            }
        }
    }, [showUpdateProductForm])

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
        alert(response.data.message)
        getProducts()
    }

    const handleSubmitUpdateProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        formData.append('cld_public_id', product?.cld_public_id)
        const response = await axiosPrivate.put(`/api/products/${product.id}`, formData)
        alert(response.data.message)
        getProducts()
    }

    const handleClickDeleteProductButton = async () => {
        const response = await axiosPrivate.delete(`/api/products/${product.id}`)
        alert(response.data.message)
        getProducts()
    }

    return (
        <section id="products">
            <h1>Articles</h1>
            <dialog id="new-product-form">
                <button onClick={() => setShowNewProductForm(false)}>Fermer le formulaire d'ajout ❌</button>
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

                    <button>Ajouter un article ✅</button>
                </form>
            </dialog>
            {
                product ? (
                    <dialog id="update-product-form">
                        <button onClick={() => setShowUpdateProductForm(false)}>Fermer le formulaire de mise à jour ❌</button>
                        <p><AdvancedImage cldImg={cld.image(product.cld_public_id).resize(fill().width(600))} /></p>
                        <form onSubmit={handleSubmitUpdateProduct}>
                            {/* <label htmlFor="update-article-form-image">Votre image</label>
                            <input type="file" name="image" id="update-article-form-image" /> */}

                            <label htmlFor="update-article-form-title">Titre</label>
                            <input type="text" name="title" id="update-article-form-title" defaultValue={product.title} />

                            <label htmlFor="update-article-form-description">Description</label>
                            <input type="text" name="description" id="update-article-form-description" defaultValue={product.description} />

                            <label htmlFor="update-article-form-price">Prix</label>
                            <input type="number" name="price" id="update-article-form-price" defaultValue={product.price} />

                            <label htmlFor="update-article-form-quantity">Quantité</label>
                            <input type="number" name="quantity" id="update-article-form-quantity" defaultValue={product.quantity} />

                            <label htmlFor="update-article-form-avalible">Rendre disponible</label>
                            <input type="checkbox" name="avalible" id="update-article-form-avalible" defaultChecked={product.avalible} />

                            <button>Mettre à joure l'article ✅</button>
                        </form>
                        <button onClick={handleClickDeleteProductButton} className="delete-button">Supprimer l'article</button>
                    </dialog>
                ) : null
            }
            <button onClick={() => setShowNewProductForm(true)} className="new-product-button">Nouvel Article</button>
            <div className="products-display">
                {
                    productsList.map(_product => (
                        <div key={_product.id} className="product-container" onClick={() => {
                            setProduct(_product)
                            setShowUpdateProductForm(true)
                        }}>
                            <div className="product-overview">
                                <AdvancedImage cldImg={cld.image(_product.cld_public_id).resize(fill().width(245))}/>
                            </div>
                            <div className="product-info">
                                <h3>{_product.title}</h3>
                                <p>x{_product.quantity}</p>
                                <p>{_product.price}€</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Products