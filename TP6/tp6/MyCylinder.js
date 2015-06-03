/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

	//Defenir angulo interno para o numero de lados escolhido e uma variavel para ir mudando
	var angle = 2*Math.PI/this.slices;
	var varyingAngle = 0;
	
	var indice = 0;

	//Defenir altura dependendo do numero de stacks, e uma variavel para ir mudando
	var height = 1/this.stacks;
	var varyingHeight = 0;
	
	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var varyingS = 1/this.slices;
	var varyingT = 1/this.stacks;

	var t = 1;

	for (var j = 0; j < this.stacks; j++) {
		var s = 0;

		this.vertices.push(Math.cos(varyingAngle), Math.sin(varyingAngle), varyingHeight);
		this.normals.push(Math.cos(varyingAngle), Math.sin(varyingAngle), 0);

		this.vertices.push(Math.cos(varyingAngle), Math.sin(varyingAngle), varyingHeight + height);
		this.normals.push(Math.cos(varyingAngle), Math.sin(varyingAngle), 0);
		
		this.texCoords.push(s, t);
		this.texCoords.push(s, t - varyingT);
		
		s += varyingS;

		varyingAngle += angle;

		for (var i = 0; i < this.slices ; i++)
		{
			this.vertices.push(Math.cos(varyingAngle), Math.sin(varyingAngle), varyingHeight);
			this.normals.push(Math.cos(varyingAngle), Math.sin(varyingAngle), 0);

			this.vertices.push(Math.cos(varyingAngle), Math.sin(varyingAngle), varyingHeight + height);
			this.normals.push(Math.cos(varyingAngle), Math.sin(varyingAngle), 0);

			varyingAngle += angle;

			this.indices.push(indice + 2, indice + 1, indice);
			this.indices.push(indice + 1, indice + 2, indice + 3);

			this.texCoords.push(s, t);
			this.texCoords.push(s, t - varyingT);

			s += varyingS;

			indice += 2;
		}

		indice += 2;
		varyingHeight += height
		varyingAngle = 0;
		t -= varyingT;

	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
