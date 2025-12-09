'use client'

import { useState } from "react";
import { deletePost, updatePost } from "./Actions";
type PostProps = {
    id: number;
    title: string;
    content: string | null;
};

export default function PostCard({ post }: { post: PostProps }) {
    const [isEditing, setIsEditing] = useState(false);
    if (isEditing) {
        return (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                <form action={async (formData) => {
                    await updatePost(post.id, formData);
                    setIsEditing(false);
                }}>
                    <input
                        name="title"
                        defaultValue={post.title}
                        className="w-full mb-2 p-2 border rounded font-bold text-lg"
                        placeholder="Заголовок" />
                    <textarea
                        name="content"
                        defaultValue={post.content || ""}
                        className="w-full mb-3 p-2 border rounded h-24"
                        placeholder="Содержимое поста" />
                    <div className="flex gap-2">
                        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Сохранить</button>
                        <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-3 py-1 rounded text-sm">Отмена</button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="bg-white border p-4 rounded-lg mb-4 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-xl text-gray-800">{post.title}</h3>
                    <p className="text-gray-600 mt-2 whitespace-pre-wrap">{post.content}</p>
                </div>
                <div className="flex gap-2 ml-4">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Edit
                    </button>
                    <button
                        onClick={() => deletePost(post.id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}