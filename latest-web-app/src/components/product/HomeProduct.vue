<template>
   <div class="umino-product-tab_area">
      <div class="umino-product-tab_nav">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="product-tab">
                     <ul class="nav product-menu">
                        <li>
                           <a class="active" data-toggle="tab" href="#featured"><span>Featured</span></a>
                        </li>
                        <li>
                           <a data-toggle="tab" href="#new-arrivals"><span>New Arrivals</span></a>
                        </li>
                        <li>
                           <a data-toggle="tab" href="#best-seller"><span>Best Seller</span></a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div class="tab-content umino-tab_content">
                  <div id="featured" class="tab-pane active show" role="tabpanel">
                     <Featured/>
                  </div>
                  <div id="new-arrivals" class="tab-pane" role="tabpanel">
                     <NewArrival/>
                  </div>
                  <div id="best-seller" class="tab-pane" role="tabpanel">
                     <BestSeller/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import BestSeller from '../product/BestSeller'
   import NewArrival from '../product/NewArrival'
   import Featured from '../product/Featured'
   
   export default {
     name: 'HomeProduct',
      components: {
       BestSeller,
       NewArrival,
       Featured
     }
   }
</script>