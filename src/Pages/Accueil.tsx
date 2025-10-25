import React from 'react'
import "../components/Navbar/NavBar.css"
export default function Accueil() {

  return (
    <>

        <div>
            <div className="row container-fluid mx-3 d-flex mt-3 color-contenaire w-auto ">
                <div className="col-md-7">
                <p className="bg-light shadow-lg rounded-pill p-1 my-1" style={{width:'40%'}}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-stars"
                    viewBox="0 0 16 16"
                    >
                    <path
                        d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"
                    />
                    </svg>
                    100% Produits locaux et frais
                </p>

                <h1>
                    Vendez, Achetez, <br />
                    Consommez les <br />
                    meilleurs <br />
                    produits de vos localités <br /><span className="text-color"
                    >en toute sécurité</span>
                </h1>

                <p className="col-md-5">
                    La prémière marcketplace guinéenne qui connecte directement les
                    producteurs locaux avec les consommateurs. Des produits frais,
                    traçables et livrés rapidement.
                </p>
                <hr />
                <div className="d-flex gap-5 ">
                    <div className="card_chiffre ">
                    <div className="card-body">
                        <h5 className="card-title text-color">500+</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                        Producteurs
                        </h6>
                    </div>
                    </div>
                    <div className="card_chiffre">
                    <div className="card-body">
                        <h5 className="card-title text-success">2000+</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Produits</h6>
                    </div>
                    </div>
                    <div className="card_chiffre">
                    <div className="card-body">
                        <h5 className="card-title text-color">100+</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">local</h6>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-5 d-block align-self-center">
                <img
                    src="src\assets\fruitMarcket.jpg"
                    className="d-block align-item-end img-fluid h-75"
                    alt=""
                />
                </div>
            </div>
        </div>

        <div className="p-5">
            <h1 className="ms-3 mt-4">Nos meilleurs produits</h1>
            <div className="row mt-4">

            <div className="col-md-3 ">
                <div className="card">
                <img src="src\assets\taro.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Taro</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel consectetur quisquam dicta, minus sed non eligendi rerum maiores, perferendis vero placeat voluptatum qui porro, fugit voluptatibus explicabo. Quia, reprehenderit atque.</p>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            <div className="col-md-3 ">
                <div className="card">
                <img src="src\assets\Pear.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Taro</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel consectetur quisquam dicta, minus sed non eligendi rerum maiores, perferendis vero placeat voluptatum qui porro, fugit voluptatibus explicabo. Quia, reprehenderit atque.</p>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            <div className="col-md-3 ">
                <div className="card">
                <img src="src\assets\pastèque.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Taro</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel consectetur quisquam dicta, minus sed non eligendi rerum maiores, perferendis vero placeat voluptatum qui porro, fugit voluptatibus explicabo. Quia, reprehenderit atque.</p>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            <div className="col-md-3 ">
                <div className="card">
                <img src="src\assets\oignon.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Taro</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel consectetur quisquam dicta, minus sed non eligendi rerum maiores, perferendis vero placeat voluptatum qui porro, fugit voluptatibus explicabo. Quia, reprehenderit atque.</p>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            </div>
        </div>

        <div className="p-5">
            <h1 className="ms-3 mt-4">Nos Fruits et légumes</h1>
            <div className="row mt-4">

            <div className="col-md-2 ">
                <div className="card">
                <img src="src\assets\taro.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Taro</h5>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            <div className="col-md-2 ">
                <div className="card">
                <img src="src\assets\Pear.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Pêche</h5>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            <div className="col-md-2 ">
                <div className="card">
                <img src="src\assets\Cherries.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Cérise</h5>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card">
                <img src="src\assets\oignon.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Oignon</h5>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card">
                <img src="src\assets\oignon.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Fraise</h5>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card">
                <img src="src\assets\oignon.jpg" className="img-fluid card-img-top w-50 mx-auto d-block" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Banane</h5>
                    <div className="text-warning">★★★★★</div>
                </div>
                </div>
            </div>

            </div>
        </div>

    </>



  )
}
