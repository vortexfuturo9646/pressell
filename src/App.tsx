import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

function App() {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá,%20quero%20ativar%20minha%20revelação";

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
            ⚠️ Algo na sua Linha do Tempo foi interrompido…
          </h1>
          
          {/* Subheadline */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 border border-white/10">
            <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-medium">
            Nem tudo que acontece com você é coincidência. Relações que não fluem, dinheiro que desaparece, 
            oportunidades que somem… tudo isso aponta para uma <span className="text-yellow-400 font-bold">ruptura energética</span> que 
            precisa ser revelada.
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
              Receber Minha Revelação Agora no WhatsApp
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
                💔 Atrai pessoas erradas repetidamente

                </p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                ⏸️ Planos que estavam quase dando certo simplesmente travam

                </p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                🔄 Sensação de andar em círculos sem sair do lugar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Autoridade + Curiosidade */}
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed font-medium">
            🔮 Depois de milhares de análises, ficou claro que esses padrões nunca são por acaso.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
            Eles estão ligados a um <span className="text-yellow-400 font-bold">bloqueio invisível</span>, que precisa ser identificado e cortado 
            para que sua vida volte a fluir.
            </p>
          </div>
        </div>

        {/* Prova Social */}
        <div className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed font-medium">
            🌟 Mais de 70.000 pessoas já passaram por esse processo e descobriram a raiz do que travava seus caminhos.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
            Muitos relatam transformações rápidas assim que o bloqueio foi revelado.
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-medium drop-shadow-lg">
            ⏳ Não deixe mais um dia passar com esses bloqueios ativos.
          </p>
          
          <div className="flex justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs md:text-base px-4 md:px-8 py-4 md:py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-500 animate-pulse"
            >
              Receber Minha Revelação Agora no WhatsApp
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