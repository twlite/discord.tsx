import {
    MessageActionRow as DiscordMessageActionRow,
    MessageActionRowOptions,
    MessageButton as DiscordMessageButton,
    MessageSelectMenu as DiscordMessageSelectMenu,
    MessageButtonOptions,
    MessageSelectOptionData,
    MessageSelectMenuOptions
} from "discord.js";

export type ElementType = "Root" | "MessageActionRow" | "MessageButton" | "MessageSelectMenu" | "MessageSelectOption";
export type Component<T = any> = (props?: T, children?: any) => MessageElement<T>;

export interface MessageElement<T = any> {
    type: ElementType;
    props: T;
    children?: MessageElement[] | undefined;
}

export class DiscordComponents {
    static createComponent<T = any>(component: Component<T>, props: T, ...children: Array<MessageElement<MessageButtonOptions|MessageSelectOptionData>>): MessageElement<T> {
        if (component === undefined) return void 0 as any;
        const element = component(props, children);
        return element;
    }

    static fragment(props: null, components: MessageElement[]): DiscordMessageActionRow[] {
        if (props !== null) throw new TypeError("Root fragments may not have props");
        const data: DiscordMessageActionRow[] = [];

        components.forEach((component) => {
            if (typeof component !== "object") return;
            if (component.type !== "MessageActionRow") throw new Error("Parent component must be MessageActionRow");

            const actionRow = new DiscordMessageActionRow();

            component.children?.forEach((child: MessageElement<MessageButtonOptions|MessageSelectMenuOptions>) => {                
                switch(child.type) {
                    case "MessageButton": {
                        const buttonComponent = new DiscordMessageButton();
                        const prop = child.props as MessageButtonOptions;

                        if (prop.customID) buttonComponent.setCustomID(prop.customID);
                        if (prop.disabled) buttonComponent.setDisabled(prop.disabled);
                        if (prop.emoji) buttonComponent.setEmoji(prop.emoji);
                        if (prop.label) buttonComponent.setLabel(prop.label);
                        if (prop.style) buttonComponent.setStyle(prop.style);
                        if (prop.url) buttonComponent.setURL(prop.url);

                        actionRow.addComponents(buttonComponent);
                    }
                    break;
                    case "MessageSelectMenu": {
                        const selectComponent = new DiscordMessageSelectMenu();
                        const prop = child.props as MessageSelectMenuOptions;

                        if (prop.customID) selectComponent.setCustomID(prop.customID);
                        if (prop.disabled) selectComponent.setDisabled(prop.disabled);
                        if (prop.maxValues) selectComponent.setMaxValues(prop.maxValues);
                        if (prop.minValues) selectComponent.setMinValues(prop.minValues);
                        if (prop.placeholder) selectComponent.setPlaceholder(prop.placeholder);

                        // add options
                        child.children?.forEach((option: MessageElement<MessageSelectOptionData>) => {
                            selectComponent.addOptions(option.props);
                        });

                        actionRow.addComponents(selectComponent);
                    }
                    break;
                    default:
                        throw new Error(`Invalid child component type "${child.type}"!`);
                }
            });

            data.push(actionRow);
        });

        return data;
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