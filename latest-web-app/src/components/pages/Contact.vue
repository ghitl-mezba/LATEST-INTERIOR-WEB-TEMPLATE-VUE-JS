<template>
   <div>
      <div class="breadcrumb-area">
         <div class="container">
            <div class="breadcrumb-content">
               <ul>
                  <li><a href="index.html">Home</a></li>
                  <li class="active">Contact</li>
               </ul>
            </div>
         </div>
      </div>
      <div class="contact-main-page">
         <div class="google-map_area">
            <div class="container-fluid">
               <div id="google-map"></div>
            </div>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-lg-6">
                  <div class="contact-page-side-content">
                     <h3 class="contact-page-title">Contact Us</h3>
                     <p class="contact-page-message">For beautiful and latest interior decor contact us</p>
                     <div class="single-contact-block">
                        <h4><i class="fa fa-fax"></i> Address</h4>
                        <p>79, New Airport Road, Block #j, Chairman Bari, Banani, Dhaka-1213, Bangladesh</p>
                     </div>
                     <div class="single-contact-block">
                        <h4><i class="fa fa-phone"></i> Phone</h4>
                        <p>Mobile: +88017 119 915 18</p>
                        <p>Hotline: +88017 119 915 18</p>
                     </div>
                     <div class="single-contact-block last-child">
                        <h4><i class="fa fa-envelope-o"></i> Email</h4>
                        <p>latestinteriorbd@gmail.com</p>
                        <p>latestinteriorbd@gmail.com</p>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="contact-form-content">
                     <h3 class="contact-page-title">Tell Us Your Message</h3>
                     <div class="contact-form">
                        <form id="contact-form" action="http://hasthemes.com/file/mail.php" method="post">
                           <div class="form-group">
                              <label>Your Name <span class="required">*</span></label>
                              <input type="text" name="con_name" id="con_name" required>
                           </div>
                           <div class="form-group">
                              <label>Your Email <span class="required">*</span></label>
                              <input type="email" name="con_email" id="con_email" required>
                           </div>
                           <div class="form-group">
                              <label>Subject</label>
                              <input type="text" name="con_subject" id="con_subject">
                           </div>
                           <div class="form-group form-group-2">
                              <label>Your Message</label>
                              <textarea name="con_message" id="con_message"></textarea>
                           </div>
                           <div class="form-group">
                              <button type="submit" value="submit" id="submit" class="umino-contact-form_btn" name="submit">send</button>
                           </div>
                        </form>
                     </div>
                     <p class="form-messege"></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
     name: 'Contact',
   }
</script>