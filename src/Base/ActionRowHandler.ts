import {
    MessageActionRow as DiscordMessageActionRow,
    MessageButton as DiscordMessageButton,
    MessageButtonOptions,
    MessageSelectMenu as DiscordMessageSelectMenu,
    MessageSelectMenuOptions,
    MessageSelectOptionData
} from "discord.js";
import { MessageElement, ChildrenType } from "../typings/types";

export default function handleData(component: MessageElement): DiscordMessageActionRow {
    const actionRow = new DiscordMessageActionRow();

    for (const child of ((Array.isArray(component) ? component : component.children || []) as ChildrenType[])) {
        if (Array.isArray(child)) return handleData(child);
        switch (child.type) {
            case "MessageButton": {
                const buttonComponent = new DiscordMessageButton();
                const prop = child.props as MessageButtonOptions;

                // @ts-expect-error
                if (prop.customId) buttonComponent.setCustomId(prop.customId);
                if (prop.disabled) buttonComponent.setDisabled(prop.disabled);
                if (prop.emoji) buttonComponent.setEmoji(prop.emoji);
                if (prop.label) buttonComponent.setLabel(prop.label);
                if (prop.style) buttonComponent.setStyle(prop.style);
                // @ts-expect-error
                if (prop.url) buttonComponent.setURL(prop.url);

                actionRow.addComponents(buttonComponent);
            }
                break;
            case "MessageSelectMenu": {
                const selectComponent = new DiscordMessageSelectMenu();
                const prop = child.props as MessageSelectMenuOptions;

                if (prop?.customId) selectComponent.setCustomId(prop.customId);
                if (prop?.disabled) selectComponent.setDisabled(prop.disabled);
                if (prop?.maxValues) selectComponent.setMaxValues(prop.maxValues);
                if (prop?.minValues) selectComponent.setMinValues(prop.minValues);
                if (prop?.placeholder) selectComponent.setPlaceholder(prop.placeholder);

                // add options
                const applyOptions = (comp: MessageElement<MessageSelectOptionData>[] | MessageElement<MessageSelectOptionData>[][]): void => {
                    for (const selectMenuChild of comp) {
                        if (Array.isArray(selectMenuChild)) {
                            return applyOptions(selectMenuChild);
                        }

                        return void selectComponent.addOptions(selectMenuChild.props);
                    }
                }

                applyOptions(child.children || []);

                actionRow.addComponents(selectComponent);
            }
                break;
            default:
                throw new Error(`Invalid child component type "${child.type}"!`);
        }
    }

    return actionRow;
}