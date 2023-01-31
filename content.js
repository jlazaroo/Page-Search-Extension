

console.log("Page Search Extension 1.0 zzz");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender)
});


// const searchInput = document.getElementById('searchInput');
// const result = document.getElementById('result');
// const button = document.getElementById('button');

const divs = document.querySelectorAll('div');



// console.log(divs[5].innerHTML);

// divs.forEach(searchForWord);

// function searchForWord(item) {
//     if(divs[item].innerHTML.search(word)) {
//         result.innerHTML = `${word} is found`
//     }else{
//         result.innerHTML = `${word} is not found`
//     }
// };


// if(divs[5].innerHTML.search('she')){
//     console.log('true');
// };




