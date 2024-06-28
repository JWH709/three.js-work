import * as THREE from "three";
import earth from "./assets/2k_earth_daymap.jpg";
import earthNormal from "./assets/2k_earth_normal_map.jpg";
import earthSpecular from "./assets/2k_earth_specular_map.jpg";

function Sphere() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const cubeLoader = new THREE.CubeTextureLoader();
  cubeLoader.setPath("./assets/cubemap/");
  const textureCube = cubeLoader.load([
    "right.png",
    "left.png",
    "top.png",
    "bottom.png",
    "front.png",
    "back.png",
  ]);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    envMap: textureCube,
  });
  const skyGeo = new THREE.SphereGeometry(1000, 32, 32);
  const skyBox = new THREE.Mesh(skyGeo, cubeMaterial);
  scene.add(skyBox);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(2, 2, 2);
  scene.add(pointLight);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load(earth);
  const normalMap = textureLoader.load(earthNormal);
  const specularMap = textureLoader.load(earthSpecular);
  const material = new THREE.MeshPhongMaterial({
    map: earthTexture,
    normalMap: normalMap,
    specularMap: specularMap,
    shininess: 10,
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  camera.position.z = 5;

  function animate() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

export default Sphere;
