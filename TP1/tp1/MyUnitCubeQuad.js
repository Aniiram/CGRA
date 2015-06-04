/**
 * MyUnitCubeQuad
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCubeQuad(scene) {
	CGFobject.call(this,scene);

	this.quad = new MyQuad(this.scene);

	this.quad.initBuffers();
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

MyUnitCubeQuad.prototype.display = function () {

    var deg2rad=Math.PI/180.0;
	var a_rad=90.0*deg2rad;
	
	this.scene.pushMatrix();
	this.scene.pushMatrix();

	this.scene.translate(0, 0, 0.5);
	this.quad.display(); //display da primeira face

    this.scene.popMatrix();
    this.scene.rotate(a_rad, 0, 1, 0);
    this.scene.pushMatrix();

    this.scene.translate(0, 0, 0.5);
    this.quad.display(); //display da segunda fase

    this.scene.popMatrix();
    this.scene.rotate(a_rad, 0, 1, 0);
    this.scene.pushMatrix();
    
	this.scene.translate(0, 0, 0.5);
    this.quad.display(); //display da terceira fase
    
	this.scene.popMatrix();
    this.scene.rotate(a_rad, 0, 1, 0);
    
	this.scene.translate(0, 0, 0.5);
    this.quad.display(); //display da quarta fase
    
    this.scene.popMatrix();
    this.scene.pushMatrix();
    this.scene.rotate(a_rad, 1, 0, 0);
    
	this.scene.translate(0, 0, 0.5);
    this.quad.display(); //display da quinta fase

	this.scene.popMatrix();
    this.scene.rotate(a_rad, -1, 0, 0);
    
	this.scene.translate(0, 0, 0.5);
    this.quad.display(); //display da sexta fase

};
