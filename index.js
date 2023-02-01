


const searchInput = document.getElementById('searchInput');
const result = document.getElementById('result');
const submit = document.getElementById('submit');

let searchWord;



// triggers submit 'click' if 'enter' is pressed
searchInput.onkeydown = function(event) {
    if(event.key === 'Enter') {
        submit.click();
    }
}

submit.onclick = (function() {
    console.log(searchInput.value);
    searchWord = searchInput.value;
    result.innerHTML = searchWord;
    let message = {
        word: searchWord
    }
    sendWord();
});

async function sendWord() {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {greeting: searchWord});
    // do something with response here, not outside the function
    console.log(response);
}

// (async () => {
//     const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
//     const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
//     // do something with response here, not outside the function
//     console.log(response);
//   })();

