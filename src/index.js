function displayPoem(response) {
  new Typewriter("#poem", {
          strings: response.data.answer,
          autoStart: true,
          delay: 1,
          cursor: "",
        });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "0df88fc3bb43t3261o93a95825416cbf";
    let prompt = `User instructions: Generate a love poem about ${instructionsInput}`;
    let context = "You are a romantic expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Do not include the HTML wording. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong></strong> element at the end of the poem";
    let apiURl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⌛︎ Generating a Love Poem about ${instructionsInput.value}</div>`;

    axios.get(apiURl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);