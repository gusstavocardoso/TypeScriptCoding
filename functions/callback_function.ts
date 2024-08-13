function callbackFn(fact: string, callback: any) {
	let myFact: string = "Parameter callback, " + fact;
	callback(myFact); // 2
}

function logFact(fact: string) {
	console.log(fact);
}

callbackFn("Callback string parameter", logFact);