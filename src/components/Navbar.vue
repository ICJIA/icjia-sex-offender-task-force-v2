<template>
  <div id="myNav">

    <!-- TEMPLATE START -->
    <div class="collapse bg-about-icjia" id="navbarHeader">
       <div class="container">
         <div class="row">
           <div class="col-sm-8 py-4">
             <h4 class="text-white">About the ICJIA</h4>
             <p class="text-muted">Created in 1983, the <a href="http://www.icjia.state.il.us" target="_blank">Illinois Criminal Justice Information Authority</a> is a state agency dedicated to improving the administration of criminal justice.</p>

<p class="text-muted">The Authority brings together key leaders from the justice system and the public to identify critical issues facing the criminal justice system in Illinois, and to propose and evaluate policies, programs, and legislation that address those issues. The agency also works to ensure the criminal justice system in Illinois is efficient and effective. The Authority’s specific powers and duties are detailed in the <a href="http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=397&ChapterID=5" target="_blank">Illinois Criminal Justice Information Act.</a></p>
           </div>
           <div class="col-sm-4 py-4">
             <h4 class="text-white">Contact</h4>
             <ul class="list-unstyled">
               <li><a href="http://www.icjia.state.il.us" class="text-white">Visit website</a></li>
               <li><a href="https://twitter.com/icjia_illinois?lang=en" class="text-white">Follow on Twitter</a></li>
               <li><a href="https://www.facebook.com/ICJIA/" class="text-white">Like on Facebook</a></li>
               <li><a href="https://www.youtube.com/channel/UCtZMzk8D3P4OixYTwsfPeKA" class="text-white">View on YouTube</a></li>
               <li><a href="https://visitor.r20.constantcontact.com/manage/optin?v=001MqUcqqvjwLCJXlLMSWbTe3zHHmEQgFeBuHvBcJWTbwgrxFbDSGx4HSUPpI6DJWMUPgbljtLxffqIcGFTgCnr-auak88ybvRxpoJlTMGPtZs%3D" class="text-white">Join mailing list</a></li>
               <li><a href="mailto: cja.irc@illinois.gov" class="text-white">Send email</a></li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <div class="navbar navbar-light bg-faded" id="navbar">
       <div class="">
         <a href="/" class="navbar-brand"><span id="brand-illinois">ILLINOIS</span>
           <span id="divider">|</span><span id="brand-soort">Sex Offenses & Offender Registration Task Force<span>
           </a>


           <a class="btn btn-secondary navbar-toggler-right" id="mailingList" href="https://goo.gl/1RLj1h">
             <i class="fa fa-envelope-open" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Join the Mailing List</a>

         <button  class="hamburger hamburger--spin navbar-toggler navbar-toggler-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarHeader"
                  aria-controls="navbarHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  >
           <span class="hamburger-box">
             <span class="hamburger-inner"></span>
           </span>
         </button>

         <!-- <span class="navbar-text">
           <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
         </span>

         <span class="navbar-text">
            <a class="nav-link" href="#">Link 1 </a>
         </span>

         <span class="navbar-text">
            <a class="nav-link" href="#">Link 2 </a>
         </span> -->
       </div>
     </div>







    <!-- TEMPLATE END -->

  </div>
</template>

<script>

export default {
  mounted () {

    // console.log(this.publicPath)
    $(document).ready(function(){
	     $('.hamburger').click(function(){
		       $(this).toggleClass('is-active');
	        });
        });
  },
  components: {

  },
  name: 'Navbar',
  methods: {


  },
  data () {
    return {

    }
  }
}
</script>


<style scoped>
a {color: #fff;}
a:hover {color: #aaa}
a#mailingList {color: #444;}
.hamburger {margin-top: -9px}
#mailingList {text-transform: uppercase; font-weight: 700; font-family: 'Lato', sans-serif; font-size: 14px}

</style>
