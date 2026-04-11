import { useEffect, useRef, useState } from 'react'
import './createArticle.scss'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Image from '@editorjs/image';
import { useArticle } from '../hooks/useArticle.js';

const CreateArticle = () => {

    const { articles, handleUploadImage, handleCreateArticle } = useArticle();

    const fileInputRef = useRef();
    const [fileNmae, setFileNmae] = useState("No file chosen");

    const handleClick = () => {
        fileInputRef.current.click();
    }

    const handleChange = (e) => {
        if (e.target.files.length > 0) {
            setFileNmae(e.target.files[0].name)
        }
        else {
            setFileNmae("No file chosen")
        }
    }

    const uploadByFile = async (file) => {
        const url = await handleUploadImage(file);
        console.log("URL:", url);

        return {
            success: 1,
            file: {
                url: url
            }
        }
    }

    const editorRef = useRef();

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                editorRef.current = editor
            },
            autofocus: true,
            data: {},
            onChange: async () => {
                let content = await editor.saver.save();
                // console.log(content);
            },
            tools: {
                header: Header,
                list: List,
                image: {
                    class: Image,
                    config: {
                        uploader: {
                            uploadByFile: uploadByFile
                        }
                    }
                }
            }
        });
    }

    useEffect(() => {
        if (!editorRef.current) {
            initEditor()
        }

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
        }
    }, [])

    const [title, settitle] = useState("");
    const [tag, setTag] = useState("");



    const handleSubmitArticle = async (e) => {
        e.preventDefault();

        const { blocks } = await editorRef.current.save();
        // console.log(blocks);

        const content = blocks.map((block) => {
            if (block.type === "paragraph" || block.type === "header") {
                return {
                    type: block.type,
                    text: block.data.text
                };
            }

            if (block.type === "list") {
                return {
                    type: "list",
                    items: block.data.items,
                    style: block.data.style
                };
            }

            if (block.type === "image") {
                return {
                    type: "image",
                    url: block.data.file.url
                };
            }

            return null;
        }).filter(Boolean);

        if (!content || content.length === 0) {
            alert("Please write something in article");
            return;
        }

        const coverImage = fileInputRef.current.files[0];
        console.log("Article: ", title, tag, coverImage, content);

        await handleCreateArticle(title, tag, coverImage, content);
        console.log(articles);
    }

    return (
        <div className='createArticlePage'>
            <h1>Create Here</h1>
            <form onSubmit={handleSubmitArticle}>
                <div className="left">
                    <input type="text" onChange={(e) => { settitle(e.target.value) }} value={title} placeholder='Title' />
                    <input type="text" onChange={(e) => { setTag(e.target.value) }} value={tag} placeholder='Add Tag' />
                    <div className='FileInput'>
                        <button type="button" onClick={handleClick}>Choose Cover Image</button>
                        <input type="file" ref={fileInputRef} onChange={handleChange} accept="image/*" style={{ display: "none" }} />
                        <p>{fileNmae}</p>
                    </div>
                    <button type="submit">Create Article</button>
                </div>
                <div className="right">
                    <h4>Content</h4>
                    <div id="editorjs"></div>
                </div>
            </form>

        </div>
    )
}

export default CreateArticle