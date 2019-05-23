<template>
    <md-card class="SearchCard">
        
        <md-card-media-cover md-solid>
            
            <md-card-media md-ratio="4:3">
                <img :src="this.source" alt='error'>
            </md-card-media>

            <md-card-area>
                <md-card-expand>
                    <md-card-actions md-alignment="space-between">
                        <md-card-expand-trigger>
                            <md-button>{{title}}</md-button>
                        </md-card-expand-trigger>
                    </md-card-actions>
                    <md-card-expand-content>
                        <md-card-content>
                            <md-content class="md-scrollbar">
                                         Placed in {{City}}, {{Country}}<br/><br/>
                                          {{description}} 
                            </md-content>
                        </md-card-content>
                    </md-card-expand-content>
                </md-card-expand>
            </md-card-area>
        </md-card-media-cover>
    </md-card>

</template>
 <script>
 import * as api from '../api/api.js'
 export default {
    name: 'card',
   // source:null,
   // title:null,
    data () 
    {
      return { 
                
                source: api.baseURL()+'/picture/load/'+this.picture.rel,
                title:null,
                description:null,
                City:null,
                Country: null,
                }
    },
    props: {

        picture:{}
    },
    
    mounted () {
        this.title=this.picture.name;
        this.description=this.picture.description;
        this.City=this.picture.City;
        this.Country=this.picture.Country;

        console.log(this.source)

    },


   
 }
 </script>
 
 <style>
 #cards .md-card.md-theme-default, #cards .md-card.md-theme-default * {
    width:350px;
    
}

#cards div {
    margin: auto;
    margin-top: 10px;
}
div#cards {
    text-align: center;
}

#cards .md-card-expand {
    max-height: 72px;
}

#cards .md-expand-active .md-card-expand{

    max-height:278px;
}

  #cards .md-content {
    max-width: 300px;
    max-height: 200px;
    overflow: auto;
  }
  #cards .md-card-content{

        padding-top: 0px;
  }
 </style>
 