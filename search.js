function search(){
    var word = document.getElementById('word').value.replace(" ", "+");
    // Google
    chrome.tabs.create({'url': `https://www.google.com/search?&q=${word}`});
    // Bing
    chrome.tabs.create({'url': `https://www.bing.com/search?q=${word}`});
    // Baidu
    chrome.tabs.create({'url': `https://www.baidu.com/s?wd=${word}`});
    // Yahoo!
    chrome.tabs.create({'url': `https://search.yahoo.co.jp/search?p=${word}`})
    // Yandex
    chrome.tabs.create({'url': `https://yandex.com/search/?text=${word}`});
    // DuckDuckGo
    chrome.tabs.create({'url': `https://duckduckgo.com/?q=${word}`});
    // Ask
    chrome.tabs.create({'url': `https://www.ask.com/web?q=${word}`});
    // Naver
    chrome.tabs.create({'url': `https://search.naver.com/search.naver?query=${word}`});
}

let button = document.getElementById('search');
button.onclick = search;