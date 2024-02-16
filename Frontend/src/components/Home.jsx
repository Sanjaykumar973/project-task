import { useContext, useEffect } from "react";
import FormContext from "../../FormContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import TeachersBar from "./TeachersBar";
export default function Home() {
  const { user, fetchAllTeacher, yogaTeacher, logout } =
    useContext(FormContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if user doen'st exitst then go back to login
    if (!user) {
      console.log(user);
      navigate("/");
    } else {
      // otherwise fetch all his todos
      fetchAllTeacher();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <main className="col-md-12">
          <header className="border-bottom mb-4 pb-3">
            <div className="form-inline">
              <span className="mr-md-auto">32 Items found </span>
              <select className="mr-2 form-control">
                <option>Latest items</option>
                <option>Trending</option>
                <option>Most Popular</option>
                <option>Cheapest</option>
              </select>
              <div className="btn-group">
                <a
                  href="#"
                  className="btn btn-outline-secondary"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="List view"
                >
                  <i className="fa fa-bars" />
                </a>
                <a
                  href="#"
                  className="btn  btn-outline-secondary active"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Grid view"
                >
                  <i className="fa fa-th" />
                </a>
              </div>
            </div>
          </header>
          {/* sect-heading */}
          <div className="row">
            <div className="col-md-4">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <span className="badge badge-danger"> NEW </span>
                  <img
                    src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg"
                    className="img-fluid"
                  />
                  <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                  </a>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <div className="fix-height">
                    <a href="#" className="title">
                      Great item name goes here
                    </a>
                    <div className="price-wrap mt-2">
                      <span className="price">$1280</span>
                      <del className="price-old">$1980</del>
                    </div>{" "}
                    {/* price-wrap.// */}
                  </div>
                  <a href="#" className="btn btn-block btn-primary">
                    Add to cart{" "}
                  </a>
                </figcaption>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-4">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <img
                    src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg"
                    className="img-fluid"
                  />
                  <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                  </a>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <div className="fix-height">
                    <a href="#" className="title">
                      Product name goes here just for demo item
                    </a>
                    <div className="price-wrap mt-2">
                      <span className="price">$1280</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                  </div>
                  <a href="#" className="btn btn-block btn-primary">
                    Add to cart{" "}
                  </a>
                </figcaption>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-4">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <img
                    src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg"
                    className="img-fluid"
                  />
                  <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                  </a>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <div className="fix-height">
                    <a href="#" className="title">
                      Product name goes here just for demo item
                    </a>
                    <div className="price-wrap mt-2">
                      <span className="price">$1280</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                  </div>
                  <a href="#" className="btn btn-block btn-primary">
                    Add to cart{" "}
                  </a>
                </figcaption>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-4">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <img
                    src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg"
                    className="img-fluid"
                  />
                  <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                  </a>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <div className="fix-height">
                    <a href="#" className="title">
                      Product name goes here just for demo item
                    </a>
                    <div className="price-wrap mt-2">
                      <span className="price">$1280</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                  </div>
                  <a href="#" className="btn btn-block btn-primary">
                    Add to cart{" "}
                  </a>
                </figcaption>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-4">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <img
                    src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg"
                    className="img-fluid"
                  />
                  <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                  </a>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <div className="fix-height">
                    <a href="#" className="title">
                      Product name goes here just for demo item
                    </a>
                    <div className="price-wrap mt-2">
                      <span className="price">$1280</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                  </div>
                  <a href="#" className="btn btn-block btn-primary">
                    Add to cart{" "}
                  </a>
                </figcaption>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-4">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <img
                    src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg"
                    className="img-fluid"
                  />
                  <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                  </a>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <div className="fix-height">
                    <a href="#" className="title">
                      Product name goes here just for demo item
                    </a>
                    <div className="price-wrap mt-2">
                      <span className="price">$1280</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                  </div>
                  <a href="#" className="btn btn-block btn-primary">
                    Add to cart{" "}
                  </a>
                </figcaption>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-4">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <img
                    src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg"
                    className="img-fluid"
                  />
                  <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                  </a>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <div className="fix-height">
                    <a href="#" className="title">
                      Product name goes here just for demo item
                    </a>
                    <div className="price-wrap mt-2">
                      <span className="price">$1280</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                  </div>
                  <a href="#" className="btn btn-block btn-primary">
                    Add to cart{" "}
                  </a>
                </figcaption>
              </figure>
            </div>{" "}
            {/* col.// */}
            <div className="col-md-4">
              <figure className="card card-product-grid">
                <div className="img-wrap">
                  <img
                    src="http://bootstrap-ecommerce.com/bootstrap-ecommerce-html/images/items/7.jpg"
                    className="img-fluid"
                  />
                  <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                  </a>
                </div>{" "}
                {/* img-wrap.// */}
                <figcaption className="info-wrap">
                  <div className="fix-height">
                    <a href="#" className="title">
                      Product name goes here just for demo item
                    </a>
                    <div className="price-wrap mt-2">
                      <span className="price">$1280</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                  </div>
                  <a href="#" className="btn btn-block btn-primary">
                    Add to cart{" "}
                  </a>
                </figcaption>
              </figure>
            </div>{" "}
            {/* col.// */}
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
  );
}
