// rxjs.of(1, 2, 3)
//   .subscribe(x => {
//     const element = document.createElement('div');
//     element.innerText = 'Data: ' + x;
//     document.body.appendChild(element)
//   },
//   err => { },
//   () => {
//     const element = document.createElement('div');
//     element.innerText = 'All done';
//     document.body.appendChild(element)
//   });

function fetchData(url){
  return rxjs.Observable.create(observer => {
    fetch(url)
    .then(response => response.json()) // or text() or blob() etc.
    .then(data => {
      observer.next(data);
      observer.complete();
    })
    .catch(err => observer.error(err));
  })
}

const cateTitles$ = fetchData('https://www.themealdb.com/api/json/v1/1/categories.php')

cateTitles$.subscribe(data => console.log(data));