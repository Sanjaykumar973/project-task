import { useContext, useEffect } from "react";
import FormContext from "../../FormContext";
import { useNavigate, Link } from "react-router-dom";

export default function Explore() {
  const { user, fetchAllTeachers, yogaTeachers, logout } =
    useContext(FormContext);

  const navigate = useNavigate();

  useEffect(() => {
    // if user doen'st exitst then go back to login
    if (!user) {
      console.log(user);
      navigate("/");
    } else {
      // otherwise fetch all his todos
      fetchAllTeachers();
    }
  }, []);

  return (
    <div>
      <div className="container-fluid my-4 py-4">
        <div className="row">
          <aside className="col-md-3">
            <div className="card">
              <article className="filter-group text-dark">
                <div
                  className="filter-content collapse show"
                  id="collapse_1"
                  style={{}}
                >
                  <div className="card-body">
                    <form className="pb-3">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-light" type="button">
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                    <header className="card-header">
                      <h6 className="title">Services </h6>
                    </header>
                    <ul className="list-menu">
                      <li>People</li>
                      <li>Watches</li>
                      <li>Cinema</li>
                      <li>Clothes</li>
                      <li>Home items</li>
                      <li>Animals</li>
                      <li>People</li>
                    </ul>
                  </div>{" "}
                  {/* card-body.// */}
                </div>
              </article>{" "}
              {/* filter-group  .// */}
              <article className="filter-group">
                <header className="card-header">
                  <h6 className="title">Brands </h6>
                </header>
                <div
                  className="filter-content collapse show"
                  id="collapse_2"
                  style={{}}
                >
                  <div className="card-body">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        defaultChecked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        Mercedes
                        <b className="badge badge-pill badge-light float-right">
                          120
                        </b>
                      </div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        defaultChecked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        Toyota
                        <b className="badge badge-pill badge-light float-right">
                          15
                        </b>
                      </div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        defaultChecked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        Mitsubishi
                        <b className="badge badge-pill badge-light float-right">
                          35
                        </b>{" "}
                      </div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        defaultChecked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">
                        Nissan
                        <b className="badge badge-pill badge-light float-right">
                          89
                        </b>{" "}
                      </div>
                    </label>
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">
                        Honda
                        <b className="badge badge-pill badge-light float-right">
                          30
                        </b>
                      </div>
                    </label>
                  </div>{" "}
                  {/* card-body.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <header className="card-header">
                  <h6 className="title">Price range </h6>
                </header>
                <div
                  className="filter-content collapse show"
                  id="collapse_3"
                  style={{}}
                >
                  <div className="card-body">
                    <input
                      type="range"
                      className="custom-range"
                      min={0}
                      max={100}
                      name=""
                    />
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Min</label>
                        <input
                          className="form-control"
                          placeholder="$0"
                          type="number"
                        />
                      </div>
                      <div className="form-group text-right col-md-6">
                        <label>Max</label>
                        <input
                          className="form-control"
                          placeholder="$1,0000"
                          type="number"
                        />
                      </div>
                    </div>{" "}
                    {/* form-row.// */}
                    <button className="btn btn-block btn-primary">Apply</button>
                  </div>
                  {/* card-body.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
              <article className="filter-group">
                <header className="card-header">
                  <h6 className="title">Sizes </h6>
                </header>
                <div
                  className="filter-content collapse show"
                  id="collapse_4"
                  style={{}}
                >
                  <div className="card-body">
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> XS </span>
                    </label>
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> SM </span>
                    </label>
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> LG </span>
                    </label>
                    <label className="checkbox-btn">
                      <input type="checkbox" />
                      <span className="btn btn-light"> XXL </span>
                    </label>
                  </div>
                  {/* card-body.// */}
                </div>
              </article>{" "}
            </div>{" "}
            {/* card.// */}
          </aside>
          <main className="col-md-9">
            <header className="border-bottom heading mb-4 pb-3">
              <h1>All Ours Yoga Teachers</h1>
            </header>
            {/* sect-heading */}
            <div className="row">
              {yogaTeachers &&
                yogaTeachers.map((item, index) => (
                  <div className="col-md-4">
                    <figure className="card card-product-grid">
                      <div className="img-wrap">
                        <img src={item && item.profile} className="img-fluid" />
                      </div>{" "}
                      {/* img-wrap.// */}
                      <figcaption className="info-wrap">
                        <div className="fix-height">
                          <h4 href="#" className="title">
                            {item && item.name}
                          </h4>
                          <p>{item && item.location}</p>
                          <p>{item && item.experience}</p>
                        </div>{" "}
                        <>
                          {/* Button trigger modal */}
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Book Now
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    BOOKING FORM
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <form action="">
                                    <div className="form-container">
                                      <div className="form-control">
                                        <label htmlFor="name">Name</label>
                                        <input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder="Enter Your  Name"
                                        />
                                      </div>

                                      <div className="form-control">
                                        <label htmlFor="email">Email</label>
                                        <input
                                          type="email"
                                          name="email"
                                          id="email"
                                          placeholder="Enter Your Email"
                                        />
                                      </div>

                                      <div className="textarea-control">
                                        <label htmlFor="address">Address</label>
                                        <textarea
                                          name="address"
                                          id="address"
                                          cols={50}
                                          rows={4}
                                          placeholder="Enter Your Address"
                                          defaultValue={""}
                                        />
                                      </div>

                                      <div className="form-control">
                                        <label htmlFor="DOB">
                                          Date of Birth
                                        </label>
                                        <input
                                          defaultValue="2022-01-10"
                                          type="date"
                                          name="DOB"
                                          id="DOB"
                                        />
                                      </div>
                                      <div className="form-control">
                                        <label htmlFor="time">Time</label>
                                        <input
                                          type="time"
                                          name="time"
                                          id="time"
                                        />
                                      </div>
                                    </div>
                                    <div className="button-container">
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          className="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Apply
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      </figcaption>
                    </figure>
                  </div>
                ))}
            </div>{" "}
            {/* row end.// */}
            <nav className="mt-4" aria-label="Page navigation sample">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
}
