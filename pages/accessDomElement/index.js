import React, { useEffect, useRef } from 'react'
import ChildComp from '../../components/accessDomElement/ChildComp';

const Index = () => {
    let myElement = null;
    const ref = useRef(null);
    const childRef = useRef(null);

    useEffect(() => {
        console.log("ref:", ref.current);
        console.log("ref using callback:", myElement);
        console.log("Child ref: ", childRef);
    }, []);

    return (
        <div >
            <div ref={ref}>
                <h3>How do you access the dom element in react</h3>
            </div>

            {/* using callback ref */}
            <p ref={(ele) => { myElement = ele }}>Hello World!</p>

            {/* forwordRef() */}
            <ChildComp ref={childRef} />
        </div>
    )
}

export default Index