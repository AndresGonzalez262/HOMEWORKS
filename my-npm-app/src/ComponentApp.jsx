import './App.css'

const categories = ['First category', 'Second category']

const ComponentApp = () => {

    return (
        <>
            <h1>GiftExpert</h1>
            <ol>
                {
                    categories.map(
                        (category, key) =>
                        {
                            return <li key={key}>{category}</li>
                        }
                    )
                }
            </ol>
        </>
    )
}

export default ComponentApp