"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="mx-auto py-32 px-4">
          <div className="mx-auto">
            {/* TEMPORARY */}
            <div className="container mx-auto max-w-6xl mb-8">
              <div className="flex justify-center mb-8">
                <Button
                  className={`rounded-lg px-6 py-3 text-sm font-medium 
                    transition-colors hover:cursor-pointer ${"bg-amber-500 hover:bg-amber-600"}`}
                >
                  Experimental Sign-Up Page
                </Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-2xl">
                <Image
                  src="/hero-images/Stay_In_Touch_Template.png"
                  alt="Mock Template for Signing Up"
                  width={1200}
                  height={800}
                />
              </div>
            </div>

            <div className="flex justify-center p-16">
              <Card className="overflow-visible">
                <CardHeader>
                  <CardTitle>Sign Up</CardTitle>
                  <CardDescription>
                    Create an account to start tracking your job applications
                  </CardDescription>
                </CardHeader>
                <form>
                  <CardContent>
                    <div>
                      <label htmlFor="name">Name</label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="John@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit">Sign Up</Button>
                    <p>
                      Already have an account?{" "}
                      <Link href="/sign-in">Sign In</Link>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
