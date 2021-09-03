var noseX = "";
var noseY = "";

left = "";
right = "";
width = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 450);

    canvas = createCanvas(550, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#FF0000');
    // image(video, 0, 0, 550, 450);

    fill('#fcba03');
    stroke('#fcba03');

    rect(noseX, noseY, width);
}
function ModelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        left = results[0].pose.leftWrist.x;
        right = results[0].pose.rightWrist.x;

        width = left - right;

        console.log("Nose x  = "+noseX+"and Nose y = "+noseY);
    }
}
