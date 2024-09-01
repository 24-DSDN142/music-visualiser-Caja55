let img;
let firstRun = true;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // background(229,204,255)
  // let offset = 0; // to move the waves up or down
  rectMode(CENTER);
  strokeWeight(9);
  
  if (firstRun) {
    // Initialize anything needed for the first run
    firstRun = false;
  }

  let MyDarkBlue = color(7, 72, 94); // dark blue
  let MyLightBlue = color(175, 230, 250); // light blue
  let DrumColorAmt = map(drum, 0, 100, 0, 1);
  let blendColor = lerpColor(MyDarkBlue, MyLightBlue, DrumColorAmt);

  background(blendColor);

  let drumMap = map(drum, 0, 100, 1, 26);
  let lengthOfLine = 900;
  let lineStart = 0;
  let lineEnd = lineStart + lengthOfLine;
  stroke(drumMap, 80, 80);

  for (let i = 1; i <+ drumMap; i++) {
    let lineStep = i * 20;
    line(lineStart, lineStep, lineEnd, lineStep);
  }

































{ // random line movement?
//   let numPoints = 100; // Number of points in the waveform
//   let segmentWidth = width / numPoints; // Width between each point

//   // Map drum intensity to amplitude of the waveform spikes
//   let amplitude = map(drum, 0, 100, 0, 150); // Adjust maximum spike height as needed

//   // Draw the waveform with spikes
//   stroke(0); // Black color for the waveform
//   noFill(); // No fill for the waveform shape
  
//   beginShape();
//   for (let i = 0; i <= numPoints; i++) {
//     let x = i * segmentWidth; // X position
//     let spikeHeight = amplitude * sin(i * 0.1 + counter * 0.05); // Base spike height based on sine function
//     let y = height / 2 + spikeHeight; // Y position with spikes
    
//     // Randomize spikes to create more varied effect
//     let randomOffset = random(-20, 20); // Random offset for variation
//     y += randomOffset;

//     vertex(x, y); // Create vertex at the calculated position
//   }
//   endShape();
}


// { // diff waves with colour
//   fill(0, 0, 139); // Dark blue color
//   noStroke();

//   beginShape();
//   vertex(0, height); // Start from the bottom-left corner

//   // Map drum intensity to amplitude of wave
//   let amplitude = map(drum, 0, 100, 0, 500); // Main amplitude for most bumps

//   // Smaller amplitude every second bump
//   let smallerAmplitude = amplitude * 0.5; // Adjust the factor (0.5) as needed

//   // Width of each bump
//   let segmentWidth = 900 / 10; // 900 is canvas width, 10 is number of bumps

//   // Loop to create 10 bumps
//   for (let i = 0; i < 10; i++) {
//     let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump 
//     let x2 = segmentWidth * (i + 1);   // End point of each bump

//     // Alternate amplitude for every second bump
//     let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

//     // BezierVertex to create the bump
//     bezierVertex(
//       x1 - segmentWidth / 4, 300 - currentAmplitude, // Control point above
//       x1 + segmentWidth / 4, 300 + currentAmplitude, // Control point below
//       x2, 300                                 // End point on baseline
//     );
//   }

//   // Close the shape to fill under the wave
//   vertex(900, height); // Bottom-right corner of the canvas
//   vertex(0, height); // Bottom-left corner of the canvas
//   endShape(CLOSE);
// }


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
