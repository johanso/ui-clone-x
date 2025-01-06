import Link from "next/link";
import { FOOTER_LINKS } from "@/constants/footerLinks";

const Footer = () => (
 <div className="text-textGray text-xs flex gap-x-4 gap-y-1 flex-wrap">
   {FOOTER_LINKS.map((link) => (
     <Link key={link.href} href={link.href} className="hover:underline">
       {link.name}
     </Link>
   ))}
   <span>© 2025 X Corp.</span>
 </div>
);

export default Footer;