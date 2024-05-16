import { useEffect, useState } from "react"
import { fetchAllPosts } from "@/clients/post.client"

import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SideBar } from "../SideBar/SideBar"
import { ScrollArea  } from "../ui/scroll-area" 
import CreatePost from "../Posts/CreatePost"
import PostCard from "../Posts/PostCard"

export function Layout() {

  // interface Post {
  //   _id: string;
  //   userName: string;
  //   content: string;
  //   postTime: string;
  // }
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts().then((response) => {
      setPosts(response);
      console.log(response);
    });
    console.log(posts);
  }, []);
  
  const handleNewPost = () => {
    // Update the state with the new post
    fetchAllPosts().then((response) => {
      setPosts(response);
      console.log(response);
    });
  };
  
  return (
    <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar/>
      </div>
      <div className="flex flex-col h-full">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to={"/"}
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  to={"/"}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to={"/"}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to={"/"}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet> */}
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </header>
        <main className="w-fill flex flex-1 flex-row">
          <div className="md:w-2/3">
            <ScrollArea className="h-svh">
                <CreatePost onNewPost={handleNewPost} />
                {posts.map(post => (
                  <PostCard 
                    key={post._id} 
                    userName={post.username} 
                    content={post.content} 
                    postTime={post.createdAt.slice(0, 16)}
                  />
                ))}
            </ScrollArea>
          </div>
          <div className="flex flex-col items-center justify-center border-l collapse md:visible md:w-1/3">
              <p className="text-sm text-muted-foreground">
                Made with hate
              </p>
              <p className="text-sm text-muted-foreground">
              🔪 BENNACER Akram Mohamed 🔪
              </p>
              <p className="text-sm text-muted-foreground">
                visit my github{" "}
              </p>
              <a href="https://www.github.com/akramex-dz" className="text-sm font-bold">
                github.com/akramex-dz
              </a>
          </div>
        </main>
      </div>
    </div>
  )
}
