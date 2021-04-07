prediction = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : "jpeg",
    jpeg_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+data_uri+'">';
    })
}

console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/15C6YovJS/model.json',modelLoaded);

function modelLoaded()
{
    console.log("MODEL LOADED!");
}

function speak()
{
    synth = window.speechSynthesis;
    speak_data =  prediction;
    utterThis = SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
