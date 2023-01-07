var input = 'abbflmffchocC19 ieqvh';

function countString(str) {
    var count = 0;
    
    for (let i = 0; i < str.length; i++)
    {
        letter = str.charAt(i);
        console.log(letter);

        for (let j = 0; j < str.length; j++)
        {
            if (letter === str.charAt(j))
            {
                count++;
            }
        }
        console.log(`${letter}  occurs  ${count} times`)
        count = 0;
    }
}

countString(input);