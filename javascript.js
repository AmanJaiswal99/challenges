function input() {
    var birthyear = prompt('What is your birthyear....good friend?');
    var age = 2020 - birthyear;
    var ageindays = 365 * age;
    var h1 = document.createElement('h5');             // created an element of h5 size
    var output = document.createTextNode('You are ' + ageindays + ' days old');
    h1.setAttribute('id', 'bjp');   // set h1's id to ageindays
    h1.appendChild(output)             // putting the value of output in h1
    document.getElementById('flex-box-result').appendChild(h1);   // put value of h1 into an element with id we want
} 
function reset() {
    document.getElementById('bjp').remove();
}
function addcat() {
    var picture = document.createElement("img");
    var div = document.getElementById("cat");
    picture.src = "https://i.gifer.com/7Eyy.gif";
    div.appendChild(picture);
}

