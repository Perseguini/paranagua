/**
 * SERVICE WORKER - ALERTA FILA (Perseguini)
 * ------------------------------------------
 * Bem simples de propósito: só precisa existir e responder ao
 * evento "fetch" pra o Chrome considerar o app "instalável".
 * Não guardamos nada em cache, então o app sempre carrega a versão
 * mais nova quando você tem internet.
 */

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // Deixa passar direto pra rede (sem cache customizado por enquanto).
  event.respondWith(fetch(event.request));
});
