$(function() {

    /* User click on the Analyze It button */
    $('#analyzeBtn').on('click', (evt) => {
        evt.preventDefault();

        const userInput = $('#user-text').val();
        const userInputArr = userInput.split(' ');

        /* set total word count */
        $('#wordCount').text(userInputArr.length);

        /* set unique word count */
        $('#uniqueWordCount').text(calcUniqueWordCount(userInputArr));

        /* set average word length  */
        $('#avgWordLength').text(calcAvgWordLength(userInputArr));

        /* now display stats to user */
        $('.text-report').removeClass('hidden')
    });

});


/* this function takes in an array and calculates the number of unique words in that array */
function calcUniqueWordCount(arr) {
    const uniqueObj = {};

    arr.forEach(entry => {
        if (!uniqueObj[entry]) {
            uniqueObj[entry] = entry;
        }
    });

    return Object.keys(uniqueObj).length;
}

/* this function takes in an array and calculates the average length of all words in the array */
function calcAvgWordLength(arr) {
    let total = 0;
    arr.forEach(entry => {
        total += entry.length;
    });

    return (total / arr.length).toFixed(2);
}