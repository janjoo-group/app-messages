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
    renderIcon() {
        switch (this.type) {
            case 'warning':
                return h(WarningIcon, { class: this.classes.icon });
            case 'error':
                return h(ErrorIcon, { class: this.classes.icon });
            case 'info':
                return h(InfoIcon, { class: this.classes.icon });
            case 'success':
                return h(SuccessIcon, { class: this.classes.icon });
            default:
                return null;
        }
    }
    dismissMessage() {
        this.dismiss.emit();
    }
    render() {
        return (h("div", { key: '4984882a7653f8ea9d6147f62386bf17d47d563e', class: `border-l-4 border-solid p-4 ${this.classes.container}` }, h("div", { key: '075d6439568cee970279cb51d5e69998a1f5bf6c', class: "flex" }, h("div", { key: '34ca298b2810fae6f6e1b70b915c3e3e8c63bfda', class: "shrink-0" }, this.renderIcon()), h("div", { key: '44189d164767cc394a200849280a692c7fc81880', class: "ml-3" }, h("h3", { key: '62b85c92c6f104e74112d0e2120bbb53829eb152', class: `text-sm font-medium ${this.classes.heading}` }, this.heading), h("div", { key: 'e9ba47c81fc2d7887527dc592513fd09913895dc', class: `mt-2 text-sm ck-content ${this.classes.message}`, innerHTML: this.message })), h("div", { key: '9343c07b71fa8fabbb45b265917162d8a5215beb', class: "ml-auto pl-3" }, h("div", { key: 'e0bb42c474b7649a91efaa9f2ebd44a124097dfa', class: "-mx-1.5 -my-1.5" }, h("button", { key: 'ea756c93c98d5d92622fe41cf6d20b945258498f', type: "button", class: `inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.classes.button}`, onClick: () => this.dismissMessage() }, h("span", { key: '192b907deba5063fa534cbf3f441073a8bb0cd2d', class: "sr-only" }, "Dismiss"), h(CloseIcon, { key: 'cfa97126f198989ed9cfe9d963b4dc4257b50cb7' })))))));
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
