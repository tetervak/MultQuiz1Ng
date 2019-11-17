import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/main.css']
})
export class AppComponent {
  private static smileNames = ['surprise', 'glasses', 'grin', 'devilish', 'plain', 'crying'];
  public title = 'Multiplication Quiz 1 Ng';
  // noinspection JSMismatchedCollectionQueryUpdate
  private images: HTMLImageElement[];
  public constructor() {
    this.preload();
  }
  public static makeImageSrc(name: string): string {
    return `../assets/images/smiles/face-${name}.png`;
  }
  private preload() {
    this.images = [];
    AppComponent.smileNames.forEach((name) => {
      const image = new Image();
      image.src = AppComponent.makeImageSrc(name);
      this.images.push(image);
    });
  }
}
