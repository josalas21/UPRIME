import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  activeIndex: number | null = 0;

  faqs = [
    {
      question: 'How long does a project take?',
      answer: `Project timelines vary based on complexity and scope. Simple designs take a few days, while full websites or branding projects may take weeks or months for research,  design, revisions, and development.`,
    },
    {
      question: 'What is your pricing?',
      answer: `Pricing depends on the project scope. I offer packages for smaller tasks and full quotes for complex work.`,
    },
    {
      question: 'Can I request revisions?',
      answer: `Yes! Revisions are part of the process. The number of revisions included depends on the agreement.`,
    },
    {
      question: 'How do I start a project with you?',
      answer: `You can contact me directly through my website or email. We'll discuss your goals and start with a free consultation.`,
    },
    {
      question: 'Do you offer ongoing support?',
      answer: `Yes, I offer maintenance and long-term support plans for websites, design systems, and brand consistency.`,
    },
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
