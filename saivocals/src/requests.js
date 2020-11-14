const API_Key = '8a1ac56b3aa51c7a8722ffd5a93173c2';
// const Vocals = 'UC7HUAlkMwfif648ySsi08Cw';
// const Lyrics = 'UCnrHSve-hr2hFWia-WI5wZg';
// const Niyan = 'UC2W-js9gItkpR6UKKuxGYXg';
// const Stats = 'UCY1rcGwz1zx4nW0-Y5I93EA';
// const Counting = 2;

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_Key}&with_networks=213`,
    fetchActionMovies:`/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetch:`/discover/movie?api_key=${API_Key}&with_genres=35`,
    fetchActionMovies:`/discover/movie?api_key=${API_Key}&with_genres=27`,
    fetchActionMovies:`/discover/movie?api_key=${API_Key}&with_genres=10749`,
    fetchActionMovies:`/discover/movie?api_key=${API_Key}&with_genres=99`,
}

export default requests;
