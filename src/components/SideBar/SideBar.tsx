import { Link } from "react-router-dom"

import {
  Bell,
  Home,
  Package2,
  Search,
  User
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"



export function SideBar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    navigate('/connexion');
  }

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to={"/"} className="flex items-center gap-2 text-lg font-semibold">
              <Package2 className="h-8 w-8" />
              <span className="">Simple Feed</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
        </div>
        <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to={"/"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                {/* highlight style attr add bg-muted, remove text-primary*/}
                <Home className="h-4 w-4" />
                Acceuil
              </Link>
              <Link
                to={"/"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Search className="h-4 w-4" />
                Recherche
                {/* <Search className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </> */}
              </Link>
              <Link
                to={"/"}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <User className="h-4 w-4" />
                Profil
              </Link>
            </nav>
        </div>
        <div className="mt-auto p-4">
            <Button size="sm" className="w-full" onClick={logout}>
              Se déconnecter 
            </Button>
        </div>
    </div>
  )
}


