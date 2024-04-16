<h1 align="center"> Projeto Pass.In ✅ - STAND BY </h1>
Plataforma: Rocketseat
<br><br>
Bem-vindo ao Pass.In! Simplificando a gestão de participantes em eventos presenciais.

# Sobre o projeto

Feito com conhecimentos intermediários em Java e React, o Pass.In é uma solução intuitiva e eficiente para organizadores e participantes de eventos presenciais. Oferecendo uma plataforma completa, desde a criação até o check-in, o Pass.In torna o processo simples e seguro.

> 
- A ferramenta permite que o organizador cadastre um evento, abra uma página pública de inscrição, visualizar dados de um evento e a lista de participantes.
- Os participantes podem se inscrever em eventos, visualizar seu crachá de inscrição e realizar check-in no evento.

### Regras de negócio

- O participante só pode se inscrever em um evento uma única vez, somente se houver vagas disponíveis e só faz um check-in em cada evento.

### Terminais de API

A API fornece os seguintes endpoints:

- POST /events - Registrar um novo evento. 
- GET /events/{eventId} - Retorna detalhes do evento.
- GET /events/attendees/{eventId} - Retorna a lista de participantes inscrito no evento especifico.
- POST /events/{eventId}/attendees - Faz uma nova inscrição ao evento.
- POST /attendees/{attendeeId}/badge - Retorna o cartão de inscrição do participante. 
- POST /attendees/{attendeeId}/check-in - Faz o check-in no evento.

## STANDY BY REASON
  O projeto foi colocado em stand by pelos seguintes motivos:
  
- Tudo que foi passado durante a NLW está feito, portanto, pretendo adicionar mais algumas funcionalidades por conta própria.
- O sistema parece meio incompleto, já que faço as requisições POST por Insomnia/Postman.
- Funcionalidades que serão adicionadas:
  - página para criar/inscrever eventos;
  - acesso restrito da lista de participantes apenas a quem criou o evento;
  - para participantes, lista de quais eventos estao disponíveis;
  - filtro de buscar participantes/eventos;
  - admin consiga alterar, remover ou fazer checkin dos usuarios (botaozinho de ...).

## Tecnologias

- Java 17
- Spring Boot
- HyperSQL (DB)
- Insomnia
- React
