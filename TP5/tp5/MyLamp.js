/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {
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
	
	var indice = 1;

	//Defenir altura dependendo do numero de stacks, e uma variavel para ir mudando
	var height = 1/this.stacks;
	var varyingHeight = 1;
	
	var raio = 0; 

	this.vertices = [];
	this.indices = [];
	this.normals = [];

	this.vertices.push(0,1,0);
	this.normals.push(0,1,0);

	varyingHeight -= height;
	raio = Math.sqrt(1 - varyingHeight*varyingHeight);

	this.vertices.push(raio*Math.cos(varyingAngle), varyingHeight, raio*Math.sin(varyingAngle));
	this.normals.push(raio*Math.cos(varyingAngle), varyingHeight, raio*Math.sin(varyingAngle));

	varyingAngle += angle;

	for(var i = 0; i < this.slices; i++) {
		this.vertices.push(raio*Math.cos(varyingAngle), varyingHeight, raio*Math.sin(varyingAngle));
		this.normals.push(raio*Math.cos(varyingAngle), varyingHeight, raio*Math.sin(varyingAngle));
		varyingAngle += angle;
		 
		this.indices.push(0, indice + 1, indice);
		indice += 1; 
	}
	indice += 1;

	while(varyingHeight -height >= 0) {	
		varyingHeight -= height;	
		raio = Math.sqrt(1 - varyingHeight*varyingHeight);
		varyingAngle = 0;

		this.vertices.push(raio*Math.cos(varyingAngle), varyingHeight, raio*Math.sin(varyingAngle));
		this.normals.push(raio*Math.cos(varyingAngle), varyingHeight, raio*Math.sin(varyingAngle));
		varyingAngle += angle;

		for (var i = 0; i < this.slices ; i++) {
			this.vertices.push(raio*Math.cos(varyingAngle), varyingHeight, raio*Math.sin(varyingAngle));
			this.normals.push(raio*Math.cos(varyingAngle), varyingHeight, raio*Math.sin(varyingAngle));
			varyingAngle += angle;

			this.indices.push(indice, indice -this.slices-1, indice -this.slices);
			this.indices.push(indice, indice -this.slices, indice +1);
			indice += 1;
		}	

		indice+=1;
	}

	

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

