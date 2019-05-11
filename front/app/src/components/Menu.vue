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
                         <md-button class="md-icon-button " >
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
    margin-top: 150px;


}
.homebtn {
    margin: auto;
    zoom: 6;


}

#btn2 {
        
         animation: fadein 3s 1s, delayinv 1s;


}

#btn1 {
      animation: fadein 3s;
}

i.md-icon.md-icon-font.md-theme-default {
    color: #EF6C00
;
}

btntxt {
     zoom: 0.33;
     color: #EF6C00
;
     font-family: custom;


}

.md-button-content {
    display: grid;
}

</style>


 
