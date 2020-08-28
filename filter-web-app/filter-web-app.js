nosex=0;
nosey=0;

function preload() {
    clown_nose=loadImage('https://i.postimg.cc/Jn6wFMdB/moustache.png');
}

function setup()
{
    canvas=createCanvas(300, 300)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet model is loaded');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-35;
        nosey=results[0].pose.nose.y+10 ;
    console.log("nose x = " + nosex);
    console.log("nose y = " + nosey);
    }
    
}

function draw(){
    image(video,0,0,300,300);

    image(clown_nose, nosex, nosey, 70, 20);

}


function take_snapshot()
{
    save('snapshot.png');
}