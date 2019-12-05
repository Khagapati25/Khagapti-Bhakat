//call window object speech recognization
window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

var p= document.createElement("p");
var words= document.getElementById("words");
words.appendChild(p)
console.log(p);

recognition.addEventListener("result",(store)=>
{
    console.log(store.results)
    var transcript=[...store.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
    // p.innerHTML=transcript;
    if(store.result[0].isFinal)
    {
        p= document.createElement("p");
        words.appendChild(p);
        
    }
    // console.log(transcript);
});  // this is dom method to listen events
// recognition.addEventListener('end',recognition.start);
 
recognition.start();   //starting speech reconisation