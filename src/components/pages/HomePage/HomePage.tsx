import Home from "../../templates/Home"

const HomePage = () => {

    const data = [
        {
            title: 'Like',
            btnTxt: 'Subscribe'
        },
        {
            title: 'Share',
            btnTxt: 'Subscribe'
        }
    ]

    return (
        <div>
            <Home cards={data} />
        </div>
    )
}

export default HomePage