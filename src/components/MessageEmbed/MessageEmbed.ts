import {
    MessageEmbedAuthor as DiscordMessageEmbedAuthor,
    MessageEmbedFooter as DiscordMessageEmbedFooter,
    EmbedFieldData,
    MessageEmbedImage as DiscordMessageEmbedImage,
    MessageEmbedThumbnail as DiscordMessageEmbedThumbnail
} from "discord.js";
import { MessageElement, EmbedProps } from "../../typings/types";

export function MessageEmbed(props: EmbedProps, children: MessageElement[]) {
    return {
        type: "MessageEmbed",
        props,
        children
    } as MessageElement<EmbedProps>;
}

export function MessageEmbedAuthor(props: DiscordMessageEmbedAuthor, _children: undefined) {
    return {
        type: "MessageEmbedAuthor",
        props,
        children: undefined
    } as MessageElement<DiscordMessageEmbedAuthor>;
}

export function MessageEmbedFooter(props: DiscordMessageEmbedFooter, _children: undefined) {
    return {
        type: "MessageEmbedFooter",
        props,
        children: undefined
    } as MessageElement<DiscordMessageEmbedFooter>;
}

export function MessageEmbedFields(_props: any, children: MessageElement[]) {
    return {
        type: "MessageEmbedFields",
        props: undefined,
        children
    } as MessageElement;
}

export function MessageEmbedField(props: EmbedFieldData, _children: undefined) {
    return {
        type: "MessageEmbedField",
        props,
        children: undefined
    } as MessageElement<EmbedFieldData>;
}

export function MessageEmbedThumbnail(props: DiscordMessageEmbedThumbnail, _children: undefined) {
    return {
        type: "MessageEmbedThumbnail",
        props,
        children: undefined
    } as MessageElement<DiscordMessageEmbedThumbnail>;
}

export function MessageEmbedImage(props: DiscordMessageEmbedImage, _children: undefined) {
    return {
        type: "MessageEmbedImage",
        props,
        children: undefined
    } as MessageElement<DiscordMessageEmbedImage>;
}