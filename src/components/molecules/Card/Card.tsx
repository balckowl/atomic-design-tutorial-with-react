import Button from "../../atoms/Button/Button"
import Text from "../../atoms/Text/Text"

const Card = ({ title, btnTxt }: { title: string, btnTxt: string }) => {
    return (
        <div className="flex justify-center border-[1px] border-[#eee] w-[200px] py-3">
            <div className="flex gap-3 items-center">
                <Text label={title} />
                <Button label={btnTxt} />
            </div>
        </div>
    )
}

export default Card