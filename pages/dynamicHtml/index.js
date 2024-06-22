import { useState } from "react";
import DynamicContent from "../../components/DynamicContent";

const Index = () => {
    const [htmlContent, setHtmlContent] = useState('<p>This is dynamix html content</p>')

    const handleChange = (e) => {
        setHtmlContent(e.target.value);
    }

    return (
        <main>
            <div>
                <h1>Display Dynamic HTML</h1>
                <textarea
                    value={htmlContent}
                    onChange={handleChange}
                    rows='10'
                    cols='100'
                />
                <DynamicContent htmlContent={htmlContent} />
            </div>
        </main>
    )
}

export default Index;