// 1. Use common function

// Empty Value
function emptyValue(id){
    document.getElementById(id).value = '';
}

// Empty Text
function emptyText(id){
    document.getElementById(id).innerText = '';
}

// Display None
function displayNone(id){
    document.getElementById(id).style.display = 'none';
}

// Display Block
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}


// 2. Generate random Number
function randomNumFun(){
     let randomNumber = Math.floor(1000 + Math.random() * 9000);
     document.getElementById('generateNum').value = randomNumber;

     emptyValue('inputPin');
     displayNone('matched');
     displayNone('tryContent');
    }


// 3. Input Number value
function btnKey(id){
    let prevValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = prevValue + key;
}

// 4. Clear Input Value
function clean(){
    document.getElementById('inputPin').value = '';
}

// 5. Clean Last Value
function cleanLast(){
    let inputResult = document.getElementById('inputPin').value;
    let removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputPin').value = removeValue;
}


// 6. submit Button (Pin matching or Didn't matching Condition)
function submitBtn(){
    let randomNum = document.getElementById('generateNum').value;
    let typeNum = document.getElementById('inputPin').value;

        // 7. Pin Matching Condition
    if(randomNum === typeNum) {
        displayBlock('matched');
        displayNone('unMatched');
        displayNone('tryContent');
    }
    else
    {
        displayBlock('unMatched');
        displayNone('matched');
        tryLeft('tryLeft');
        displayBlock('tryContent')
    } 
}


// 8. Pin Match Error - Try 3 Left
function tryLeft(id){
    let tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == '1'){
        disableBtn('submit');
    }
}


// 9. Try Left Expired - submit Button Disabled
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = 'not-allowed';
    button.setAttribute('disabled', 'true');
    button.title = 'Please Reload the Page';
}

var vid = document.getElementById("myVideo");
vid.onplay = function() {

};