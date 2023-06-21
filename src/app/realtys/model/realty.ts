export interface Realty {
  id: Number;
  tipo: string;
  valor: Number;
  dataAnuncio: string;
  rua: string;
  numero: Number;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  condominio: Number;
  complemento: string;
}

export let realtyList: Realty[] = [
  {
    id: 1,
    tipo: 'Apartamento',
    bairro: 'Centro',
    valor: 1300.0,
    dataAnuncio: '20/06/2023',
    numero: 240,
    rua: 'Avenida Afonso Pena',
    cidade: 'Belo Horizonte',
    uf: 'MG',
    cep: '12345-123',
    condominio: 230,
    complemento: '',
  },
  {
    id: 2,
    tipo: 'Casa',
    bairro: 'Belvedere',
    valor: 2000.0,
    dataAnuncio: '31/08/2019',
    numero: 820,
    rua: 'Avenida Brasil',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '56789-987',
    condominio: 730,
    complemento: 'apto 1003',
  },
];
