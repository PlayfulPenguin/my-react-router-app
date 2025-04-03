import type { Route } from "./+types/home";
import { gb } from "../Guestbook/guestbook";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "you suck" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return < gb />;
}
