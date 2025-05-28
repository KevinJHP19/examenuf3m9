import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between p-4 text-white ms-[32px] me-[32px]">
            <div className="flex items-center">
                <img src="Logo.svg" alt="Logo" />
                <h1 className="text-xl font-bold mb-2 md:mb-0 ms-2">Pandem</h1>
                <NavigationMenu className="ms-10 font-normal">
                    <NavigationMenuList className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/" className="hover:underline">Docs</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/docs" className="hover:underline">Princing</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/pricing" className="hover:underline">Status</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/status" className="hover:underline">FAQs</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/faqs" className="hover:underline">Contact Us</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-4 font-normal">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/login" className="hover:underline">Login</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button asChild className="bg-white text-black px-4 py-2 rounded">
                            <a href="/signup">Sign Up</a>
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}