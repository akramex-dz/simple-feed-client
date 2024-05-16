import { useState } from "react"
import { fetchAllPosts } from "@/clients/post.client"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SideBar } from "../SideBar/SideBar"
import { TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption, TableFooter } from "../ui/table" 
import { Button } from "../ui/button"
import { searchUsers } from "@/manager/user.manager"
import { ScrollArea } from "../ui/scroll-area"

export function UserSearch() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    try {
      if (username == '') {
        setUsers([]);
        return;
      }
      const response = await searchUsers( username );
      setUsers(response);
    } catch (error) {
      console.error('Failed to search', error);
    }
  };
  
  return (
    <div className="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar/>
      </div>
      <div className="flex flex-col h-full">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher utilisateurs..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                    handleSearch()
                }}
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
                    {users.map(user => (
                            <div className="flex justify-between px-5 py-5 border-b ">
                                <p className="font-semibold ">{user.username}</p>
                                <Button size="sm" className="w-fit px-8">Suivre</Button>
                            </div>
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