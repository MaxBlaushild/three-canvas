import { PerspectiveCamera } from 'three';

export class BlackRoomCamera extends PerspectiveCamera {
  constructor() {
    super(30, window.innerWidth / window.innerHeight, 0.1, 1000);
  }
}
