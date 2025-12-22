// Fix: Added React import to resolve 'Cannot find namespace React' when using React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}