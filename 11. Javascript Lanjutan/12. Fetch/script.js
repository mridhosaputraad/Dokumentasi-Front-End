/* FETCH

-> Pengertian
    > sebuah API pada javascript modern yang tugasnya untuk mengambil data secara asynchronous atau ajax.
    > dan fetch juga adalah sebuah di fungsi javascript yang mengembalikan promise.
    > sebuah method pada API javascript untuk mengambil resources dari jaringan, dan mengembalikan promise yang selesai (fullfilled) ketika ada response yang tersedia. -MDN

-> Sintaks
    > fetch(resources, init);
        - resources:
            > URL, alamat dari sumber yang kita akan ambil
            > Request Object, representasi permintaan sumber
        - init (optional), konfigurasi pada sebuah request berbentuk object:
            > $_GET
            > $_POST
            > method
            > headers
            > body
            > mode
            > cache
            > referrer
            > referrerPolicy
            > integrity
            > keepalive
            > signal

    > response, hasil dari fetch yang berupa promise
        - response(property):
            > headers
            > ok ---> jika success kalo direpresentasikan menggunakan status code dari 200 sampai 299. Kalo itu terjadi apa yang harus dilakukan
            > redirected ---> kalo statusnya ini bisa pake kondisi misalnya if(response.redirected())
            > status ----> if(status === 200 ())
            > statusText ----> if(status === ok ())
            > type
            > url
            > body

        - response(method):
            > clone()
            > error()
            > redirect()
            > blob() ----> binary large object, misalnya mengupload file
            > formData()
            > json() ---> bentuknya promise, yang kalo results baru jadi object
            > text()

FYI
> Dengan jQuery, kita bisa ngambil banyak elemen sekaligus

*/


// $('.search-button').on('click', function () {
//     /* > Menggunakan AJAX jQuery */
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=5b3a3cc3&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);

//             // ketika tombol detail di-klik
//             $('.modal-detail-button').on('click', function () {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=5b3a3cc3&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });



// Menggunakan FETCH
/* -> LANGKAH 1: MEMBUAT EVENTLISTENER */
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {
    /* => Mendapatkan data */
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=5b3a3cc3&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));
            const moviesContainer = document.querySelector('.movie-container');
            moviesContainer.innerHTML = cards;

            // Ketika tombol di-klik
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function () {
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=5b3a3cc3&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetail = showMovieDetail(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;
                        });
                });
            });
        });
});



function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                        <li class="list-group-item">
                            <h4>${m.Title} (${m.Year})</h4>
                        </li>
                        <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}