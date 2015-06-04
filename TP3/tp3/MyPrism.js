/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	var angle = 2*Math.PI/this.slices;
	var varyingAngle = 0;
	var indice = 0;
	var height = 1/this.stacks;
	var varyingHeight = 0;
	
	this.vertices = [];
	this.indices = [];
	this.normals = [];

	for (var j = 0; j < this.stacks; j++)
	{

		for (var i = 0; i < this.slices; i++)
		{	
			this.vertices.push(Math.cos(varyingAngle), Math.sin(varyingAngle), varyingHeight);
			this.vertices.push(Math.cos(varyingAngle + angle), Math.sin(varyingAngle + angle), varyingHeight);
			this.vertices.push(Math.cos(varyingAngle), Math.sin(varyingAngle), varyingHeight + height);
			this.vertices.push(Math.cos(varyingAngle + angle), Math.sin(varyingAngle + angle), varyingHeight + height);
			this.indices.push(indice, indice + 1, indice + 2);
			this.indices.push(indice + 1, indice + 3, indice + 2);

			varyingAngle += angle;
			this.normals.push(Math.cos(varyingAngle - angle/2), Math.sin(varyingAngle - angle/2), 0);
			this.normals.push(Math.cos(varyingAngle - angle/2), Math.sin(varyingAngle - angle/2), 0);
			this.normals.push(Math.cos(varyingAngle - angle/2), Math.sin(varyingAngle - angle/2), 0);
			this.normals.push(Math.cos(varyingAngle - angle/2), Math.sin(varyingAngle - angle/2), 0);

			indice += 4;
		}

		varyingHeight += height;
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
