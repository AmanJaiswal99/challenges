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

// reset color
var allbuttons = document.getElementsByTagName('button');

function buttoncolorchange(buttonclick){
  if (buttonclick.value === 'red'){
      redbutton();
  }
  else if(buttonclick.value === 'black'){
      blackbutton();
}
else if(buttonclick.value === 'blue'){
      bluebutton();
}
else if(buttonclick.value === 'reset'){
      resetbutton();
}
else{
    randombutton();
}
}

function redbutton(){
  for(i=3;i<allbuttons.length;i++){
      allbuttons[i].classList.remove(allbuttons[i].classList[1]);
      allbuttons[i].classList.add('btn-danger');
  }

}
function bluebutton(){
    for(i=3;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-primary');
    }
  
  }
  function blackbutton(){
    for(i=3;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-dark');
    }
  
  }
  
  
  
  function resetbutton(){
    
        allbuttons[3].classList.remove(allbuttons[3].classList[1]);
        allbuttons[3].classList.add('btn-warning');
        allbuttons[4].classList.remove(allbuttons[4].classList[1]);
        allbuttons[4].classList.add('btn-danger');
        allbuttons[5].classList.remove(allbuttons[5].classList[1]);
        allbuttons[5].classList.add('btn-success');
        allbuttons[6].classList.remove(allbuttons[6].classList[1]);
        allbuttons[6].classList.add('btn-primary');
    }
  
function randombutton(){
    let n = Math.random()*4;
    let k = Math.floor(n);
    let random = ['btn-primary','btn-warning','btn-dark','btn-success'][k];
        allbuttons[3].classList.remove(allbuttons[3].classList[1]);
        allbuttons[3].classList.add(random);
   
    let s = Math.random()*4;
    let t = Math.floor(s);
    let random1 = ['btn-primary','btn-warning','btn-dark','btn-success'][t];
        allbuttons[4].classList.remove(allbuttons[4].classList[1]);
        allbuttons[4].classList.add(random1);
   
    let l = Math.random()*4;
    let v = Math.floor(l);
    let random2 = ['btn-primary','btn-warning','btn-dark','btn-success'][v];
        allbuttons[5].classList.remove(allbuttons[5].classList[1]);
        allbuttons[5].classList.add(random2);
   
    let q = Math.random()*4;
    let r = Math.floor(q);
    let random3 = ['btn-primary','btn-warning','btn-dark','btn-success'][r];
        allbuttons[6].classList.remove(allbuttons[6].classList[1]);
        allbuttons[6].classList.add(random3);
}

