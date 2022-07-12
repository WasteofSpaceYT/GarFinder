chrome.tabs.query({ 'active': true }, function(tabs) {
    var url = tabs[0].url;
    if (!url.startsWith("chrome://") && !url.startsWith("edge://")) {
        fetch(url).then(e => {
            e.text().then(e => {
                if (e.toLowerCase().includes("garfield")) {
                    document.getElementById("garField").src = "https://png.pngitem.com/pimgs/s/146-1460943_garfield-png-free-images-cartoon-garfield-cat-transparent.png";
                    document.getElementById("garText").hidden = true
                } else {
                    document.getElementById("garField").src = "https://png.pngitem.com/pimgs/s/146-1461249_garfield-sticker-line-transparent-hd-png-download.png";
                    document.getElementById("garText").hidden = true
                }
            })
        })
    }
});