import { MessageActionRow as DiscordMessageActionRow, MessageActionRowOptions, MessageButton as DiscordMessageButton, MessageButtonOptions } from "discord.js";

export type ElementType = "Root" | "MessageActionRow" | "MessageButton";
export type Component<T = any> = (props?: T, children?: any) => MessageElement<T>;

export interface MessageElement<T = any> {
    type: ElementType;
    props: T;
    children?: MessageElement[] | undefined;
}

export class DiscordComponents {
    static createComponent<T = any>(component: Component<T>, props: T, ...children: Array<MessageElement<MessageButtonOptions>>): MessageElement<T> {
        if (component === undefined) return void 0 as any;
        const element = component(props, children);
        return element;
    }
}

export function MessageActionRow(props: {}, children: MessageElement[]) {
    return {
        type: "MessageActionRow",
        props,
        children
    } as MessageElement<MessageActionRowOptions>;
}

export function MessageButton(props: MessageButtonOptions, _children: undefined) {
    return {
        type: "MessageButton",
        props,
        children: undefined
    } as MessageElement<MessageButtonOptions>;
}

export function fragment(props: null, components: MessageElement[]): DiscordMessageActionRow[] {
    if (props !== null) throw new TypeError("Root fragments may not have props");
    const data: DiscordMessageActionRow[] = [];

    components.forEach((component) => {
        if (typeof component !== "object") return;
        if (component.type !== "MessageActionRow") throw new Error("Parent component must be MessageActionRow");

        const actionRow = new DiscordMessageActionRow();

        component.children?.forEach((child: MessageElement<MessageButtonOptions>) => {
            if (child.type !== "MessageButton") throw new TypeError(`Invalid children type ${child.type}!`);
            const buttonComponent = new DiscordMessageButton();

            if (child.props.customID) buttonComponent.setCustomID(child.props.customID);
            if (child.props.disabled) buttonComponent.setDisabled(child.props.disabled);
            if (child.props.emoji)
                buttonComponent.setEmoji(
                    !child.props.emoji.id ? child.props.emoji.name! : `<${child.props.emoji.animated ? "a" : ""}:${child.props.emoji.name}:${child.props.emoji.id}>`
                );
            if (child.props.label) buttonComponent.setLabel(child.props.label);
            if (child.props.style) buttonComponent.setStyle(child.props.style);
            if (child.props.url) buttonComponent.setURL(child.props.url);

            actionRow.addComponents(buttonComponent);
        });

        data.push(actionRow);
    });

    return data;
}
