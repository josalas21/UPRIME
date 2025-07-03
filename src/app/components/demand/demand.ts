import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import lottie from 'lottie-web';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-demand',
  template: '<div [id]="containerId"></div>',
  styleUrls: ['./demand.css'],
})
export class Demand implements OnInit, AfterViewInit {
  @Input() containerId: string = 'lottie-container';
  @Input() animationData: any;
  private animation: AnimationItem | null = null;

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadAnimation();
  }

  private loadAnimation() {
    if (this.animationData) {
      this.animation = lottie.loadAnimation({
        container: document.getElementById(this.containerId) as HTMLElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: this.animationData,
      });
    }
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.destroy();
    }
  }
}
