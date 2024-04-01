import type { Meta, StoryObj } from "@storybook/react"
import Text from "./Text"

const meta = {
    title: "atoms/Text",
    component: Text,
    tags: ["autodocs"],
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Text>

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args:{
        label: "Hello!"
    }
}