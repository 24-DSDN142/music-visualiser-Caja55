let img;
let firstRun = true;

let YmoveSunStart = 550; // Start at the bottom
let YmoveSunEnd = -50;   // End position just off the top
let totalDurationSeconds = 179; // song is 2 minutes 59 seconds
let timeForSunToMove = 75; // Time in seconds for the sun to move off the screen (1:15)

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  rectMode(CENTER);

  if (firstRun) {
    // anything needed for the first run
    firstRun = false;
  }

  let MyDarkBlue = color(7, 72, 94); // dark blue
  let MyLightBlue = color(175, 230, 250); // light blue

  let MyDarkBlueL = color(8, 84, 110)
  let MyLightBlueL = color(182, 232, 250)

  let elapsedSeconds = millis() / 1000; // time since started run, in seconds
  let lerpAmount = min(elapsedSeconds / totalDurationSeconds, 1); // progress of song

  // Adjust lerpAmount to reflect the sun's position
  let sunLerpAmount = min(elapsedSeconds / timeForSunToMove, 1); 

  // Transition from dark to light blue
  let currentBackground = lerpColor(MyDarkBlue, MyLightBlue, lerpAmount);
  background(currentBackground);

  let lineColour = lerpColor(MyDarkBlueL, MyLightBlueL, lerpAmount);

  {// Background lines
    strokeWeight(20);
    let drumMap = map(drum, 0, 100, 1, 12);// number of lines
    let lengthOfLine = 900;
    let lineStart = 0;// x position
    let lineEnd = lineStart + lengthOfLine;
    stroke(lineColour, 80, 80);

    // Draw lines
    for (let i = 1; i <= drumMap; i++) {
      let lineStep = i * 24; // space between lines
      line(lineStart, lineStep, lineEnd, lineStep);//draws the lines
    }
  }

  {// Draws sun
    // Move sun from start to end position
    let YmoveSun = lerp(YmoveSunStart, YmoveSunEnd, sunLerpAmount);

    fill(255, 204, 0);
    noStroke();
    ellipse(100, YmoveSun, 100, 100); // Position the sun at YmoveSun

    // Reset when the sun moves off the top of the canvas
    if (YmoveSun < YmoveSunEnd) {
      YmoveSun = YmoveSunStart; // Reset to bottom of the canvas
    }
  }

  {// Cloud
    beginShape();
    fill(255);
    noStroke();
    vertex(405, 116);
    bezierVertex(354, 158, 434, 185, 456, 142);
    bezierVertex(482, 175, 528, 161, 519, 138);
    bezierVertex(539, 155, 604, 154, 560, 105);
    bezierVertex(572, 58, 491, vocal, 434, 105);
    bezierVertex(419, 61, 363, vocal, 404, 117);
    endShape();
  }

  {// Wave 1 (at the back)
    fill(8, 85, 105); // Dark blue color
    noStroke();

    beginShape();
    vertex(0, 300); // Start from the bottom-left corner

    // Map drum intensity to amplitude of wave
    let amplitude = map(drum, 0, 100, 0, 200); // amplitude for big bumps

    // Smaller amplitude (every second bump)
    let smallerAmplitude = amplitude * 0.5;

    // Width of each bump
    let segmentWidth = 900 / 3; // canvas width, number of bumps

    // Loop to create bumps
    for (let i = 0; i < 3; i++) {
      let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump 
      let x2 = segmentWidth * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth / 4, 300 - currentAmplitude, // Control point above
        x1 + segmentWidth / 4, 300 + currentAmplitude, // Control point below
        x2, 300                                 // End point on baseline
      );
    }

    // Close shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

  {// Wave 2
    fill(24, 113, 135); // Light blue color
    noStroke();

    beginShape();
    vertex(0, 350); // Moved up slightly from 400 to 350

    // Map drum intensity to amplitude of wave
    let amplitude = map(drum, 0, 100, 0, 100); // amplitude for big bumps

    // Smaller amplitude (every second bump)
    let smallerAmplitude = amplitude * 0.8; // change wave shape/size

    // Width of each bump
    let segmentWidth = 900 / 2; // canvas width, number of bumps

    // Loop to create bumps
    for (let i = 0; i < 2; i++) {
      let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump 
      let x2 = segmentWidth * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth / 4, 350 - currentAmplitude, // Control point above
        x1 + segmentWidth / 4, 350 + currentAmplitude, // Control point below
        x2, 350                                 // End point on baseline
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

  {// Wave 3
    fill(122, 201, 221); // Dark blue color
    noStroke();

    beginShape();
    vertex(0, 400); // Start from the bottom-left corner

    // Map drum intensity to amplitude of wave
    let amplitude = map(drum, 0, 100, 0, 100); // amplitude for big bumps

    // Smaller amplitude (every second bump)
    let smallerAmplitude = amplitude * 0.8; // change wave shape/size

    // Width of each bump
    let segmentWidth = 900 / 3; // canvas width, number of bumps

    // Loop to create bumps
    for (let i = 0; i < 3; i++) {
      let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump 
      let x2 = segmentWidth * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth / 4, 400 - currentAmplitude, // Control point above
        x1 + segmentWidth / 4, 400 + currentAmplitude, // Control point below
        x2, 400                                 // End point on baseline
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

  {// Wave 4
    fill(164, 217, 231); // Even lighter blue color
    noStroke();

    beginShape();
    vertex(0, 420); // Moved up from 500 to 450

    // Map drum intensity to amplitude of wave
    let amplitude = map(drum, 0, 100, 0, 50); // amplitude for the third set of bumps

    // Smaller amplitude (every second bump)
    let smallerAmplitude = amplitude * 1.5; // shape and size of the third waves

    // Width of each bump
    let segmentWidth = 900 / 2; // Canvas width, number of bumps for third waves

    // Loop to create bumps
    for (let i = 0; i < 2; i++) {
      let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump
      let x2 = segmentWidth * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth / 4, 420 - currentAmplitude, // Control point above
        x1 + segmentWidth / 4, 420 + currentAmplitude, // Control point below
        x2, 420                                 // End point on baseline
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

    {// Wave 5 (flows up)
    fill(164, 217, 231); // Even lighter blue color
    noStroke();
  
    let waveStartY = height; // Start at the bottom
    let waveEndY = -150; // End position above the canvas (adjust as needed)
    let waveSpeedFactor = 10; // Increase this value to make the wave move faster
  
    // Adjust lerpAmount to make the wave move up faster
    let adjustedLerpAmount = min(elapsedSeconds / (totalDurationSeconds / waveSpeedFactor), 1); 
  
    let waveY = lerp(waveStartY, waveEndY, adjustedLerpAmount); // Gradually move the wave up
  
    beginShape();
    vertex(0, waveY); // Start at the bottom-left corner (moving up with waveY)
  
    // Map drum intensity to amplitude of wave
    let amplitude = map(drum, 0, 100, 0, 150); // Adjust amplitude as needed
  
    // Smaller amplitude (every second bump)
    let smallerAmplitude = amplitude * 1.5; // Shape and size of the waves
  
    // Width of each bump
    let segmentWidth = 900 / 2; // Canvas width, number of bumps for waves
  
    // Loop to create bumps
    for (let i = 0; i < 2; i++) {
      let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump
      let x2 = segmentWidth * (i + 1);   // End point of each bump
  
      // Alternate amplitude for every second bump
      let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;
  
      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth / 4, waveY - currentAmplitude, // Control point above (moving up with waveY)
        x1 + segmentWidth / 4, waveY + currentAmplitude, // Control point below (moving up with waveY)
        x2, waveY                                 // End point on baseline (moving up with waveY)
      );
    }
  
    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
    }








// { // same waves
//   fill(173, 216, 230); // Light blue color
//   noStroke();

//   beginShape();
//   vertex(0, height - offset); // Start from the bottom-left corner adjusted by offset

//   // Map the drum intensity to the amplitude of the wave
//   let amplitude = map(bass, 0, 100, 0, 500); // Adjust these numbers for different wave heights

//   // Width of each bump on the canvas
//   let segmentWidth = 900 / 10; // 900 is the canvas width, 10 is the number of bumps

//   // Loop to create 10 bumps
//   for (let i = 0; i < 10; i++) {
//     let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump segment
//     let x2 = segmentWidth * (i + 1);   // End point of each bump segment

//     // Add bezierVertex to create the bump
//     bezierVertex(
//       x1 - segmentWidth / 4, height - offset - (amplitude * 0.5), // Control point above
//       x1 + segmentWidth / 4, height - offset - (amplitude * 0.5), // Control point below
//       x2, height - offset                                 // End point on baseline
//     );
//   }

//   // Close the shape to fill under the wave
//   vertex(900, height - offset); // Bottom-right corner of the canvas adjusted by offset
//   vertex(0, height - offset); // Bottom-left corner of the canvas adjusted by offset
//   endShape(CLOSE);
// }

{ // random line movement?
  // let numPoints = 100; // Number of points in the waveform
  // let segmentWidth = width / numPoints; // Width between each point

  // // Map drum intensity to amplitude of the waveform spikes
  // let amplitude = map(drum, 0, 100, 0, 150); // Adjust maximum spike height as needed

  // // Draw the waveform with spikes
  // stroke(0); // Black color for the waveform
  // noFill(); // No fill for the waveform shape
  
  // beginShape();
  // for (let i = 0; i <= numPoints; i++) {
  //   let x = i * segmentWidth; // X position
  //   let spikeHeight = amplitude * sin(i * 0.1 + counter * 0.05); // Base spike height based on sine function
  //   let y = height / 2 + spikeHeight; // Y position with spikes
    
  //   // Randomize spikes to create more varied effect
  //   let randomOffset = random(-20, 20); // Random offset for variation
  //   y += randomOffset;

  //   vertex(x, y); // Create vertex at the calculated position
  // }
  // endShape();
}


{//every second diff
  // beginShape();
  // vertex(0, 300); // Start point at the left edge of the canvas

  // // Map the drum intensity to the amplitude of the wave
  // let amplitude = map(drum, 0, 100, 0, 500); // Main amplitude for most bumps

  // // Define a smaller amplitude for every second bump
  // let smallerAmplitude = amplitude * 0.5; // Adjust the factor (0.5) as needed

  // // Width of each bump on the canvas
  // let segmentWidth = 900 / 10; // 900 is the canvas width, 10 is the number of bumps

  // // Loop to create 10 bumps
  // for (let i = 0; i < 10; i++) {
  //   let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump segment
  //   let x2 = segmentWidth * (i + 1);   // End point of each bump segment

  //   // Alternate amplitude for every second bump
  //   let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

  //   // Add bezierVertex to create the bump
  //   bezierVertex(
  //     x1 - segmentWidth / 4, 300 - currentAmplitude, // Control point above
  //     x1 + segmentWidth / 4, 300 + currentAmplitude, // Control point below
  //     x2, 300                                 // End point on baseline
  //   );
  // }

  // endShape();
}




























//   beginShape();
//   vertex(161, 455);
//   bezierVertex(254, 300, 278, 454, 314, 454);
//   bezierVertex(353, 454, 388, 297, 451, 454);
//   endShape();




// rect(150,500,200,drum)














// console.log(counter)
// if (counter > 300 && counter <800){//makes cicle change colour at certain points
//   fill(204,229,255)// makes baige cicles
// }else{
//   fill(255,229,204)//makes blue circles

// }

// for(let i = 1; i <=5; i++){// draws 5 circles down the page
//   let loopyY = y *i;



// ellipse (200, loopyY, 100)// big circle
// ellipse (300, loopyY, 70)//medium circle
// ellipse (370, loopyY, 30)//small circle


}




















  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);
  







  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
