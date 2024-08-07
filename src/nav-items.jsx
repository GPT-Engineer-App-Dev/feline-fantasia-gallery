import { Home, Info, Smile } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Fun from "./pages/Fun.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Fun",
    to: "/fun",
    icon: <Smile className="h-4 w-4" />,
    page: <Fun />,
  },
];
