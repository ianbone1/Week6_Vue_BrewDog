import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el:'#app',
    data: {
      beers: [],
      selectedBeerIndex: null,
      selectedBeer: null,
      favouriteBeers: []
    },
    mounted: function(){
      this.getBeers();
    },
    methods: {
      getBeers: function(){
        fetch("https://api.punkapi.com/v2/beers")
          .then(response => response.json())
          .then(json => {
            this.beers=json;
        })
      },
      selectBeer: function(){
        this.selectedBeer = this.beers[this.selectedBeerIndex];
        console.log(`${this.selectedBeer.name} Beer Has Been Selected`);
      },
      addToFavourites: function(){
        if (!this.favouriteBeers.includes(this.selectedBeer)){
          this.favouriteBeers.push(this.selectedBeer);
        }
      },
      deleteFavourite: function(index){
        this.favouriteBeers.splice(index, 1)
      }
    }


  })
})
