//TURN OFF AUTO-REFRESH NOW !!!


//From: https://api.openaq.org
let newsData;
let loading = true;
//let url = "https://api.openaq.org/v2/measurements?location_id=225765&parameter=pm25&parameter=pm10&parameter=no2&date_from=2023-02-06T00:00:00Z&date_to=2023-02-12T00:00:00Z&limit=1000";
let url = "https://inshorts.deta.dev/news?category=world";

index = 1;
//https://inshorts.deta.dev/news?category=world




function setup() {
  createCanvas(500, 500);
  frameRate(0.8);
  angleMode(DEGREES);
   //HAVE YOU TURNED OFF AUTO-REFRESH?
  
  // perform request
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log("Got data");
    console.log(data);
    //HAVE YOU TURNED OFF AUTO-REFRESH?
    
   // airData = data;
    newsData = data;
    loading = false;
     
  
  }).catch(function(err) {
    console.log(`Something went wrong: ${err}`);
  });
}

function draw() {

  let hr = hour();
  let mn = minute();
  let sc = second();
 
  let  minuteAngle = map(mn,0,random(60),0,360);
  let hourAngle = map(hr, 0, random(24), 0, 360);


  let centerX = width/2;
  let centerY = height/2;


 // if(frameCount % 4 == 0)drawFog(); // only draw the fog evey 16 frames

   textAlign(CENTER);
  background(250);

  fill(0);

  if (loading) {
    // loading screen
    textSize(30);
    
    text("Loading...", 0, height/2-25, width, 50);
    
  }else{

    textSize(15);
    textWrap(WORD);
   // updateWord();

   // rotate time
   push ();
   translate(width/2, height/2);
   rotate (minuteAngle);
   fill (155,122,229);
   text(newsData.data[index].time,0,30,400);
   pop ();
 
//  push ();
//  translate(width/2, height/2);
//  rotate (hourAngle);
//  textSize(32);
//  fill (15,222,229);
 text(newsData.data[index].date, width/2 -100,20 ,200);
//  pop ();

    // text(newsData.data[index].date,0,200,400);
    text(newsData.data[index].content,40,200,400);
    // console.log(newsData.data[index].time.minute);
    // if(frameCount % 90 == 0){
    //   index++;
    // }

     index++;

if (index >= newsData.data.length -1 ) {
      index = 0;
    }
   
  }

    //clock

   
  
    // let hrSpeed = hr * 10;
    // console.log(hrSpeed);
   fill (255);
   noStroke();
  //  text (hr + ':' + mn + ':' + sc,100,200)
   // text (hr + ':' + mn,100,200)
  push ();
  translate(width/2, height/2);
   rotate(-90);
  strokeWeight(4);
  
  noFill();
  //ellipse(200,200,300,300);
  // stroke (255,22,129);
  //  let secondAngle = map(sc,0,60,0,360);
  //  arc (0,0,100,100,0,secondAngle);
  
   stroke (155,122,229);
   
   arc (0,0,120,120,0,minuteAngle );
   line(0,0, );

  stroke (155,222,29);
  
   arc (0,0,140,140,0,hourAngle);
  
  
  
  pop ();

  push ();
  translate(width/2, height/2);
  strokeWeight(4);
  rotate (minuteAngle );
  stroke (155,122,229);
  line (0,0,100,0);
  pop ();
  
  push ();
  translate(width/2, height/2);
  strokeWeight(4);
  rotate (hourAngle );
  stroke (15,222,229);
  line (0,0,100,0);
  pop ();
}


//fog
function drawFog(){
  push();
  fill(255, 16);
  noStroke();
  rect(0,0,width,height);
  pop();
}
