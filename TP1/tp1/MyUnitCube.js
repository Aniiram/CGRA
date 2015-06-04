/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype = Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
				
			-0.5, -0.5, 0.5, //Vertice canto esquerdo inferior, eixo positivo dos z's
			0.5, -0.5, 0.5, //Vertice canto direito inferior, eixo positivo dos z's
			-0.5, 0.5, 0.5, //Vertice canto esquerdo superior, eixo positivo dos z's
			0.5, 0.5, 0.5, //Vertice canto direito superior, eixo positivo dos z's
			-0.5, 0.5, -0.5, //Vertice canto esquerdo inferior, eixo negativo dos z's
			0.5, 0.5, -0.5, //Vertice canto direito inferior, eixo negativo dos z's
			0.5, -0.5, -0.5, //Vertice canto esquerdo superior, eixo negativo dos z's
			-0.5, -0.5, -0.5 //Vertice canto direito superior, eixo negativo dos z's
			];

	this.indices = [
			
			0, 1, 3, //face frontal, eixo positivo dos z's
			0, 3, 2, //face frontal, eixo positivo dos z's
			5, 6, 7, //face posterior, eixo negativo dos z's
			4, 5, 7, //face posterior, eixo negativo dos z's
			1, 6, 5, //face lateral, eixo positivo dos x's
			1, 5, 3, //face lateral, eixo positivo dos x's
			0, 2, 7, //face lateral, eixo negativo dos x's
			2, 4, 7, //face lateral, eixo negativo dos x's
			2, 3, 4, //face lateral, eixo positivo dos y's
			3, 5, 4, //face lateral, eixo positivo dos y's
			0, 7, 1, //face lateral, eixo negativo dos y's
			7, 6, 1  //face lateral, eixo negativo dos y's
            ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
