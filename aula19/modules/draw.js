export default function BingoDraw(maxNumber, minNumber) {
    
    let numberDrawArray = [];
    let randomBallNumber;

    function getNumberDrawArray() {
        return numberDrawArray;
    }

    function drawNumber() {
        randomBallNumber = Math.floor(
            Math.random() * (maxNumber - minNumber + 1) + minNumber
        );

        while (numberDrawArray.includes(randomBallNumber) === true) {
            randomBallNumber = Math.floor(
                Math.random() * (maxNumber - minNumber + 1) + minNumber
            );
        }

        numberDrawArray.push(randomBallNumber);
        console.log(numberDrawArray);
        isDrawNumber();
        return randomBallNumber;
    }

    function isDrawNumber(num) {

        if(numberDrawArray.indexOf(num) === -1) {
            let x = false
            return x;
        }
        return true

    }

    return { getNumberDrawArray, drawNumber, isDrawNumber };
}
