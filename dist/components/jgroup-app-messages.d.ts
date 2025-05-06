import type { Components, JSX } from "../types/components";

interface JgroupAppMessages extends Components.JgroupAppMessages, HTMLElement {}
export const JgroupAppMessages: {
    prototype: JgroupAppMessages;
    new (): JgroupAppMessages;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
