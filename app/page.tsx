
'use client';

import React, { useState } from 'react';

interface ContentPackage {
  gravarAgora: string[];
  testar: string[];
  reaproveitar: string[];
  venderSemParecerVenda: string[];
  proximaAcao: string;
}

export default function Home() {
  const [rawInput, setRawInput] = useState('');
  const [response, setResponse] = useState<ContentPackage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch('/api/process-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rawInput }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Erro desconhecido ao processar conteúdo.');
      }

      const data: ContentPackage = await res.json();
      setResponse(data);
    } catch (err: any) {
      console.error('Erro ao processar conteúdo:', err);
      setError(err.message || 'Erro ao processar sua ideia. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (response) {
      const textToCopy = `
Pacote Gravar Agora:\n${response.gravarAgora.map(item => `- ${item}`).join('\n')}\n\n
Pacote Testar:\n${response.testar.map(item => `- ${item}`).join('\n')}\n\n
Pacote Reaproveitar:\n${response.reaproveitar.map(item => `- ${item}`).join('\n')}\n\n
Pacote Vender Sem Parecer Venda:\n${response.venderSemParecerVenda.map(item => `- ${item}`).join('\n')}\n\n
Próxima Ação da Sol: ${response.proximaAcao}
      `;
      navigator.clipboard.writeText(textToCopy);
      alert('Pacote completo copiado para a área de transferência!');
    }
  };

  const handleClear = () => {
    setRawInput('');
    setResponse(null);
    setError(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Sol.IA &nbsp;
          <code className="font-bold">Laboratório de Realidade</code>
        </p>
      </div>

      <div className="relative flex place-items-center mt-20">
        <h1 className="text-6xl font-bold tracking-tighter">
          Bisturi com Wi-Fi
        </h1>
      </div>

      <div className="mt-10 w-full max-w-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            className="w-full p-4 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            placeholder="Cole sua ideia ou tema aqui..."
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Processando...' : 'Processar Ideia'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 rounded-md bg-red-900 text-red-300 border border-red-700">
            <p>Erro: {error}</p>
          </div>
        )}

        {response && (
          <div className="mt-8 p-6 rounded-md bg-gray-900 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Pacotes de Conteúdo:</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-green-400">1. Pacote Gravar Agora</h3>
                {response.gravarAgora.length > 0 ? (
                  <ul className="list-disc list-inside ml-4">
                    {response.gravarAgora.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">Nenhuma ação imediata sugerida.</p>
                )}
              </div>
              <div>
                <h3 className="text-xl font-medium text-yellow-400">2. Pacote Testar</h3>
                {response.testar.length > 0 ? (
                  <ul className="list-disc list-inside ml-4">
                    {response.testar.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">Nenhuma ideia para testar sugerida.</p>
                )}
              </div>
              <div>
                <h3 className="text-xl font-medium text-purple-400">3. Pacote Reaproveitar</h3>
                {response.reaproveitar.length > 0 ? (
                  <ul className="list-disc list-inside ml-4">
                    {response.reaproveitar.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">Nenhum conteúdo para reaproveitar sugerido.</p>
                )}
              </div>
              <div>
                <h3 className="text-xl font-medium text-red-400">4. Pacote Vender Sem Parecer Venda</h3>
                {response.venderSemParecerVenda.length > 0 ? (
                  <ul className="list-disc list-inside ml-4">
                    {response.venderSemParecerVenda.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">Nenhuma estratégia de venda sutil sugerida.</p>
                )}
              </div>
              <div>
                <h3 className="text-xl font-medium text-blue-400">5. Próxima Ação da Sol</h3>
                <p className="text-lg font-bold">{response.proximaAcao}</p>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors duration-200"
              >
                Copiar Pacote Completo
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white font-semibold transition-colors duration-200"
              >
                Limpar
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-20">
        {/* Existing content blocks can remain or be removed as desired */}
      </div>
    </main>
  );
}
