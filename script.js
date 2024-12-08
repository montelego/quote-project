const btn = document.querySelector(".btn ");
// const url =
("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single");

// const jokeApi = "https://official-joke-api.appspot.com/jokes/random";

const qAp =
  "http://cors-anywhere.herokuapp.com/https://rapidapi.com/HealThruWords/api/universal-inspirational-quotes/playground/53cc559de4b06cf88bc65e0a";

const sampApi =
  "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random";

btn.addEventListener("click", joke);

async function joke() {
  const response = await fetch(sampApi);
  const data = await response.json();

  data.forEach((sampApi) => {
    const quote = sampApi.q;
    const author = sampApi.a;
    document.querySelector(".content p").innerHTML = `"${quote}"`;
    document.querySelector(".name").innerHTML = `Author:&nbsp;${author}`;
    document.querySelector(".name").style.display = "block";
  });

  // console.log(data);

  // document.querySelector(".content p").style.display = "block";
}

joke();
