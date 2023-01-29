let chessBoard = document.getElementById('chessBoard');
let startBtn = document.getElementById('startBtn');
let smallSquare = document.getElementsByClassName('smallSquare');
let random = document.getElementById('random');
let sign = document.getElementById('sign');
let record = document.getElementById('record');
let isStartClicked = false;
const element = document.getElementById('timeShow');
// let isChessClicked = false;
let count = 30;
let score = 0;
let numArr = [1, 2, 3, 4, 5, 6, 7, 8];
let charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function getRandom()
{
    let randomChar = charArr[Math.floor(Math.random() * charArr.length)];
    let randomNum = numArr[Math.floor(Math.random() * numArr.length)];
    random.innerHTML = randomChar + randomNum;
}

/* Draw Chess Board */
for (let i = 0; i < 8; i++)
{
    for (let j = 0; j < 8; j++)
    {
        let smallSquare = document.createElement('div');
        smallSquare.className = 'smallSquare';
        smallSquare.id = charArr[i] + numArr[j];
        if(i===7)
        {
            let El = document.createElement("span");
            El.innerText = numArr[j];
            El.style.position = "absolute";
            El.style.bottom = 0;
            El.style.right = 0;
            smallSquare.appendChild(El);
            smallSquare.style.position = "relative";
        }
        
        if(j === 0){
            let El = document.createElement("span");
            El.innerText = charArr[i];
            El.style.position = "absolute";
            El.style.top = 0;
            El.style.left = 0;
            smallSquare.appendChild(El);
            smallSquare.style.position = "relative";
        } 
        
        if ((i + j) % 2 === 0)
        {
            smallSquare.style.backgroundColor = 'palegoldenrod';
        }
        chessBoard.appendChild(smallSquare);
    }
}

startBtn.addEventListener('click', playCounter);
chessBoard.addEventListener('click',selectedSquare);

/* Count Down Function */
function playCounter(e)
{
    if(isStartClicked === false)
    {
        isStartClicked = true;
        getRandom();
    
        // e.target.style.display = "none";
        let kamal = setInterval(() => {
            if (count === 0)
            {
                element.innerHTML = "00:0" + count;
                random.innerHTML = "Game Over";
                isStartClicked = false;
                count = 30;
                clearInterval(kamal);
            }
            else if (count <= 10)
            {
                count--;
                element.innerHTML = "00:0" + count;
            }
            else if (count > 10)
            {
                count--;
                element.innerHTML = "00:" + count;
            }

        }, 1000);
    }
}

function selectedSquare(e)
{
    if(isStartClicked && e.target.classList.contains("smallSquare"))
    {
        if(random.textContent === e.target.id)
        {
            let correct = document.createElement('span');
            correct.style.color = "green";
            correct.innerHTML = " &check;";
            record.innerHTML = ++score;
            sign.appendChild(correct);
        }
        else
        {
            let wrong = document.createElement('span');
            wrong.style.color = "red";
            wrong.innerHTML = " X";
            sign.appendChild(wrong);
        }
        getRandom();
    }
}
// random.innerHTML = getRandom();
// var countDown = function (count)
// {
//         var countDown = setInterval(function ()
//         {
//             document.getElementById('timeShow').innerHTML = '00:' + count;
//             count--;
//             if(count < 0)
//             {
//                 clearInterval(count);
//             }
//         }, 1000)
// }

// countDown();
// let count = 30;
// setInterval(function ()
// {
//     document.getElementById('timeShow').innerHTML = '00:' + count;
//     count--;
//     if(count < 0)
//     {
//         clearInterval(count);
//     }
// }, 1000)

// if(e.target.classList.contains("smallSquare")){
//     console.log(e.target.id === random.textContent);
// }else{
//     console.log(e.target.parentNode.id === random.textContent);
// }