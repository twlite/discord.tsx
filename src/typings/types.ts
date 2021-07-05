import {
    ColorResolvable,
    MessageEmbedAuthor,
    MessageEmbedFooter,
    EmbedFieldData,
    MessageEmbedImage,
    MessageEmbedThumbnail,
    MessageButtonOptions,
    MessageSelectOptionData
} from "discord.js";

export type ComponentCreateTypes = 
    | MessageEmbedAuthor
    | MessageEmbedFooter
    | MessageEmbedImage
    | MessageEmbedThumbnail
    | EmbedFieldData
    | EmbedProps
    | MessageButtonOptions
    | MessageSelectOptionData;

export type ElementType =
    | "Root" 
    | "MessageActionRow"
    | "MessageButton"
    | "MessageSelectMenu"
    | "MessageSelectOption"
    | "MessageEmbed"
    | "MessageEmbedAuthor"
    | "MessageEmbedFooter"
    | "MessageEmbedFields"
    | "MessageEmbedField"
    | "MessageEmbedThumbnail"
    | "MessageEmbedImage";

export type Component<T = any> = (props?: T, children?: any) => MessageElement<T>;
export interface MessageElement<T = any> {
    type: ElementType;
    props: T;
    children?: MessageElement[] | undefined;
}

export interface EmbedProps {
    color?: ColorResolvable;
    timestamp?: Date | number;
    description?: string;
    title?: string;
    url?: string;
}