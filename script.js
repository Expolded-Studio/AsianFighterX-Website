

function tp(url){
    console.log("Redirecting to", url);
    setTimeout(()=>{},1000)
    window.location.href = url;
}
function call(log,type,conditional,){
    if (type === "log"){
        console.log(log)
    }
    if (type === "error"){
        console.error(log)
    }
    if (type === "info"){
        console.info(log)
    }
    if (type === "warn"){
        console.warn(log)
    }
    if (type === "debug"){
        console.debug(log)
    }
    if (type === "starttimer"){
        console.time(log)
    }
    if (type === "endtimer"){
        console.timeEnd(log)
        console.timeLog(log)
    }
    if (type === "trace"){
        console.trace(log)
    }
    if (type === "assert"){
        console.assert(conditional,log)
    }
    else{
        alert('The function',type,log,"was voided. Error: Invalid Input") 
        console.error("Error Function",type,log,"{Invalid Type}")
    }
}