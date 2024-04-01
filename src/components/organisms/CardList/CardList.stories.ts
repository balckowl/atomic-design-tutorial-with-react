import type { Meta, StoryObj } from "@storybook/react"
import CardList from "./CardList"

const meta = {
    title: "organisms/CardList",
    component: CardList,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]

} satisfies Meta<typeof CardList>

export default meta;

type Story = StoryObj<typeof meta>

const data = {
    items: [
        {
            title: 'Like',
            btnTxt: 'Subscribe'
        },
        {
            title: 'Share',
            btnTxt: 'Subscribe'
        }
    ]
}

export const Primary:Story = {
    args:{
        ...data
    }
}