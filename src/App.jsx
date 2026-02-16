import axios from "axios";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const [showAlertOk, setShowAlertOk] = useState(false);
  const [showAlertKo, setShowAlertKo] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  function handleFormChange(e) {
    const { name, value, type, checked } = e.target;

    // console.log("input name:", name);
    // console.log("input value:", value);
    // console.log("input type:", type);
    // console.log("input checked:", checked);

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowSpinner(true);

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((response) => {
        setShowSpinner(false);
        setFormData({
          author: "",
          title: "",
          body: "",
          public: false,
        });

        // setTimeout(() => {
        //   setShowAlert(false);
        //   console.log("ciaoo");
        // }, 3000);
      })
      .catch((error) => {
        setShowAlertKo(true);
        setTimeout(() => {
          setShowAlertKo(false);
        }, 3000);
      })
      .finally(() => {
        setShowAlertOk(true);
        setTimeout(() => {
          setShowAlertOk(false);
        }, 3000);
      });
  }

  return (
    <>
      <section className="d-flex justify-content-center align-items-center p-5">
        <div className="container text-center mt-5">
          {showSpinner && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}

          {showAlertOk && (
            <div className="alert alert-success" role="alert">
              Dati inviati
            </div>
          )}

          {showAlertKo && (
            <div className="alert alert-danger" role="alert">
              Ricontrolla i campi
            </div>
          )}
          <form onSubmit={handleSubmit} className="form-control bg-light">
            <div className="mt-3 text-start">
              <label htmlFor="nome-autore" className="form-label">
                <span className="fw-bold">Autore:</span>
              </label>
              <input
                //
                value={formData.author}
                name="author"
                onChange={handleFormChange}
                //
                className="form-control mb-3"
                type="text"
                aria-label="default input example"
                id="nome-autore"
              ></input>
            </div>
            <div className="text-start">
              <label htmlFor="titolo" className="form-label">
                <span className="fw-bold">Titolo:</span>
              </label>
              <input
                //
                value={formData.title}
                name="title"
                onChange={handleFormChange}
                //
                className="form-control"
                type="text"
                aria-label="default input example"
                id="titolo"
              ></input>
            </div>
            <div className="mb-3 mt-3 text-start">
              <label htmlFor="description" className="form-label">
                <span className="fw-bold">Descrizione:</span>
              </label>
              <textarea
                //
                value={formData.body}
                name="body"
                onChange={handleFormChange}
                //
                className="form-control"
                id="description"
                rows="3"
              ></textarea>
            </div>
            <div className="form-check text-start mb-3">
              <input
                //
                checked={formData.public}
                name="public"
                onChange={handleFormChange}
                //
                className="form-check-input"
                type="checkbox"
                id="checkDefault"
              />
              <label className="form-check-label" htmlFor="checkDefault">
                Desideri che il post sia pubblico?
              </label>
            </div>
            <button className="btn btn-primary">Invia</button>
          </form>
        </div>
      </section>
    </>
  );
}
