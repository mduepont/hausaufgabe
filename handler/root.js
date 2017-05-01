
module.exports = (req, res) => {
    
    //
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('index', {
        title: 'About me',
        name: 'Martha Duepont',
        matriculation: '294242',
        age: '31',
        born: '04.05.1985',
        cityOfBirth: 'Swidnik, Polen',
        trade:'Rechtsanwalts- und Notarfachangestellte',
        study: 'Internationaler Frauenstudiengang Informatik',
        cityOfStudy: 'Bremen',
        familySituation: 'verheiratet',
        children: 'Johanna Duepont',
        bornChild: '05.05.2013',
        text: `Hallo Herr König, ich hoffe alles so weit richtig zu machen. 
        Den letzten Part mit den tweets muss ich mir morgen genauer anschauen. 
        Dafür hatte ich dieses Wochenende leider überhaupt keinen Kopf gehabt :(`
    });
};