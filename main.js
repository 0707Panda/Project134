img="";
Status="";
objects=[];
audio="";

function preload(){
    img=loadImage('dog_cat.jpg');
    audio=loadSound('audioFile.wav');
}

function setup(){
  
}

function draw(){
    image(video, 0, 0, 380, 380);
    for(i=0; i < objects.length; i++){
    if(objects[i].label == person){
       document.getElementById("status").innerHTML="Baby Detected.";
    }else{
        document.getElementById("status").innerHTML="Baby Not Detected!!!";
        audio.play();
    }
    if(objects[i].length < 0){
        document.getElementById("status").innerHTML="Baby Not Detected!!!";
        audio.play();
    }
}
}


function modelLoaded(){
    console.log("Model loaded.");
    Status=true;
}

function gotResults(results, error){
    if(error){
        console.log(error);
    }
    console.log(results);

    objects = results;
}