import {
  Component,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-colleagues-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues-comments.component.html',
  styleUrl: './colleagues-comments.component.scss',
})
export class ColleaguesCommentsComponent {
  constructor(
    public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  @ViewChild('notActive') notActive!: ElementRef;
  @ViewChild('testimonialsWrapper') testimonialsWrapper!: ElementRef;

  testimonials = [
    {
      quote:
        "Working with Giovanni, it's particularly noticeable how quickly he grasps new concepts and puts them into practice. His ability to effectively use and apply knowledge is a great asset to our team.",
      quoteDe:
        'In der Zusammenarbeit mit Giovanni fällt besonders auf, wie schnell er neue Konzepte versteht und in die Praxis umsetzt. Seine Fähigkeit, Wissen effektiv zu nutzen und anzuwenden, ist ein großer Gewinn für unser Team.',
      author: 'K. Marcel',
      role: 'Team Partner',
    },
    {
      quote:
        "Giovanni is someone who doesn't lose his cool, even under pressure. He radiates a calmness that positively impacts the whole team. His level-headed approach allows him to consistently solve even complex problems in a structured and efficient way.",
      quoteDe:
        'Giovanni ist jemand, der auch in brenzligen Situationen nicht die Nerven verliert. Er strahlt eine Ruhe aus, die sich positiv auf das gesamte Team auswirkt. Dank seiner besonnenen Art gelingt es ihm immer wieder, auch komplexe Probleme strukturiert und effizient zu lösen.',
      author: 'N. Julia',
      role: 'Team Partner',
    },
    {
      quote:
        "I've gotten to know Giovanni as a colleague who is truly rational. He keeps a cool head even in heated discussions, always presenting his arguments in a factual and well-founded manner. His decisions are made after carefully weighing all the relevant factors.",
      quoteDe:
        'Ich habe Giovanni als einen Kollegen kennengelernt, der sich durch seine Rationalität auszeichnet. Selbst in hitzigen Diskussionen behält er einen kühlen Kopf und argumentiert stets sachlich und fundiert. Seine Entscheidungen sind das Ergebnis einer sorgfältigen Abwägung aller relevanten Faktoren.',
      author: 'H. Emely',
      role: 'Team Partner',
    },
  ];

  currentIndex: number = 1;
  translateX: number = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.translateX =
      (this.currentIndex - 1) *
      (this.quoteWidth() + this.testimonialsWrapperGap());

    this.quoteWidth();
    this.testimonialsWrapperGap();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
    this.translateX =
      (this.currentIndex - 1) *
      (this.quoteWidth() + this.testimonialsWrapperGap());
  }

  quoteWidth(): number {
    if (isPlatformBrowser(this.platformId)) {
      const quote = document.querySelector('.notActive') as HTMLElement;
      return quote ? quote.offsetWidth : 0;
    }
    return 0;
  }

  testimonialsWrapperGap(): number {
    if (isPlatformBrowser(this.platformId)) {
      let screen = window.innerWidth;
      if (screen > 750) {
        return 100;
      } else {
        const width = this.testimonialsWrapper.nativeElement.offsetWidth;
        const gap = width * this.gapInPercent(screen);
        return gap;
      }
    }
    return 0;
  }

  gapInPercent(screen: number) {
    if (screen > 700) {
      return 0.04;
    } else if (screen > 500) {
      return 0.03;
    } else if (screen > 400) {
      return 0.025;
    } else {
      return 0.02;
    }
  }
}
