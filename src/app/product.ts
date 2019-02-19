export class Product {
  _id: string;
  uuid: string;
  descricao: string;
  preco: string;
  embalagem: string;
  durabilidade: string;
  peso: string;
  rotulagem: string;
  status: string;
  grupo: Grupo;
  cor: Cor;
  marca: Marca;
  imagem: string;
}

export class Grupo {
  _id: string;
  descricao: string;
 }

export class Cor {
  _id: string;
  nome: string;
 }

 export class Marca {
  _id: string;
  descricao: string;
 }

