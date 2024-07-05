const ChildComp = ({ isEnable }) => {
    return (
        <>
            <h4>Child Components</h4>
            <input type="text" placeholder="TextFiled" disabled={isEnable ? true : false} />
        </>
    )
}

export default ChildComp;