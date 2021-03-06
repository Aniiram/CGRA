/**
 * myFloor
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function myFloor(scene) {
	CGFobject.call(this,scene);

	this.cube = new MyUnitCubeQuad(this.scene);

	this.cube.initBuffers();
};

myFloor.prototype = Object.create(CGFobject.prototype);
myFloor.prototype.constructor=myFloor;

myFloor.prototype.display = function () {
	
	this.scene.pushMatrix()
	
	//chão
	this.scene.translate(0, 0.05, 0);
	this.scene.scale(8, 0.1, 6);
	this.cube.display();

	//repor matriz inicial
	this.scene.popMatrix();
	this.scene.pushMatrix();

    //limpar stack
	this.scene.popMatrix();
	
};