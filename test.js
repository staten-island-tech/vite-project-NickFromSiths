const movies = [
  { name: "Inception", reviews: [8, 9, 10, 9, 7] },
  { name: "The Matrix", reviews: [10, 9, 9, 8, 9] },
];

function print() {
  let x = 0;
  for (i of movies) {
    if (i.reviews.length > 0) {
      console.log(movies.reviews);
      x++;
    }
  }
}
// console.log(moviews[reviews[x]]);
print();
