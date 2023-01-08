const inputSearch = document.querySelector('#inputSearch');
const buttonSearch = document.querySelector('#buttonSearch');
const resultRow = document.querySelector('#resultRow');

//buttonSearch:
buttonSearch.onclick = function() {
    const textSearch = inputSearch.value;
    if (textSearch != "") {
        searchOMDB(textSearch);
    }
};

async function searchOMDB(term) {
    const apikey = "fd7ea7fe";
    resultRow.innerHTML = "";
    try {
        const response = await fetch("http://www.omdbapi.com/?s=" + term + "&apikey=" + apikey);
        const data = await response.json();
        if (data.Search && data.Search.length) {
            const movies = data.Search;
            movies.forEach(movie => {
                resultRow.innerHTML += generateCard(movie);
            });
        }
    }catch (error) {
        console.log(error);
    }
}

async function getMovies() {
    
}

function generateCard(movie) {
    return `
    <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
                <a href="#" class="btn btn-primary">Like</a>
            </div>
      </div>
    </div>`
}

