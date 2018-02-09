import { Component, OnInit } from '@angular/core';

import {
  Scene,
  WebGLRenderer,
  Vector3,
  Geometry,
  Line,
  LineBasicMaterial,
  AmbientLight,
  HemisphereLight,
  HemisphereLightHelper,
  Color,
  DirectionalLight,
  DirectionalLightHelper,
  PointLight

} from 'three';

import { BlueLineMaterial } from './materials';
import { BlackRoomCamera } from './cameras';
import { Cube, EtherTop, EtherBottom } from './meshes';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  _scene: Scene;
  _renderer: WebGLRenderer;
  _camera: any;
  cube: any;

  constructor() { }

  ngOnInit() {
    this.lights();
    this.camera();
    this.action();
  }

  lights() {
    this._scene = new Scene();
    this._renderer = new WebGLRenderer();
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this._renderer.domElement);

    var light = new PointLight(0xFFFF00, 10);
    var lightTwo = new PointLight(0x00FF00, 10);
    light.position.set( 25, 0, 10);
    lightTwo.position.set(0, 0, 50);
    this._scene.add(light);
    this._scene.add(lightTwo);
    this._scene.background = new Color(0xffffff);
  }

  camera() {
    this._camera = new BlackRoomCamera();
    this._camera.position.set(0, 0, 100);
  }

  action() {
    this.cube = new EtherBottom();
    this._scene.add(this.cube);
    this._renderer.render(this._scene, this._camera);
    this.render();
  }

  rotateX() {
    this.cube.rotation.x += 0.25;
  }

  rotateY() {
    this.cube.rotation.y += 0.25;
  }

  rotateZ() {
    this.cube.rotation.z += 0.25;
  }

  render() {
    requestAnimationFrame(() => this.render());
    this._renderer.render(this._scene, this._camera);
    // this.cube.rotation.y += 0.01;
  }

}
