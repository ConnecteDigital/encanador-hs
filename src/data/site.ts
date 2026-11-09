// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5511965029877';

export const site = {
  name: 'Encanador HS',
  url: 'https://encanadorhs.com.br',
  city: 'São Paulo',
  state: 'SP',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (11) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  // botão de ligar: 0 + DDD + número (ex.: tel:011965029877)
  tel: `tel:0${PHONE_DIGITS.slice(2)}`,
  arrivalMinutes: 20,
  description:
    'Encanador 24 horas em São Paulo. Conserto de vazamentos, canos PVC, PPR, cobre e CPVC, desentupimento, registros, caixa d’água e mais. Chegamos em até 20 minutos, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site do Encanador HS e preciso de um encanador.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Contêiner do Google Tag Manager: único rastreamento do site (tag do Google e conversões ficam nele)
// Contêiner do Google Tag Manager do Encanador HS (conversões ficam nele)
export const gtmId = 'GTM-NL6KXZBM';
