//Exercise 1 - level 1
//Fetch the movies and log them out to the console

fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(imdbMovies => {
        console.log(imdbMovies);
    });



//Exercise 2 - level 1
//Render the following string to the html using the fetched movies array: 6527 movies fetched

fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(imdbMovies => {
        console.log(imdbMovies);


        const h1 = document.createElement("h1");

        h1.innerHTML = imdbMovies.length + " movies fetched" ;

        document.body.appendChild(h1);

    });



//Exercise 3 - level 1
//Render the first movie in the movies array
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(imdbMovies => {
        console.log(imdbMovies[0]);
    });





//Exercise 3 - level 1
//Render the first movie in the movies array.
//How you do that is up to you. But you could fx just render a string that says
//71 is a movie from 2014 that is 5940 seconds long. It has a rating of 7.2 out of 41702 votes.
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(imdbMovies => {
        console.log(imdbMovies[0].title + " is a movie from " + imdbMovies[0].year + " It has a rating of " + imdbMovies[0].rating + " has " + imdbMovies[0].votes + " votes "+ "is " + imdbMovies[0].running_times + " seconds long");
    });





//Exercise 4 - level 2
//Now render all the movies in a list using ul and li
/*
                fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
                    .then(response => response.json())
                    .then (imdbMovies => {

                            for (let i = 0; i < imdbMovies.length; i++) {
                                    const title = imdbMovies[i].title
                                    const year = imdbMovies[i].year
                                    const rating = imdbMovies[i].rating
                                    const votes = imdbMovies[i].votes
                                    const runningTime = imdbMovies[i].running_times

                                    let titleRendered = document.createElement("ul")
                                    titleRendered.innerHTML = "Movie Title: " + title;
                                    document.body.appendChild(titleRendered)

                                    let yearRendered = document.createElement("li")
                                    yearRendered.innerHTML = "Year: " + year;
                                    document.body.appendChild(yearRendered)

                                    let ratingRendered = document.createElement("li")
                                    ratingRendered.innerHTML = "Rating: " + rating;
                                    document.body.appendChild(ratingRendered)

                                    let votesRendered = document.createElement("li")
                                    votesRendered.innerHTML = "Votes: " + votes;
                                    document.body.appendChild(votesRendered)

                                    let runningTimeRendered = document.createElement("li")
                                    runningTimeRendered.innerHTML = "Running Time " + runningTime
                                    document.body.appendChild(runningTimeRendered);
                            }});

 */



//Exercise 5 - level 2
//Create a button with the text Get newer movies. When clicked it should only show movies that came out after 2014.
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(imdbMovies => {
        document.querySelector("#btn2014").addEventListener("click", function(){
            for (let i = 0; i < imdbMovies.length; i++) {
                if (imdbMovies[i].year > 2014) {

                    const moviesAfter2014 = imdbMovies[i].title
                    let title2014 = document.createElement("li")
                    title2014.innerHTML = moviesAfter2014
                    document.body.appendChild(title2014)
                }
            }
        });
    });


//Exercise 6 - level 3
//Create an input element where people can search for a movie. While the user writes something the movies should be updated!
//Exercise 7 - level 3
//Create an interface where users can filter the movies in different ways. Fx searching for a movie. Indicating the rating. Only showing movies that are longer or shorter that a specific time.
// Search for inspiration from fx https://www.boliga.dk/


//Exercise 8
//Make your movie database website pretty 🎉


//Exercise 9
//Your feature here. What feature would you like to add to the movie database?
//When the button is clicked only movies with a rating over 8.2 are shown.

alert("You can only use one button at a time, please refresh the page to use the other button");

fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(response => response.json())
    .then(imdbMovies => {
        document.querySelector("#ratingbtn").addEventListener("click", function(){
            for (let i = 0; i < imdbMovies.length; i++) {
                if (imdbMovies[i].rating > 8.2) {

                    const moviesAfter2014 = imdbMovies[i].title
                    let title2014 = document.createElement("li")
                    title2014.innerHTML = moviesAfter2014
                    document.body.appendChild(title2014)
                }
            }
        });
    });