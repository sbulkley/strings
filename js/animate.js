// Elements

var tl = new TimelineMax();

var dim1 = $("#dim1");
var dot1s = $("#dot1s");
var dot1e = $("#dot1e");
var dim2 = $("#dim2");
var dot2e = $("#dot2e");

var dot3 = $("#dot3");

var dim4 = $("#dim4");
var dot4s = $("#dot4s");
var dot4e = $("#dot4e");
var dim5 = $("#dim5");
var dot5e = $("#dot5e");



var dim7 = $("#dim7");
var dot7s = $("#dot7s");
var dot7e = $("#dot7e");
var dim8 = $("#dim8");
var dot8e = $("#dot8e");



function d1() {    
    TweenMax.set(dim1, {x:10, y:7, width:10});
    TweenMax.set(dot1s, {x:0, y:0, height:20, width:20});
    TweenMax.set(dot1e, {x:0, y:0, height:20, width:20});
    
    TweenMax.to(dim1, 1.5, {width:500, ease:Elastic.easeOut.config(1, 0.5)});
    TweenMax.to(dot1e, 1.5, {x:500, ease:Elastic.easeOut.config(1, 0.5)});
    
}

function d2() {    
    TweenMax.set(dim2, {x:350, y:7, width:10, transformOrigin:"left", rotation:16});
    TweenMax.set(dot2e, {x:340, y:0, height:20, width:20});
    
    TweenMax.to(dim2, 1.5, {width:140, ease:Elastic.easeOut.config(1, 0.5)});
    TweenMax.to(dot2e, 1.5, {x:480, y:40, ease:Elastic.easeOut.config(1, 0.5)}); 
}

function d3() {
    TweenMax.set(dot3, {x:0, y:0, height:20, width:20});
    
    TweenMax.to(dot3, 2, {x:470, y:-5, height:80, width:80, ease:Expo.easeInOut});
    TweenMax.to(dot1s, 2, {x:500, ease:Expo.easeInOut});
    TweenMax.to(dim1, 2, {x:500, width:0, ease:Expo.easeInOut});
    TweenMax.to(dim2, 2, {x:500, width:0, rotation:0, ease:Expo.easeInOut});
    TweenMax.to(dot2e, 1.9, {x:500, y:0, ease:Expo.easeInOut});
    
    TweenMax.to(dot3, 1.5, {x:0, y:99, height:20, width:20, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot1e, 1.8, {x:0, y:0, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot1s, 1.8, {x:0, y:0, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot2e, 1.8, {x:0, y:0, delay:2.1, ease:Expo.easeInOut});
}

function d4() {    
    TweenMax.set(dim4, {x:10, y:106, width:10});
    TweenMax.set(dot4s, {x:0, y:99, height:20, width:20});
    TweenMax.set(dot4e, {x:0, y:99, height:20, width:20});
    
    TweenMax.to(dim4, 1.5, {width:500, ease:Elastic.easeOut.config(1, 0.5)});
    TweenMax.to(dot4e, 1.5, {x:500, ease:Elastic.easeOut.config(1, 0.5)});
    
}

function d5() {    
    TweenMax.set(dim5, {x:210, y:106, width:10, transformOrigin:"left", rotation:16});
    TweenMax.set(dot5e, {x:200, y:100, height:20, width:20});
    
    TweenMax.to(dim5, 1.5, {width:140, ease:Elastic.easeOut.config(1, 0.5)});
    TweenMax.to(dot5e, 1.5, {x:340, y:140, ease:Elastic.easeOut.config(1, 0.5)}); 
}

function d6() {
    TweenMax.set(dot6, {x:0, y:99, height:20, width:20});
    
    TweenMax.to(dot6, 2, {x:470, y:94, height:80, width:80, ease:Expo.easeInOut});
    TweenMax.to(dot4s, 2, {x:500, ease:Expo.easeInOut});
    TweenMax.to(dot3, 2, {x:500, ease:Expo.easeInOut});
    TweenMax.to(dim4, 2, {x:500, width:0, ease:Expo.easeInOut});
    TweenMax.to(dim5, 2, {x:500, width:0, rotation:0, ease:Expo.easeInOut});
    TweenMax.to(dot5e, 1.9, {x:500, y:99, ease:Expo.easeInOut});
    
    TweenMax.to(dot6, 1.5, {x:0, y:239, height:20, width:20, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot4s, 1.8, {x:0, y:99, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot3, 1.8, {x:0, y:99, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot4e, 1.8, {x:0, y:99, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot5e, 1.8, {x:0, y:99, delay:2.1, ease:Expo.easeInOut});
}

function d7() {    
    TweenMax.set(dim7, {x:10, y:246, width:10});
    TweenMax.set(dot7s, {x:0, y:239, height:20, width:20});
    TweenMax.set(dot7e, {x:0, y:239, height:20, width:20});
    
    TweenMax.to(dim7, 1.5, {width:500, ease:Elastic.easeOut.config(1, 0.5)});
    TweenMax.to(dot7e, 1.5, {x:500, ease:Elastic.easeOut.config(1, 0.5)});
    
}

function d8() {    
    TweenMax.set(dim8, {x:110, y:246, width:10, transformOrigin:"left", rotation:-16});
    TweenMax.set(dot8e, {x:100, y:246, height:20, width:20});
    
    TweenMax.to(dim8, 1.5, {width:140, ease:Elastic.easeOut.config(1, 0.5)});
    TweenMax.to(dot8e, 1.5, {x:239, y:199, ease:Elastic.easeOut.config(1, 0.5)}); 
}

function d6() {
    TweenMax.set(dot6, {x:0, y:99, height:20, width:20});
    
    TweenMax.to(dot6, 2, {x:470, y:94, height:80, width:80, ease:Expo.easeInOut});
    TweenMax.to(dot4s, 2, {x:500, ease:Expo.easeInOut});
    TweenMax.to(dot3, 2, {x:500, ease:Expo.easeInOut});
    TweenMax.to(dim4, 2, {x:500, width:0, ease:Expo.easeInOut});
    TweenMax.to(dim5, 2, {x:500, width:0, rotation:0, ease:Expo.easeInOut});
    TweenMax.to(dot5e, 1.9, {x:500, y:99, ease:Expo.easeInOut});
    
    TweenMax.to(dot6, 1.5, {x:0, y:239, height:20, width:20, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot4s, 1.8, {x:0, y:99, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot3, 1.8, {x:0, y:99, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot4e, 1.8, {x:0, y:99, delay:2.1, ease:Expo.easeInOut});
    TweenMax.to(dot5e, 1.8, {x:0, y:99, delay:2.1, ease:Expo.easeInOut});
}
