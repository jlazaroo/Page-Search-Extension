


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

    chrome.runtime.sendMessage(message), function(response) {
        console.log(response);
    }
});



