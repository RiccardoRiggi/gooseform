# Goose Form
###### *"Alla Goose più coraggiosa che io conosca"*

 ![Homepage](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-form.png)
 
Goose Form è un generatore dinamico di form realizzato in React. Mediante un oggetto JSON in ingresso opportunamente valorizzato, restituirà in uscita un form con tutti i campi richiesti, controlli di validazione e regole di visibilità. Oltre a questo, è possibile specificare anche la sorgente dati per generare form precompilati e l'endpoint di destinazione al quale inviare tutte le informazioni. Di seguito è presente la documentazione che illustra tutte le funzionalità del progetto. Sono in corso di sviluppo i due componenti aggiuntivi [Goose Form BE]() e [Goose Form Manager]() per agevolare e velocizzare la creazione dei form.  

---

## Funzionamento 

Il concetto fondamentale di Goose Form è quello di "identificativo". Ogni dato che vogliamo rappresentare deve avere un identificativo univoco scritto in camelCase ("nomeUtente", "dataDiNascita", "colorePreferito"). Le informazioni viaggeranno mediante la logica "Chiave/Valore". Esiste un oggetto di riferimento chiamato GooseKeyValue. Tuttavia l'applicazione non è in grado di gestire un nested JSON. 

---

## Componenti

### GooseForm

GooseForm è l'oggetto contenitore di tutti i componenti, prende in input il JSON di configurazione e restituisce un form completo come descritto nel paragrafo introduttivo.  

| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|formId|String|Identificativo univoco del form|
|title|String|Titolo del form|
|icon|String|Nome basato su Font Awesome dell'icona presente in alto a sinistra del form|
|sendButton|GooseButton|Pulsante di submit del form|
|resetButton|GooseButton|Pulsante di reset del form|
|description|String|Descrizione del form|
|popup|GoosePopup|Icona con popup per poter inserire informazioni utili alla compilazione del form|
|destinationUrl|GooseHttpRequest|Contiene le informazioni per invocare l'endpoint di destinazione al quale inviare i dati del form|
|originUrl|GooseHttpRequest|Contiene le informazioni per accedere alla sorgente dati per generare form precompilati|
|components|List< GooseComponent >|Lista dei campi presenti all'interno del form|
|controls|List< GooseControl >|Lista dei controlli di validazione|
|renders|List< GooseRender >|Lista delle regole di render condizionale dei componenti del form|

###### Oggetto JSON di esempio:
```
{
  "formId": "formId",
  "title": "Titolo del form",
  "icon": "fas fa-feather-alt",
  "sendButton": {...},
  "resetButton": {...},
  "description": "Descrizione del form",
  "popup": {...},
  "autocomplete": true,
  "destinationUrl": {...},
  "originUrl": {...},
  "components": [{...}],
  "controls": [{...}],
  "renders": [{...}]
}
```

#### Form precompilato
Goose Form, tramite l'oggetto originUrl di tipo GooseHttpRequest consente di leggere i dati in formato JSON (no nested JSON) da un endpoint e mostrarli all'interno del form. Il nome dell'attributo del JSON deve corrispondere a quello dell'identificativo del campo. 
###### Oggetto JSON di esempio:
```
{
  "cognome": "Riggi",
  "colorePreferito": "blu",
  "nome": "Riccardo",
  "dataDiNascita": "2000-06-12"
}
```

#### Form submit
L'oggetto destinationUrl di tipo GooseHttpRequest consente di inviare sottoforma di JSON i dati del form ad uno specifico endpoint. I campi nascosti o disabilitati non verranno inviati. Verrà mostrato un messaggio di success se l'enpoint restituirà un codice HTTP di tipo 2xx, altrimenti apparirà un messaggio di error.
###### Oggetto JSON di esempio:
```
{
  "cognome": "Riggi",
  "colorePreferito": "blu",
  "nome": "Riccardo",
  "dataDiNascita": "2000-06-12"
}
```
 ![Esempio Dati Ricevuti Lato Server](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/server.png)

--- 

### GooseTooltip

GooseTooltip è una semplice icona che, al passaggio del mouse, mostra una descrizione
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|icon|String|Nome basato su Font Awesome dell'icona|
|description|String|Testo del tooltip|

###### Oggetto JSON di esempio:
```
{
    "icon": "fas fa-feather-alt",
    "description": "Esempio di descrizione"
}
```
---
### GoosePopup

GoosePopup è un'icona che, se premuta, mostra un popup con un titolo e una descrizione
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|icon|String|Nome basato su Font Awesome dell'icona|
|textTooltip|String|Testo del tooltip|
|title|String|Titolo del popup|
|description|String|Testo del popup|
###### Oggetto JSON di esempio:
```
{
    "icon": "fas fa-feather-alt",
    "textTooltip": "Esempio di testo tooltip",
    "title": "Titolo popup",
    "description": "Esempio di descrizione"
}
```
---

### GooseButton

GooseButton è semplicemente un pulsante con titolo ed icona
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|icon|String|Nome basato su Font Awesome dell'icona|
|title|String|Titolo del pulsante|

###### Oggetto JSON di esempio:
```
{
    "title": "Invia",
    "icon": "fas fa-feather-alt"
}
```
---

### GooseHttpRequest

GooseHttpRequest è l'oggetto che permette di far eseguire chiamate HTTP a GooseForm e ai componenti che necessitano di recuperare i valori dinamicamente

| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|url|String|Indirizzo dell'endpoint|
|method|String|Metodo HTTP|
|headers|List < GooseKeyValue>|Lista chiave/valore degli header necessari per chiamare l'endpoint|
|body|String|Body della chiamata|

###### Oggetto JSON di esempio:
```
{
    "url": "http://localhost:8080/gooseform/documentazione/destinazione/esempioUno",
    "method": "POST",
    "headers": [
      {
        "key": "HEADER_1",
        "value": "VALORE_1"
      },
      {
        "key": "HEADER_2",
        "value": "VALORE_2"
      }
    ],
    "body": null
}
```
---
### GooseComponent
GooseComponent è l'oggetto che rappresenta ciascun componente del form, contiene degli attributi comuni a tutti i componenti e altri specifici che variano in base al type. 
###### Elenco dei type:
```
[
  "GOOSE_TEXT_AREA",
  "GOOSE_SELECT",
  "GOOSE_LINKED_SELECT",
  "GOOSE_DATA_LIST",
  "GOOSE_TEXT_FIELD",
  "GOOSE_PASSWORD_FIELD",
  "GOOSE_NUMBER_FIELD",
  "GOOSE_RADIO",
  "GOOSE_CHECKBOX",
  "GOOSE_EMAIL_FIELD",
  "GOOSE_DATE_FIELD",
  "GOOSE_DATE_TIME_FIELD",
  "GOOSE_MONTH_FIELD",
  "GOOSE_WEEK_FIELD",
  "GOOSE_TIME_FIELD",
  "GOOSE_TEL_FIELD",
  "GOOSE_URL_FIELD",
  "GOOSE_COLOR_FIELD",
  "GOOSE_RANGE_FIELD"
]
```

| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|formId|String|Identificativo univoco del form|
|id|String|Identificativo univoco del componente del form|
|type|String|Indica il tipo specifico del componente|
|label|String|Etichetta del componente|
|widthXl|String|Larghezza del componente (vedi sistema di col di Bootstrap)|
|widthLg|String|Larghezza del componente (vedi sistema di col di Bootstrap)|
|widthMd|String|Larghezza del componente (vedi sistema di col di Bootstrap)|
|widthSm|String|Larghezza del componente (vedi sistema di col di Bootstrap)|
|width|String|Larghezza del componente (vedi sistema di col di Bootstrap)|
|settings|Object|Varia in base al type, contiene gli attributi specifici del determinato componente|
|tooltip|GooseTooltip|Tooltip relativo al componente|
|popup|GoosePopup|Popup relativo al componente|
|requiredMark|Boolean|Mostra l'asterisco rosso sul componente (solo graficamente)|

###### Oggetto JSON di esempio:
```
{
    "formId": "idForm",
    "id": "cognome",
    "type": "GOOSE_TEXT_FIELD",
    "label": "Cognome",
    "widthXl": "12",
    "widthLg": "12",
    "widthMd": "12",
    "widthSm": "12",
    "width": "12",
    "setting": {...},
    "tooltip": {...},
    "popup": {...},
    "requiredMark": true
}
```
Di seguito l'elenco di tutti i componenti implementati in Goose Form con i relativi attributi specifici 

--- 
### GooseTextArea
 ![GooseTextArea](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-text-area.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|rows|Number|Indica il numero di righe di altezza della Text Area|

###### Oggetto JSON di esempio:
```
{
    "rows": 3
}
```
---
### GooseSelect (Statica)
![GooseSelectStatica](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-select-static.png)
In questa variante la lista delle opzioni viene inclusa all'interno del JSON di configurazione
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|size|Number|Numero di opzioni mostrate|
|values|List < GooseKeyValue >|Lista statica di opzioni con forma chiave/valore|
```
{
    "size": 1,
    "values": [
        {
            "key": "",
            "value": "Scegli..."
        },
        {
            "key": "GOOSE",
            "value": "GOOSE"
        },
        {
            "key": "PAPERA",
            "value": "PAPERA"
        },
        {
            "key": "ANATRA",
            "value": "ANATRA"
        },
        {
            "key": "OCA",
            "value": "OCA"
        },
        {
            "key": "PAPERELLA",
            "value": "PAPERELLA"
        }
    ],
}
```
---

### GooseSelect (Dinamica)
![GooseSelectStatica](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-select-dynamic.png)
In questa variante la lista delle opzioni viene recuperata mediante chiamata HTTP ad un endpoint esterno
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|size|Number|Numero di opzioni mostrate|
|dynamicValues|GooseHttpRequest|Oggetto che consente di chiamare un endpoint per recuperare le opzioni da mostrare|
|keyName|String|Nome del campo definito chiave presente nella risposta dell'endpoint| 
|valueName|String|Nome del campo definito valore presente nella risposta dell'endpoint| 

###### Oggetto JSON di esempio:
```
{
    "size": 1,
    "values": null,
    "dynamicValues": {
        "url": "http://localhost:8080/gooseform/documentazione/opzioni",
        "method": "POST",
        "headers": [
            {
                "key": "HEADER_1",
                "value": "VALORE CUSTOM HEADER"
            }
        ],
        "body": "CORPO DELLA CHIAMATA"
    },
    "keyName": "key",
    "valueName": "value"
}
```
---
### GooseLinkedSelect
![GooseLinkedSelect](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-linked-select.png)
In questa variante di GooseSelect sono presenti due componenti: padre e figlio. Al variare del padre vengono aggiornate le opzioni del figlio. Le opzioni vengono recuperate via endpoint. Un esempio pratico è la classica coppia di select "Provincia" e "Comune": al variare della provincia viene mostrata la lista dei comuni corrispondenti.
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|size|Number|Numero di opzioni mostrate|
|dynamicValues|GooseHttpRequest|Oggetto che consente di chiamare un endpoint per recuperare le opzioni da mostrare|
|keyName|String|Nome del campo definito chiave presente nella risposta dell'endpoint| 
|valueName|String|Nome del campo definito valore presente nella risposta dell'endpoint| 
|idLinkedSelectPadre|String|Contiene l'identificativo del padre a cui fa riferimento|
|idLinkedSelectFiglia|String|Contiene l'identificativo del figlio a cui fa riferimento|
###### Oggetto JSON di esempio:
```
{
    "size": 1,
    "values": null,
    "dynamicValues": {
        "url": "http://localhost:8080/gooseform/documentazione/opzioni",
        "method": "POST",
        "headers": [
            {
                "key": "HEADER_1",
                "value": "VALORE CUSTOM HEADER"
            }
        ],
        "body": "CORPO DELLA CHIAMATA"
    },
    "keyName": "key",
    "valueName": "value",
    "idLinkedSelectPadre": null,
    "idLinkedSelectFiglia": "gooseLinkedSelectFiglia"
}
```
---
### GooseDataList (Statica)
![GooseDataListStatica](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-data-list-static.png)
In questa variante la lista dei suggerimenti viene inclusa all'interno del JSON di configurazione
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|placeholder|String|Segnaposto della casella di testo|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
|values|List < GooseKeyValue >|Lista statica di suggerimenti con forma chiave/valore|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseDataListStatica",
    "placeholder": "Scegli valore",
    "disabled": false,
    "readonly": false,
    "autofocus": true,
    "values": [
        {
            "key": "unoStatico",
            "value": "Uno Statico"
        },
        {
            "key": "dueStatico",
            "value": "Due Statico"
        },
        {
            "key": "treStatico",
            "value": "Tre Statico"
        },
        {
            "key": "quattroStatico",
            "value": "Quattro Statico"
        },
        {
            "key": "cinqueStatico",
            "value": "Cinque Statico"
        }
    ],
    "dynamicValues": null,
    "keyName": null,
    "valueName": null
}
```
---
### GooseDataList (Dinamica)
![GooseDataListDinamica](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-data-list-dynamic.png)
In questa variante la lista dei suggerimenti viene recuperata mediante chiamata HTTP ad un endpoint esterno
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|placeholder|String|Segnaposto della casella di testo|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
|dynamicValues|GooseHttpRequest|Oggetto che consente di chiamare un endpoint per recuperare i suggerimenti da mostrare|
|keyName|String|Nome del campo definito chiave presente nella risposta dell'endpoint| 
|valueName|String|Nome del campo definito valore presente nella risposta dell'endpoint| 
###### Oggetto JSON di esempio:
```
{
    "name": "gooseDataListDinamica",
    "placeholder": "Scegli valore",
    "disabled": false,
    "readonly": false,
    "autofocus": true,
    "values": null,
    "dynamicValues": {
        "url": "http://localhost:8080/gooseform/documentazione/opzioniDue",
        "method": "POST",
        "headers": [
            {
                "key": "HEADER_2",
                "value": "VALORE NUOVO HEADER"
            }
        ],
        "body": "CORPO DELLA CHIAMATA DUE"
    },
    "keyName": "chiave",
    "valueName": "valore"
}
```
---
### GooseTextField
![GooseTextField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-text-field.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|placeholder|String|Segnaposto della casella di testo|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseTextField",
    "placeholder": "Inserisci un testo...",
    "disabled": false,
    "readonly": false,
    "autofocus": false
}
```
---
### GoosePasswordField
![GoosePasswordField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-password-field.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|placeholder|String|Segnaposto della casella di testo|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
###### Oggetto JSON di esempio:
```
{
    "name": "goosePasswordField",
    "placeholder": "Inserisci la password...",
    "disabled": false,
    "readonly": false,
    "autofocus": false
}
```
---
### GooseNumberField
![GooseNumberField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-number-field.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|placeholder|String|Segnaposto della casella di testo|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
|steps|Number|Numero di salti tra un numero e l'altro|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseNumberField",
    "placeholder": "Inserisci un numero...",
    "disabled": false,
    "readonly": false,
    "autofocus": false,
    "steps":2
}
```
---

### GooseRadio (Statici)
![GooseRadio](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-radio-static.png)
In questa variante l'elenco dei radio viene incluso all'interno del JSON di configurazione
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|size|Number|Numero di opzioni mostrate|
|values|List < GooseKeyValue >|Lista statica di opzioni con forma chiave/valore|
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
```
{
    "name": null,
    "disabled": false,
    "readonly": false,
    "values": [
        {
            "key": "unoStatico",
            "value": "Uno Statico"
        },
        {
            "key": "dueStatico",
            "value": "Due Statico"
        },
        {
            "key": "treStatico",
            "value": "Tre Statico"
        },
        {
            "key": "quattroStatico",
            "value": "Quattro Statico"
        },
        {
            "key": "cinqueStatico",
            "value": "Cinque Statico"
        }
    ],
    "dynamicValues": null,
    "keyName": null,
    "valueName": null
}
```
---

### GooseRadio (Dinamici)
![GooseRadio](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-radio-dynamic.png)
In questa variante l'elenco dei radio viene incluso all'interno del JSON di configurazione
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|size|Number|Numero di opzioni mostrate|
|dynamicValues|GooseHttpRequest|Oggetto che consente di chiamare un endpoint per recuperare le opzioni da mostrare|
|keyName|String|Nome del campo definito chiave presente nella risposta dell'endpoint| 
|valueName|String|Nome del campo definito valore presente nella risposta dell'endpoint| |name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
```
{
    "name": null,
    "disabled": false,
    "readonly": false,
    "values": null,
    "dynamicValues": {
        "url": "http://localhost:8080/gooseform/documentazione/opzioni",
        "method": "POST",
        "headers": [
            {
                "key": "HEADER_1",
                "value": "VALORE CUSTOM HEADER"
            }
        ],
        "body": "CORPO DELLA CHIAMATA"
    },
    "keyName": "key",
    "valueName": "value"
}
```
---

### GooseCheckbox
![GooseCheckbox](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-checkbox.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseCheckbox",
    "disabled": false,
    "readonly": false,
}
```
---

### GooseEmailField
![GooseEmailField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-email-field.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|placeholder|String|Segnaposto della casella di testo|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseEmailField",
    "placeholder": "Inserisci il tuo indirizzo email...",
    "disabled": false,
    "readonly": false,
    "autofocus": false
}
```
---

### GooseColorField
![GooseColorField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-color-field.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseColorField",
    "disabled": false,
    "readonly": false,
}
```
---

### GooseDateField
![GooseDateField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-date-field.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseDateField",
    "disabled": false,
    "readonly": false,
}
```
---

### GooseDateTimeField
![GooseDateTimeField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-date-time-field.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseDateTimeField",
    "disabled": false,
    "readonly": false,
}
```
---

### GooseMonthField
![GooseMonthField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/goose-month.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseMonthField",
    "disabled": false,
    "readonly": false,
}
```
---

### GooseRangeField
![GooseRangeField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/homepage.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
|steps|Number|Numero di salti tra un numero e l'altro|
|min|Number|Valore minimo|
|max|Number|Valore massimo|

###### Oggetto JSON di esempio:
```
{
    "name": "gooseRangeField",
    "disabled": false,
    "readonly": false,
    "min": "-20",
    "max": "20",
    "step": "2"
}
```
---

### GooseTelField
![GooseTelField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/homepage.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|placeholder|String|Segnaposto della casella di testo|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseTelField",
    "placeholder": "Inserisci un numero di telefono...",
    "disabled": false,
    "readonly": false,
    "autofocus": false
}
```
---

### GooseTimeField
![GooseTimeField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/homepage.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseTimeField",
    "disabled": false,
    "readonly": false,
}
```
---

### GooseUrlField
![GooseUrlField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/homepage.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|placeholder|String|Segnaposto della casella di testo|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
|autofocus|Boolean|Sposta il focus del cursore su questo determinato campo|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseUrlField",
    "placeholder": "Inserisci un indirizzo web...",
    "disabled": false,
    "readonly": false,
    "autofocus": false
}
```
---

### GooseWeekField
![GooseWeekField](https://raw.githubusercontent.com/RiccardoRiggi/gooseform/main/screenshots/homepage.png)
| Nome | Tipo | Descrizione |
| ----------- | ----------- | ----------- |
|name|String|Nome (uguale all'id)|
|disabled|Boolean|Disabilita il campo|
|readonly|Boolean|Imposta il campo in modalità sola lettura|
###### Oggetto JSON di esempio:
```
{
    "name": "gooseWeekField",
    "disabled": false,
    "readonly": false,
}
```
---

## Controlli

Sono disponibili diversi controlli di validazione lato client che possono essere raggrupati in "STANDARD" e "COMPLEX". I primi confrontano il valore dell'oggetto al quale fanno riferimento con un valore statico impostato nella configurazione, i secondi lo confrontano con il valore di un altro elemento del form. Per ogni controllo è possibile impostare un messaggio di errore personalizzato. 

### GooseStandardControl

###### Oggetto JSON di esempio:
```
{
    "type": "STANDARD",
    "detail": {
        "idComponentA": "nome",
        "type": "REQUIRED",
        "referenceValue": null,
        "referenceValues": null,
        "errorMessage": "Il campo Nome è richiesto"
    }
}
```

Questo controllo ha come riferimento un componente "A", un valore di rifermento, oppure una lista di valori di riferimento, da confrontare, un messaggio di errore personalizzato e un tipo. Di seguito i tipi di controlli "STANDARD" disponibili: 

| Identificativo | Descrizione | 
| ----------- | ----------- |
| REQUIRED | Rende il campo obbligatorio |
| EQUAL | Verifica che il campo sia uguale ad un determinato valore |
| NOT_EQUAL | Verifica che il campo sia diverso da un determinato valore |
| PATTERN | Verifica che il campo rispetti una determinata Regex |
| IN | Verifica che il campo sia compreso in un insieme di determinati valori |
| NOT_IN | Verifica che il campo sia diverso da un insieme di determinati valori |
| MIN_TEXT | Verifica che la lunghezza del testo inserito sia superiore ad un determinato valore  |
| MAX_TEXT | Verifica che la lunghezza del testo inserito sia inferiore ad un determinato valore  |
| MIN_NUM | Verifica che il numero inserito sia superiore ad un determinato numero |
| MAX_NUM | Verifica che il numero inserito sia inferiore ad un determinato numero |

### GooseComplexControl

###### Oggetto JSON di esempio:
```
{
    "type": "COMPLEX",
    "detail": {
        "idComponentA": "password",
        "idComponentB": "confermaPassword",
        "type": "EQUAL",
        "errorMessage": "Le due password non corrispondono"
    }
}
```

Questo controllo ha come riferimento un componente "A", un componente "B", un messaggio di errore personalizzato e un tipo. Di seguito i tipi di controlli "COMPLEX" disponibili: 

| Identificativo | Descrizione | 
| ----------- | ----------- | 
| EQUAL | Verifica che il campo "A" sia uguale al campo "B" |
| NOT_EQUAL | Verifica che il campo "A" sia diverso dal campo "B" |
| MIN | Verifica che il campo "A" sia maggiore del campo "B" |
| MAX | Verifica che il campo "A" sia minore del campo "B" |

---

## Render condizionale

Sono disponibili dei "Render condizionali" che consentono, al verificarsi di opportune condizioni, di nascondere o disabilitare un determinato campo. Esistono due tipi di render: "SIMPLE_RENDER" e "COMPLEX_RENDER". Il primo confronta il valore con un valore statico, il secondo con un valore di un altro determinato elemento del form. 

### GooseSimpleRenderConditional

###### Oggetto JSON di esempio:
```
{
    "type": "SIMPLE_RENDER",
    "detail": {
        "idComponentA": "a",
        "idComponentB": "b",
        "type": "HIDE_B_IF_A_EQUAL_X",
        "value": "GOOSE"
    }
}
```

Il "SIMPLE_RENDER" ha un componente "B" che verrà nascosto o disabilitato se il componente "A", confrontato con il valore di riferimento, darà esito positivo. Di seguito i tipi di "SIMPLE_RENDER":

| Identificativo | Descrizione |  
| ----------- | ----------- | 
| HIDE_B_IF_A_EQUAL_X | Nascondi "B" se "A" è uguale ad un determinato valore |
| DISABLED_B_IF_A_EQUAL_X | Disabilita "B" se "A" è uguale ad un determinato valore |
| HIDE_B_IF_A_NOT_EQUAL_X | Nascondi "B" se "A" è diverso da un determinato valore |
| DISABLE_B_IF_A_NOT_EQUAL_X | Disabilita "B" se "A" è diverso da un determinato valore |
| HIDE_B_IF_A_MIN_X | Nascondi "B" se "A" è minore di un determinato valore |
| DISABLE_B_IF_A_MIN_X | Disabilita "B" se "A" è minore di un determinato valore |
| HIDE_B_IF_A_MAX_X | Nascondi "B" se "A" è maggiore di un determinato valore |
| DISABLE_B_IF_A_MAX_X | Disabilita "B" se "A" è maggiore di un determinato valore |

### GooseComplexRenderConditional

###### Oggetto JSON di esempio:
```
{
    "type": "COMPLEX_RENDER",
    "detail": {
        "idComponentA": "a",
        "idComponentB": "b",
        "type": "HIDE_C_IF_A_EQUAL_B",
        "idComponentC": "c"
    }
}
```

Il "COMPLEX_RENDER" ha un componente "C" che verrà nascosto o disabilitato se il componente "A", confrontato con il componente "B", darà esito positivo. Di seguito i tipi di "COMPLEX_RENDER":

| Identificativo | Descrizione |  
| ----------- | ----------- |
| HIDE_C_IF_A_EQUAL_B | Nascondi "B" se "A" è uguale a "B" |
| DISABLED_C_IF_A_EQUAL_B | Disabilita "B" se "A" è uguale a "B" |
| HIDE_C_IF_A__NOT_EQUAL_B | Nascondi "B" se "A" è diverso da "B" |
| DISABLE_C_IF_A_NOT_EQUAL_B | Disabilita "B" se "A" è diverso da "B" |
| HIDE_C_IF_A_MIN_B | Nascondi "B" se "A" è minore di "B" |
| DISABLE_C_IF_A_MIN_B | Disabilita "B" se "A" è minore di "B" |
| HIDE_C_IF_A_MAX_B | Nascondi "B" se "A" è maggiore di "B" |
| DISABLE_C_IF_A_MAX_B | Disabilita "B" se "A" è maggiore di "B" |

---

## Bom / Diba

[SB Admin 2 (Tema basato su Bootstrap 4)](https://startbootstrap.com/theme/sb-admin-2)

[Font Awesome](https://fontawesome.com/)

[React 18](https://it.reactjs.org/)

[Redux 7](https://redux.js.org/)

[React Router 6](https://reactrouter.com/en/main)

[Axios](https://www.npmjs.com/package/react-axios)

[react-markdown](https://github.com/remarkjs/react-markdown)

[remark-gfm](https://github.com/remarkjs/remark-gfm)

[Favicon e logo](https://www.iconfinder.com/icons/3316541/animal_ganco_goose_gooses_icon)

---

## Licenza

Il codice sorgente da me scritto viene rilasciato con licenza [MIT](https://github.com/RiccardoRiggi/gooseform/blob/main/LICENSE), framework, temi e librerie di terze parti mantengono le loro relative licenze. 