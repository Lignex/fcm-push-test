// Import des SDK Firebase nécessaires dans le service-worker
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Initialisation de Firebase dans le SW (mêmes valeurs que dans index.html)
firebase.initializeApp({
  apiKey:            "VOTRE_API_KEY",
  authDomain:        "VOTRE_PROJET.firebaseapp.com",
  projectId:         "VOTRE_PROJET_ID",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId:             "VOTRE_APP_ID"
});

// Récupère une instance du messaging pour pouvoir gérer le background
const messaging = firebase.messaging();

// (optionnel) gérer les messages quand la page n’est pas ouverte
messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Message reçu en arrière-plan :', payload);
  // vous pourriez ici afficher une notification :
  // self.registration.showNotification(payload.notification.title, {
  //   body: payload.notification.body
  // });
});
