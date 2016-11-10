console.log('console test'); //console print test

var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	camera.position.y = 15;
	camera.position.z = 50;
	camera.position.x = 0;
	camera.rotation.x = -0.2

	cube.position.x = 0
	cube.position.y = 12
	cube.position.z = 0

var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

var cube = new THREE.BoxGeometry( 10, 10, 10 );
var material = new THREE.MeshBasicMaterial
( { 
color: 0xdc0070,
wireframe: true,
} );

var gridHelper = new THREE.GridHelper( 500, 75, 0x00a2b1, 0x00a2b1 );

			
var cube = new THREE.Mesh( cube, material );
var GridHelper = new THREE.Mesh( gridHelper, material );

scene.add( gridHelper );
scene.add( cube );
			
var loader = new THREE.JSONLoader();

var render = function () {
	requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	
	gridHelper.rotation.x += 0.0;
	gridHelper.rotation.y += 0.0;

	renderer.render(scene, camera);
};

render();
