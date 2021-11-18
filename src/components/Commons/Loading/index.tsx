import "./index.css"

const Loading = ({title} : { title: string }) => {
    return <div className="loading">
        <h2>{title}</h2>
    </div>
}

export default Loading