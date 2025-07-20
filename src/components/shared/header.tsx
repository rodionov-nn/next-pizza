import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { User, ShoppingCart, ArrowRight } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-500 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <User />
            Войти
          </Button>
          <div>
            <Button
              variant="outline"
              className="group relative font-bold overflow-clip"
            >
              <p>520 ₽</p>
              <span className="h-full w-[1px] bg-primary group-hover:bg-primary-foreground transition ease-in-out duration-300" />
              <div className="overflow-clip flex items-center">
                <div className="flex items-center gap-2 translate-x-0 group-hover:translate-x-10 group-hover:opacity-0 group-hover:scale-50 transition ease-in-out duration-300">
                  <ShoppingCart />
                  <p>3</p>
                </div>
                <ArrowRight className="absolute right-5 -translate-x-5 scale-50 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transition ease-in-out duration-300" />
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
