import Header from "../molecules/Header/Header"
import CardList from "../organisms/CardList/CardList"

const Home = ({ cards }: { cards: { title: string, btnTxt: string }[] }) => {
    return (
        <div>
            <Header />
            <CardList items={cards} />
        </div>
    )
}

export default Home