export default function App() {
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
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-check text-start mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
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
