var seconds, minutes;
function setup(){
  angleMode(DEGREES);
  createCanvas(800,800);
  background(0);
  seconds = 0;
  minutes = 0;
  hours = 0;
  
}
function draw(){
  background(0);
  if(frameCount % 60 === 59){
    seconds += 6;
  }
  if(frameCount % 3600 === 3599){
    minutes += 6;
  }
  if(frameCount % 216000 === 215999){
    hours += 30;
  }
  
  
  
  stroke(255);
  clock(400,400,200, 150, 100)
}

function clock(xOff, yOff, length1, length2, length3){
  stroke(255,0,0);
  strokeWeight(5);
  noFill();
  line(xOff,yOff,sin(seconds)*length1+xOff,cos(seconds+180)*length1+yOff);
  arc(400,400,500,500,-90,seconds-90)

  stroke(0,255,0);
  line(xOff,yOff,sin(minutes)*length2+xOff,cos(minutes+180)*length2+yOff);
  arc(400,400,485,485,-90,minutes-90)

  stroke(0,0,255);
  line(xOff,yOff,sin(hours)*length3+xOff,cos(hours+180)*length3+yOff);
  arc(400,400,470,470,-90,hours-90)
}