<template>
   <div class="main-wrapper">
      <Slider/>
      <TopBanner/>
      <ShippingBanner/>
      <HomeProduct/>
      <HomeProductGallelry/>
      <!-- Begin Umino's Banner Area Six -->
      <div class="umino-banner_area umino-banner_area-6">
         <div class="container-fluid">
            <div class="row">
               <div class="col-lg-12">
                  <div class="umino-banner img-hover_effect">
                     <a href="single-product.html">
                     <img
                        src="assets/images/banner/3-4.jpg"
                        alt="Umino's Banner"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Umino's Footer Area End Here -->
      <!-- Begin Umino's Modal Area -->
      <div class="modal fade modal-wrapper" id="exampleModalCenter">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
               <div class="modal-body">
                  <button
                     type="button"
                     class="close"
                     data-dismiss="modal"
                     aria-label="Close"
                     >
                  <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="modal-inner-area sp-area row">
                     <div class="col-lg-5">
                        <div class="sp-img_area">
                           <div
                              class="sp-img_slider-2 slick-img-slider umino-slick-slider arrow-type-two"
                              data-slick-options='{
                              "slidesToShow": 1,
                              "arrows": false,
                              "fade": true,
                              "draggable": false,
                              "swipe": false,
                              "asNavFor": ".sp-img_slider-nav"
                              }'
                              >
                              <div class="single-slide red">
                                 <img
                                    src="assets/images/product/large-size/1.jpg"
                                    alt="Umino's Product Image"
                                    />
                              </div>
                              <div class="single-slide orange">
                                 <img
                                    src="assets/images/product/large-size/2.jpg"
                                    alt="Umino's Product Image"
                                    />
                              </div>
                              <div class="single-slide brown">
                                 <img
                                    src="assets/images/product/large-size/3.jpg"
                                    alt="Umino's Product Image"
                                    />
                              </div>
                              <div class="single-slide umber">
                                 <img
                                    src="assets/images/product/large-size/4.jpg"
                                    alt="Umino's Product Image"
                                    />
                              </div>
                           </div>
                           <div
                              class="sp-img_slider-nav slick-slider-nav umino-slick-slider arrow-type-two"
                              data-slick-options='{
                              "slidesToShow": 4,
                              "asNavFor": ".sp-img_slider-2",
                              "focusOnSelect": true
                              }'
                              data-slick-responsive='[
                              {"breakpoint":1501, "settings": {"slidesToShow": 3}},
                              {"breakpoint":1200, "settings": {"slidesToShow": 2}},
                              {"breakpoint":992, "settings": {"slidesToShow": 4}},
                              {"breakpoint":768, "settings": {"slidesToShow": 3}},
                              {"breakpoint":321, "settings": {"slidesToShow": 2}}
                              ]'
                              >
                              <div class="single-slide red">
                                 <img
                                    src="assets/images/product/small-size/1.jpg"
                                    alt="Umino's Product Thumnail"
                                    />
                              </div>
                              <div class="single-slide orange">
                                 <img
                                    src="assets/images/product/small-size/2.jpg"
                                    alt="Umino's Product Thumnail"
                                    />
                              </div>
                              <div class="single-slide brown">
                                 <img
                                    src="assets/images/product/small-size/3.jpg"
                                    alt="Umino's Product Thumnail"
                                    />
                              </div>
                              <div class="single-slide umber">
                                 <img
                                    src="assets/images/product/small-size/4.jpg"
                                    alt="Umino's Product Thumnail"
                                    />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-7 col-lg-6">
                        <div class="sp-content">
                           <div class="sp-heading">
                              <h5>
                                 <a href="single-product.html">Aliquet Auctor Semali</a>
                              </h5>
                           </div>
                           <div class="price-box">
                              <span class="new-price">$70.00</span>
                              <span class="old-price">$80.00</span>
                           </div>
                           <div class="features">
                              <a href="single-product.html">See all features</a>
                           </div>
                           <div class="quantity-area">
                              <div class="quantity">
                                 <label>Quantity</label>
                                 <div class="cart-plus-minus">
                                    <input
                                       class="cart-plus-minus-box"
                                       value="1"
                                       type="text"
                                       />
                                    <div class="dec qtybutton">
                                       <i class="fa fa-angle-down"></i>
                                    </div>
                                    <div class="inc qtybutton">
                                       <i class="fa fa-angle-up"></i>
                                    </div>
                                 </div>
                              </div>
                              <div class="quantity-btn">
                                 <ul>
                                    <li>
                                       <a href="cart.html" class="add-to_cart"
                                          >Add To Cart</a
                                          >
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div class="short-desc">
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur adipisicing
                                 elit, sed do eiusmod tempor incididunt ut labore et
                                 dolore magna aliqua. Ut enim ad minim veniam, quis
                                 nostrud exercitation ullamco,Proin lectus ipsum, gravida
                                 et mattis vulputate, tristique ut lectus
                              </p>
                           </div>
                           <div class="umino-social_link">
                              <div class="social-title">
                                 <h3>Share This Product</h3>
                              </div>
                              <ul>
                                 <li class="facebook">
                                    <a
                                       href="https://www.facebook.com/"
                                       data-toggle="tooltip"
                                       target="_blank"
                                       title="Facebook"
                                       >
                                    <i class="fab fa-facebook"></i>
                                    </a>
                                 </li>
                                 <li class="twitter">
                                    <a
                                       href="https://twitter.com/"
                                       data-toggle="tooltip"
                                       target="_blank"
                                       title="Twitter"
                                       >
                                    <i class="fab fa-twitter-square"></i>
                                    </a>
                                 </li>
                                 <li class="youtube">
                                    <a
                                       href="https://www.youtube.com/"
                                       data-toggle="tooltip"
                                       target="_blank"
                                       title="Youtube"
                                       >
                                    <i class="fab fa-youtube"></i>
                                    </a>
                                 </li>
                                 <li class="google-plus">
                                    <a
                                       href="https://www.plus.google.com/discover"
                                       data-toggle="tooltip"
                                       target="_blank"
                                       title="Google Plus"
                                       >
                                    <i class="fab fa-google-plus"></i>
                                    </a>
                                 </li>
                                 <li class="instagram">
                                    <a
                                       href="https://rss.com/"
                                       data-toggle="tooltip"
                                       target="_blank"
                                       title="Instagram"
                                       >
                                    <i class="fab fa-instagram"></i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Umino's Modal Area End Here -->
   </div>
</template>
<script>
   import Slider from '../Slider'
   import TopBanner from '../TopBanner'
   import ShippingBanner from '../ShippingBanner'
   import HomeProduct from '../product/HomeProduct'
   import HomeProductGallelry from '../product/HomeProductGallelry'
   
   export default {
     name: 'Home',
     components: {
       Slider,
       TopBanner,
       HomeProduct,
       HomeProductGallelry,
       ShippingBanner
     }
   }
</script>