import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { WarningIcon, ErrorIcon, InfoIcon, SuccessIcon, CloseIcon } from './icons';

@Component({
  tag: 'jgroup-app-message',
  styleUrl: 'jgroup-app-message.css',
  shadow: true,
})
export class JgroupAppMessage {
  /**
   * The heading of the message.
   */
  @Prop() heading: string;

  /**
   * The message to display.
   */
  @Prop() message: string;

  /**
   * The type of message to display.
   */
  @Prop() type: 'warning' | 'error' | 'info' | 'success' = 'info';

  /**
   * Event emitted when the message is dismissed.
   */
  @Event() dismiss: EventEmitter<number>;

  get classes() {
    switch (this.type) {
      case 'warning':
        return {
          container: 'border-yellow-400 bg-yellow-50 text-yellow-800',
          icon: 'text-yellow-400',
          heading: 'text-yellow-800',
          message: 'text-yellow-700',
          button: 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600',
        };
      case 'error':
        return {
          container: 'border-red-400 bg-red-50 text-red-800',
          icon: 'text-red-400',
          heading: 'text-red-800',
          message: 'text-red-700',
          button: 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600',
        };
      case 'info':
        return {
          container: 'border-blue-400 bg-blue-50 text-blue-800',
          icon: 'text-blue-400',
          heading: 'text-blue-800',
          message: 'text-blue-700',
          button: 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600',
        };
      case 'success':
        return {
          container: 'border-green-400 bg-green-50 text-green-800',
          icon: 'text-green-400',
          heading: 'text-green-800',
          message: 'text-green-700',
          button: 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600',
        };
      default:
        return {
          container: '',
          icon: '',
          heading: '',
          message: '',
          button: '',
        };
    }
  }

  private renderIcon(className: string) {
    switch (this.type) {
      case 'warning':
        return <WarningIcon class={`${className} ${this.classes.icon}`} />;
      case 'error':
        return <ErrorIcon class={`${className} ${this.classes.icon}`} />;
      case 'info':
        return <InfoIcon class={`${className} ${this.classes.icon}`} />;
      case 'success':
        return <SuccessIcon class={`${className} ${this.classes.icon}`} />;
      default:
        return null;
    }
  }

  private dismissMessage() {
    this.dismiss.emit();
  }

  render() {
    return (
      <div class={`border-l-4 border-solid p-4 ${this.classes.container}`}>
        <div class="flex">
          <div class="shrink-0">{this.renderIcon('size-8')}</div>
          <div class="ml-3 mt-1">
            <h3 class={`text-md font-medium ${this.classes.heading}`}>{this.heading}</h3>
            <div class={`mt-2 text-md ck-content ${this.classes.message}`} innerHTML={this.message}></div>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button
                type="button"
                class={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.classes.button}`}
                onClick={() => this.dismissMessage()}
              >
                <span class="sr-only">Dismiss</span>
                <CloseIcon class="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
