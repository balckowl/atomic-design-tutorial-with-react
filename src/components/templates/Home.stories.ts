import type { Meta, StoryObj } from "@storybook/react"
import Home from "./Home"

const meta = {
    title: "templates/Home",
    component: Home,
}satisfies Meta<typeof Home>

export default meta

type Story = StoryObj<typeof meta>

const data = {
    cards: [
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