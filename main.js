song1="";
song2="";
song1_status="";
song2_status="";
scoreRightWrist = 0;
 scoreLeftWrist = 0;
  rightWristX = 0;
   rightWristY = 0; 
   leftWristX = 0;
    leftWristY = 0;

    function preload(){
        song1=loadSound("song1.mp3");
        song2=loadSound("song2.mp3");
    }

    function setup() { canvas = createCanvas(600, 500);
         canvas.center();
          video = createCapture(VIDEO);
           video.hide();
            poseNet = ml5.poseNet(video, modelLoaded);
             poseNet.on('pose', gotPoses); }
     function modelLoaded() {
         console.log('PoseNet Is Initialized'); }

         function draw(){
            image(video,0,0,600,500);
            song1_status=song1.isPlaying();
            song2_status=song2.isPlaying();
            fill('red');
            stroke('red');
         }