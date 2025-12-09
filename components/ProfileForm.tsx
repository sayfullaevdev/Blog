'use client'

import { useState } from "react";
import { updateProfile } from "./Actions";

export default function ProfileForm({ user }: { user: any }) {
    const [isEditing, setIsEditing] = useState(false);

    if (!isEditing) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <h2 className="text-xl font-bold mb-2">Мои данные</h2>
                <div className="mb-4">
                    <p className="text-gray-500 text-sm">Имя</p>
                    <p className="text-lg font-medium">{user.name}</p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-lg font-medium">{user.email}</p>
                </div>
                <button
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Изменить профиль
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h2 className="text-xl font-bold mb-4">Редактирование</h2>
            <form action={async (formData) => {
                await updateProfile(formData);
                setIsEditing(false);}}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input
                        name="name"
                        defaultValue={user.name || ""}
                        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
                        placeholder="Ваше имя"/>
                </div>
                <div className="flex gap-2">
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Сохранить
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
                        Отмена
                    </button>
                </div>
            </form>
        </div>
    );
}