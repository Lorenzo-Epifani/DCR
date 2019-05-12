<template>
     <md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:3">
          <img :src="getImgUrl(this.source)" alt='error'>
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{title}}</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

</template>
 <script>
 export default {
    name: 'card',
   // source:null,
   // title:null,
    data () 
    {
      return { 
                
                source:this.picture.rel,
                title:null,
                }
    },
    props: {

        picture:{}
    },
    
    mounted () {
        this.title=this.picture.class;
        console.log(this.source)

    },


    methods: {
      getImgUrl(pic) {
    return require('../db_pic/'+pic);
}
    }
 }
 </script>
 
 <style>
 .md-card.md-theme-default, .md-card.md-theme-default * {
    width:350px;
    
}

#cards div {
    margin: auto;
    margin-top: 10px;
}
 </style>
 