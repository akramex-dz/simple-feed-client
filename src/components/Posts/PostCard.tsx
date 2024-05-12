import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card"

interface PostCardProps {
    userName: string;
    postTime: string;
    content: string;
  }

function PostCard({ userName, postTime, content }: PostCardProps) {
  
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-start" >
        <CardTitle className="text-lg">{ userName }</CardTitle>
        <CardDescription>
          {postTime}
        </CardDescription>
      </CardHeader>
      <CardContent>
            {content}
      </CardContent>
    </Card>
 )
}

export default PostCard