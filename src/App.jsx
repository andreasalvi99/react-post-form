import { useState } from "react";

export default function App() {
  const { formData, setFormData } = useState({
    author: "",
    titile: "",
    body: "",
    public: false,
  });

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <section className="d-flex justify-content-center align-items-center p-5">
        <div className="container text-center mt-5">
          <form className="form-control bg-light">
            <div className="mt-3 text-start">
              <label htmlFor="nome-autore" className="form-label">
                <span className="fw-bold">Nome:</span>
              </label>
              <input
                //
                // value={formData.author}
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
            <div class="mb-3 mt-3 text-start">
              <label for="exampleFormControlTextarea1" class="form-label">
                <span className="fw-bold">Title:</span>
              </label>
              <textarea
                //
                value={formData.body}
                name="body"
                onChange={handleFormChange}
                //
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-check text-start mb-3">
              <input
                //
                value={formData.public}
                name="public"
                onChange={handleFormChange}
                //
                className="form-check-input"
                type="checkbox"
                id="checkDefault"
              />
              <label className="form-check-label" for="checkDefault">
                Desideri che il post sia pubblico?
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
