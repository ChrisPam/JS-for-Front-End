function divideOrMultiplyNumber(n, x){
	let result;
	if(x >= n){
		result = n * x;
    }
	else {
		result = n / x;
    }
	return result;
}

divideOrMultiplyNumber(13, 13);