let img;
let firstRun = true;

let YmoveSunStart = 550; // Starts at the bottom
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
  let currentBackground1 = lerpColor(MyDarkBlue, MyLightBlue, lerpAmount);
  background(currentBackground1);

  let lineColour = lerpColor(MyDarkBlueL, MyLightBlueL, lerpAmount);

{// Background lines - VOCAL
  strokeWeight(20);
  let vocalMap = map(vocal, 0, 100, 1, 18) // number of lines
  let lengthOfLine = 900;
  let lineStart = 0; // x position
  let lineEnd = lineStart + lengthOfLine;
  stroke(lineColour, 80, 80);

  // Draw lines
  for (let i = 1; i <= vocalMap; i++) {
    let lineStep = height - (i * 24); // Calculate line position from bottom
    line(lineStart, lineStep, lineEnd, lineStep); // Draws the lines
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

  {// Cloud - OTHER
    beginShape();
    fill(255);
    noStroke();
    vertex(405, 116);
    bezierVertex(354, 158, 434, 185, 456, 142);
    bezierVertex(482, 175, 528, 161, 519, 138);
    bezierVertex(539, 155, 604, 154, 560, 105);
    bezierVertex(572, 58, 491, other, 434, 105);
    bezierVertex(419, 61, 363, other, 404, 117);
    endShape();
  }

  {// Wave 1 (at the back)
    fill(8, 85, 105); // Dark blue color
    noStroke();

    beginShape();
    vertex(0, 300); // Start from the bottom-left corner

    // Map drum intensity to amplitude of wave
    let amplitude1 = map(drum, 0, 100, 0, 200); // amplitude for big bumps

    // Smaller amplitude (every second bump)
    let smallerAmplitude1 = amplitude1 * 0.5;

    // Width of each bump
    let segmentWidth1 = 900 / 3; // canvas width, number of bumps

    // Loop to create bumps
    for (let i = 0; i < 3; i++) {
      let x1 = segmentWidth1 * (i + 0.5); // Midpoint of each bump 
      let x2 = segmentWidth1 * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude1 = (i % 2 === 1) ? smallerAmplitude1 : amplitude1;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth1 / 4, 300 - currentAmplitude1, // Control point above
        x1 + segmentWidth1 / 4, 300 + currentAmplitude1, // Control point below
        x2, 300                                 // End point on baseline
      );
    }

    // Close shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

  {// Wave 2 - DRUM
    fill(24, 113, 135); // Light blue color
    noStroke();

    beginShape();
    vertex(0, 350); // Moved up slightly from 400 to 350

    // Map drum intensity to amplitude of wave
    let amplitude2 = map(drum, 0, 100, 0, 100); // amplitude for big bumps

    // Smaller amplitude (every second bump)
    let smallerAmplitude2 = amplitude2 * 0.8; // change wave shape/size

    // Width of each bump
    let segmentWidth2 = 900 / 2; // canvas width, number of bumps

    // Loop to create bumps
    for (let i = 0; i < 2; i++) {
      let x1 = segmentWidth2 * (i + 0.5); // Midpoint of each bump 
      let x2 = segmentWidth2 * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude2 = (i % 2 === 1) ? smallerAmplitude2 : amplitude2;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth2 / 4, 350 - currentAmplitude2, // Control point above
        x1 + segmentWidth2 / 4, 350 + currentAmplitude2, // Control point below
        x2, 350                                 // End point on baseline
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

  {// Wave 3 - DRUM
    fill(122, 201, 221); // Dark blue color
    noStroke();

    beginShape();
    vertex(0, 400); // Start from the bottom-left corner

    // Map drum intensity to amplitude of wave
    let amplitude3 = map(drum, 0, 100, 0, 100); // amplitude for big bumps

    // Smaller amplitude (every second bump)
    let smallerAmplitude3 = amplitude3 * 0.8; // change wave shape/size

    // Width of each bump
    let segmentWidth3 = 900 / 3; // canvas width, number of bumps

    // Loop to create bumps
    for (let i = 0; i < 3; i++) {
      let x1 = segmentWidth3 * (i + 0.5); // Midpoint of each bump 
      let x2 = segmentWidth3 * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude3 = (i % 2 === 1) ? smallerAmplitude3 : amplitude3;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth3 / 4, 400 - currentAmplitude3, // Control point above
        x1 + segmentWidth3 / 4, 400 + currentAmplitude3, // Control point below
        x2, 400                                 // End point on baseline
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

  {// Wave 4 - DRUM
    fill(164, 217, 231); // Even lighter blue color
    noStroke();

    beginShape();
    vertex(0, 420); // Moved up from 500 to 450

    // Map drum intensity to amplitude of wave
    let amplitude4 = map(drum, 0, 100, 0, 50); // amplitude for the third set of bumps

    // Smaller amplitude (every second bump)
    let smallerAmplitude4 = amplitude4 * 1.5; // shape and size of the third waves

    // Width of each bump
    let segmentWidth4 = 900 / 2; // Canvas width, number of bumps for third waves

    // Loop to create bumps
    for (let i = 0; i < 2; i++) {
      let x1 = segmentWidth4 * (i + 0.5); // Midpoint of each bump 
      let x2 = segmentWidth4 * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude4 = (i % 2 === 1) ? smallerAmplitude4 : amplitude4;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth4 / 4, 450 - currentAmplitude4, // Control point above
        x1 + segmentWidth4 / 4, 450 + currentAmplitude4, // Control point below
        x2, 450                                 // End point on baseline
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

{// Wave 4.5 (flows up yellow)
fill(213, 156, 103); // sand yellow
noStroke();

let waveStartY = height + 10; // Start at the bottom
let waveEndY = -150; // End position above the canvas 
let waveSpeedFactor = 20; 

let moveStartTime = 78; // Start moving at 1:15 (75 seconds)
let waveY = waveStartY; // Initial wave position

// Check if the current elapsed time has reached 1:15 mark to start moving the wave
if (elapsedSeconds >= moveStartTime) {
  // Calculate adjusted lerpAmount to gradually move the wave up after 1:15
  let adjustedLerpAmount = min((elapsedSeconds - moveStartTime) / (totalDurationSeconds / waveSpeedFactor), 1); 
  waveY = lerp(waveStartY, waveEndY, adjustedLerpAmount); // Gradually move the wave up
}

beginShape();
vertex(0, waveY); // Start at the bottom-left corner 

// Map drum intensity to amplitude of wave
let amplitude = map(drum, 0, 100, 0, 150); // bump height

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
    x1 - segmentWidth / 4, waveY - currentAmplitude, // Control point above 
    x1 + segmentWidth / 4, waveY + currentAmplitude, // Control point below
    x2, waveY                                 // End point on baseline 
  );
}

// Close the shape to fill under the wave
vertex(900, height); // Bottom-right corner of the canvas
vertex(0, height); // Bottom-left corner of the canvas
endShape(CLOSE);
}

{// Sand particles - BASS
  // Time when particles appear
  let particleStartTime = 86; 

  // Only draw the particles after 1.25 minutes
  if (elapsedSeconds >= particleStartTime) {

    if (typeof sandParticles === 'undefined') {
      sandParticles = [];
      let numParticles = 100;
      let width = 900;  
      let height = 200; 

      // Generate particles once
      for (let i = 0; i < numParticles; i++) {
        let x = random(0, width);  // Random x position within the given width
        let y = random(0, height); // Random y position within the given height
        sandParticles.push({ x, y, opacity: random(50, 255) }); // Random initial opacity for each particle
      }
    }

    let bassMap = map(bass, 0, 100, 0, 255); // opacity control
    
    for (let i = 0; i < sandParticles.length; i++) {
      let { x, y, opacity } = sandParticles[i];
      
      // Calculate final opacity
      let finalOpacity = map(bassMap, 0, 255, opacity, 0); // Opacity decreases with 'bass' increasing
      
      // Calculate particle size
      let minSize = 1; // Minimum size
      let maxSize = 10; // Maximum size
      let finalSize = map(bassMap, 0, 255, minSize, maxSize); // Size increases with 'bass'

      fill(128, 86, 44, finalOpacity); // Brown color with opacity
      noStroke();
      ellipse(x, y, finalSize, finalSize); 
    }
  }
}

  {// Wave 5 (flows up)
    fill(164, 217, 231); // lightest blue color
    noStroke();

    let waveStartY = height; // Start at the bottom
    let waveEndY = 200; // End position above the canvas 
    let waveSpeedFactor = 25; // wave speed

    let moveStartTime = 75; // Start moving at 1:15 (75 seconds)
    let waveY = waveStartY; // Initial wave position

    // Check if elapsed time has reached 1:15 mark to start moving the wave
    if (elapsedSeconds >= moveStartTime) {
      // adjusted lerpAmount to gradually move the wave up after 1:15
      let adjustedLerpAmount = min((elapsedSeconds - moveStartTime) / (totalDurationSeconds / waveSpeedFactor), 1); 
      waveY = lerp(waveStartY, waveEndY, adjustedLerpAmount); // Gradually move the wave up
    }

    beginShape();
    vertex(0, waveY); // Start at the bottom-left corner 

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
        x1 - segmentWidth / 4, waveY - currentAmplitude, // Control point above 
        x1 + segmentWidth / 4, waveY + currentAmplitude, // Control point below 
        x2, waveY                                 // End point on baseline 
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right corner of the canvas
    vertex(0, height); // Bottom-left corner of the canvas
    endShape(CLOSE);
  }

  {// Wave 6 (flows up)
    fill(122, 201, 221); // dark blue color
    noStroke();

    let waveStartY = height + 60; // Start at the bottom
    let waveEndY = 270; // End position above the canvas 
    let waveSpeedFactor = 22; // wave speed

    let moveStartTime = 75; // Start moving at 1:15 (75 seconds)
    let waveY = waveStartY; // Initial wave position

    // Check if elapsed time has reached 1:15to start moving the wave
    if (elapsedSeconds >= moveStartTime) {
      // lerpAmount to gradually move the wave up after 1:15
      let adjustedLerpAmount = min((elapsedSeconds - moveStartTime) / (totalDurationSeconds / waveSpeedFactor), 1); 
      waveY = lerp(waveStartY, waveEndY, adjustedLerpAmount); // Gradually move the wave up
    }

    beginShape();
    vertex(0, waveY); // Start at the bottom-left corner 

    // Map drum intensity to amplitude of wave
    let amplitude = map(drum, 0, 100, 0, 150); // wave bump height

    // Smaller amplitude (every second bump)
    let smallerAmplitude = amplitude * 1.5; // Shape and size of the waves

    // Width of each bump
    let segmentWidth = 900 / 1; // Canvas width, number of bumps 

    // Loop to create bumps
    for (let i = 0; i < 1; i++) {
      let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump
      let x2 = segmentWidth * (i + 1);   // End point of each bump

      // Alternate amplitude for every second bump
      let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth / 4, waveY - currentAmplitude, // Control point above 
        x1 + segmentWidth / 4, waveY + currentAmplitude, // Control point below 
        x2, waveY                                 // End point on baseline 
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right of canvas
    vertex(0, height); // Bottom-left corner of canvas
    endShape(CLOSE);
  }

  {// Wave 7 (flows up)
    fill(24, 113, 135); // darker blue color
    noStroke();

    let waveStartY = height + 60; // Start at the bottom
    let waveEndY = 320; // End position above the canvas
    let waveSpeedFactor = 20; // wave speed

    let moveStartTime = 75; // Start moving at 1:15 (75 seconds)
    let waveY = waveStartY; // Initial wave position

    // Check if the current elapsed time has reached 1:15 mark to start moving the wave
    if (elapsedSeconds >= moveStartTime) {
      // Calculate adjusted lerpAmount to gradually move the wave up after 1:15
      let adjustedLerpAmount = min((elapsedSeconds - moveStartTime) / (totalDurationSeconds / waveSpeedFactor), 1); 
      waveY = lerp(waveStartY, waveEndY, adjustedLerpAmount); // Gradually move the wave up
    }

    beginShape();
    vertex(0, waveY); // Start at the bottom-left corner (moving up with waveY)

    // Map drum intensity to amplitude of wave
    let amplitude = map(drum, 0, 100, 0, 100); // Adjusts height of wave bump

    // Smaller amplitude (every second bump)
    let smallerAmplitude = amplitude * 1.5; // Adjusts height of smaller wave bump

    // Width of each bump
    let segmentWidth = 900 / 1.5; // Canvas width, number of bumps

    // Loop to create bumps
    for (let i = 0; i < 1.5; i++) {
      let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump
      let x2 = segmentWidth * (i + 1);   // End point of each bump

      // Other amplitude for every second bump
      let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

      // BezierVertex to create the bump
      bezierVertex(
        x1 - segmentWidth / 4, waveY - currentAmplitude, // Control point above 
        x1 + segmentWidth / 4, waveY + currentAmplitude, // Control point below 
        x2, waveY                                 // End point on baseline 
      );
    }

    // Close the shape to fill under the wave
    vertex(900, height); // Bottom-right of canvas
    vertex(0, height); // Bottom-left of canvas
    endShape(CLOSE);
  }

{// Feet
  let startTime = 90; // 1:30 in seconds
  let endTime = 150; // 2:30 in seconds
  let fadeStartTime = 157; // 2:37 in seconds
  let totalFeet = 16; // Number of feet
  let displayInterval = (endTime - startTime) / totalFeet; // Time between each foot appearing
  let fadeDuration = (totalDurationSeconds - fadeStartTime) / totalFeet; // Time for each foot to fade
  
  if (elapsedSeconds >= startTime) {
    // Foot size)
    let footWidth = 35;
    let footHeight = 22;
    
    // X positions
    let xPositions = [
      0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900
    ];

    // Y positions alternate simulate a walking pattern
    let yPositions = [90, 110]; // Feet alternate between y = 90 and y = 110

    // Draw footsteps based on elapsed time
    for (let i = 0; i < totalFeet; i++) {
      if (elapsedSeconds >= startTime + i * displayInterval) {
        
        // Calculate the transparency (alpha) based on the fade start time
        let alpha = 255; // Fully visible
        if (elapsedSeconds >= fadeStartTime + i * fadeDuration) {
          alpha = map(elapsedSeconds, fadeStartTime + i * fadeDuration, totalDurationSeconds, 255, 0);
          alpha = constrain(alpha, 0, 255); // Make sure alpha stays within 0-255 range
        }

      
        fill(162, 91, 47, alpha);

        // Alternate between the two y positions for left-right step pattern
        let yPosition = yPositions[i % 2]; 
        ellipse(xPositions[i], yPosition, footWidth, footHeight);
      }
    }
  }
}

}


















  








