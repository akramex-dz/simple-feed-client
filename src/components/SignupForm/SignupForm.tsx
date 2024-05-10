// import Link from "next/link"

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
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input id="username" placeholder="Akramex-dz" required />
            </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m_bennacer@estin.dz"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            S'inscrire
          </Button>
          {/* <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Vous avez deja un compte ?{" "}
          {/* <Link href="#" className="underline">
            Sign in
          </Link> */}
        </div>
      </CardContent>
    </Card>
  )
}
