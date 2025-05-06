import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'jgroup-app-messages',
  styleUrl: 'jgroup-app-messages.css',
  shadow: true,
})
export class JgroupAppMessages {
  /**
   * The app key to fetch messages for.
   */
  @Prop() appKey: string;

  /**
   * The section key to fetch messages for.
   */
  @Prop() appSectionKey: string;

  /**
   * The user identifier to fetch messages for.
   */
  @Prop() userIdentifier: string;

  @State() messages = [];

  private async getUserIdentifier(): Promise<string> {
    return this.userIdentifier || (await this.getUserFingerprint());
  }

  private async getUserFingerprint(): Promise<string> {
    const fpPromise = FingerprintJS.load();
    const fp = await fpPromise;

    return (await fp.get()).visitorId;
  }

  private async fetchMessages() {
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

  private async onDismiss(messageId: number) {
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
    return (
      <div class="grid grid-cols-1 gap-4">
        {this.messages.map(message => (
          <jgroup-app-message
            heading={message.title}
            message={message.message}
            type={message.type}
            onDismiss={() => this.onDismiss(message.id)}
          />
        ))}
      </div>
    );
  }
}
