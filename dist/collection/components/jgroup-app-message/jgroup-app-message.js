import { h } from "@stencil/core";
import { WarningIcon, ErrorIcon, InfoIcon, SuccessIcon, CloseIcon } from "./icons";
export class JgroupAppMessage {
    /**
     * The heading of the message.
     */
    heading;
    /**
     * The message to display.
     */
    message;
    /**
     * The type of message to display.
     */
    type = 'info';
    /**
     * The theme of the message.
     */
    theme = 'light';
    /**
     * Event emitted when the message is dismissed.
     */
    dismiss;
    get classes() {
        const lightTheme = {
            warning: {
                container: 'border-yellow-400 bg-yellow-50 text-yellow-800',
                icon: 'text-yellow-400',
                heading: 'text-yellow-800',
                message: 'text-yellow-700',
                button: 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600',
            },
            error: {
                container: 'border-red-400 bg-red-50 text-red-800',
                icon: 'text-red-400',
                heading: 'text-red-800',
                message: 'text-red-700',
                button: 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600',
            },
            info: {
                container: 'border-blue-400 bg-blue-50 text-blue-800',
                icon: 'text-blue-400',
                heading: 'text-blue-800',
                message: 'text-blue-700',
                button: 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600',
            },
            success: {
                container: 'border-green-400 bg-green-50 text-green-800',
                icon: 'text-green-400',
                heading: 'text-green-800',
                message: 'text-green-700',
                button: 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600',
            },
        };
        const darkTheme = {
            warning: {
                container: 'border-yellow-400 bg-neutral-800 text-neutral-200',
                icon: 'text-yellow-400',
                heading: 'text-neutral-200',
                message: 'text-neutral-300',
                button: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-500',
            },
            error: {
                container: 'border-red-400 bg-neutral-800 text-neutral-200',
                icon: 'text-red-400',
                heading: 'text-neutral-200',
                message: 'text-neutral-300',
                button: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-500',
            },
            info: {
                container: 'border-blue-400 bg-neutral-800 text-neutral-200',
                icon: 'text-blue-400',
                heading: 'text-neutral-200',
                message: 'text-neutral-300',
                button: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-500',
            },
            success: {
                container: 'border-green-400 bg-neutral-800 text-neutral-200',
                icon: 'text-green-400',
                heading: 'text-neutral-200',
                message: 'text-neutral-300',
                button: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-500',
            },
        };
        const themeClasses = this.theme === 'dark' ? darkTheme : lightTheme;
        switch (this.type) {
            case 'warning':
                return themeClasses.warning;
            case 'error':
                return themeClasses.error;
            case 'info':
                return themeClasses.info;
            case 'success':
                return themeClasses.success;
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
    renderIcon(className) {
        switch (this.type) {
            case 'warning':
                return h(WarningIcon, { class: `${className} ${this.classes.icon}` });
            case 'error':
                return h(ErrorIcon, { class: `${className} ${this.classes.icon}` });
            case 'info':
                return h(InfoIcon, { class: `${className} ${this.classes.icon}` });
            case 'success':
                return h(SuccessIcon, { class: `${className} ${this.classes.icon}` });
            default:
                return null;
        }
    }
    dismissMessage() {
        this.dismiss.emit();
    }
    render() {
        return (h("div", { key: '5cdbbfdc9f17e6d706dca8d6c635b087a958f66f', class: `border-l-4 border-solid p-4 fade-in ${this.classes.container}` }, h("div", { key: 'a683bfd2c30db4629be3ce033b350a9c16a32306', class: "flex" }, h("div", { key: '1e5f452e414fcf2db7c0f873c7df01966c46d1d3', class: "shrink-0" }, this.renderIcon('size-8')), h("div", { key: '64b583b489ac3fedf7a2e7090a8e193a55c477ce', class: "ml-3 mt-1" }, h("h3", { key: 'f38a319f91149446abeff52fbe0c56b9341bc8e2', class: `text-md font-medium ${this.classes.heading}` }, this.heading), h("div", { key: 'ade920ce3da43d9930242bdbddd0722c3ee91a98', class: `mt-2 text-md ck-content ${this.classes.message}`, innerHTML: this.message })), h("div", { key: '74084ecb488a648faaf656341fd89f516a2f7fb8', class: "ml-auto pl-3" }, h("div", { key: 'c2a8831f5e72b07d2de54f1f94d1e243108d3c56', class: "-mx-1.5 -my-1.5" }, h("button", { key: '435e3186a3649077d7a4d00ec237052a7bfc1479', type: "button", class: `inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.classes.button}`, onClick: () => this.dismissMessage() }, h("span", { key: '3afb70e88c6970acd36cabe40a0367f4037d3996', class: "sr-only" }, "Dismiss"), h(CloseIcon, { key: '61fd9e6cf02354a75d18f0d4cda03f0f4cbd9434', class: "size-5" })))))));
    }
    static get is() { return "jgroup-app-message"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["jgroup-app-message.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["jgroup-app-message.css"]
        };
    }
    static get properties() {
        return {
            "heading": {
                "type": "string",
                "attribute": "heading",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The heading of the message."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "message": {
                "type": "string",
                "attribute": "message",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The message to display."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'warning' | 'error' | 'info' | 'success'",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of message to display."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'info'"
            },
            "theme": {
                "type": "string",
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "'light' | 'dark'",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The theme of the message."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'light'"
            }
        };
    }
    static get events() {
        return [{
                "method": "dismiss",
                "name": "dismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the message is dismissed."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=jgroup-app-message.js.map
