import PostFrom from "@/components/PostForm"

export const dynamic = 'force-static';

export default function NewPostPage(){
    return (
      <>
         <header>
              <h1>NewPost Page</h1>
         </header>
         <br/>
         <PostFrom />
      </>
    )
   }