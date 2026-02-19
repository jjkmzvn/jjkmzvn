
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Truck, 
  Car, 
  CheckCircle2, 
  MessageSquare, 
  ChevronRight, 
  Menu, 
  X,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-yellow-400 font-oswald text-2xl font-bold tracking-tighter">
              STREFA<span className="text-white">OPON</span>LIGOTA
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#start" className="hover:text-yellow-400 px-3 py-2 transition-colors">Start</a>
              <a href="#serwis" className="hover:text-yellow-400 px-3 py-2 transition-colors">Usługi</a>
              <a href="#o-nas" className="hover:text-yellow-400 px-3 py-2 transition-colors">Dlaczego My?</a>
              <a href="#kontakt" className="bg-yellow-400 text-black px-6 py-2 rounded font-bold hover:bg-yellow-300 transition-all">Zadzwoń Teraz</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-400">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-yellow-400/20 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#start" className="block px-3 py-2 text-base font-medium hover:text-yellow-400">Start</a>
          <a href="#serwis" className="block px-3 py-2 text-base font-medium hover:text-yellow-400">Usługi</a>
          <a href="#o-nas" className="block px-3 py-2 text-base font-medium hover:text-yellow-400">Dlaczego My?</a>
          <a href="#kontakt" className="block px-3 py-2 text-base font-medium text-yellow-400">Kontakt</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="start" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=2000&auto=format&fit=crop" 
        alt="Tire workshop" 
        className="w-full h-full object-cover opacity-40 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <h1 className="text-5xl md:text-8xl font-oswald font-bold text-white mb-6 tracking-tight">
        TWOJA <span className="text-yellow-400">STREFA</span> BEZPIECZEŃSTWA
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
        Profesjonalna wulkanizacja aut osobowych i ciężarowych w Ligocie. 
        Solidność, której możesz zaufać.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:883777943" className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-10 py-5 rounded-sm font-bold text-xl hover:bg-yellow-300 transition-all yellow-glow">
          <Phone size={24} /> 883 777 943
        </a>
        <a href="#serwis" className="flex items-center justify-center gap-3 border-2 border-white text-white px-10 py-5 rounded-sm font-bold text-xl hover:bg-white hover:text-black transition-all">
          Nasza Oferta <ChevronRight size={24} />
        </a>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
      <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-yellow-400 rounded-full"></div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, features }: any) => (
  <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-yellow-400 transition-all duration-300 group">
    <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
      <Icon className="text-yellow-400 group-hover:text-black" size={32} />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 size={16} className="text-yellow-400 shrink-0" /> {f}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => (
  <section id="serwis" className="py-24 bg-black px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-yellow-400 font-bold uppercase tracking-widest mb-4">Co robimy</h2>
        <h3 className="text-4xl md:text-5xl font-oswald font-bold">WULKANIZACJA BEZ KOMPROMISÓW</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard 
          icon={Car}
          title="Samochody Osobowe"
          description="Kompleksowy serwis opon dla Twojego codziennego komfortu. Dbamy o każdy szczegół, od wyważenia po dobór odpowiedniego ogumienia."
          features={["Wymiana opon do 24 cali", "Wyważanie kół", "Naprawa przebić", "Przechowywanie opon"]}
        />
        <ServiceCard 
          icon={Truck}
          title="Samochody Ciężarowe"
          description="Specjalistyczny serwis dla transportu. Wiemy, że w Twoim biznesie liczy się czas i niezawodność na każdym kilometrze."
          features={["Serwis TIR i autobusy", "Pogłębianie bieżnika", "Naprawa opon wielkogabarytowych", "Obsługa flot"]}
        />
      </div>
    </div>
  </section>
);

const Manifesto = () => (
  <section id="o-nas" className="py-24 bg-zinc-950 border-y border-yellow-400/10 px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-yellow-400 font-bold uppercase tracking-widest mb-4">Nasza Filozofia</h2>
        <h3 className="text-4xl md:text-5xl font-oswald font-bold mb-8 leading-tight">
          NIE JESTEŚMY LIDERAAMI... <span className="text-yellow-400">JESZCZE.</span>
        </h3>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Przyznajemy to otwarcie – nie mamy 20-letniego doświadczenia ani dziesiątek oddziałów w całym kraju. 
            Jesteśmy młodym zespołem z Ligoty, który kocha swoją pracę i traktuje każdy samochód z najwyższą uwagą.
          </p>
          <p className="font-semibold text-white">
            Naszym atutem nie jest przeszłość, ale teraźniejszość i pasja, z jaką podchodzimy do każdego zlecenia. 
            Udowadniamy codziennie, że lokalny serwis może dorównać, a często przewyższyć jakością rynkowych gigantów.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-yellow-400">100%</span>
              <span className="text-sm uppercase tracking-wider text-gray-500">Lokalny Biznes</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-yellow-400">0%</span>
              <span className="text-sm uppercase tracking-wider text-gray-500">Półśrodków</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-400 p-8 rounded-2xl flex flex-col justify-between h-64 text-black">
          <ShieldCheck size={48} />
          <div>
            <h4 className="font-bold text-xl mb-2">Bezpieczeństwo</h4>
            <p className="text-sm opacity-80 font-medium">Sprawdzamy każdą oponę dwa razy przed montażem.</p>
          </div>
        </div>
        <div className="bg-zinc-900 p-8 rounded-2xl flex flex-col justify-between h-64 border border-zinc-800">
          <Zap className="text-yellow-400" size={48} />
          <div>
            <h4 className="font-bold text-xl mb-2 text-white">Szybkość</h4>
            <p className="text-sm text-gray-400">Młody zespół to sprawna praca bez zbędnych przestojów.</p>
          </div>
        </div>
        <div className="bg-zinc-900 p-8 rounded-2xl flex flex-col justify-between h-64 border border-zinc-800 col-span-2">
          <Star className="text-yellow-400" size={48} />
          <div>
            <h4 className="font-bold text-xl mb-2 text-white">Jakość</h4>
            <p className="text-sm text-gray-400">Używamy profesjonalnego sprzętu stacjonarnego, który gwarantuje precyzję, jakiej nie dają serwisy mobilne.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TireAssistant = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const askAssistant = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setResponse("");
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Jesteś ekspertem wulkanizacji w firmie Strefa Opon Ligota. 
        Odpowiadasz na pytania klientów dotyczące opon, ciśnienia, zużycia i serwisu. 
        Odpowiadaj krótko, konkretnie i profesjonalnie po polsku. 
        Pytanie klienta: ${query}`,
      });
      setResponse(result.text || "Przepraszam, coś poszło nie tak. Spróbuj zadać pytanie inaczej.");
    } catch (error) {
      setResponse("Obecnie asystent jest niedostępny. Zadzwoń do nas bezpośrednio!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-6 md:p-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-yellow-400 p-3 rounded-full text-black">
          <MessageSquare size={24} />
        </div>
        <div>
          <h4 className="text-xl font-bold">Inteligentny Asystent Opon</h4>
          <p className="text-sm text-gray-400">Masz pytanie o opony? Nasza AI Ci pomoże.</p>
        </div>
      </div>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="np. Kiedy wymienić opony na letnie?"
          className="flex-1 bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
          onKeyDown={(e) => e.key === 'Enter' && askAssistant()}
        />
        <button 
          onClick={askAssistant}
          disabled={isLoading}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Myślę..." : "Zapytaj"}
        </button>
      </div>
      {response && (
        <div className="mt-6 p-4 bg-black/50 border-l-4 border-yellow-400 rounded-r-lg">
          <p className="text-gray-300 leading-relaxed italic">{response}</p>
        </div>
      )}
    </div>
  );
};

const Contact = () => (
  <section id="kontakt" className="py-24 px-4 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-yellow-400 font-bold uppercase tracking-widest mb-4">Kontakt</h2>
          <h3 className="text-4xl md:text-5xl font-oswald font-bold mb-10">ZAPRASZAMY DO LIGOTY</h3>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-yellow-400">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm uppercase mb-1">Zadzwoń do nas</h4>
                <a href="tel:883777943" className="text-2xl font-bold hover:text-yellow-400 transition-colors">883 777 943</a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-yellow-400">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm uppercase mb-1">Lokalizacja</h4>
                <p className="text-2xl font-bold">Miejscowość: Ligota</p>
                <p className="text-gray-400">Tylko serwis stacjonarny</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 text-yellow-400">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm uppercase mb-1">Godziny otwarcia</h4>
                <p className="text-xl font-bold">Pon. - Pt.: 8:00 - 18:00</p>
                <p className="text-xl font-bold">Sobota: 8:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <TireAssistant />
          <div className="h-full min-h-[300px] bg-zinc-900 rounded-2xl overflow-hidden grayscale border border-zinc-800 relative">
            <div className="absolute inset-0 flex items-center justify-center p-10 text-center flex-col">
               <MapPin size={48} className="text-yellow-400 mb-4" />
               <p className="text-lg text-gray-400">Ligota - Dokładną lokalizację podajemy telefonicznie podczas umawiania wizyty.</p>
               <p className="mt-2 font-bold text-yellow-400">Zadzwoń i zarezerwuj termin!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-zinc-950 border-t border-yellow-400/10 px-4 text-center">
    <div className="max-w-7xl mx-auto">
      <div className="text-yellow-400 font-oswald text-2xl font-bold tracking-tighter mb-4">
        STREFA<span className="text-white">OPON</span>LIGOTA
      </div>
      <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
        Lokalna wulkanizacja z pasją. Udowadniamy, że młody zespół to nowa jakość na rynku.
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all">FB</a>
        <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all">IG</a>
      </div>
      <div className="text-gray-600 text-xs border-t border-zinc-900 pt-8">
        © {new Date().getFullYear()} Strefa Opon Ligota. Wszystkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Manifesto />
      <Contact />
      <Footer />
    </div>
  );
}
