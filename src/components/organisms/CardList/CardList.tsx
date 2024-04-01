import Card from "../../molecules/Card/Card"

const CardList = ({ items }: { items: { title: string, btnTxt: string }[] }) => {
    return (
        <div className="flex flex-col gap-3">
            {
                items.map((item, index) => (
                    <Card title={item.title} key={index} btnTxt={item.btnTxt} />
                ))
            }
        </div>
    )
}

export default CardList