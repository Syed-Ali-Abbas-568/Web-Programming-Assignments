addOnLoad(initOne);
addOnLoad(initTwo);

function addOnLoad(newFunction) {

    var oldOnLoad = window.onload;

    if (typeof (oldOnLoad) == function) {
        console.log(oldOnLoad)
        window.onload = function () {

            oldOnload();
            newFunction();
        }
    }
    else {
        window.onload = newFunction;
    }

}

function initOne() {
    Document.getElementById("pageBody").style.backgroundColor = "#00F";
}

function initTwo() {
    Document.getElementById("pageBody").style.backgroundColor = "#F00";
}