import {useState} from "react";
import { Link } from "react-router-dom";
import { loginUser } from "@/manager/auth.manager";

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

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginUser(username, password);
      localStorage.setItem('token', response.accessToken);
    } catch (error) {
      console.error('Failed to login', error);
    }
  };


  return (
    <Card className="mx-auto max-w-sm bg*">
      <CardHeader>
        <CardTitle className="text-2xl">Connexion</CardTitle>
        <CardDescription>
          Entrez votre mail pour accéder à votre compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Nom d'utilisateur</Label>
            <Input
              id="username"
              type="username"
              placeholder="ex: Akramex-dz"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Mot de Passe</Label>
              {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>
            <Input 
              id="password" 
              type="password"
              placeholder="********"
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" onClick={handleLogin} className="w-full">
            Se connecter
          </Button>
          <Button variant="outline" className="w-full">
            Se connecter avec Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous n&apos;avez pas un compte?{" "}
          <Link to="/inscription" className="underline">
            S'inscrire
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
