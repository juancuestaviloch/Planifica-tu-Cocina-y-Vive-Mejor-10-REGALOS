import React from 'react';

export interface BonusItem {
  title: string;
  value: string;
  description: string;
  image: string;
  illustration?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  stars: number;
}

export interface Module {
  title: string;
  description: string;
  image: string;
  illustration?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}