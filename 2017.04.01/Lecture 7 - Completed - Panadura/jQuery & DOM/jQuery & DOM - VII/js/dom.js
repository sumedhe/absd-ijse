var folded = new OriDomi('#img1', {
    vPanels:         5,     // number of panels when folding left or right (vertically oriented)
    hPanels:         3,     // number of panels when folding top or bottom
    speed:           1200,  // folding duration in ms
    ripple:          2,     // backwards ripple effect when animating
    shadingIntesity: .5,    // lessen the shading effect
    perspective:     800,   // smaller values exaggerate 3D distortion
    maxAngle:        40,    // keep the user's folds within a range of -40 to 40 degrees
    shading:         'soft' // change the shading type
});

folded.accordion(30);

