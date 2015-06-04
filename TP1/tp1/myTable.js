/**
 * myTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function myTable(scene) {
	CGFobject.call(this,scene);

	this.cube = new MyUnitCubeQuad(this.scene);

	this.cube.initBuffers();
};

myTable.prototype = Object.create(CGFobject.prototype);
myTable.prototype.constructor=myTable;

myTable.prototype.display = function () {
	
	this.scene.pushMatrix();

	//perna posterior direita
	this.scene.translate(2.35, 1.75, 1.35);
	this.scene.scale(0.3, 3.5, 0.3);
	this.cube.display();

	//repor matriz inicial
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//perna posterior esquerda
	this.scene.translate(-2.35, 1.75, 1.35);
	this.scene.scale(0.3, 3.5, 0.3);
	this.cube.display();

	//repor matriz inicial
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//perna anterior direita
	this.scene.translate(2.35, 1.75, -1.35);
	this.scene.scale(0.3, 3.5, 0.3);
	this.cube.display();

	//repor matriz inicial
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//perna anterior esquerda
	this.scene.translate(-2.35, 1.75, -1.35);
	this.scene.scale(0.3, 3.5, 0.3);
	this.cube.display();

	//repor matriz inicial
	this.scene.popMatrix();
	this.scene.pushMatrix();

	//Tampo mesa
	this.scene.translate(0, 3.65, 0);
	this.scene.scale(5, 0.3, 3);
	this.cube.display();
	
	//limpar stack
	this.scene.popMatrix();

};
