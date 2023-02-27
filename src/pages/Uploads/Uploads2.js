import React, { useState } from "react";
import axios from "axios";

function UploadForm() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [uploadedUniqueEndpoint, setUploadedUniqueEndpoint] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);

        try {
            const response = await axios.post("http://localhost:8080/uploads", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // De response bevat de URL naar de geüploade afbeelding.
            setUploadedUniqueEndpoint(response.data.uniqueEndpoint);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="file" onChange={handleFileChange} />
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            <button type="submit">Upload</button>
            {uploadedUniqueEndpoint && <p>Uploaded photo endpoint: {uploadedUniqueEndpoint}</p>}
        </form>
    );
}

export default UploadForm;
