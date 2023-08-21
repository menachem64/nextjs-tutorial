'use client'
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import RestrictedContent from "./RostrictedContent";

export default function AppHeaderUser(){
    const { data: Session } = useSession();

    function handlesignOut(){
        signOut();
    }

    return (
        <div className="ml-auto flex gap-4">
            <RestrictedContent fallback={<Link className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-2 rounded ml-auto" href='/signin'>Sign In</Link>}>
                <span className=" text-white">{Session?.user?.name}</span>
                <button onClick={handlesignOut} className="bg-red-500 hover:bg-red-600 text-white font-medium text-sm py-1 px-2 rounded ml-auto">Sign out</button>
            </RestrictedContent>
        </div>
    )
}