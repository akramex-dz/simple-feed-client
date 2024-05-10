import { Link } from "react-router-dom"
import { useState } from "react"
import { registerUser } from "@/manager/auth.manager"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupForm() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await registerUser(email, username, password);
      console.log(email, username, password);
      localStorage.setItem('token', response.accessToken);
      console.log(localStorage.getItem('token'))
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Créer un compte</CardTitle>
        <CardDescription>
          Entrez vos informations pour créer un compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m_bennacer@estin.dz"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input 
              id="username" 
              placeholder="Akramex-dz" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input 
            id="password" 
            type="password" 
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full" onClick={handleSignup}>
            S'inscrire
          </Button>
          {/* <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Vous avez deja un compte ?{" "}
          <Link to="/connexion" className="underline">
            Se connecter
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
