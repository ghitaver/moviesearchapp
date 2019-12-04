Vue.component('movie-detail',{

    props:['movie'],

    template:`
    <div>
    <div class="col-sm">
    <div class="card" style="width: 18rem;">
  <img v-bind:src="movie.Poster" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{movie.Title}}</h5>
    <h5 class="card-title">{{movie.Year}}</h5>
  </div>
</div>
    </div>
    </div>
    `

});

new Vue({
    el:"#mymovieapp",
    data:{
        searchKey:'',
        moviesList:[]

    },
    methods:{

        searchMovies()
        {

            var url='http://www.omdbapi.com/?s='+this.searchKey+'&apikey=19662a8d';
            fetch(url)
            .then(response=>response.json())
            .then(data=>{
                this.moviesList=data;
            })

        }
    }
})