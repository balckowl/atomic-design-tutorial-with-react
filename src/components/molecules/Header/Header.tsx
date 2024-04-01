import Button from "../../atoms/Button/Button"
import Logo from "../../atoms/Logo/Logo"
import Text from "../../atoms/Text/Text"

const Header = () => {
    return (
        <div className="border-b-[1px] border-[#eee]">
            <div className="container mx-auto h-[80px]">
                <div className="flex justify-between items-center h-full">
                    <div className="flex items-center gap-3">
                        <Logo />
                        <Text label="hello!" />
                    </div>
                    <div className="flex gap-2">
                        <Button label="Login" />
                        <Button label="Sign in" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header