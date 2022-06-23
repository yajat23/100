noseX=0;
noseY=0;

function preload(){
  clown_nose = loadImage('https://i.pinimg.com/736x/d3/08/65/d3086558665c07c38cc8ebe8ed33003a.jpg')
 }

 function setup()
 {
  canvas = creatCanvas(300, 300);
  canvas.center();
  video = crateCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
    console.log('poseNet Is Initialized');
 }
function gotPoses(results)
{
if(result.length > 0)
{
  console.log(results);
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.Y;
  console.log("nose x =" + noseX);
  console.log("nose y =" + noseY);
}
}

 function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
 }

 function take_snapshot()
 {
   save('myFilterImage.png');
 }