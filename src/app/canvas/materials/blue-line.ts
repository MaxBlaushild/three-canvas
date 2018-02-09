import { Scene, WebGLRenderer, PerspectiveCamera, LineBasicMaterial } from 'three';

export class BlueLineMaterial extends LineBasicMaterial {
  constructor() {
    super({ color: 0x0000ff });
  }
}
