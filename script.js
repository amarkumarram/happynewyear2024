window.addEventListener("load", function() {
    const pathname = decodeURIComponent(location.href);
    let name = pathname.substring(pathname.indexOf('=') + 1);
    if(name !== "" && pathname.indexOf("=") !== -1) {
        document.getElementById("msgFromName").innerHTML = name;
    }
})