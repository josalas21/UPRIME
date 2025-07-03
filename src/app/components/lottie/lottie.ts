import { Component, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie',
  imports: [LottieComponent],
  templateUrl: './lottie.html',
  styleUrl: './lottie.css',
})
export class Lottie {
  @Input() options: AnimationOptions = {
    path: '',
    animationData: null,
    loop: true,
    autoplay: true,
  };

  onAnimationCreated(animation: AnimationItem) {
    console.log('Animation loaded:', animation);
  }
}
