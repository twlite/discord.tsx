import { EmbedFieldData, MessageEmbed, MessageEmbedAuthor, MessageEmbedFooter, MessageEmbedImage, MessageEmbedThumbnail } from "discord.js";
import { MessageElement, EmbedProps } from "../typings/types";

export default function handleData(component: MessageElement) {
    const props = component.props as EmbedProps ?? {};
    const embed = new MessageEmbed();

    if ("color" in props) embed.setColor(props.color!);
    if ("timestamp" in props) embed.setTimestamp(props.timestamp);
    if (props.description) embed.setDescription(props.description);
    if (props.title) embed.setTitle(props.title);
    if (props.url) embed.setURL(props.url);

    component.children?.forEach((child: MessageElement) => {
        switch (child.type) {
            case "MessageEmbedFields": {
                const fields = child.children as MessageElement<EmbedFieldData>[] | MessageElement<EmbedFieldData>[][];
                const applyFields = (fieldSet: MessageElement<EmbedFieldData>[] | MessageElement<EmbedFieldData>[][]): void => {
                    for (const field of fieldSet) {
                        if (Array.isArray(field)) return applyFields(field);
                        if (field.type === "MessageEmbedField") void embed.addField(field.props.name, field.props.value, field.props.inline);
                    }
                }

                applyFields(fields);
            }
            break;
            case "MessageEmbedAuthor": {
                const data = child.props as MessageEmbedAuthor;
                embed.setAuthor({
                    name: data.name,
                    iconURL: data.iconURL,
                    url: data.url
                })
            }
            break;
            case "MessageEmbedFooter": {
                const data = child.props as MessageEmbedFooter;
                embed.setFooter({
                    text: data.text,
                    iconURL: data.iconURL
                });
            }
            break;
            case "MessageEmbedImage": {
                const data = child.props as MessageEmbedImage;
                embed.setImage(data.url);
            }
            break;
            case "MessageEmbedThumbnail": {
                const data = child.props as MessageEmbedThumbnail;
                embed.setThumbnail(data.url);
            }
            break;
            default:
                throw new TypeError(`Unsupported child type "${child.type}"!`);
        }
    });

    return embed;
}