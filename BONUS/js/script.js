/**
 * Milestone 1
 * Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore   * (bianco)   assegnando due classi CSS diverse
 * Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
 */

/**
 * Milestone 2
  Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
  Click sul contatto mostra la conversazione del contatto cliccato
 */

/**
 * Milestone 3
  Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
  Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo
 */

/**
 * Milestone 4
  Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
 */
/**
 * Milestone 5
  Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
 */

/**
 * BONUS 1
 * evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi
 */

/**
 * BONUS 2
 * A) cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono. B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano
 */

/**
 * BONUS 3
 * predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
 */

/**
 * BONUS 4
 * visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto
 */

/**
 * BONUS 5
 * inserire l'orario corretto nei messaggi 
 */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
 
const app = new Vue(
    {
        el: '#app',
        data: {
            newMission: "",
            message: "", //messaggio che ho inserito io
            valueChat: 2, //utente con il quale sto messaggiando
            nameSearch: "",
            randomMessage: ["ok", "va bene", "non ti preoccupare", "anche a te e famiglia", "auguri", "usciamo?", "molto probabilmente", "buon Natale", "ti devo dire una cosa", "sto uscendo", "ci vediamo", "a dopo", "non sono a casa"],
            contacts: [
                {
                  name: "Michele",
                  avatar: "_1",
                  visible: true,
                  contatore: 0,
                  messages: [
                    {
                      visible: false, //messaggio "falso" per permettere eliminazione dell'ultimo messaggio dalla chat
                                      //questo messaggio comunque non verrò conteggiato
                    },
                    {
                      date: "10/01/2020 15:30:55",
                      text: "Hai portato a spasso il cane?",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      text: "Ricordati di dargli da mangiare",
                      status: "sent",
                      option: false,
                      visible: true,

                    },
                    {
                      date: "10/01/2020 16:15:22",
                      text: "Tutto fatto!",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                  ],
                },
                {
                  name: "Fabio",
                  avatar: "_2",
                  visible: true,
                  contatore: 0,
                  messages: [
                    {
                      visible: false,
                    },
                    {
                      date: "20/03/2020 16:30:00",
                      text: "Ciao come stai?",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "20/03/2020 16:30:55",
                      text: "Bene grazie! Stasera ci vediamo?",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "20/03/2020 16:35:00",
                      text: "Mi piacerebbe ma devo andare a fare la spesa.",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                  ],
                },
                {
                  name: "Samuele",
                  avatar: "_3",
                  visible: true,
                  contatore: 0,
                  messages: [
                    {
                      visible: false,
                    },
                    {
                      date: "28/03/2020 10:10:40",
                      text: "La Marianna va in campagna",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "28/03/2020 10:20:10",
                      text: "Sicuro di non aver sbagliato chat?",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "28/03/2020 16:15:22",
                      text: "Ah scusa!",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                  ],
                },
                {
                  name: "Luisa",
                  avatar: "_4",
                  visible: true,
                  contatore: 0,
                  messages: [
                    {
                      visible: false,
                    },
                    {
                      date: "10/01/2020 15:30:55",
                      text: "Lo sai che ha aperto una nuova pizzeria?",
                      status: "sent",
                      option: false,
                      visible: true,
                    },
                    {
                      date: "10/01/2020 15:50:00",
                      text: "Si, ma preferirei andare al cinema",
                      status: "received",
                      option: false,
                      visible: true,
                    },
                  ],
                },
            ]
        },

        methods: {
          //vedere con quale utente sto messaggiando
          addChat: function(index) {
            this.valueChat = index;
          },

          //miei messaggi con risposta del pc
          newChat: function() {
            today = new Date();
            dateMessage = today.getDate() + "/" + (today.getMonth() + 1) + "/" + (today.getYear() + 1900) + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            if (this.message.trim().length != 0) {
              let obj = {
                  date: dateMessage,
                  text: this.message,
                  status: "sent",
                  option: false,
                  visible: true,
              }
                  this.contacts[this.valueChat].messages.push(obj);
                  this.message = "";

                  let obj2 = {
                    date: dateMessage,
                    text: this.randomMessage[getRndInteger(0, this.randomMessage.length-1)],
                    status: "received",
                    option: false,
                    visible: true,
                  }
                  
                  setTimeout(()=>{ 
                    this.contacts[this.valueChat].messages.push(obj2);  
                  }, 1000);
            }
          },

          //ricerca in base al nome
          //contatore 0 permette di vedere di base tutti anche se scrivimo nome e cancelliamo tutto
          //nome scritto nel modo corretto, parte dall'inizio
          search: function (name) {
            if (name.length == 0) {
              for (let i=0; i<=this.contacts.length-1; i++) {
                this.contacts[i].visible = true;
                this.contacts[i].contatore = 0;
              }
            }
            //se il contatore è uguale alla vairbile y vuol dire che il nome inserito è presente nella lista
            for (let i=0; i<=3; i++) {
              for (let y=0; y<name.length - 1; y++) {
                if (name[y] != this.contacts[i].name[y]) {
                  this.contacts[i].contatore = 0;
                  this.contacts[i].visible = false;
                } else {
                  this.contacts[i].contatore += 1;
                }
                if (y == this.contacts[i].contactore) {
                  this.contacts[i].visible = true;
                }
              }
            }
          },

          //vengono passati il numero della chat e il numero del messaggio
          //campo oprion diventa true quando freccia viene cliccata facendo vedere button 
          showOption: function (chat, numero) {
            if (this.contacts[numero].messages[chat].option == false) {
              this.contacts[numero].messages[chat].option = true;
            } else {
              this.contacts[numero].messages[chat].option = false;
            }
          },

          //eliminazione del messaggio selezionato
          delateMessage: function (chat, numero) {
            console.log(chat, numero);
            this.contacts[numero].messages.splice(chat, 1);
          }
        }
      });