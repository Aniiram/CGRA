/**
 * MyTable
 * @constructor
 */
 function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

 	this.materialC = new CGFappearance(scene);
	this.materialC.setAmbient(0.545,0.27,0.074,1);
	this.materialC.setDiffuse(0.545,0.27,0.074,1);
	this.materialC.setSpecular(0.1,0.1,0.1,1);
	this.materialC.setShininess(1);

	this.materialD = new CGFappearance(scene);
	this.materialD.setAmbient(0.3,0.3,0.3,1);
	this.materialD.setDiffuse(0.6,0.6,0.6,1);
	this.materialD.setSpecular(1.0,1.0,1.0,1);
	this.materialD.setShininess(500);
 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() {

 	// legs
 	this.materialD.apply();
 	
 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
 	this.scene.pushMatrix();
 	this.materialC.apply();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 }
