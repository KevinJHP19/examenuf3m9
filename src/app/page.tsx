
import Docs from './Docs/page';
import Pricing from './Pricing/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black-900">
      <Docs />
      <Pricing />
      
    </main>
    
  );
}
