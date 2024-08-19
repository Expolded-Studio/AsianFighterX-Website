function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function tp(url){
    console.log("Redirecting to", url);
    sleep(20)
    window.location.href = url;
}
function call(log,type,conditional,){
    if (type === "log"){
        console.log(log);
    }
    if (type === "error"){
        console.error(log);
    }
    if (type === "info"){
        console.info(log)
    }
    if (type === "warn"){
        console.warn(log);
    }
    if (type === "debug"){
        console.debug(log);
    }
    if (type === "starttimer"){
        console.time(log);
    }
    if (type === "endtimer"){
        console.time(log);
    }
    if (type === "trace"){
        console.trace(log);
    }
    if (type === "assert"){
        console.assert(conditional,log);
    }
    else{
        console.log("Invalid Type")
    }
}