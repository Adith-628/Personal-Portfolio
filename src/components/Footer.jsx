import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaDev } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { FloatingDockDemo } from "./Dock";

const Footer = () => {
  return (
    // <footer className=" text-gray-300 p-8">
    //   <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
    //     <div className="mb-8 md:mb-0">
    //       <h2 className="text-xs tracking-widest text-gray-400 font-bold mb-4">
    //         WEBSITES
    //       </h2>
    //       <ul className="text-sm">
    //         <li className="mb-2">
    //           <Link
    //             href="https://adithyant.com"
    //             className="hover:text-white flex items-center"
    //           >
    //             adithyant.com
    //             <svg
    //               className="w-4 h-4 ml-1"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    //               />
    //             </svg>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             href="https://articles.muhammadfiaz.com"
    //             className="hover:text-white flex items-center"
    //           >
    //             articles.muhammadfiaz.com
    //             <svg
    //               className="w-4 h-4 ml-1"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    //               />
    //             </svg>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="mb-8 md:mb-0">
    //       <h2 className="text-lg font-semibold mb-4">LINKS</h2>
    //       <ul>
    //         {["Home", "Documentation", "Articles", "Projects", "Contact"].map(
    //           (item) => (
    //             <li key={item} className="mb-2">
    //               <Link
    //                 href={`/${item.toLowerCase()}`}
    //                 className="hover:text-white flex items-center"
    //               >
    //                 {item}
    //                 <svg
    //                   className="w-4 h-4 ml-1"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   viewBox="0 0 24 24"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     strokeWidth={2}
    //                     d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    //                   />
    //                 </svg>
    //               </Link>
    //             </li>
    //           )
    //         )}
    //       </ul>
    //     </div>

    //     <div>
    //       <h2 className="text-lg font-semibold mb-4">SOCIAL</h2>
    //       <div className="flex space-x-4">
    //         <Link href="#" className="hover:text-white">
    //           <SiMedium size={24} />
    //         </Link>
    //         <Link href="#" className="hover:text-white">
    //           <FaDev size={24} />
    //         </Link>
    //         <Link href="#" className="hover:text-white">
    //           <FaLinkedin size={24} />
    //         </Link>
    //         <Link href="#" className="hover:text-white">
    //           <FiGithub size={24} />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <div className="my-24">
      <FloatingDockDemo />
    </div>
  );
};

export default Footer;
