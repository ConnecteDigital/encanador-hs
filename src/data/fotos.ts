import type { ImageMetadata } from 'astro';

// Fotos ilustrativas dos serviços (geradas por IA), uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  desentupimento: 'Encanador usando máquina de desentupimento no ralo do banheiro',
  'conserto-de-tubulacao-pvc': 'Encanador consertando tubulação PVC na parede aberta da cozinha',
  'furo-em-cano-pvc': 'Cano PVC furado na parede sendo consertado com conexões novas',
  'furo-em-cano-de-cobre': 'Conserto de cano de cobre com luvas de latão dentro da parede',
  'conserto-de-cano-ppr': 'Encanador soldando cano PPR com termofusora',
  'conserto-de-tubulacao-cpvc': 'Conserto de tubulação CPVC de água quente na parede',
  'conserto-de-prumada-pvc': 'Encanador trocando trecho da prumada de PVC no shaft do prédio',
  'conserto-de-tubulacao-de-esgoto': 'Conserto de tubulação de esgoto PVC enterrada no quintal',
  'troca-de-registro-geral': 'Registro geral novo sendo instalado na tubulação de água',
  'troca-de-registro-de-chuveiro': 'Troca de registro de chuveiro na parede do banheiro',
  'conserto-de-caixa-acoplada': 'Mecanismo novo sendo instalado dentro da caixa acoplada',
  'valvula-hydra': 'Encanador fazendo manutenção na válvula de descarga do banheiro',
  'sifao-de-pia': 'Sifão novo sendo instalado embaixo da pia da cozinha',
  'troca-de-reparo-de-torneira': 'Troca de reparo de torneira de lavatório',
  'instalacao-de-caixa-dagua': 'Encanador instalando caixa d’água na laje de uma casa em São Paulo',
  'instalacao-de-bomba-pressurizadora': 'Instalação de bomba pressurizadora ao lado da caixa d’água',
  'instalacao-de-filtro': 'Instalação de filtro de água na entrada da tubulação',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pelo Encanador HS' };
}
