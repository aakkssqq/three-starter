import * as THREE from 'three';

export default class Light {
    constructor(_option) {
        this.debug = _option.debug;

        this.container = new THREE.Object3D();
        this.container.matrixAutoUpdate = false;

        if (this.debug) {
            this.debugFolder = this.debug.addFolder('light');
            // this.debugFolder.open();
        }

        this.setInstance();
    }

    setInstance() {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);

        this.container.add(this.ambientLight);
        this.container.add(this.directionalLight);
    }
}