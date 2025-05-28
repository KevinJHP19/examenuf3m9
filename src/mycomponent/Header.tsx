
export default function Header() {
    
    return (
        <header className="flex flex-col md:flex-row items-center justify-between p-4  text-white ms-[32px] me-[32px]">
            <div className="flex ">
                <img src="Logo.svg" alt="" />
                <h1 className="text-xl font-bold mb-2 md:mb-0">Pandem</h1>

                <nav className="ms-10 font-normal">
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <li><a href="/" className="hover:underline">Docs</a></li>
                    <li><a href="/docs" className="hover:underline">Princing</a></li>
                    <li><a href="/pricing" className="hover:underline">Status</a></li>
                    <li><a href="/status" className="hover:underline">FAQs</a></li>
                    <li><a href="/faqs" className="hover:underline">Contact Us</a></li>
                </ul>
            </nav>
            </div>
            <nav>
                <ul className="flex space-x-4 font-normal">
                    <li><a href="/login" className="hover:underline">Login</a></li>
                    <li><a href="/signup" className="bg-white text-black px-4 py-2 rounded">Sign Up</a></li>
                </ul>
            </nav>
            
            
        </header>
    )

}