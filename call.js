function call(log, type, conditional) {
    switch (type) {
        case "log":
            console.log(log);
            break;
        case "error":
            console.error(log);
            break;
        case "info":
            console.info(log);
            break;
        case "warn":
            console.warn(log);
            break;
        case "debug":
            console.debug(log);
            break;
        case "starttimer":
            console.time(log);
            break;
        case "endtimer":
            console.timeEnd(log);
            console.timeLog(log);
            break;
        case "trace":
            console.trace(log);
            break;
        case "assert":
            console.assert(conditional, log);
            break;
        default:
            console.error("Error Function: Invalid Type: ", type,"Input:",log);
            break;
    }
}