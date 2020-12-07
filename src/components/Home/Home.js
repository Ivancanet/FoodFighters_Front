import "./Home.css";
import React from "react";



const Home = () => {
  return (
    <div>

      <header>
        <h1>Food Fighters Club</h1>
      </header>

      <body>
        <div className="carousel">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://instagram.fbcn9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/128860649_2800114690242441_7821875296597350177_n.jpg?_nc_ht=instagram.fbcn9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=g2DIJbyom4MAX-NmKEa&tp=1&oh=00e27aa81eec1c3d74dc10db68d8be90&oe=5FF60D9D"
                  class="d-block w-100" alt="Image1" />
                <div class="carousel-caption d-none d-md-block">

                </div>
                <h2>🤔CUANDO LOS CLÁSICOS...🚀</h2>
              </div>
              <div class="carousel-item">
                <img src="https://instagram.fbcn9-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/128375249_757170898227393_1112495552193325712_n.jpg?_nc_ht=instagram.fbcn9-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=olinDdT5FzkAX_wzHrw&tp=1&oh=de28a7f26a396ba032e7056223eaa3f3&oe=5FF62EC8"
                  class="d-block w-100" alt="Image2" />
                <div class="carousel-caption d-none d-md-block">

                </div>
                <h2>LA TIENDA DE LAS COSAS BUENAS❤️</h2>
              </div>
              <div class="carousel-item">
                <img src="https://instagram.fbcn9-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/75564137_292145635077563_5410649407704429868_n.jpg?_nc_ht=instagram.fbcn9-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=MQa8dNCT55cAX9C5E1-&tp=1&oh=f8c4ad99d26ca2e956c0d66d08247e32&oe=5FF7369F"
                  class="d-block w-100" alt="Image3" />
                <div class="carousel-caption d-none d-md-block">

                </div>
                <h2>🤘‼🎋 NISHIKI ONFIRE 🎋‼🤘</h2>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


        </div>
    <div className = 'test'>
    
    </div>
      </body>

    </div>
  );
};

export default Home;
