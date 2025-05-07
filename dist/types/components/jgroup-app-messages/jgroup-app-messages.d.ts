export declare class JgroupAppMessages {
    /**
     * The app key to fetch messages for.
     */
    appKey: string;
    /**
     * The section key to fetch messages for.
     */
    appSectionKey: string;
    /**
     * The user identifier to fetch messages for.
     */
    userIdentifier: string;
    /**
     * The API URL to fetch messages from.
     *
     * @internal
     */
    apiUrl: string;
    /**
     * The theme of the messages.
     */
    theme: 'light' | 'dark';
    messages: any[];
    private getUserIdentifier;
    private getUserFingerprint;
    private fetchMessages;
    private onDismiss;
    componentWillLoad(): void;
    render(): any;
}
