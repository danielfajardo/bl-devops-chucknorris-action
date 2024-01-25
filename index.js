const core = require('@actions/core');
const github = require('@actions/github');

try {
    const name = github.context.actor;
    
    const url = `https://api.chucknorris.io/jokes/random?category=dev&name=${name}`;
    
    console.log(`Getting joke for ${name}`);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const joke = data.value;
            console.log(`The joke is: ${joke}`);
            core.setOutput('joke', joke);
        })
        .catch((error) => {
            console.log(error);
            core.setFailed(error);
        });
    
  } catch (error) {
    core.setFailed(error.message);
  }