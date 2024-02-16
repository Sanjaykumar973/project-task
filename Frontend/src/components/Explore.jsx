import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";

export default function Explore() {
  return (
    <div>
      <div className="container-fluid my-4 py-4">
        <div className="row">
          <aside className="col-md-3">
            <div className="card">
              <article className="filter-group">
                <header className="card-header">
                  <Link
                    to="#"
                    data-toggle="collapse"
                    data-target="#collapse_1"
                    aria-expanded="true"
                    className=""
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">Product type</h6>
                  </Link>
                </header>
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
                    <ul className="list-menu">
                      <li>
                        <a href="#">People</a>
                      </li>
                      <li>
                        <a href="#">Watches </a>
                      </li>
                      <li>
                        <a href="#">Cinema</a>
                      </li>
                      <li>
                        <a href="#">Clothes</a>
                      </li>
                      <li>
                        <a href="#">Home items </a>
                      </li>
                      <li>
                        <a href="#">Animals</a>
                      </li>
                      <li>
                        <a href="#">People </a>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* card-body.// */}
                </div>
              </article>{" "}
              {/* filter-group  .// */}
              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_2"
                    aria-expanded="true"
                    className=""
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">Brands </h6>
                  </a>
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
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_3"
                    aria-expanded="true"
                    className=""
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">Price range </h6>
                  </a>
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
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_4"
                    aria-expanded="true"
                    className=""
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">Sizes </h6>
                  </a>
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
              {/* filter-group .// */}
              <article className="filter-group">
                <header className="card-header">
                  <a
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse_5"
                    aria-expanded="false"
                    className=""
                  >
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">More filter </h6>
                  </a>
                </header>
                <div
                  className="filter-content collapse in"
                  id="collapse_5"
                  style={{}}
                >
                  <div className="card-body">
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        defaultChecked=""
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Any condition</div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Brand new </div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Used items</div>
                    </label>
                    <label className="custom-control custom-radio">
                      <input
                        type="radio"
                        name="myfilter_radio"
                        className="custom-control-input"
                      />
                      <div className="custom-control-label">Very old</div>
                    </label>
                  </div>
                  {/* card-body.// */}
                </div>
              </article>{" "}
              {/* filter-group .// */}
            </div>{" "}
            {/* card.// */}
          </aside>
          <main className="col-md-9">
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
    </div>
  );
}