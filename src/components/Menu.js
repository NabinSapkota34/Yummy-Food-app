import React, { useState } from "react";
import food from "../assets/Ellipse 3.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("starters");

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h2 className="fw-bold text-uppercase text-center mt-5">
            Check our <span style={{ color: "#B20A0D" }}>yummy menu</span>
          </h2>
          <div className="col-lg-12">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-lg-auto flex-row justify-content-center mt-3 gap-5">
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    activeSection === "starters" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("starters")}
                >
                  Starters
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    activeSection === "breakfast" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("breakfast")}
                >
                  Breakfast
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    activeSection === "lunch" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("lunch")}
                >
                  Lunch
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link fw-bold ${
                    activeSection === "dinner" ? "active" : ""
                  }`}
                  onClick={() => handleSectionClick("dinner")}
                >
                  Dinner
                </Link>
              </li>
            </ul>
          </div>
          {/* Starter */}
          {activeSection === "starters" && (
            <section className="container mt-4">
                      <h2 className="fs-5 text-center mt-5">Menu</h2>
      <h2 className="fw-bold text-uppercase text-center mt-2 fs-2"><span style={{color: '#B20A0D'}}>Starters</span></h2>
      <div className="d-flex flex-row justify-content-center align-items-center mt-2" style={{gap: '200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"><span style={{color: '#B20A0D'}}>$5.95</span></h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>
        </div>
      </div>

      {/* <!-- next --> */}
      <div className="d-flex flex-row justify-content-center align-items-center mt-5" style={{gap: '200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
      </div>
            </section>
          )}

          {/* Breakfast */}
          {activeSection === "breakfast" && (
            <section className="container mt-4">
                      <h2 className="fs-5 text-center mt-5">Menu</h2>
      <h2 className="fw-bold text-uppercase text-center mt-2 fs-2"><span style={{color: '#B20A0D'}}>Breakfast</span></h2>
      <div className="d-flex flex-row justify-content-center align-items-center mt-2" style={{gap: '200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Laphing</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"><span style={{color: '#B20A0D'}}>$5.95</span></h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Laphing</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>
        </div>
      </div>

      {/* <!-- next --> */}
      <div className="d-flex flex-row justify-content-center align-items-center mt-5" style={{gap: '200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
      </div>
            </section>
          )}

          {/* Lunch */}
          {activeSection === "lunch" && (
            <section className="container mt-4">
                      <h2 className="fs-5 text-center mt-5">Menu</h2>
      <h2 className="fw-bold text-uppercase text-center mt-2 fs-2"><span style={{color: '#B20A0D'}}>Lunch</span></h2>
      <div className="d-flex flex-row justify-content-center align-items-center mt-2" style={{gap: '200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Momo</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"><span style={{color: '#B20A0D'}}>$5.95</span></h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Momo</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>
        </div>
      </div>

      {/* <!-- next --> */}
      <div className="d-flex flex-row justify-content-center align-items-center mt-5" style={{gap: '200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
      </div>
            </section>
          )}

          {/* Dinner */}
          {activeSection === "dinner" && (
            <section className="container mt-4">
                      <h2 className="fs-5 text-center mt-5">Menu</h2>
      <h2 className="fw-bold text-uppercase text-center mt-2 fs-2"><span style={{color: '#B20A0D'}}>Dinner</span></h2>
      <div className="d-flex flex-row justify-content-center align-items-center mt-2" style={{gap: '200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Salad</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"><span style={{color: '#B20A0D'}}>$5.95</span></h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Salad</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Salad</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>
        </div>
      </div>

      {/* <!-- next --> */}
      <div className="d-flex flex-row justify-content-center align-items-center mt-5" style={{gap: '200px'}}>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
        <div className="d-flex flex-column justify-content-center align-items-center me-3">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={food} className="img-fluid" alt="Responsive image" height="135" width="135"/>
          <h2 className="fs-3 mt-4 fw-bold">Chowmein</h2>
          <h2 className="fs-5 mt-2 fw-medium">Delicious Food</h2>
          <h2 className="fw-bold fs-3"style={{color: '#B20A0D'}}>$5.95</h2>

        </div>
      </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
