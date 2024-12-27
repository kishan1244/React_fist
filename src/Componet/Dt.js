// import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './Dt.css'


const Dt = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.FJ3ZTZwf8F9yhttigDX_kwHaDt?w=304&h=174&c=7&r=0&o=5&dpr=1.2&pid=1.7"  alt="" id='IMG'/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.odBpDWtzQLB1QhbnvoCnaAHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7"  alt="" id='IMG'/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.l3JQFEa3oTmez1BOF_GqYwHaEK?w=319&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7"  alt="" id='IMG'/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="false"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    );

};
export default Dt;