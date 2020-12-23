import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  sound;
  constructor() { }

  ngOnInit(): void {
    this.sound = new Howl({
      src: ['assets/polish-cow.mp3'],
      autoplay: true,
      loop: true
    });
    this.sound.play();
  }

}
