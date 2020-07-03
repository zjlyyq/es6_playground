if (!location) {
    var location = {
        href: 'http://location.com:8080'
    }
}
function buildUrl() {
    var qs = "?debug=true";
    
    with (location) {
        var url = href + qs;
    }
    // var url = location.href + qs;

    return url;
}

console.log(buildUrl());

for (let i = 1;i <= 10; i ++){

}
console.log(i);