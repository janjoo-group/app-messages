import { EventEmitter } from '../../stencil-public-runtime';
export declare class JgroupAppMessage {
    /**
     * The heading of the message.
     */
    heading: string;
    /**
     * The message to display.
     */
    message: string;
    /**
     * The type of message to display.
     */
    type: 'warning' | 'error' | 'info' | 'success';
    /**
     * The theme of the message.
     */
    theme: 'light' | 'dark';
    /**
     * Event emitted when the message is dismissed.
     */
    dismiss: EventEmitter<number>;
    get classes(): {
        container: string;
        icon: string;
        heading: string;
        message: string;
        button: string;
    };
    private renderIcon;
    private dismissMessage;
    render(): any;
}
