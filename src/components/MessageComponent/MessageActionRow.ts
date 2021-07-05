import { MessageActionRowOptions } from "discord.js";
import { MessageElement } from "../../typings/types";

export function MessageActionRow(props: {}, children: MessageElement[]) {
    return {
        type: "MessageActionRow",
        props,
        children
    } as MessageElement<MessageActionRowOptions>;
}