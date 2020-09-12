# Pipoca
Um site para comparar lista de filmes entre alguns amigos.

http://dontpad.com/cafecomcanela/

## Requisitos
- [ ] O usuário se cadastra usando apenas o nome
- [ ] Mostrar lista dos filmes (obter da API). Poderiam ser um card para cada filme, com botôes que indiquem: adicionar na lista de desejos, adicionar na lista de assitidos. Os cards poderiam indicar quem assistiu o filme (usar badges).
- [ ] Ver o hanking com as quantidades dos usuários. Ordernar os usuários mediante o critério (qtd de desejos e de assistidos)
- [ ] Ver lista de filmes assistidos e desejos de determinado jogador

## Modelagem do banco
```json
{
  "usuarios": [
    {
      "userName":"",
      "userId":0,
      "qtdDeFilmesAssistidos":"",
      "qtdDeFilmesParaAssistir":""
    }
  ],
  "filmes":[
    {
      "idFilme":"",
      "quemAssistiu":[{"userId": 0}],
      "quemQuerAssistir":[{"userId": 0}]
    }
  ]
}
```