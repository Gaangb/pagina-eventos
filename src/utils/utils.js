export const loggedInUserJSON = JSON.parse(
  localStorage.getItem("loggedInUser")
);

export const eventosPreDefinidos = [
  {
    id: 1,
    usuarioId: 1,
    nome: "Rock Rio",
    local: "Rio de Janeiro",
    data: "10/10/2021",
    horario: "20:00",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
    descricao:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    ingressos_pista: 100,
    ingressos_camarote: 100,
    preco_pista: 100,
    preco_camarote: 100,
  },
  {
    id: 2,
    usuarioId: 1,
    nome: "Rock Rio",
    local: "Rio de Janeiro",
    data: "10/10/2021",
    horario: "20:00",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
    descricao:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    ingressos_pista: 100,
    ingressos_camarote: 100,
    preco_pista: 100,
    preco_camarote: 100,
  },
  {
    id: 3,
    usuarioId: 1,
    nome: "Rock Rio",
    local: "Rio de Janeiro",
    data: "10/10/2021",
    horario: "20:00",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
    descricao:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    ingressos_pista: 100,
    ingressos_camarote: 100,
    preco_pista: 100,
    preco_camarote: 100,
  }
];

export const usuariosPredefinidos = [
  {
    id: 1,
    email: "administrador@gmail.com",
    senha: "senha123",
    cpf: "12345678900",
    nome: "admin",
    nome_estabelecimento: "Feira Eventos",
    imagem: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
];

//Lógica para o calendário
const today = new Date();
export const minDate = new Date();
minDate.setDate(today.getDate() + 1); //pegando data atual e somando 1 dia

export const maxDate = new Date();
maxDate.setFullYear(today.getFullYear() + 1);
maxDate.setMonth(11); // Dezembro
maxDate.setDate(31); // Último dia do mês
