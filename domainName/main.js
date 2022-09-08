function domainName(url){
    if (!url.includes('http://') && !url.includes('https://')) {
        url = `http://${url}`;
    }
    let url1 = url.replace('www.', '')
    return new URL(url1).hostname.split('.')[0];
}

u = "hq-dxxhn.co/index.php";
console.log(domainName(u));