import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);

const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
renderTarget.texture.encoding = THREE.sRGBEncoding;

renderer.setRenderTarget(renderTarget);

// Create a scene
const scene = new THREE.Scene(0xbfe3dd);

// Create a camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.z = 5;

// load 3D model
const loader = new GLTFLoader();
loader.load('medical_tool.gltf', function (gltf) {scene.add(gltf.scene);});

//create a point light
const light1 = new THREE.PointLight(0xffffff,20,100);
light1.position.set(50,30,50);
scene.add( light1 );

//create a point light
const light2 = new THREE.PointLight(0xffffff,10,100);
light2.position.set(-50,30,50);
scene.add( light2 );

//create a point light
const light3 = new THREE.PointLight(0xffffff,2,100);
light3.position.set(0,30,-5);
scene.add( light3 );

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight);

const controls = new OrbitControls(camera, canvas);
/**
 * Animation loop function.
 * Requests the next animation frame and renders the scene.
 */
function animate() {
    requestAnimationFrame(animate); // Request the next animation frame
    renderer.render(scene,camera); // Render the scene
}

animate();