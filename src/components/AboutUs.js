import React from 'react';
import imagehero from "../assets/imagehero.png";
import menu from "../assets/menu.png";
import diamond from "../assets/diamond.png";



const AboutUs = () => {
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <h2 className="fw-bold text-uppercase text-center">Learn More <span style={{ color: '#B20A0D' }}>About Us</span></h2>
        <div className="col-lg-12 d-flex">
          <div className="col-lg-6 mt-5">
            <img src={imagehero} className="img-fluid mt-5 mx-lg-5" alt="Hero image" height="400" width="400" />
          </div>
          <div className="col-lg-6 mt-5">
            <p className="mt-4 mx-5" style={{ fontStyle: 'normal', color: '#808080' }}>
              You can taste the food as you like to feel <br />
              the real combination of delicious item <br />
              cheers.
            </p>
            <p className="mt-4 mx-5" style={{ fontStyle: 'normal', color: '#808080' }}><span style={{ color: '#B20A0D' }}>&#10004;&#10004;</span> Delicious Food</p>
            <p className="mx-5" style={{ fontStyle: 'normal', color: '#808080' }}><span style={{ color: '#B20A0D' }}>&#10004;&#10004;</span> Delicious Food</p>
            <p className="mx-5" style={{ fontStyle: 'normal', color: '#808080' }}><span style={{ color: '#B20A0D' }}>&#10004;&#10004;</span> Delicious Food</p>

            <div className="mx-5 mt-5">
              <iframe width="300" height="200" src="https://www.youtube.com/embed/DkivMwexzyA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              {/* <div className="mt-3 text-center">
                <button className="btn btn-primary mx-2" onClick={() => document.getElementsByTagName('iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')} style={{ backgroundColor: 'red' }}>Play</button>
                <button className="btn btn-danger mx-2" onClick={() => document.getElementsByTagName('iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')} style={{ backgroundColor: 'red' }}>Stop</button>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
    
    <div className="container">
    <div className="row">
      <div className="col-lg-12 d-flex gap-5 mx-5">
        <div className="card" style={{ width: "18rem", background: "#CB5554" }}>
          <div className="card-body">
            <h2 className="" style={{ color: "#FFFFFF", lineHeight: "42px" }}>
              Why Choose <br /> Yummy ?
            </h2>
            <p
              className="card-text d-flex"
              style={{ color: "#FFFFFF" }}
            >
              Here we can provide the <br />
              delicious food for you <br /> and you can order as <br /> you
              want to feel satisfy <br />
              thanks
            </p>
            <button
              className="btn mt-3 mx-4 px-3"
              style={{
                background: "#CB5554",
                color: "#FFFFFF",
                borderRadius: "30px",
                border: "1px solid #FFFFFF",
              }}
              type="submit"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className="card mt-3"
          style={{
            width: "18rem",
            border: "1px solid #C4BFBF",
            filter: "drop-shadow(6px 11px 4px #bdbcbc)",
            borderRadius: "30px",
          }}
        >
          <div
            className="card-header mx-auto"
            style={{
              borderRadius: "100px",
              height: "75px",
              width: "75px",
              background: "rgba(219, 53, 52, 0.18)",
              marginTop: "12px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <img
                src={menu} 
                className="img-fluid"
                alt="Responsive image"
                height="235"
                width="235"
              />
            </div>
          </div>
          <div className="card-body">
            <h4 className="text-center fw-medium">
              Corporis <br />
              voluptatesofficial <br />
              eiusmod
            </h4>
            <p
              className="card-text d-flex mt-4 mx-3"
              style={{ color: "#808080", marginTop: "12px" }}
            >
              Consequuntur sunt aut <br />
              quasi enim aliquam <br />
              quae harum pariatur <br />
              laboris nisi ut aliquip
            </p>
          </div>
        </div>
        <div
          className="card mt-3"
          style={{
            width: "18rem",
            border: "1px solid #C4BFBF",
            filter: "drop-shadow(6px 11px 4px #bdbcbc)",
            borderRadius: "30px",
          }}
        >
          <div
            className="card-header mx-auto"
            style={{
              borderRadius: "100px",
              height: "75px",
              width: "75px",
              background: "rgba(219, 53, 52, 0.18)",
              marginTop: "12px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <img
                src={diamond} 
                className="img-fluid"
                alt="Responsive image"
height="235"
width="235"
/>
</div>
</div>
<div className="card-body">
<h4 className="text-center fw-medium">
Deleniti <br />
voluptatesofficial <br />
dignissimos
</h4>
<p
className="card-text d-flex mt-4 mx-3"
style={{ color: "#808080", marginTop: "12px" }}
>
Consequuntur sunt aut <br />
quasi enim aliquam <br />
quae harum pariatur <br />
laboris nisi ut aliquip
</p>
</div>
</div>
<div
className="card mt-3"
style={{
width: "18rem",
border: "1px solid #C4BFBF",
filter: "drop-shadow(6px 11px 4px #bdbcbc)",
borderRadius: "30px",
}}
>
<div
className="card-header mx-auto"
style={{
borderRadius: "100px",
height: "75px",
width: "75px",
background: "rgba(219, 53, 52, 0.18)",
marginTop: "12px",
}}
>
<div
className="d-flex justify-content-center align-items-center"
style={{ height: "100%" }}
>
<img
             src={menu} 
             className="img-fluid"
             alt="Responsive image"
             height="235"
             width="235"
           />
</div>
</div>
<div className="card-body">
<h4 className="text-center fw-medium">
Reprehenderit <br />
voluptatesofficial <br />
dolorum
</h4>
<p
className="card-text d-flex mt-4 mx-3"
style={{ color: "#808080", marginTop: "12px" }}
>
Consequuntur sunt aut <br />
quasi enim aliquam <br />
quae harum pariatur <br />
laboris nisi ut aliquip
</p>
</div>
</div>
</div>
</div>
</div>
</>

  );
};

export default AboutUs;
