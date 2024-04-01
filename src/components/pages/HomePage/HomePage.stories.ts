import type { Meta, StoryObj } from "@storybook/react"
import HomePage from "./HomePage"

const meta = {
    title: "pages/HomePage",
    component: HomePage
}satisfies Meta<typeof HomePage>

export default meta

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
    args: {
        ...data
    }
}