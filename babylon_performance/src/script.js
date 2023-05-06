import './style.css'
import Stats from 'stats.js'
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import "@babylonjs/loaders";


/**
 * Base
 */
// Debug

// Canvas
const canvas = document.querySelector('canvas.webgl')
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);

scene.createDefaultEnvironment({
    createSkybox: false,
    createGround: false,
    cameraContrast: 2.5,
    cameraExposure: 1
});
// const camera = new FreeCamera("camera1", new Vector3(0, 10, -12), scene);
const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)
const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 10, -12), scene);
camera.setTarget(new BABYLON.Vector3(0, 0, 0));
// Создание света
const light = new BABYLON.PointLight('light', new BABYLON.Vector3(10, 10, 0), scene);
light.intensity = 0.15;
// camera.setTarget(new Vector3(0, 0, 0));
// const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

// light.intensity = 0.15;
let coinArray = [];
const createCoin = (pos) => {
    BABYLON.SceneLoader.ImportMesh(
        null,
        'assets/models/',
        'scene.glb',
        scene,
        (meshArray) => {
            let coin = meshArray[0];
            coin.scaling = new BABYLON.Vector3(0.08, 0.08, 0.08);
            coin.position = pos;
            coin.receiveShadows = true;
            coinArray.push(coin);
        }
    );
}
createCoin(new BABYLON.Vector3(1, 1, 1));
engine.runRenderLoop(() => {
    scene.render();
});
const tick = () => {

    stats.begin()
    // Update controls
    // controls.update()

    // Render
    // renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

    stats.end()
}

tick()
