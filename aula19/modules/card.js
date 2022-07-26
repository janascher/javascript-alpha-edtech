export default function BingoCard(maxNumber, minNumber) {
    let numberCardArray = [];

    function getNumberCards() {
        return numberCardArray;
    }

    function createNumbers() {
        while (numberCardArray.length < 10) {
            let count = 0;

            let randomNumber = Math.floor(
                Math.random() * (maxNumber - minNumber) + minNumber
            );

            for (let j = 0; j < numberCardArray.length; j++) {
                if (randomNumber == numberCardArray[j].value) {
                    count++;
                }
            }

            if (count == 0) {
                const object = {
                    value: randomNumber,
                    select: false,
                };
                numberCardArray.push(object);
            }
        }

        numberCardArray.sort((a, b) => {
            return a.value - b.value;
        });
    }

    createNumbers();
    return { getNumberCards };
}
