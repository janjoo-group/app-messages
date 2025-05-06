import type { Components, JSX } from "../types/components";

interface JgroupAppMessage extends Components.JgroupAppMessage, HTMLElement {}
export const JgroupAppMessage: {
    prototype: JgroupAppMessage;
    new (): JgroupAppMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
