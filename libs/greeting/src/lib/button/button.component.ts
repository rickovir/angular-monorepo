// button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="[
        'lib-button',
        'lib-button--' + variant,
        'lib-button--' + size
      ]"
      [type]="type"
      [disabled]="disabled || loading"
      (click)="onClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .lib-button {
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji' !important;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      font-weight: 500;
      border-radius: 0.375rem;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }

    .lib-button:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    }

    .lib-button--disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Size variants */
    .lib-button--small {
      font-size: 0.875rem;
      padding: 0.375rem 0.75rem;
    }

    .lib-button--medium {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }

    .lib-button--large {
      font-size: 1.125rem;
      padding: 0.75rem 1.5rem;
    }

    /* Color variants */
    .lib-button--primary {
      background-color: #3182ce;
      color: white;
    }
    .lib-button--primary:hover:not(.lib-button--disabled) {
      background-color: #2b6cb0;
    }

    .lib-button--secondary {
      background-color: #718096;
      color: white;
    }
    .lib-button--secondary:hover:not(.lib-button--disabled) {
      background-color: #4a5568;
    }

    .lib-button--danger {
      background-color: #e53e3e;
      color: white;
    }
    .lib-button--danger:hover:not(.lib-button--disabled) {
      background-color: #c53030;
    }

    .lib-button--success {
      background-color: #38a169;
      color: white;
    }
    .lib-button--success:hover:not(.lib-button--disabled) {
      background-color: #2f855a;
    }

    .lib-button--warning {
      background-color: #ecc94b;
      color: #1a202c;
    }
    .lib-button--warning:hover:not(.lib-button--disabled) {
      background-color: #d69e2e;
    }

    .lib-button--outline {
      background-color: transparent;
      color: #3182ce;
      border-color: #3182ce;
    }
    .lib-button--outline:hover:not(.lib-button--disabled) {
      background-color: rgba(49, 130, 206, 0.1);
    }

    /* Spinner for loading state */
    .lib-button__spinner {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: white;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  
  @Output() buttonClick = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }
}