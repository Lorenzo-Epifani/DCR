 <template>
       
 
      <div id="menu">
          <div class="mainselect">
       <!--    
           <div class="homebtn">
               <router-link to="/"><md-icon>thumb_up</md-icon></router-link>   
          </div>  
          -->
     
               <div class="homebtn" id="btn1">     
                    <router-link to="/fill">
                         <md-button class="md-icon-button" >
                              <md-icon>dashboard</md-icon>
                              <btntxt>store<br/>meta</btntxt>
                         </md-button>
                    </router-link>  
               </div>  


               <div class="homebtn" id="btn2">
                    <router-link to="/search">
                    <md-button class="md-icon-button ">
                              <md-icon>search</md-icon>
                              <btntxt>search</btntxt>

                         </md-button>
                    </router-link>
               </div>  

          </div>
           <md-tabs class="phone"  md-sync-route>
                 <md-tab id="tab-1" md-label="meta" md-icon="dashboard" to="/fill"></md-tab>
                 <md-tab id="tab-2" md-label="search" md-icon="search" to="/search"></md-tab>
          </md-tabs>
      </div>



 </template>

 <script>
export default {
  name: 'Menu',
  
}
</script>

<style>
.mainselect {
    display: flex;
    margin: auto;
    margin-top: 0px;


}
.homebtn {
    margin: auto;
    zoom: 6;


}

#btn2 {
        
         animation: fadein 1s 2s, delayinv 2s;


}

#btn1 {
      animation: fadein 1s 2s, delayinv 2s;
}

 i.md-icon.md-icon-font.md-theme-default {
    color: black
;
}

btntxt {
     zoom: 0.33;
     color: black
;
     font-family: custom;


}

.mainselect .md-button-content {
    display: grid;
}

.phone a.md-button.router-link-exact-active.router-link-active.md-theme-default.md-active.md-icon-label {
    margin-left: auto;
    margin-right: auto;
}

.phone a.md-button.md-theme-default.md-icon-label {
    margin-left: auto;
    margin-right: auto;
}

.phone .md-button-content {
     animation: fadein 3s;

}

.md-tabs.phone.md-alignment-left.md-theme-default {
background-color: black;

}
.phone .md-button-content, .phone i.md-icon.md-icon-font.md-tab-icon.md-theme-default {
    color: white;
}


/* ----------------------------------RESPONSIVE---------------------------------- */
    @media not screen and (max-width: 600px) {
   .md-tabs.phone.md-alignment-left.md-theme-default, .md-tabs.phone.md-alignment-left.md-theme-default *  {
       display:none;

    }
}
    
        @media only screen and (max-width: 600px) {
    .mainselect, .mainselect * {
        display:none;        
    }
}
/* ----------------------------------RESPONSIVE---------------------------------- */

</style>


 
