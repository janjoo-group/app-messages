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
     * Event emitted when the message is dismissed.
     */
    dismiss;
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
        return (h("div", { key: '1d76f9ccccd144eaec64206a0f9914207c72b54e', class: `border-l-4 border-solid p-4 ${this.classes.container}` }, h("div", { key: 'c071ba0d174c0dd2ee4380dced7e36cca1310280', class: "flex" }, h("div", { key: 'd1425f1315ed9df97a2fe8cc505cdbdc4b98b2ad', class: "shrink-0" }, this.renderIcon('size-8')), h("div", { key: '4bfdc473c18512e1c5ab2fff996818da7e6d7a81', class: "ml-3 mt-1" }, h("h3", { key: 'f0e2c26d7f3d9479488b67fc9fce0cbbf6c70449', class: `text-md font-medium ${this.classes.heading}` }, this.heading), h("div", { key: '93ae0f9b6750d78cb29e205de3d71c41b54a68b4', class: `mt-2 text-md ck-content ${this.classes.message}`, innerHTML: this.message })), h("div", { key: '87184768e4bd33164f7340a4d0b6dd690a3f4c6c', class: "ml-auto pl-3" }, h("div", { key: 'e90107eeb70b1acb1336a338b9e9062d53b1bb8c', class: "-mx-1.5 -my-1.5" }, h("button", { key: 'f5fb4866196bbb335f03cca1808e67320db4507f', type: "button", class: `inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.classes.button}`, onClick: () => this.dismissMessage() }, h("span", { key: '1b66741ac3702abbdc1444f50380eecc5d3d2365', class: "sr-only" }, "Dismiss"), h(CloseIcon, { key: '090a1e43be79042a674c16726d9910f9756aef3d', class: "size-5" })))))));
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
