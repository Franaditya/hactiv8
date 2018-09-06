var minNum, maxNum, meanNum; 
var ganjil = [] ;
var genap = [] ;

function numberProcessing(numberArr) {
//Min Max
minNum = Math.min.apply(null, numberArr);
maxNum = Math.max.apply(null, numberArr);

// Mean
var total = 0, i;
    for (i = 0; i < numberArr.length; i += 1) {
        total += numberArr[i];
    }
meanNum = total / numberArr.length;

// Ganjil Genap
for(var index = 0; index < numberArr.length; index++) {
		if(numberArr[index] % 2 == 0) {
			genap.push(numberArr[index]);
		}else{
			ganjil.push(numberArr[index]);
		}
	}
 return numberArr;

}

numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]);

console.log('Min : '+ minNum + ', Max = ' + maxNum + ', Mean : ' + (Math.ceil(meanNum)) + ', Odds : ' + ganjil + ', Evens : ' + genap );
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
