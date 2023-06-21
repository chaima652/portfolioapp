import React from "react";

function Services () {
    let message = "Hi, I'm a Web Developer, I like to learn about new web applications and technologies every day! 😉😄"
return(
    <section className="section-white">
        <div className="container">
            <div className="row">

                <div className="col-md-12_text-conter">
                    <h1 className="section-title">
                        React Portfolio
                    </h1>
                    <div className="the_midelle">
                       <div className="text"> 
                         <h2 className="name__1">Hello,my name is Aggoune Chaima</h2>
                         <h2 className="name__2">I'm a Web Developer</h2>
                         <p className="suction-subtitle">{message}</p>
                         <button className="button">
                            <img src="./logo192.png" alt="" />
                            React
                         </button>
                        </div>
                        <div className="image">
                         <img src="./image/photo.jpg" alt="" />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
)
}
export default Services;