new Vue({
  el: '#app',
  data: {
    active: true,
    images: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ],
    dots: ['0', '1', '2', '3'],
    imagesIDX: 0,
  },
  methods: {
    randomNumber: function(min, max) {
      var result = Math.floor(Math.random() * (max + 1 - min) + min);
      return result;
    },
    next: function() {
      this.imagesIDX += 1;
      if(this.imagesIDX > this.images.length -1){
        this.imagesIDX = 0
      }
    },
    prev: function() {
     this.imagesIDX -= 1;
     if(this.imagesIDX < 0){
       this.imagesIDX = this.images.length -1
     }
   },
   activeDot: function(newIndex){
     this.imagesIDX === newIndex

   },
   }
});

Vue.config.devtools = true;
