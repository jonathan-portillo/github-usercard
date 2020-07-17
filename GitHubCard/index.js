/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const dataCards = document.querySelector(".cards");

axios.get("https://api.github.com/users/jonathan-portillo").then((response) => {
  console.log("success", response.data);
  dataCards.appendChild(gitCards(response.data));
});
// .catch((error) => {
//   console.log("error", response.data);
// });

// const entryPoint = document.querySelector(".cards");
// const myProfile = cardMaker(response.data);

// entryPoint.appendChild(myProfile);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "https://api.github.com/users/tmshkr",
  "https://api.github.com/users/Uniloki",
  "https://api.github.com/users/AaronShawnSoler",
  "https://api.github.com/users/nicholas-myers",
  "https://api.github.com/users/SFMack",
];

followersArray.forEach((object) =>
  axios.get(object).then(function (response) {
    dataCards.appendChild(gitCards(response.data));
  })
);

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

//step 3

const gitCards = (object) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const link = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  image.src = object.avatar_url;
  name.textContent = object.name;
  username.textContent = object.login;
  location.textContent = object.location;
  profile.textContent = object.html_url;
  followers.textContent = "Followers: " + object.followers;
  following.textContent = "Following: " + object.following;
  bio.textContent = "Bio: " + object.bio;

  return card;
};

// {
/* <div class="card">
<img src={image url of user} />
<div class="card-info">
  <h3 class="name">{users name}</h3>
  <p class="username">{users user name}</p>
  <p>Location: {users location}</p>
  <p>Profile:
    <a href={address to users github page}>{address to users github page}</a>
  </p>
  <p>Followers: {users followers count}</p>
  <p>Following: {users following count}</p>
  <p>Bio: {users bio}</p>
</div>
</div> */
// }

// {
//   "login": "jonathan-portillo",
//   "id": 54336208,
//   "node_id": "MDQ6VXNlcjU0MzM2MjA4",
//   "avatar_url": "https://avatars3.githubusercontent.com/u/54336208?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/jonathan-portillo",
//   "html_url": "https://github.com/jonathan-portillo",
//   "followers_url": "https://api.github.com/users/jonathan-portillo/followers",
//   "following_url": "https://api.github.com/users/jonathan-portillo/following{/other_user}",
//   "gists_url": "https://api.github.com/users/jonathan-portillo/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/jonathan-portillo/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/jonathan-portillo/subscriptions",
//   "organizations_url": "https://api.github.com/users/jonathan-portillo/orgs",
//   "repos_url": "https://api.github.com/users/jonathan-portillo/repos",
//   "events_url": "https://api.github.com/users/jonathan-portillo/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/jonathan-portillo/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Jonathan Portillo",
//   "company": null,
//   "blog": "",
//   "location": null,
//   "email": null,
//   "hireable": null,
//   "bio": "Looking to learn and solidify my foundations in Web Development.",
//   "twitter_username": null,
//   "public_repos": 16,
//   "public_gists": 0,
//   "followers": 1,
//   "following": 7,
//   "created_at": "2019-08-20T22:29:24Z",
//   "updated_at": "2020-07-17T01:46:52Z"
// }
