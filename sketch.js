let world, myModel, bling;
let livingRoom = '#lr';
let flakes = []; 
let szChange = 0.01;
// var mymodel;
// var allImages = ['#sky'];
// var flakes = [];
// var bling;

function preload() {
  //bling = loadSound('images/sound.mp3');
}

function setup() {
	noCanvas();
	world = new World('VRScene');
	makeGround();
	makeTrees();

}



function draw() {
  //move the user
	move();
	
	
	//move the snowman
	// var sz = snowman.getZ();
	
	// if (sz > 2 || sz < 0) {
	// 	szChange *= -1;
	// }
	
	// snowman.setZ(sz + szChange);
	
	
	//create the sky
	let sky = select('#theSky');
	sky.attribute('src', livingRoom);
	
	
	//create a new flake
	var temp = new Flake(0, 0, -5, world);
	flakes.push(temp);
	
	//draw all flakes
	for (var i = 0; i < flakes.length; i++) {
		let result = flakes[i].move();
		if (result == "gone") {
			flakes.splice(i, 1);
			i -= 1;
		}
	}
}

function makeGround(){
	  //create a plane
	  var g = new Plane({
		x:0, y:0, z:0, 
		width:200, height:200, 
		asset: 'snow',
		repeatX: 100,
		repeatY: 100,
		rotationX:-90, 
		metalness:0.2
	});

world.add(g);
}




function makeTrees(){
		
  //create many trees
  for (var i = 0; i < 40; i++) {
	var tx = random(-25, 25);
	var tz = random(-25, 25);
	var ts = random(0.5, 2);
	
	if (tx < -2 || tx > 2) {
	  if (tz < -3 || tz > 3) {
		tree = new Container3D({
			x:tx, y:0, z:tz,
			scaleX:ts, scaleY:ts, scaleZ:ts
	  });
	  
	  world.add(tree);
  
	  var tree_t = new Octahedron({
					  x:0, y:5, z:0,
					  radius: 1, 
					  red:0, green:247, blue:45,
				   });
	  tree.addChild(tree_t);
	  var tree_t1 = new Ring({
		x:8, y:7, z:0,
		radiusInner: 1, radiusOuter: .5,
		segmentsTheta: 32, segmentsPhi: 8,
		thetaStart: 5,
		red:255, green:15, blue:131,
	 });
	tree.addChild(tree_t1);
	  }
	}
}
}

function move(){
	if (mouseIsPressed || touchIsDown) {
		world.moveUserForward(0.03);
	}

	var pos = world.getUserPosition();
	
	if (pos.x > 25) {
		world.setUserPosition(-25, pos.y, pos.z);
	}
	else if (pos.x < -25) {
		world.setUserPosition(25, pos.y, pos.z);
	}
	if (pos.z > 25) {
		world.setUserPosition(pos.x, pos.y, -50);
	}
	else if (pos.z < -25) {
		world.setUserPosition(pos.x, pos.y, 50);
	}
}