import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { h } from "@stencil/core";
export class JgroupAppMessages {
    /**
     * The app key to fetch messages for.
     */
    appKey;
    /**
     * The section key to fetch messages for.
     */
    appSectionKey;
    /**
     * The user identifier to fetch messages for.
     */
    userIdentifier;
    messages = [];
    async getUserIdentifier() {
        return this.userIdentifier || (await this.getUserFingerprint());
    }
    async getUserFingerprint() {
        const fpPromise = FingerprintJS.load();
        const fp = await fpPromise;
        return (await fp.get()).visitorId;
    }
    async fetchMessages() {
        const params = new URLSearchParams();
        params.append('user_identifier', await this.getUserIdentifier());
        const url = new URL(`http://stats.test/api/app-messages/${this.appKey}/${this.appSectionKey}`);
        url.search = params.toString();
        const response = await fetch(url.toString());
        if (!response.ok) {
            console.error('Failed to fetch messages:', response.statusText);
            return;
        }
        const data = await response.json();
        this.messages = data.messages;
    }
    async onDismiss(messageId) {
        // optimistically remove the message from state
        this.messages = this.messages.filter(message => message.id !== messageId);
        const params = new URLSearchParams();
        params.append('user_identifier', await this.getUserIdentifier());
        const url = new URL(`http://stats.test/api/app-messages/${this.appKey}/${this.appSectionKey}/${messageId}`);
        url.search = params.toString();
        const response = await fetch(url.toString(), {
            method: 'DELETE',
        });
        if (!response.ok) {
            console.error('Failed to dismiss message:', response.statusText);
            return;
        }
    }
    componentWillLoad() {
        this.fetchMessages();
    }
    render() {
        return (h("div", { key: 'f26ede091d6811601fac5724221d5436621c5d12', class: "grid grid-cols-1 gap-4" }, this.messages.map(message => (h("jgroup-app-message", { heading: message.title, message: message.message, type: message.type, onDismiss: () => this.onDismiss(message.id) })))));
    }
    static get is() { return "jgroup-app-messages"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["jgroup-app-messages.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["jgroup-app-messages.css"]
        };
    }
    static get properties() {
        return {
            "appKey": {
                "type": "string",
                "attribute": "app-key",
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
                    "text": "The app key to fetch messages for."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "appSectionKey": {
                "type": "string",
                "attribute": "app-section-key",
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
                    "text": "The section key to fetch messages for."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "userIdentifier": {
                "type": "string",
                "attribute": "user-identifier",
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
                    "text": "The user identifier to fetch messages for."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "messages": {}
        };
    }
}
//# sourceMappingURL=jgroup-app-messages.js.map
