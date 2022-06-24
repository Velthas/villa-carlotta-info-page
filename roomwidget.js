const roomWidget = (function () {

    const classic = {
        'name': 'Classic "Malavita"',
        'paragraph1': 'Le Classic \"Malavita\" sono camere matrimoniali molto spaziose e luminose. Alcune godono della vista del parco al primo piano, altre al piano terra vantano l’accesso al giardino. Quattro di queste ultime accedono al giardino interno, luogo ideale dove godere di momenti di relax.',
        'paragraph2': 'Lo stile ricercato che caratterizza ognuna delle camere Classic coniuga un arredo moderno alla pietra viva, originale delle pareti interne. Questo particolare connubio le rende il luogo ideale per trascorrere soggiorni piacevoli e vivere lo charme di Ragusa.',
        'li': ['Ampiezza 30mq',
            'Letto matrimoniale king size',
            'Aria condizionata e riscaldamento autonomo centralizzato',
            'Accesso diretto al giardino',
            'Frigobar'],
        'src': './images/Classic.jpg',
    }
    const triple = {
        'name': 'Tripla "Gilestra"',
        'paragraph1': 'Le Junior Suite Triple sono ampi spazi che si sviluppano su due livelli. Una moderna scala in legno porta al piano soppalcato. Questa disposizione permette di dividere la zona giorno, ampiamente illuminata del piano terra, dalla zona notte del piano superiore',
        'paragraph2': 'Queste camere possono ospitare fino ad un massimo di tre persone: all\'evenienza il comodo divano posto al piano terra diventa un letto. Queste sistemazioni offrono ai propri ospiti ambienti confortevoli e spaziosi nella quale potersi rilassare in compagnia della propria famiglia o dei propri amici. In tutti gli ambienti la componente materica che contraddistingue lo stile di Villa Carlotta ritorna in un continuum stilistico, il tutto grazie alla pietra antica a vista e alle travi in legno.',
        'li': ['Ampiezza 40mq',
            'Letto matrimoniale king size + divano letto singolo',
            'Aria condizionata e riscaldamento autonomo centralizzato',
            'Camera soppalcata',
            'Frigobar'],
        'src': './images/triple.jpg',
    }

    const quadruple = {
        'name': 'Quadrupla "Gilestra"',
        'paragraph1': 'Le Junior Suite Gilestra sono ampie camere quadruple che possono accogliere fino a quattro adulti. Ideali per un soggiorno in famiglia, regalano agli ospiti di Villa Carlotta Hotel tutto il comfort abitativo di una casa privata. Ampie ed elegantemente ridefinite, sono disposte su due livelli.',
        'paragraph2': 'Il luminoso piano terra accoglie la zona living arredata con un comodo divano letto matrimoniale. Definita con cura dei dettagli, la zona giorno si apre al verde parco e alla piscina, attraverso una porta finestra. Una scala a chiocciola porta invece al piano superiore soppalcato, dove si trova la zona notte, elegantemente arredata con letto matrimoniale king size, mobili in legno, travi a vista e parquet.',
        'li': ['Ampiezza 50mq',
            'Letto matrimoniale king size + divano letto matrimoniale',
            'Aria condizionata e riscaldamento autonomo centralizzato',
            'Camera soppalcata',
            'Frigobar'],
        'src': './images/quadruple.jpg',
    }

    const suite = {
        'name': 'Suite "Principe"',
        'paragraph1': 'La suite \"Il Principe\" è la camera più prestigiosa dell’Hotel Villa Carlotta, la soluzione ideale per chi ama il comfort degli spazi ampi. Posta al primo piano, la suite "Il Principe" si estende per 68 mq sapientemente pensati per vivere due ambienti indipendenti: un’ampia e confortevole zona living e un’intima e preziosa zona notte.',
        'paragraph2': 'La suite è adatta anche per una vacanza in famiglia, infatti può ospitare comodamente fino a 5 persone, disponendo di un letto king size nella zona notte, di un divano letto matrimoniale e di una poltrona letto singolo nella zona giorno. L\’area giorno, accuratamente arredata con divano letto, tavolo e tv, offre un triplice affaccio da cui è possibile scorgere l\’incantevole giardino di Villa Carlotta e i vicini monti Iblei. ',
        'li': ['Ampiezza 70mq',
            'Letto matrimoniale king size + 2 divani letti (M + S)',
            'Aria condizionata e riscaldamento autonomo centralizzato',
            'Vasca idromassaggio',
            'Vista sul giardino con piscina e monti iblei'],
        'src': './images/suite.jpg',
    }

    const rooms = [classic, triple, quadruple, suite]

    function insertRoomData(object) {

        // This will get the section with all the text
        const roomText = document.querySelector('.room-text');

        // Get the room name and change it 
        const roomName = roomText.querySelector('h2');
        roomName.textContent = object.name;

        // Change the pic
        const roomPicture = document.querySelector('.room-image');
        roomPicture.style = `background-image: url(${object.src})`

        // Get the two paragraphs and plug stuff into it
        const paragraphs = Array.from(roomText.querySelectorAll('p'));
        paragraphs[0].textContent = object.paragraph1;
        paragraphs[1].textContent = object.paragraph2;

        // Lis
        const  listElements = Array.from(document.querySelectorAll('.room-text ul li'));
        for(let i = 0; i < listElements.length; i++) {
            listElements[i].textContent = object.li[i];
        }
    }

    function eventListeners() {
        const roomButtons = Array.from(document.querySelectorAll('.room-button'));

        for(let i = 0; i < roomButtons.length; i++) {
            roomButtons[i].addEventListener('click', function() { insertRoomData(rooms[i]);
            setActive(roomButtons[i]);})
        }
    }

    function setActive(node) {
        // Active button, remove
        const activeButton = document.querySelector('.room-button.active');
        if (activeButton !== null) {
        activeButton.classList.remove('active');
        }


        // Button to activate
        node.classList.add('active');

    }

    eventListeners();


} )();