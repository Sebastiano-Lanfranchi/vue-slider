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
      this.imagesIDX ++;
    },
    prev: function() {
     this.imagesIDX --;
   },
   activeDot: function(){
     if(imagesIDX === dots){
       return{
         attivatore: 'active'
       };
     }
   }
   
    }

});

Vue.config.devtools = true;
