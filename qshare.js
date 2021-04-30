document.addEventListener("DOMContentLoaded", function() {
    // Get all quote elements inside the article
    const articleBody = document.getElementById('article');
    const quotes = [...articleBody.querySelectorAll('quote, blockquote')];
    let tweetableUrl = '';
    let clickToTweetBtn = null;
    let fbableUrl = '';
    let clickToFbBtn = null;
    // Get a url of the current page 
    const currentPageUrl = window.location.href;
    quotes.forEach(function(quote) {
        // Create a tweetable url
        tweetableUrl = makeTweetableUrl(
            quote.innerText, currentPageUrl
        );
        // Create a tweetable url
        fbableUrl = makeFbableUrl(
            quote.innerText, currentPageUrl
        );
        // Create a 'click to tweet' button with appropriate attributes
        clickToTweetBtn = document.createElement('a');
        clickToTweetBtn.innerText = '\n Tweet This';
        clickToTweetBtn.setAttribute('href', tweetableUrl);
        clickToTweetBtn.onclick = onClickToTweet;
        clickToFbBtn = document.createElement('a');
        clickToFbBtn.innerText = 'Share on WhatsApp';
        clickToFbBtn.setAttribute('href', fbableUrl);
        clickToFbBtn.onclick = onClickToFb;
        // Add button to every blockquote
        quote.appendChild(clickToTweetBtn);
        quote.appendChild(clickToFbBtn);
    });
});

function makeTweetableUrl(text, pageUrl) {
    const tweetableText = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + encodeURIComponent(text) + " -@dipfunz ";
    return tweetableText;
}

function makeFbableUrl(text, pageUrl) {
    const fbableText = "https://api.whatsapp.com/send?text=" + encodeURIComponent(text) + " -@dipfunz " + pageUrl;
    return fbableText;
}

function onClickToTweet(e) {
    e.preventDefault();
    window.open(
        e.target.getAttribute('href'),
        "twitterwindow",
        "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
    );
}

function onClickToFb(e) {
    e.preventDefault();
    window.open(
        e.target.getAttribute('href'),
        "twitterwindow",
        "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
    );
}