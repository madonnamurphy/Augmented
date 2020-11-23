
	//build a snowman
	snowman = new Container3D({
        x:1.3, y:0, z:0
      });
world.add(snowman);

var bottom = new Sphere({
                  x:0, y:0.3, z:0,
                  radius: 0.3,
                  red:242, green:242, blue:242
              });
snowman.addChild(bottom);

var middle = new Sphere({
                  x:0, y:0.84, z:0,
                  radius: 0.24,
                  red:242, green:242, blue:242,
              });
snowman.addChild(middle);

var head = new Sphere({
                  x:0, y:1.25, z:0,
                  radius: 0.17,
                  red:242, green:242, blue:242
              });
snowman.addChild(head);

var eye1 = new Sphere({
                  x:-0.06, y:1.3, z:0.14,
                  radius: 0.02,
                  red:0, green:0, blue:0
              });
snowman.addChild(eye1);

var eye2 = new Sphere({
                  x:0.06, y:1.3, z:0.14,
                  radius: 0.02,
                  red:0, green:0, blue:0
              });
snowman.addChild(eye2);

var mouth = new Sphere({
                  x:0, y:1.19, z:0.14,
                  radius: 0.02,
                  red:0, green:0, blue:0,
                  scaleX: 3
              });
snowman.addChild(mouth);

var arm1 = new Cylinder({
                  x:-0.3, y:0.75, z:0,
                  height:0.5,
                  radius: 0.02,
                  red:58, green:30, blue:0,
                  rotationX: 45,
                  rotationY: 90
              });
snowman.addChild(arm1);

var arm2 = new Cylinder({
                  x:0.3, y:0.75, z:0,
                  height:0.5,
                  radius: 0.02,
                  red:58, green:30, blue:0,
                  rotationX: -45,
                  rotationY: 90
              });
snowman.addChild(arm2);


//import the 3D model
mymodel = new DAE({
  asset: 'model',
  x:-1.5, y:1.3, z:1.15,
  scaleX:0.05,
  scaleY:0.05,
  scaleZ:0.05,
});
world.add(mymodel);