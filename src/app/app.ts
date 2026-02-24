import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly companyName = 'Apex Chartered Accountants';
  protected readonly whatsappNumber = '+91 98765 43210';
  protected readonly whatsappLink = 'https://wa.me/919876543210';
  protected readonly instagramHandle = '@apexca_official';
  protected readonly instagramProfileLink = 'https://www.instagram.com/apexca_official/';
  protected readonly instagramQrImage =
    'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fwww.instagram.com%2Fapexca_official%2F';

  protected readonly navItems = ['Home', 'About', 'Services', 'Portfolio', 'News', 'Contact'];
  protected readonly topBarItems = [
    'Mon - Sat: 9:00 AM - 7:00 PM',
    'support@meera.com',
    '+91 98765 43210'
  ];

  protected readonly heroSlides = [
    {
      title: 'We Help Businesses Innovate and Grow',
      subtitle:
        'With over 10 years of experience, Apex Chartered Accountants delivers practical tax, audit, and compliance solutions for modern businesses.',
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1800&q=80'
    },
    {
      title: 'Trusted Chartered Accountancy for Growing Companies',
      subtitle:
        'From startup setup to advanced compliance, we provide structured financial guidance for every stage of growth.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80'
    },
    {
      title: 'Clear Reporting, Better Decisions, Stronger Results',
      subtitle:
        'We simplify tax, bookkeeping, and audit so you can focus on running and scaling your business.',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80'
    }
  ];

  protected readonly highlights = [
    {
      title: 'Business Ideas and Innovation',
      description: 'Smart accounting and advisory ideas to improve business growth.',
      image:
        'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Tax Compliance and Digital Filing',
      description: 'Complete GST, ITR, and ROC support with timely compliance.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
    },
    {
      title: 'Advisory for Growing Businesses',
      description: 'Practical financial planning and reporting for scaling companies.',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  protected readonly services = [
    {
      icon: 'TX',
      title: 'Income Tax Filing',
      description: 'Accurate individual and business income tax return preparation and filing.'
    },
    {
      icon: 'GS',
      title: 'GST Services',
      description: 'GST registration, monthly returns, reconciliation, and advisory support.'
    },
    {
      icon: 'RM',
      title: 'Risk Management',
      description: 'Internal controls and compliance checks to reduce financial risk exposure.'
    },
    {
      icon: 'AU',
      title: 'Audit and Assurance',
      description: 'Statutory audit, tax audit, and process audit for reliable reporting.'
    },
    {
      icon: 'RP',
      title: 'Retirement Planning',
      description: 'Long-term tax efficient retirement and wealth planning consultation.'
    },
    {
      icon: 'BP',
      title: 'Business Planning',
      description: 'Financial planning, projections, and compliance setup for growing firms.'
    }
  ];

  protected readonly projects = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80'
  ];

  protected readonly clients = [
    {
      name: 'Brightline Traders Pvt. Ltd.',
      segment: 'Trading',
      support: 'Monthly GST and accounting support'
    },
    {
      name: 'Silver Oak Health Clinic',
      segment: 'Healthcare',
      support: 'Payroll, TDS, and tax planning'
    },
    {
      name: 'UrbanNest Interiors',
      segment: 'Design Services',
      support: 'Startup incorporation and compliance'
    }
  ];

  protected readonly partnerNames = ['Joomla', 'Envato', 'Shopify', 'WooCommerce', 'WordPress'];
  protected readonly newsItems = [
    {
      title: 'GST Filing Deadline Updates for FY 2026',
      summary: 'Important compliance timeline changes every business owner should track.',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Tax Planning Checklist for Small Businesses',
      summary: 'A practical checklist to optimize taxes and avoid year-end surprises.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'How to Build Better Internal Financial Controls',
      summary: 'A simple framework to improve accountability and reporting accuracy.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  protected readonly aboutLinks = [
    'About Us',
    'Advertise',
    'Terms and Conditions',
    'Privacy Policy',
    'Careers',
    'Shop'
  ];

  protected readonly companyLinks = ['Home', 'Testimonials', 'News', 'Services', 'Corporate Client'];

  protected readonly contactForm;

  protected formSubmitted = false;
  protected currentHeroIndex = 0;

  protected readonly year = new Date().getFullYear();

  constructor(private readonly formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{8,15}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  protected submitForm(): void {
    this.formSubmitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.contactForm.reset();
    this.formSubmitted = false;
  }

  protected fieldInvalid(
    fieldName: 'fullName' | 'email' | 'phone' | 'message'
  ): boolean {
    const field = this.contactForm.get(fieldName);
    return !!field && field.invalid && (field.touched || this.formSubmitted);
  }

  protected nextHeroSlide(): void {
    this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroSlides.length;
  }

  protected previousHeroSlide(): void {
    this.currentHeroIndex =
      (this.currentHeroIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
  }

  protected goToHeroSlide(index: number): void {
    this.currentHeroIndex = index;
  }
}
