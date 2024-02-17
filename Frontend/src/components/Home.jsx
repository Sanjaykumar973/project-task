import { useContext, useEffect } from "react";
import FormContext from "../../FormContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import TeachersBar from "./TeachersBar";
export default function Home() {
  const { user, fetchAllTeachers, yogaTeachers, logout } =
    useContext(FormContext);
  const navigator = useNavigate();

  useEffect(() => {
    // if user doen'st exitst then go back to login
    if (!user) {
      console.log(user);
      navigator("/");
    } else {
      // otherwise fetch all his todos
      fetchAllTeachers();
    }
  }, []);

  return (
    <div>
      <div className="hero-search">
        <h1>
          Welcome To <span>YOGPATH</span>
        </h1>
        <input
          className="input"
          type="text"
          placeholder="Search your Yoga Teacher"
        />
        <button className="action-btn">Search</button>
      </div>
      <div className="container">
        <main className="col-md-12">
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
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Book Now
                      </button>
                      {/* Modal */}
                    </figcaption>
                  </figure>
                </div>
              ))}
          </div>{" "}
          {/* row end.// */}
        </main>
      </div>
    </div>
  );
}
