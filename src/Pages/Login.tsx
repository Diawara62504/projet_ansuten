import React from "react";
import "./Page.css";
import { useNavigate } from "react-router";
export default function Login() {
    const routes = useNavigate()
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img src="src\assets\img-login.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 mt-5">
          <div className="container ">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h3 className="text-center mb-4 fw-bold">
                  Formulaire de connexion
                </h3>

                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      id="email"
                      placeholder="Entrez votre email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-3 shadow-sm"
                      id="password"
                      placeholder="••••••••"
                    />
                  </div>

                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" for="remember">
                      Se souvenir de moi
                    </label>
                  </div>

               
                  <div className="d-grid">
                        <button
                      type="submit"
                      className="btn btn-lg rounded-3 shadow-sm "
                      style={{backgroundColor:"#FFA400" ,color: "white"}}
                      onClick={()=>routes("/")}
                    >
                      Se connecter
                    </button>
                  </div>
                  
                </form>

                <p className="text-center mt-3 text-muted">
                  Pas de compte ?
                  <a
                    href="#"
                    className="text-decoration-none fw-semibold color-text "
                  >
                    Créer un compte
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
