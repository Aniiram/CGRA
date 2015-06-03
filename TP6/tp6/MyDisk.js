/**
 * MyDisk
 * @constructor
 */
 function MyDisk(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;
	this.initBuffers();	
 };

 MyDisk.prototype = Object.create(CGFobject.prototype);
 MyDisk.prototype.constructor = MyDisk;

MyDisk.prototype.initBuffers = function() {
	var angle = 2*Math.PI/this.slices;
	var varyingAngle = 0;
	var indice = 0;
	var height = 1/this.stacks;
	var varyingHeight = 0;
	
	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

    this.texCoords = [];
	this.vertices.push(0,0,1);
	this.normals.push(0,0,1);
	this.texCoords.push(0.5,0.5);
		
	varyingAngle = 0;
	this.vertices.push(Math.cos(varyingAngle), Math.sin(varyingAngle),1);
	this.normals.push(0,0,1);
	this.texCoords.push(0.5*Math.cos(varyingAngle)+0.5,-0.5*Math.sin(varyingAngle)+0.5);
	varyingAngle += angle;

	for (var i = 0; i < this.slices; i++){
		this.vertices.push(Math.cos(varyingAngle), Math.sin(varyingAngle),1);
		this.normals.push(0,0,1);
		this.texCoords.push(0.5*Math.cos(varyingAngle)+0.5,-0.5*Math.sin(varyingAngle)+0.5);
		
		this.indices.push(indice, indice + 1 + 1*i, indice + 2 + 1*i );
		varyingAngle += angle;
	}
		indice += this.slices + 2;

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
};