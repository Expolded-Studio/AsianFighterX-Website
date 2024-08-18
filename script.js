function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function tp(url){
    console.log("Redirecting to", url);
    sleep(20)
    window.location.href = url;
}