// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// Formato: 55 + DDD + número, só dígitos
// TODO: trocar pelo WhatsApp/telefone do Encanador HS (número provisório)
const PHONE_DIGITS = '5511900000000';

export const site = {
  name: 'Encanador HS',
  url: 'https://encanadorhs.com.br',
  city: 'São Paulo',
  state: 'SP',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (11) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
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
// TODO: colocar o ID do GTM do Encanador HS (ex.: 'GTM-XXXXXXX'). Vazio = sem rastreamento.
export const gtmId = '';
