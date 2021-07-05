import {
    MessageActionRow as DiscordMessageActionRow,
    MessageButton as DiscordMessageButton,
    MessageButtonOptions,
    MessageSelectMenu as DiscordMessageSelectMenu,
    MessageSelectMenuOptions,
    MessageSelectOptionData
} from "discord.js";
import { MessageElement } from "../typings/types";

export default function handleData(component: MessageElement) {
    const actionRow = new DiscordMessageActionRow();

    component.children?.forEach((child: MessageElement<MessageButtonOptions | MessageSelectMenuOptions>) => {
        switch (child.type) {
            case "MessageButton": {
                const buttonComponent = new DiscordMessageButton();
                const prop = child.props as MessageButtonOptions;

                if (prop.customId) buttonComponent.setCustomId(prop.customId);
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

                if (prop.customId) selectComponent.setCustomId(prop.customId);
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

    return actionRow;
}