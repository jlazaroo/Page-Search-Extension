
console.log("Page Search Extension 1.0 zzz");


const divs = document.querySelectorAll('div');
const h1s = document.querySelectorAll('h1');


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request.greeting);
    }
  );

// console.log(h1s[0].innerHTML)
// console.log(divs[0].innerHTML);

function searchForWord(item) {
    if(divs[item].innerHTML.search(word)) {
        result.innerHTML = `${word} is found`
    }else{
        result.innerHTML = `${word} is not found`
    }
};

h1s.forEach(h1Styler);

function h1Styler(item) {
    console.log(item.innerHTML);
  item.style.backgroundColor = 'red';
};

divs.forEach(divStyler);

function divStyler(item) {
  item.style.color = 'red';
}

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




