const FACTURL = `https://meowfacts.herokuapp.com/?count=3`;
const PHOTOURL = `https://api.thecatapi.com/v1/images/search?limit=10`;
const factContainer = document.querySelector(".fact");
const btn = document.querySelector("#btn");
const img = document.querySelector(".img");
const body = document.body;

// fetching rendome photo with the help of fetch  API.
const catPhoto = async () => {
  const fetchPic = await fetch(PHOTOURL);
  if (!fetchPic.ok) {
    catImage.style.backgroundColor = "white";
  }
  const pic = await fetchPic.json();
  return pic;
};

//Fetching rendome fact with the help of API.
const catFacts = async () => {
  const response = await fetch(FACTURL);
  if (!response.ok) {
    throw new Error("something went wrong!! Please try again after sometime.");
  }
  const data = await response.json();
  return data;
};

//Inserting GIF on home page.
img.innerHTML = `<img id="imgLink" src="catDance.gif" alt="Welcome Gif" />;`;


//Adding event listener on button to replace home page GIF with random images.
const image = btn.addEventListener("click", () => {
  img.innerHTML = ``;
    catPhoto()
      .then((pic) => pic)
      .then((img) => img[1].url)
    .then(
      (image) => (img.style.backgroundImage = `url('${image}')`),
      (img.style.backgroundSize = "contain"),
      (img.style.backgroundRepeat = "no-repeat")
    );
});

//Adding event listener on button to show the facts.
btn.addEventListener("click", () => {
  btn.innerText =  "Next Fact"
  catFacts()
    .then((fact) => fact.data[0])
    .then((cat) => cat)
    .then((result) => (factContainer.textContent = result))
    .catch((error) => {
      factContainer.textContent = error;
    });
});
