import { MessageButtonOptions } from "discord.js";
import { MessageElement } from "../../typings/types";

export function MessageButton(props: MessageButtonOptions, _children: undefined) {
    return {
        type: "MessageButton",
        props,
        children: undefined
    } as MessageElement<MessageButtonOptions>;
}