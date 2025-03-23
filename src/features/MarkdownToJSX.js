import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'

const MarkdownToJSX = ({ file_name }) => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        import(`../assets/markdown/${file_name}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setDescription(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="container">
            <Markdown>
                {description}
            </Markdown>
        </div>
    );
}

export default MarkdownToJSX