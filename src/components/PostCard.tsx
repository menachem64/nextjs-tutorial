import Link from "next/link";
import Image from "next/image";
import Post from "../types/Post";




export default function PostCard(props: Post){
    const { id: postId, title, body} = props;
    const titleForImage = title.replace(' ', '').slice(0,4).toUpperCase();
    return (
        <li className="rounded-lg shadow-lg bg-neutral-700">
          <Link href={`/posts/${postId}`}>
           <Image className="rounded-t-lg" src={`https://fakeimg.pl/600x400?text=${titleForImage}`} width="600" height="400" alt={title}/>
              <div className="p-4">
                <h4 className="text-xl text-neutral-50 font-medium">{title}</h4>
                 <p className="text-neutral-300">{body}</p> 
              </div>
           </Link>
       </li>
    )   
}