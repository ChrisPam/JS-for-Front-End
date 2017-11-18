function productOfThreeNumbers(x, y, z){
	let result = x * y * z;
	if(result < 0){
		return "Negative";
    }
	else {
		return "Positive";
    }
}

productOfThreeNumbers(-3,-4,5);