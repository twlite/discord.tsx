import { MessageSelectMenuOptions, MessageSelectOptionData } from "discord.js";
import { MessageElement } from "../../typings/types";

export function MessageSelectMenu(props: MessageSelectMenuOptions, children: MessageElement[]) {
    return {
        type: "MessageSelectMenu",
        props,
        children
    } as MessageElement<MessageSelectMenuOptions>;
}

export function MessageSelectOption(props: MessageSelectOptionData, _children: undefined) {
    return {
        type: "MessageSelectOption",
        props,
        children: undefined
    } as MessageElement<MessageSelectOptionData>;
}