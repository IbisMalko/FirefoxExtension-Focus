
    //Redirects from Index.html and Feed to Messenging Directory
    if (window.location.href == "https://www.linkedin.com/feed/" || window.location.href == "https://www.linkedin.com") {
        window.location.replace("https://www.linkedin.com/messaging");
        document.getElementsByClassName('core-rail')[0].style.visibility = 'hidden';
        document.getElementsByClassName('right-rail')[0].style.visibility = 'hidden';
                //Removes the Link to the "Home" Nav Button
                var navButtons = document.getElementsByClassName("nav-main nav-container display-flex full-height");
                navButtons[0].childNodes[0].remove();
                //Removes the Link to the Logo Button
                var logo = document.getElementsByClassName("nav-item__link js-nav-item-link active")[0]
                logo.removeAttribute("href");
    } else{
    //Removes the Link to the "Home" Nav Button
    var navButtons = document.getElementsByClassName("nav-main nav-container display-flex full-height");
    navButtons[0].childNodes[0].remove();
    //Removes the Link to the Logo Button
    var logo = document.getElementsByClassName("nav-item__link js-nav-item-link active")[0]
    logo.removeAttribute("href");
    }