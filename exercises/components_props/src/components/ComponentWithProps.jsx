const Prop = props => {
    return (
        <>
            <h1> {props.header} </h1>
            <p> {props.content}</p>
            <p> {props.number} {props.text}</p>
            <p> {props.nonexistant}</p>
        </>
    );
}

const ComponentWithProps = () => {
    return (
        <>
            <div className="Cars">
                <div className="stack">
                    <Prop header="How Many Cars" 
                    content="Expect 5" number="19" text="Exceeds the limit" 
                    nonexistant="?" />
                </div>
            </div>
        </>
    );
}

export default ComponentWithProps; 