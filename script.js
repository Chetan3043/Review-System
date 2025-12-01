const form = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviews");

function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviewsContainer.innerHTML = "";

  reviews.forEach((r) => {
    const div = document.createElement("div");
    div.classList.add("review");

   div.innerHTML = `
  <div class="review-header">
    <div class="review-username">@${r.username}</div>
    <div class="review-rating">${r.rating}/5</div>
  </div>
  <p>${r.comment}</p>
  <div class="review-time">${r.time}</div>
`;


    reviewsContainer.appendChild(div);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const review = {
    username: document.getElementById("username").value,
    comment: document.getElementById("comment").value,
    rating: document.getElementById("rating").value,
    time: new Date().toLocaleString(),
  };

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.unshift(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  form.reset();
  loadReviews();
});

loadReviews();
