const movieData = require("./movieData.json");
const request = require("request-promise");
const cheerio = require("cheerio");
const { Movie } = require('../models/Movie');

const movieCrawler = async () => {
  // remove all movies
  Movie.remove({},(err)=> {
    if (err) throw err;
  });

  // add movies
  for(let item of movieData){
    let movie = new Movie(item);
    movie.save((err, movieInfo) => {
      if(err) throw err
      return
    })
  }
}

const _getDataFromNaverMovie = async () => {
  try{
    const movie = {};
  
    const url = 'https://movie.naver.com/movie/bi/mi/review.nhn?code=136900';
  
    const response = request.get(url);
  
    return movie;
  }
  catch(e){
    console.log(e)
  }


}

module.exports =  movieCrawler;