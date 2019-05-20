<template>
      <md-card>
        
        <md-card-media-cover md-solid>
            
            <md-card-media md-ratio="4:3">
                <img :src="getImgUrl(this.source)" alt='error'>
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
                                       Name: <br/>
                                       Country:<br/>
                                       City:<br/>
                            </md-content>
                        </md-card-content>
                    </md-card-expand-content>
                </md-card-expand>
            </md-card-area>
      </md-card-media-cover>
    </md-card>

</template>

<script>
export default {

    name:'cardNull',

    props: {
        picture:{}
    },

    mounted () {
        //

    },

    data () 
    {
      return { 
                
                source:this.picture.rel,
                title:null,
                description:null,
                City:null,
                Country: null,
                }
    },

    methods: {
      getImgUrl(pic) {
        return require('../db_pic/'+pic);
      }
    }

    
}
</script>

<style>
#cardNull  .md-card.md-theme-default, .md-card.md-theme-default *{
    width: none;
}

#cardNull button.md-button.undefined.md-card-expand-trigger.md-theme-default {
    width: 100%;
}
</style>
