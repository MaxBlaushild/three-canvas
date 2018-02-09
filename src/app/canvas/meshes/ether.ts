  import {
  OctahedronGeometry,
  BoxGeometry,
  Geometry,
  MeshStandardMaterial,
  TetrahedronGeometry,
  Mesh,
  Group,
  Vector3,
  Face3
} from 'three';

export class EtherTop extends Mesh {
  constructor(){
    const geometry = new OctahedronGeometry(10);
    const material = new MeshStandardMaterial({
      color: 0xfd59d7
    });

    material.metalness = 1;

    geometry.vertices[0].y = geometry.vertices[0].y + 10;
    geometry.vertices[1].y = geometry.vertices[1].y + 3;
    geometry.vertices[1].z = geometry.vertices[1].z - 5;
    geometry.vertices[4].y = geometry.vertices[4].y + 3;
    geometry.vertices[4].z = geometry.vertices[4].z + 5;
    super(geometry, material);
  }
}

export class EtherBottom extends Mesh {
  constructor() {
    const material = new MeshStandardMaterial({
      color: 0xfd59d7
    });
    const geometry = new Geometry();
    // bottom
    geometry.vertices.push( new Vector3(-10, -10, -10));

    // front side vertices
    geometry.vertices.push( new Vector3(10, 9, 0));
    geometry.vertices.push( new Vector3(-10,  0, 0));
    geometry.vertices.push( new Vector3(-30, 9, 0));

    // back side vertices
    geometry.vertices.push( new Vector3(10, 9, -20));
    geometry.vertices.push( new Vector3(-10,  0, -20));
    geometry.vertices.push( new Vector3(-30, 9, -20));


    geometry.faces.push(new Face3(0, 1, 2));
    geometry.faces.push(new Face3(0, 2, 3));
    geometry.faces.push(new Face3(0, 4, 5));
    geometry.faces.push(new Face3(0, 5, 6));
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    super(geometry, material);
  }
}
