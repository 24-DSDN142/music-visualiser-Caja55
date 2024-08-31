
// let img;
// let firstRun = true
// let y = 160;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(229,204,255)
noFill()

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



{// same waves
// beginShape();
//   vertex(0, 300); // Start point at the left edge of the canvas

//   // Map the drum intensity to the amplitude of the wave
//   let amplitude = map(drum, 0, 100, 0, 500); // Adjust these numbers for different wave heights

//   // Width of each bump on the canvas
//   let segmentWidth = 900 / 10; // 900 is the canvas width, 10 is the number of bumps

//   // Loop to create 10 bumps
//   for (let i = 0; i < 10; i++) {
//     let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump segment
//     let x2 = segmentWidth * (i + 1);   // End point of each bump segment

//     // Add bezierVertex to create the bump
//     bezierVertex(
//       x1 - segmentWidth / 4, 300 - amplitude, // Control point above
//       x1 + segmentWidth / 4, 300 + amplitude, // Control point below
//       x2, 300                                 // End point on baseline
//     );
//   }

//   endShape();
}


  
beginShape();
vertex(0, height); // Start from the bottom-left corner

// Map the drum intensity to the amplitude of the wave
let amplitude = map(drum, 0, 100, 0, 500); // Main amplitude for most bumps

// Define a smaller amplitude for every second bump
let smallerAmplitude = amplitude * 0.5; // Adjust the factor (0.5) as needed

// Width of each bump on the canvas
let segmentWidth = 900 / 10; // 900 is the canvas width, 10 is the number of bumps

// Loop to create 10 bumps
for (let i = 0; i < 10; i++) {
  let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump segment
  let x2 = segmentWidth * (i + 1);   // End point of each bump segment

  // Alternate amplitude for every second bump
  let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

  // Add bezierVertex to create the bump
  bezierVertex(
    x1 - segmentWidth / 4, 300 - currentAmplitude, // Control point above
    x1 + segmentWidth / 4, 300 + currentAmplitude, // Control point below
    x2, 300                                 // End point on baseline
  );
}

// Close the shape to fill under the wave
vertex(900, height); // Bottom-right corner of the canvas
vertex(0, height); // Bottom-left corner of the canvas
endShape(CLOSE);

// Draw and fill the space underneath the wave with dark blue
fill(0, 0, 139); // Dark blue color
beginShape();
vertex(0, 300); // Start from the bottom of the wave

// Loop to create 10 bumps with the same logic for the bottom fill
for (let i = 0; i < 10; i++) {
  let x1 = segmentWidth * (i + 0.5); // Midpoint of each bump segment
  let x2 = segmentWidth * (i + 1);   // End point of each bump segment

  // Alternate amplitude for every second bump
  let currentAmplitude = (i % 2 === 1) ? smallerAmplitude : amplitude;

  // Add bezierVertex to create the bump
  bezierVertex(
    x1 - segmentWidth / 4, 300 - currentAmplitude, // Control point above
    x1 + segmentWidth / 4, 300 + currentAmplitude, // Control point below
    x2, 300                                 // End point on baseline
  );
}

// Close the shape to fill the wave with dark blue
vertex(900, 300); // Right end of the wave
vertex(900, height); // Bottom-right corner of the canvas
vertex(0, height); // Bottom-left corner of the canvas
endShape(CLOSE);



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
