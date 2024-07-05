import { useState } from "react";
import ChildComp from "../../components/textboxChildComp/ChildComp";

const Index = () => {
    const [isEnable, setIsEnable] = useState(false);

    const handleClick = () => {
        setIsEnable(!isEnable);
    };

    return (
        <>
            <h1>Enable/disable Textfield</h1>
            <ChildComp isEnable={isEnable} />
            <button onClick={handleClick}>{!isEnable ? "Disable" : "Enable"}</button>
        </>
    )
}

export default Index;