/** @jsx DiscordComponents.createComponent */
/** @jsxFrag DiscordComponents.Fragment */

import {
    DiscordComponents,
    MessageActionRow,
    MessageSelectMenu,
    MessageSelectOption,
    MessageButton,
    MessageEmbed,
    MessageEmbedAuthor,
    MessageEmbedFields,
    MessageEmbedField,
    MessageEmbedFooter,
    MessageEmbedImage,
    MessageEmbedThumbnail,
} from "../out/index";

const components = (
    <>
        <MessageActionRow>
            {Array.from({ length: 5 }, (_, i) => (
                <MessageButton style="PRIMARY" label={`Button ${++i}`} customId={`btn_${i}`} />
            ))}
        </MessageActionRow>
        <MessageActionRow>
            <MessageSelectMenu customId="123">
                {Array.from({ length: 5 }, (_, i) => (
                    <MessageSelectOption description={`Option number ${++i}`} label={`Option ${i}`} value={i.toString()} />
                ))}
            </MessageSelectMenu>
        </MessageActionRow>
        <MessageEmbed color="BLURPLE" title="Counter">
            <MessageEmbedFields>
                {Array.from({ length: 10 }, (_, i) => {
                    const counter = ++i;
                    return <MessageEmbedField name={`Count ${counter}`} value={`Counting ${counter}`} />
                })}
            </MessageEmbedFields>
        </MessageEmbed>
    </>
);

console.log("BABEL", components);