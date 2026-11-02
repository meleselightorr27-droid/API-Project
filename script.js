//const url= "http://www.omdbapi.com/?apikey=fc13dc05&s="+searchTerm;

async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON
        const searchTerm = document.getElementById("search").value;
        console.log(searchTerm)
        const url= "https://whenstherace.com/schedule.json";
        
        const response = await fetch(url);

        const json = await response.json();

        console.log(JSON.stringify(json));

        const movieHolder = document.getElementById("movieHolder");
        movieHolder.innerHTML = ""; 

        for (movie of json) {
           
            if (movie.name.toLowerCase().includes(searchTerm)) {

                let divContainer = document.createElement("div");
                divContainer.classList.add("card");

                let card = document.createElement("div");
                card.classList.add("container");

                let titleHeader = document.createElement("h3");
                titleHeader.textContent = movie.flag + " " + movie.name;
                card.appendChild(titleHeader);

                let round = document.createElement("p");
                round.textContent = "Round: " + movie.round;
                card.appendChild(round);

                let country = document.createElement("p");
                country.textContent = "Country: " + movie.country;
                card.appendChild(country);

                let circuit = document.createElement("p");
                circuit.textContent = "Circuit: " + movie.circuit;
                card.appendChild(circuit);

                let date = document.createElement("p");
                date.textContent = "Race date: " + movie.utc;
                card.appendChild(date);

                let sprint = document.createElement("p");
                sprint.textContent = "Sprint weekend: " + (movie.sprint ? "Yes" : "No");
                card.appendChild(sprint)

                divContainer.appendChild(card);
                movieHolder.appendChild(divContainer);
            }
              }
            }
    catch (error) {
        console.log(error);
    }
}