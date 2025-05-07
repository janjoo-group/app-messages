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
        return (h("div", { key: '40279e3d6d68a186793b43e846cc330b4c43a21a', class: `border-l-4 border-solid p-4 ${this.classes.container}` }, h("div", { key: '030bc589de7290ae691a1118b7e95b9b9d305ae1', class: "flex" }, h("div", { key: '4c91fa2dace0b082065a12129e10c6e72ad70969', class: "shrink-0" }, this.renderIcon('size-8')), h("div", { key: '7ff53eb4a101b127b6fd115b3781ac285fc9ab16', class: "ml-3 mt-1" }, h("h3", { key: '560ee25ea7dd2efdd8221ffa4ecf476d91f8b4a4', class: `text-md font-medium ${this.classes.heading}` }, this.heading), h("div", { key: '285c12dae61a06d3f694e4eda7d676e55d77033b', class: `mt-2 text-md ck-content ${this.classes.message}`, innerHTML: this.message })), h("div", { key: 'd80a640734061fb6178b930feb7fa5c0ac399905', class: "ml-auto pl-3" }, h("div", { key: 'd43f884f49f04390f2ef3dd505d3cbaf71ce9d8c', class: "-mx-1.5 -my-1.5" }, h("button", { key: '06b8640c4d40d851dabbcd11ece191e2cd30cbc5', type: "button", class: `inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.classes.button}`, onClick: () => this.dismissMessage() }, h("span", { key: 'f02322fd8405516f38eae09794e56d8129a8f99b', class: "sr-only" }, "Dismiss"), h(CloseIcon, { key: 'c6853dca2ff4b1169d0bc3ca124fb782b040d73a', class: "size-5" })))))));
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
