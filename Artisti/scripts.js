var scene = new THREE.Scene();





var camera = new THREE.PerspectiveCamera( 1, window.innerWidth/window.innerHeight, 0.1, 1000 );
const canvas = document.querySelector('#c');
var renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 700;
camera.position.x = 1000;
camera.position.y = 200;
var controls = new THREE.OrbitControls(camera, renderer.domElement);
//scroll



//end of scrol
controls.enableDamping = false;
controls.campingFactor = 0.1;
controls.enableZoom = true;
var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);
var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100);


scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

renderer.setClearColor( 0x000000, 0 ); 

var mtLoader = new THREE.MTLLoader();
mtLoader.setTexturePath('/assets/');
mtLoader.setPath('/Artisti//assets/');
mtLoader.load('koltuk2.fbx',function(materials){
materials.preload();


var objLoader = new THREE.OBJLoader();
objLoader.setMaterials(materials);
objLoader.setPath('/Artisti/assets/');	
objLoader.load('Koltuk.obj',function (object){
	object.position.y -= 60;
	scene.add(object);
});

});

// var objLoader = new THREE.OBJLoader();
// objLoader.setPath('/examples/3d-obj-loader/assets/');
// objLoader.load('r2-d2.obj',function (object){
// 	object.position.y -= 60;
// 	scene.add(object);
// });

var animate = function () {
	requestAnimationFrame( animate );

controls.update();

	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;

	renderer.render(scene, camera);
};

animate();
