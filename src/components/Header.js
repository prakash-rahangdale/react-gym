import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">{this.props.text}</h1>
                </header>

                <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/cx3.jpg" alt="Los Angeles" width="1100" height="500" />
      <div class="carousel-caption">
      </div>   
    </div>
    <div class="carousel-item">
      <img src="/img/crosstrek.jpg" alt="Chicago" width="1100" height="500" />
      <div class="carousel-caption">
      </div>   
    </div>
    <div class="carousel-item">
      <img src="/img/renegade.jpg" alt="New York" width="1100" height="500" />
      <div class="carousel-caption">
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

            </div>
        );
    }
}

export default Header;