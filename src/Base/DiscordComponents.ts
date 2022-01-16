import {
    MessageActionRow as DiscordMessageActionRow,
    MessageButtonOptions,
    MessageSelectOptionData,
    MessageEmbed
} from "discord.js";
import { Component, MessageElement, ComponentCreateTypes } from "../typings/types";
import handleActionRow from "./ActionRowHandler";
import handleEmbed from "./MessageEmbedHandler";

export class DiscordComponents {
    static createComponent<T = any>(
        component: Component<T>, props: T,
        ...children: Array<MessageElement<ComponentCreateTypes>>
    ): MessageElement<T> {
        if (component === undefined) return void 0 as any;
        const element = component(props, children);
        return element;
    }

    static fragment(props: null, components: MessageElement[]) {
        process.emitWarning("DiscordComponents.fragment is deprecated, use DiscordComponents.Fragment instead!");
        return DiscordComponents.Fragment(props, components);
    }

    static Fragment(props: null, components: MessageElement[]) {
        if (props !== null) throw new TypeError("Root fragments may not have props");
        const actionRowData: DiscordMessageActionRow[] = [];
        const embedData: MessageEmbed[] = [];

        components.forEach((component) => {
            if (typeof component !== "object") return;

            switch(component.type) {
                case "MessageActionRow":
                    actionRowData.push(handleActionRow(component));
                    break;
                case "MessageEmbed":
                    embedData.push(handleEmbed(component));
                    break;
                default:
                    throw new TypeError(`Unsupported parent component "${component.type}"!`);
            }
        });

        return {
            embeds: embedData,
            components: actionRowData
        };
    }
}