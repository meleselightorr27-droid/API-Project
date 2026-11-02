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
           
            if (movie.name.includes(searchTerm)) {

                let divContainer = document.createElement("div");
                divContainer.classList.add("card");

                let card = document.createElement("div");
                card.classList.add("container");

                let titleHeader = document.createElement("h3");
                titleHeader.textContent = movie.flag + " " + movie.name;
                card.appendChild(titleHeader);

                let circuit = document.createElement("p");
                circuit.textContent = "CIRCUIT - " + movie.circuit;
                card.appendChild(circuit);

                let country = document.createElement("p");
                country.textContent = "NATION - " + movie.country;
                card.appendChild(country);

                let round = document.createElement("p");
                round.textContent = "Round: " + movie.round;
                card.appendChild(round);
                
                let sprint = document.createElement("p");
                sprint.textContent = "SPRINT WEEKEND - " + (movie.sprint ? "Yes" : "No");
                card.appendChild(sprint)

                let FP1 = document.createElement("p");
                const FP1Date = new Date(movie.sessions.fp1);
                FP1.textContent = "FP1 - " + FP1Date;
                card.appendChild(FP1);

                let FP2 = document.createElement("p");
                const FP2Date = new Date(movie.sessions.fp2);
                FP2.textContent = "FP2 - " + FP2Date;
                card.appendChild(FP2);

                let FP3 = document.createElement("p");
                const FP3Date = new Date(movie.sessions.fp3);
                FP3.textContent = "FP3 - " + FP3Date;
                card.appendChild(FP3);

                let qualifying = document.createElement("p");
                const qualifyingDate = new Date(movie.sessions.qualifying);
                qualifying.textContent = "QUALIFYING - " + qualifyingDate;
                card.appendChild(qualifying);

                let date = document.createElement("p");
                const raceDate = new Date(movie.utc);
                console.log(raceDate.toLocaleString());
                date.textContent = "RACE - " + raceDate;
                card.appendChild(date);
                

                divContainer.appendChild(card);
                movieHolder.appendChild(divContainer);
            }
              }
            }
    catch (error) {
        console.log(error);
    }
}