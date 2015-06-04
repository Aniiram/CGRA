/**
 * MyPlane
 * @constructor
 */
 function MyPlane(scene) {
 	CGFobject.call(this,scene);
 	
 	this.initBuffers();
 };

 MyPlane.prototype = Object.create(CGFobject.prototype);
 MyPlane.prototype.constructor = MyPlane;

 MyPlane.prototype.initBuffers =function() {
 	
	this.vertices = [
 	0, 0, 1,
 	0.5, 0, 0,
 	-0.5, 0, 0,
 	0, 0, 0,
 	0,-0.3,0
 	];

 	this.indices = [
 	0, 1, 2, 
 	0, 4, 3,
 	0, 3, 4,
 	0, 2, 1
 	];

 	this.normals = [
    0, -1, 0,
    0, 1, 0, 
    0, 1, 0, 
    1, 0, 0,
    1, 0, 0,     
 	];

 	this.texCoords = [
 	0.5, 1,
 	1, 0,
 	0, 0,
 	0.5, 0,
 	1 , 1
 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };