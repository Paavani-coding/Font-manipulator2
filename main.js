function setup(){
    video= createCapture(VIDEO);
    video.size(650,625);
    video.position(100,124)

    canvas= createCanvas(560,500);
    canvas.position(820,185);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#008080');
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(){
    if(results.length>0){
        console.log(results);
    }}