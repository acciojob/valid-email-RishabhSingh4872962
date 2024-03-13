function validEmail(str) {
  //your JS code here.
	if (str==""|| str==" ") {
		return false;
	}
	let emialDomain=[".com",".com.in",".co.in",".edu",".net",".org",".gov"];

	emialDomain.forEach((dom)=>{
		if (str.endsWith(dom)) {
			for (let s of str) {
				
			}
			
		}
	})
	return false;
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
alert(validEmail(str));
