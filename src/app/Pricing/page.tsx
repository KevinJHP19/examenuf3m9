export default function Pricing(){
    return(
        <section className="flex flex-col items-center justify-center p-24 bg-black-900 w-[1280px] mx-auto">
            <div className="solution">
                <h1 className="text-[48px] font-bold">Quick solution, less stress</h1>
                <div className="soluciones">
                    <div className="solucion">
                        <h2>Free</h2>
                        <p>For small teams and startups</p>
                        <ul>
                            <li>Up to 5 users</li>
                            <li>Basic features</li>
                            <li>Email support</li>
                        </ul>
                    </div>
                    <div className="solucion">
                        <h2>Pro</h2>
                        <p>For growing teams</p>
                        <ul>
                            <li>Up to 50 users</li>
                            <li>Advanced features</li>
                            <li>Priority support</li>
                        </ul>
                    </div>
                    <div className="solucion">
                        <h2>Enterprise</h2>
                        <p>For large organizations</p>
                        <ul>
                            <li>Unlimited users</li>
                            <li>All features included</li>
                            <li>Dedicated support team</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}