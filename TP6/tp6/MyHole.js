/**
 * MyHole
 * @constructor
 */
 function MyHole(scene) {
 	CGFobject.call(this,scene);

 	this.initBuffers();
 };

 MyHole.prototype = Object.create(CGFobject.prototype);
 MyHole.prototype.constructor = MyHole;

 MyHole.prototype.initBuffers = function() 
 {  
 	this.vertices = [
 	1.5, 1.5, 0,
 	-1.5, 1.5, 0,
 	1.5, -1.5, 0,
 	-1.5, -1.5, 0,
 	0.5, 0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, -0.5, 0,
 	-0.5, -0.5, 0,
 	-1.5, 0.5, 0,
 	-0.5, -1.5, 0,
 	1.5, -0.5, 0,
 	0.5, 1.5, 0
 	];

 	this.indices = [
    1, 8, 11,
 	4, 11, 8,
 	3, 5, 8,
 	9, 5, 3,
 	10, 7, 9,
 	10, 9, 2,
 	0, 6, 10,
 	11, 6, 0

 	];

 	this.normals = [
    0, 0, 1,
    0, 0, 1, 
    0, 0, 1, 
    0, 0, 1, 
    0, 0, 1,
    0, 0, 1, 
    0, 0, 1, 
    0, 0, 1, 
    0, 0, 1,
    0, 0, 1, 
    0, 0, 1, 
    0, 0, 1
 	];



 	this.texCoords = [
 	  1.833, -0.833,
 	  -0.833, -0.833,
 	  1.833, 1.833,
 	  -0.833, 1.833,
 	  0.9444, 0.0556,
 	  0.0556, 0.0556,
 	  0.9444, 0.9444,
 	  0.0556, 0.9444,
 	  -0.833, 0.0556,
 	  0.0556, 1.833,
 	  1.833, 0.9444,
 	  0.9444, -0.833    
 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };