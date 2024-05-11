import { useState } from "react"
import { createNewPost } from "@/manager/post.manager"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// import {
//     CornerDownLeft,
//     Paperclip,
//   } from "lucide-react"

//   import {
//     Tooltip,
//     TooltipContent,
//     TooltipTrigger,
//   } from "@/components/ui/tooltip"
  
function CreatePost() {
  const [post, setPost] = useState('');

  const handlePost = async () => {
    try {
        const response = await createNewPost(post);
        console.log('post', post);
        console.log('token', localStorage.getItem('token'));
        console.log(response);
    } catch (error) {
      console.error('Failed to post', error);
    }
  };
  
  return (
    <div
        className="w-full h-44 relative overflow-hidden rounded-lg border bg-background focus-within:ring-black focus-within:ring-1 focus-within:ring-ring" 
    >
      <Label htmlFor="post" className="sr-only">
        Post
      </Label>
      <Textarea
        id="post"
        placeholder="Publier quelque chose..."
        className="min-h-32 resize-none p-3 shadow-none border-none focus:border-none focus:ring-0 ring-0"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <div className="flex items-center p-3 pt-0">
        {/* <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Attach File</TooltipContent>
        </Tooltip> */}
        <Button type="submit" size="sm" className="ml-auto gap-1.5 bg-black" onClick={handlePost}>
          Publier
        </Button>
      </div>
    </div>
 )
}

export default CreatePost