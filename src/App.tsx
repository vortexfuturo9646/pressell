import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

function App() {
  const whatsappLink = "https://vortexfuturo.com.br/WhatsApp";

  return (
    <div className="min-h-screen font-sans antialiased" style={{
      backgroundImage: 'url(/bg2.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {/* Headline de Impacto */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
            ⚠️ Algo no teu Destino Amoroso foi interrompido…
          </h1>
          
          {/* Subheadline */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 border border-white/10">
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-medium">
            Nem todo afastamento é por acaso. Relações que não fluem, promessas quebradas, pessoas que somem da tua vida… tudo isso aponta para uma <span className="text-yellow-400 font-bold">ruptura espiritual</span> que está agindo contra você e precisa ser revelada.
            </p>
          </div>
          
          {/* CTA Principal */}
          <div className="flex justify-center mb-12">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs md:text-base px-4 md:px-8 py-4 md:py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-500 animate-pulse"
            >
              👉 Receber Minha Revelação Amorosa Agora no WhatsApp
            </a>
          </div>
        </div>

        {/* Seção de Dor */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 drop-shadow-lg">
            Você reconhece esses padrões?
          </h2>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                💔 A pessoa se afasta de repente, sem explicação
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                💔 Sempre atrai quem não está pronto para um relacionamento sério
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                💔 A mesma história de dor e decepção parece se repetir
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                💔 Sensação de andar em círculos sem nunca ter paz no amor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Autoridade + Curiosidade */}
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed font-medium">
            🔮 Depois de milhares de análises espirituais, ficou claro que esses padrões não são coincidência.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
            Eles estão ligados a um <span className="text-yellow-400 font-bold">bloqueio invisível</span>, que prende tua vida amorosa e só pode ser cortado quando a raiz é revelada.
            </p>
          </div>
        </div>

        {/* Prova Social */}
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed font-medium">
            🌟 Mais de 70.000 pessoas já passaram por esse processo e descobriram o motivo real que travava suas relações.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
            Muitas relatam transformações rápidas assim que o bloqueio foi revelado e cortado.
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium drop-shadow-lg">
            ⏳ Cada dia que passa essa energia se fortalece. Não deixe mais um dia com esses bloqueios ativos, impedindo tua felicidade e te prendendo em ciclos de dor.
          </p>
          
          <div className="flex justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs md:text-base px-4 md:px-8 py-4 md:py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-500 animate-pulse"
            >
              👉 Receber Minha Revelação Amorosa Agora no WhatsApp
            </a>
          </div>
        </div>

        {/* Footer Legal */}
        <div className="text-center mt-24 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-sm">
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
              Contato
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
              Afiliados
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
          
          <div className="text-white/60 text-sm mb-4 text-center">
            © 2025 Vortex Future. Todos os direitos reservados.
          </div>
          
          <div className="text-white/50 text-xs leading-relaxed text-center">
            <p className="mb-3">
              Todo o conteúdo deste site incluindo textos, imagens, logotipos, gráficos, elementos visuais e funcionalidades é 
              protegido por leis de direitos autorais aplicáveis.
            </p>
            <p>
              A reprodução, distribuição ou qualquer uso não autorizado deste material é expressamente proibida e pode resultar 
              em medidas legais conforme a legislação vigente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;