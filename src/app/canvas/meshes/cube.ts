import { BoxGeometry, MeshLambertMaterial, Mesh } from 'three';

export class Cube extends Mesh {
  constructor(){
    const geometry = new BoxGeometry(20, 20, 20);
    const material = new MeshLambertMaterial({color: 0xfd59d7});
    super(geometry, material);
  }
}
