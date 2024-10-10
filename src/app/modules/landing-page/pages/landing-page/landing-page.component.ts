import { Component, ElementRef, ViewChild } from '@angular/core';

import { BaseComponent } from '../../../../core/components/base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any; // Declare Bootstrap as any

@Component({
  selector: 'petra-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent extends BaseComponent {
 
  @ViewChild('home') home!: ElementRef;
  @ViewChild('overView') overView!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('ourPricing') ourPricing!: ElementRef;
  @ViewChild('inclusions') inclusions!: ElementRef;
  @ViewChild('exclusions') exclusions!: ElementRef;

  tabsValue = 1;
  tabs: any[] = [
    {
      name: 'Day 1',
      isSelcted: true,
      id: 1
    },
    {
      name: 'Day 2',
      isSelcted: false,
      id: 2
    },
    {
      name: 'Day 3',
      isSelcted: false,
      id: 3
    },
    {
      name: 'Day 4',
      isSelcted: false,
      id: 4
    }
  ];

  form !: FormGroup;
  responsiveOptions: any[] | undefined;
  autoplayInterval = 3000;
  items: any[] = [
    {
      img: 'slider-1',
      title: 'Amman Citadel'
    },
    {
      img: 'slider-2',
      title: 'Roman Theater'
    },
    {
      img: 'slider-3',
      title: 'Petra'
    },
    {
      img: 'slider-4',
      title: 'Madaba'
    },
    {
      img: 'slider-1',
      title: 'Amman Citadel'
    },
    {
      img: 'slider-2',
      title: 'Roman Theater'
    },
  ]

  constructor(private fb: FormBuilder) {
    super();
 

    this.subscription = this._MessagingService.subject('scrollToSection').subscribe({
      next: (res) => {
        this.scrollToSection(res)
      }
    })
  }

  ngSuperOnInit() { 
    this.responsiveOptions = [
      {
        breakpoint: '992px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  };

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }

  scrollToSection(section: string) {
    let element: ElementRef;
    switch (section) {
      case 'HOME':
        element = this.home;
        break;
      case 'OVERVIEW':
        element = this.overView;
        break;
      case 'ABOUTITINERARY':
        element = this.about;
        break;
      case 'OURPRICING':
        element = this.ourPricing;
        break;
       case 'INCLUSIONS':
          element = this.inclusions;
        break;
      case 'EXCLUSIONS':
          element = this.exclusions;
        break;
      default:
        return;
    }
    element?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
 
  selcetTab(item: any) {
    this.tabsValue = item.id;
    this.tabs.forEach((itme) => {
      if (itme.id == item.id) {
        itme.isSelcted = true
      } else {
        itme.isSelcted = false
      }
    });

  }
}

