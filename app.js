// Se ejecuta cuando el DOM (la estructura de la página) está completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // 1. DATA: Toda la información de las canciones en un solo lugar.
    const songs = [
        {
            id: 1,
            title: "¿Quién?",
            audioSrc: "audio/01_Quien.mp3",
            coverSrc: "Portadas/¿Quien.png",
            youtubeUrl: "URL_YOUTUBE_QUIEN",
            inspiration: "Esta canción la escribi antes de esta contigo. La he modificado un poco para que este mas chuli, pero basicamente la he escrito pensando en cuando aun no eramos novios y yo estaba deseando lanzarme pero no me atrevia, solo te queria decir que nadie te iba a quere como yo te queria y te quiero. He intentado darle un estilo de Paulo Londra porque se lo que te gusta la escena argentina.",
            lyrics: `(ye-yeh, iyeh-eh-eh)
¿Quién, quién?
(Yeah)
Dime, ¿quién?

En un millón de caras, te reconozco por la risa
Se que has entrado al local solo por la brisa,
Quiero estar de tu mano siempre que tú pisas
Y si dices que sí, como camarón, parto mi camisa

Y puede que haya otros con más labia y mejor pinta
Pero parece que ninguno se da cuenta que eres distinta,
Yo no busco cambiarte ni una pieza de tu puzzle
Me gustas completa, to mis requisitos tú los cumples.

Así que piénsalo y verás
Que esta historia justo va a empezar
Deja que esta melodía te convenza
No será un error, te lo puedo jurar...

¿Quién, quién, quién quiere como quieres?
¿Y quién no te recuerda lo que debes?
No te encuentro una pega, perfecta tal como eres
¿Quién? vamos dime quién...
¡NADIE! te juro que nadie, no busques a nadie como yo.
Nena, nadie, nadie como yo.
(oh-oh-oh-oh, yeh)

Yo no sé cómo pasó, no me atreví a planearlo
Eras tal obra de arte que me daba miedo intentarlo,
El miedo no me dejó actuar y me quise conformar
Con tenerte de amiga y verte solo en algún bar.

Veo una notificación y rezo pa que salga tu nombre
Le digo a mi corazón que sea discreto pero no se esconde,
Si quiere meter en tu pecho ni que sea una noche
Quiere contarte to lo que siente pero es muy torpe.

Así que piénsalo y verás
Que esta historia justo va a empezar
Deja que esta melodía te convenza
No será un error, te lo puedo jurar...

¿Quién, quién, quién quiere como quieres?
¿Y quién no te recuerda lo que debes?
No te encuentro una pega, perfecta tal como eres
¿Quién? vamos dime quién...
¡NADIE! te juro que nadie, no busques a nadie como yo.
Nena, nadie, nadie como yo.
(oh-oh-oh-oh, yeh)

Y no, no te ofrezco un cuento de hadas, ni un final de película
Solo te ofrezco mis días y esta vibra ridícula
Pero no me puedes negar que tenemos química
No puedo negar que de tu embrujo soy victima.

[Solo]

Tómate tu tiempo, no hay prisa si es para siempre
Solo quiero que sepas que estoy aquí, pa' tenerte.
(Nadie como yo, oh-oh)
Porque contigo, mami, no necesito plan b.
(Nadie como yo, ye-yeh)
Dime, ¿quién? ¿quién te va a querer así?`
        },
        {
            id: 2,
            title: "Niégalo",
            audioSrc: "audio/02_Niegalo.mp3",
            coverSrc: "Portadas/Niegalo.jpg",
            youtubeUrl: "URL_YOUTUBE_NIEGALO",
            inspiration: "Esta tambien la tenia ya hecha, de hecho esta no le he tocado nada a la letra. Fue un dia que me dio por escribir una bachata y me inspire en cuando bailamos encima del escenario de la feria de Malaga y todas las veces en comedia. Puedes ver como creia que alomejor te gustaba, pero como no era seguro me puse a escribir esto pensando que algun dia pasaria. He querido que la canten un hombre y una mujer y darle un poco vibras de 'Colgando en tus manos' para que si no la bailamos la cantemos tipo karaoke.",
            lyrics: `¿Crees que no me he dado cuenta?,
Que me miras y te pones contenta.
Pues si, me he dado cuenta,
Se escapa una sonrisa cuando te miro de pies a cabeza.

Esta noche soy tu antojo.
Lo sé por cómo te brillan los ojos,
De entre todas a ti te escojo.
Ten cuidao, no soy de amar flojo.

Niégalo, pero me he dado cuenta, 
De esas miraditas que me hechizan y me tientan. 
Niégalo, pero me he dado cuenta, 
Tú quieres que te mire de vuelta. 
Niégalo, pero me he dado cuenta, 
De esas miraditas que me hechizan y me tientan. 
Niégalo, pero me he dado cuenta, 
Rechazas a toda la que se acerca...

(¿Bailas?)
Una propuesta indecente,
Deja que tu movimiento me tiente.
Te juro soy el más competente
De tus pretendientes
Sé que tu también lo sientes.
No te merece toda esta gente
Y aunque no sea diferente,
Prometo amarte más fuerte
Que cualquiera que se acerque.
Por esta noche, déjame quererte...

Esta noche soy tu antojo.
Lo sé por cómo te brillan los ojos,
Te miro de vuelta y me sonrojo.
Ten cuidao, no soy de amar flojo.

Niégalo, pero me he dado cuenta, 
De esas miraditas que me hechizan y me tientan. 
Niégalo, pero me he dado cuenta, 
Te gusta cuando ponen la bachata lenta. 
Niégalo, pero me he dado cuenta, 
De esas miraditas que me hechizan y me tientan. 
Niégalo, pero me he dado cuenta,
Bailamos y te enamoras mientras.

He entrado en tu universo, 
Ahora soy preso de las curvas de tu cuerpo.
Con una noche iluminaste mi cielo,
Con una noche me alzaste en vuelo.
No me sueltes, ya ni veo el suelo,
Haz como que todo es un juego.
Pero no me lo creo,
Sé que me quieres como te quiero.

Niégalo, pero me he dado cuenta, 
De esas miraditas que me hechizan y me tientan. 
Niégalo, pero me he dado cuenta, 
Tu corazón conmigo se incendia. 
Niégalo, pero me he dado cuenta, 
Que soy tu debilidad, aunque lo intentas. 
Niégalo, pero me he dado cuenta, 
Juntos la vida se siente completa.

[Instrumental]

Dime que te atreves,
Vente conmigo, sé que tu quieres.
Por mucho que nuestra historia sea breve,
Mi enamoramiento no es leve.
Deja que te lleve.

(Niégalo...).
Niégalo.
(Niégalo...).
Niégalo.
(Niégalo...).
Niégalo.
(Niégalo...).
Niegaloo, pero mee he dado cuentaaa...`
        },
        {
            id: 3,
            title: "300PPS",
            audioSrc: "audio/03_300PPS.mp3",
            coverSrc: "Portadas/300PPS.png",
            youtubeUrl: "URL_YOUTUBE_300PPS",
            inspiration: "Esta si es completamente nueva, fue de las primera que he hecho. Queria hablar y representar como la vida es mucho mas emocionante cuando estoy contigo, como me aceleras el corazon, y lo bien que me lo paso contigo. Queria un ritmo divertido y que te haga bailar asi que me acorde de la pelicula de los moteros y los surferos cuando cantan en el bar (bruisin for a cruisin)",
            lyrics: `Eeeeestoy que exploto niña vente ya pa acá
Como te despistes te saco a bailar,
¡Vente ya que no aguanto más!
Te vía a dar hasta pa merendar.
Todos los besos posibles que te pueda imaginar
Un besito por aquí y besito por allá 
(muak)
¡Ay niña! me vas a matar
Este amor no lo puedo controlar.

Únete a mi ritmo y dame un dance
Te gusta la canción si acabas despeiná'
Te gusta la canción si no puedes parar
Si el corazón te empieza a palpitar a...

Trescientas pulsaciones por segundo
No sé si eres tú o yo me confundo
Pero eres lo más bonito de este mundo
Hagamos de dama y vagabundo.
Que te veo y me desmayo
Te huelo y me vuelvo a levantar,
Me tienes con las patas colgando
Y el pecho que me va a reventá.

¡Para! que no me dejas pensar
Me tienes el coco frito con tu forma de andar
Quito la cara y no te paro de mirar 
Cierro los ojos y no te paro de pensar

Hoy me he despertado dando un salto mortal
Me acicalo y me perfumo, es un día especial
Hoy veo a mi niña una vez más
Me la via comer y a los demás no les via dejar
Nanananana na na ná de ná
Nanananana na na ¡ná de ná!
Porqueee ella es mía para siempre ya...

Únete a mi ritmo y dame un dance
Te gusta la canción si acabas despeiná'
Te gusta la canción si no puedes parar
Si el corazón te empieza a palpitar a...

Trescientas pulsaciones por segundo
No sé si eres tú o yo me confundo
Pero eres lo más bonito de este mundo
Hagamos de dama y vagabundo.
Que te veo y me desmayo
Te huelo y me vuelvo a levantar,
Me tienes con las patas colgando
Y el pecho que me va a reventá.

Esto es demasiado me estoy mareando
El ritmo no se para y ya voy volando
He pasao las nubes ya hace rato
Supongo que me acabaré estrellando.
(¡Crash!)

Trescientas pulsaciones por segundo
No sé si eres tú o yo me confundo
Pero eres lo más bonito de este mundo
Hagamos de dama y vagabundo.
Que te veo y me desmayo
Te huelo y me vuelvo a levantar,
Me tienes con las patas colgando.
¡Y el pecho me ha reventao ya!

Nanananana na na ná de ná
Nanananana na na ¡ná de ná!
¡Trescientas por segundooooo!
¡Voy a explotar!`
        },
        {
            id: 4,
            title: "Esa Niña",
            audioSrc: "audio/04_EsaNiña.mp3",
            coverSrc: "Portadas/EsaNiña.png",
            youtubeUrl: "URL_YOUTUBE_ESANIÑA",
            inspiration: "Esta la tenia medio empezada, pero la he cambiado bastante y le he dado un estilo mas parecido a Walls porque lo asocio mucho a nosotros. Habla de que me tienes loco y que haria cualquier cosa por ti, he intentado que parezca medio bipolar para representar lo loco que me tienes.",
            lyrics: `Te besé, dejaste tu marca en mi piel,
¿Ahora qué?, ni siquiera me tengo en pie,
Ay bebé, dime por favor que hacer.
Pa no pasar otra noche pensándote
Poder escapar por fin de tu red
Por favor cálmame esta sed, de ti

Me tienes loco ya, te veo por tos laos
Deja de embolica, y quédate a mi lao,
Si con una mirada me dejas kao
Me tienes loco y trastocao.

Lo sé seguro, esto es otra cosa
Desde que te vi, siento mariposas,
Tengo que tener cuidao, sé que eres peligrosa
No puedo evitarlo, eres preciosa.

Si eres veneno, lo trago y fin
Pues por ti muero feliz,
Quiero ser los enanitos de tu jardín
Y tú del mío serás el jazmín,
De mi baraja eres la reina y comodín
No tengo nada que hacer contra ti.
(No tengo nada que hacer...)

Esa niña me tiene mal,
Esa niña no es normal,
Con esa niña me quiero casar,
Esa niña me va a matar...
Pero qué más da, qué más da,
Si con ella...

...Un día es, una vida de ensueño
Y una vida es, to lo que le pido al cielo,
Niña déjame, ser el único y primero
Te despertaré, con un beso y un te quiero.

Cruzaré todas mis líneas rojas
Por darte to lo que se te antoja,
Callaré lo que digan esas bocas
Y seguiré aquí aunque me rompas.

Conmigo no lloras mi niña bella
Aunque seas una diosa y yo un pieza,
Me parto el alma por tenerte cerca
Y comerte de los pies a la cabeza.

[Instrumental]

Lo sé seguro, esto es otra cosa
Desde que te vi, siento mariposas,
Tengo que tener cuidao, sé que eres peligrosa
No puedo evitarlo, eres preciosa.

Si eres veneno, lo trago y fin
Pues por ti muero feliz,
Quiero ser los enanitos de tu jardín 
Y tú del mio serás el jazmín,
De mi baraja eres la reina y comodín
No tengo nada que hacer contra ti.

Esa niña, niña,
Esa niña es para mí.
A esa niña, niña,
A esa niña todo sí.
Esa niña, niña,
Esa niña es para mí.
Niña, niña,
Nadie se iguala a ti.
(Niña, vente conmigo...)

[Solo]`
        },
        {
            id: 5,
            title: "El Niño de los Claveles",
            audioSrc: "audio/05_ElNiñoDeLosClaveles.mp3",
            coverSrc: "Portadas/ElNiñoDeLosClaveles.png",
            youtubeUrl: "URL_YOUTUBE_NIÑOCLAVELES",
            inspiration: "Esta es completamente nueva menos alguna parte. Queria hacer esta cancion tipo los delinqüentes y con la tematica de los claveles para hacer referencia a las pequenas cosas que me gustan de ti y de estar contigo y hacer tambien referencia a la feria en la que empezamos a ser algo.",
            lyrics: `Hoy me he levantao con las sábanas pegás,
Con el gusto de tu pelo enredao en mi boca
El sol se deja ver por los huecos de la persiana
Y ahí me tienes, con la sonrisilla tonta

Por su culpa estoy fuera de mis cabales
Que voy vestio de carnavales pa la feria
Esa niña me ha cambiao to los planes
Ahora solo quiero ser, surfista de su mareas.

Voy a jartá a esa niña de claveles por ser la más bonita,
Voy a darle la vuelta al sol por darle lo que me pida.
Es que me tiene enchochao, to el día a su verita,
Soy el niño de los claveles y ella mi favorita.

Me encanta cómo te pierdes haciendo cositas pa mí,
Y cuando te pones el lipcombo antes de salir,
Aunque sabes perfectamente que poco va aguantar
Te quito a besos lo que tenias de arreglá.

Las noches de parque y mandalas bajo la luna
Buscar en el cielo constelacione y cometas,
Cada momento contigo es una cosa única
Por eso quiero mil noches más de estas.

Voy a jartá a esa niña de claveles por ser la más bonita,
Voy a darle la vuelta al sol por darle lo que me pida.
Es que me tiene enchochao, to el día a su verita,
Soy el niño de los claveles y ella mi favorita.

¡Ay, mi niña de los ojitos café!
Me tiene sin dormir hasta el amanecer,
La que sonríe y empieza a florecer
¡A ti, que nunca te falte un clavel!

Que venga, que venga, que venga a bailar,
Que esta noche la mar se va a enamorar,
De esa niña y su movimiento de pies,
¡De esa que nunca le falta un clavel!

Ahora grito por las aceras que eres mía,
Nos peleamos por quién quiere más al otro.
Tengo un trato, dime qué te parecería:
Ni tú ni yo, ¿mejor un nosotros?

Voy a jartá a esa niña de claveles por ser la más bonita,
Voy a darle la vuelta al sol por darle lo que me pida.
Es que me tiene enchochao, to el día a su verita,
Soy el niño de los claveles y ella mi favorita.

Voy a jartá a esa niña de claveles por ser la más bonita,
Voy a darle la vuelta al sol por darle lo que me pida.
Es que me tiene enchochao, to el día a su verita,
Soy el niño de los claveles y ella mi favorita.

Soy el niño de los claveles, reparto besos y alegría,
Soy el niño que como le guste te hace una poesía.
Súbete en el coche y escapémonos toa una via
Vayámonos en dirección prohibida.
(¡Olé!)`
        },
        {
            id: 6,
            title: "Conexión Celestial",
            audioSrc: "audio/06_ConexionCelestial.mp3",
            coverSrc: "Portadas/ConexionCelestial.png",
            youtubeUrl: "URL_YOUTUBE_CONEXIONCELESTIAL",
            inspiration: "Esta cancion es completamente nueva tambien, queria hacerla con estilo rockstar/modo diablo por que se que te encanta, pero al final ha salido esta mezcal rara, la verdad es que me gusta, ademas es un dueto asi que podemos cantarla los dos. La cancion es un fronteo de que somos los mejores y nuestra relacion esta muy por encima de cualquier otra, es decir, tenemos una conexion celestial.",
            lyrics: `Yeah, yeah

[Beat: Trap duro con coro angelical de fondo, hi-hats rápidos, 808 marcado]
Mírenla, mírenla, mírenla cuando pasa
La que cuando camina baila descalza
Esa es mi diosa y si algo le pasa
A puño descubierto, la vengo como Akaza

La gravedad no la amarra, ajena a leyes
La preferida del sol, la reina de reyes,
Te entiendo es normal que la desees
Pero ella es mía y tú no la mereces

Lo de ustedes es montaje, lo nuestro es religión
Conexión celestial, conexión imposible
Energía tan divina que provoca una explosión
Somos los elegidos, amor inextinguible

Nacida del fruto del edén
Criada por la serpiente del diablo
Que te reciten en mi réquiem
Y con mi herencia te hagan un retablo

Que miren, que miren, no pueden tocar
Esto es otro nivel, conexión celestial
Ella es una diosa y yo soy inmortal
Se abre el puto cielo cuando vamos a pasar

Que miren, que miren, no pueden tocar
Esto es otro nivel, conexión celestial
Ella es una diosa y yo soy inmortal
Se abre el puto cielo cuando vamos a pasar

Nos buscan el fallo, nos apuntan los flashes
Estos ni me rozan, no alcanzan mi clase
Sus miradas se sienten incesantes
Van a estrellarse si no miran pa'lante

Te crees muy bueno, pero date cuenta
Este ajedrez se acaba si muere la reina
Hay muchos más peces, pero ninguno se acerca
A la talla de mi silueta

[INSTRUMENTAL]

Por ti que caiga el Olimpo y to sus mandatos
Soy tu único dios, que se jodan sus mitos
Que me condenen por blasfemo e ingrato
Mi única fé es el evangelio de tus ojitos

Pues yo ignoro al jurado, me río de la condena
Tu ley es la única que corre por mis venas
Que maldigan mi nombre y me echen de la tierra
Estar juntos es lo único que me llena

Pacto de sangre...
Juramento eterno...
Cielo e infierno...

Que miren, que miren, no pueden tocar (¡Nah, nah!)
Esto es otro nivel, conexión celestial (celestial...)
Ella es una diosa y yo soy inmortal
Se abre el puto cielo cuando vamos a pasar

Que miren, que miren, no pueden tocar (¡No!)
(¡Que miren!)
(¡Ajá!)
Esto es otro nivel, conexión celestial (yeah...)
(¡Celestial, baby!)
Ella es una diosa y yo soy inmortal
(¡Inmortal!)
Se abre el puto cielo cuando vamos a pasar
¡Cuando vamos a pasar!

...Celestial...`
        },
        {
            id: 7,
            title: "No Me Basta",
            audioSrc: "audio/07_NoMeBasta.mp3",
            coverSrc: "Portadas/NoMeBasta.png",
            youtubeUrl: "URL_YOUTUBE_NOMEBASTA",
            inspiration: "Esta cancion es completamente nueva tambien. Queria hacer una tipo Pablo Alboran o Benson Boone, de esas que te encanta cantar a toda voz, y ha salido esto. Habla de cuanto te quiero y de que no me basta con tenerte para siempre aunque sean todos los segundos del dia porque siempre quiero mas de ti.",
            lyrics: `Náufrago en tierra de nadie,
A un universo de la orilla.
De repente, todo arde,
Pues lo aguardan tus caricias.

De todos los extraños que he sido,
Me quedo con el hombre en tu reflejo.
Me devuelves sin querer los latidos,
Y haces que se detenga mi tiempo.

Si te marcharas, mi mundo se hace añicos,
Yo, que antes era un reino independiente.
Pero llegó tu asedio y plantaste la bandera
Y ahora no soy capaz de vivir sin tenerte.

Se me olvidan promesas y otros tratos,
Mi viejo mundo se detuvo para mí.
Sin ti pierdo la cordura a ratos,
Mi norte es la curva de tu espalda al dormir.

Se me ha clavado tu eco en las venas,
Y tu ausencia me atormenta en las noches.
Quiero de ese milagro que me envenena,
Quiero mis apellidos junto a tu nombre.
(¡SOY ADICTO...!)

¡A ESTA FORMA DE QUERERTE, Y QUERERTE MATAR!
¡QUE SE ROMPA EL MAR, QUE NO ME BASTA!
¡Y NO ME BASTA, NO ME BASTA, POR FAVOR DAME MÁS!
¡QUE TE QUIERO A MI LADO AÚN HABIENDO ROBADO TODAS LAS HORAS POSIBLES AL SOL...!
...y aún así ¡NO ME BASTA!

Yo era un perseguidor de futuros rotos
Buscaba algo que ahora noto
Llegaste tú y me abriste los ojos
Creaste catedrales de mis escombros.

Y POR ESO AHORA... ¡SOY ADICTO...!

¡A ESTA FORMA DE QUERERTE, Y QUERERTE MATAR!
¡QUE SE ROMPA EL MAR, QUE NO ME BASTA!
¡Y NO ME BASTA, NO ME BASTA, POR FAVOR DAME MÁS!
¡QUE TE QUIERO A MI LADO AÚN HABIENDO ROBADO TODAS LAS HORAS POSIBLES AL SOL...!
...y aún así ¡NO ME BASTA!`
        },
        {
            id: 8,
            title: "Polilla en Zapatillas",
            audioSrc: "audio/08_PolillaEnZapatillas.mp3",
            coverSrc: "Portadas/PolillaEnZapatillas.png",
            youtubeUrl: "URL_YOUTUBE_POLILLAENZAPATILLAS",
            inspiration: "Totalmente nueva y la segunda que mas me gusta del album. Me inspire claramente en Space Surimi porque me acuerdo de ti y esos conciertos y esa feria juntos, ademas, es super divertida y tiene un ritmazo, es justo lo que queria plasmar. Espero que tambien te guste.",
            lyrics: `Me matan sus acai y yo masoquista
Ella es franca y a mi me dicta-mina
Que no me acerca a las niñas
Porque ella es una vampira
Y como me descuide me asesina

Me va a chupa la sangre
Me voa queda fiambre,
"Caperucita soy tu abuela, abre"
Me dice mientra muerde mis carne,
¿Tiene hambre? tranquila que he pedio ramen.
Complejo de chino, búscame en el zapato
To el día a lo mío, complejo de gato
Complejo de bicho ganando la chámpion.
Soy mas feli, no hice bachillerato

Voy con la cara de Rambo
Y el pelaito guapo,
La peluquera esta de infarto
No tengo voz, pero le canto
Pa camelarla, ¡yo le canto!

Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla? pues yo una polilla en zapatillas.
Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla? pues yo una polilla en zapatillas.

Tu, Carmen, eres un cisne
Y no te celo de esos chistes,
Pero mas vale que ni uno se te arrime
Cuando te acérque por el Lidl

O me convierto en TAZ, Looney Toon
Que se asegure las piernas, Prosegur
Les huele el sobaco, échense Ambipur
Soy yo el que le da (bum bum bum)

Sufre mas que Gaza
Traigo mordaza y gasa
Eso te pasa por superar la tasa
Ella fácil te rechaza
A mi me abraza y nos vamo a la terraza
Dame la llave de tu casa
Que conmigo tu te casa, por la raza
Tengo la taza por el asa
Lo sabe hasta Mufasa
Le pongo tu nombre a la plaza

Donde los niños corretean
Veo el partio desde la azotea
Son felices no tienen ni idea
Yo mas, que te tengo a mi vera

"Anda ya, me he puesto flamenco" [se ríe]

Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla? pues yo una polilla en zapatillas.
Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla? pues yo una polilla en zapatillas.

"Oye, Carmen... que se me ha olvida'o... ¿el ramen lo querías de pollo o de ternera? Es que en el Glovo no me sale el de pistacho... bueno, da igual, te pido el de pollo. Venga, hasta ahora. Un besito guapa."

Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla? pues yo una polilla en zapatillas.
Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla? pues yo una polilla en zapatillas.

(level complete)`
        },
        {
            id: 9,
            title: "Qué Guapa Estás",
            audioSrc: "audio/09_QueGuapaEstas.mp3",
            coverSrc: "Portadas/QueGuapaEstas.jpg",
            youtubeUrl: "URL_YOUTUBE_QUEGUAPAESTAS",
            inspiration: "Mi favorita, es completamente nueva y la que mas me gusta sin duda, no se lo que tiene pero esta guapa. Queria hacer una cancion muy explicita y hablando del deseo carnal pero con una base super chill y romantica, al final salio esto, no es tan explicita pero me encanta el resultado final.",
            lyrics: `Hmmmm...
Puff... qué guapa estás.
Ven, que te voy a comer, to' lo de atrás.
Va, mírame, que te quiero ver al final...
Esa cara de diosa que pones cuando la ma...
Qué guapa estás, joder, qué guapa estás,
(Qué guapa estás, joder, qué guapa estás.)

(uh, yeah)
Qué guapa estás, recién duchá,
Despeiná, arreglá, o con la bata suelta.
Cuando te peinas el butterfly cat
Y me miras con cara de gata hambrienta.
Joder, eres peor que la coca,
Me tienes en vilo, enganchao a tu boca.
Tengo mono de ti, de esa loca,
De hacerte esas cositas que no se nombran.(asi)
Y aunque no digas na', tu cuerpo habla,
Me dice "ven pa' acá, vamos pa la cama"...

Y yo digo síii, porque no me puedo aguantar,
Es ver tus curvas me pongo a delirar.
De resistir no soy capaz,
A la tentación de verte pasar,
Esa sustancia la necesito catar
Necesito un bocado de ese manjar.

Siendo sincero, uno de cada dos sueños contigo es obsceno
No lo niego, te imagino delante desvistiéndote lento.
Acercándome lento, besandote lento
Apretando tu cuello mientras te siento.

El otro sueño, sin embargo, son unos niños correteando
Nos miramos, y sin palabras sabemos lo que pensamos.
Que siempre estuvimos predestinados
Dos putos locos que se encontraron.

Es una mezcla, de baba cayendo de mi boca al tenerte cerca
Y una casa, la mesa llena, pasar juntos ochenta nochebuenas.

Puff... qué guapa estás.
Ven, que te voy a comer, to' lo de atrás.
Va, mírame, que te quiero ver al final...
Esa cara de diosa que pones cuando la ma...
Qué guapa estás, joder, qué guapa estás,
(Qué guapa estás, joder, qué guapa estás.)

Quiero despertar y ver tu cara
Manchada del sol que entra por la ventana.
Quiero despertar con cicatrices en la espalda
Por tus colmillos en la madrugada.
Después que la noche nos desvistiera,
Solo quedan sábanas, tu olor y ojeras.
Querías hacerlo a oscuras pa' que no te viera,
Pero cuando te miro solo pienso...
Qué guapa estás, joder, qué guapa estás,
(Qué guapa estás, joder, qué guapa estás.)

Para mí eres todo, mi vicio y mi pecado,
Cada noche, un regalo envenenado.
Tu mano en mi pelo, tu gloss en mi piel
Moratones y besos, cuerpo ajedrez,
Me escogió el diablo y probé su miel
Rechacé el trato pero es mi rehén.
Qué guapa está cuando se entrega entera,
Qué guapa mi loba
Cuando hasta los vecinos se enteran.

Puff... qué guapa estás.
Ven, que te voy a comer to' lo de atrás.
Va, mírame, que te quiero ver al final...
Esa cara de diosa que pones cuando la ma...
Qué guapa estás, joder, qué guapa estás...
(Qué guapa estás, joder, qué guapa estás...)
(Joder, qué guapa estás...)`
        },
        {
            id: 10,
            title: "Me Duele",
            audioSrc: "audio/10_MeDuele.mp3",
            coverSrc: "Portadas/MeDuele.png", // ¡Corregido! Asegúrate de que este archivo exista
            youtubeUrl: "URL_YOUTUBE_MEDUELE",
            inspiration: "Completamente nueva, es la mas personal, queria hablar de como me molesta que otros te hayan tenido y no te hayan valorado, y de que si hubiese llegado un poco antes podria haberte ahorrado esos dolores. Espero que te guste.",
            lyrics: `Me duele saber todo lo que te hicieron
Las veces que lloraste y nadie lo vio,
Como otros te tuvieron y no te quisieron,
Pero tranquila que eso lo cambio yo.

Me duele que no vieran lo que veo cada día,
Todo lo que vales y lo poco que te dieron.
Pero juro sanarte cada herida,
Darte el triple de lo que los demás no pudieron.

Después de ver lo que perdieron te querrán reclamar
Pero ya estas conmigo y eso no va cambiar,
Vales mucho más de lo que te hicieron creer
Eres fácil de amar, aún mas de querer.

Si me paso de intenso avísame,
Pero tengo planeados veinte años junto a tu piel
No soy perfecto, nena lo sé
Pero daré todo porque tengas una vida de diez.

Me he enamorado mas con cada canción que te hice
Porque quise mostrarte todo lo que llevo dentro,
Quiero decir lo que me callé y gritar lo que dije
Expresarte de mil y una formas lo que te quiero.

En los días buenos, malos, grises o de sol,
No importa el clima mientras estés tú,
Cada noche le agradezco a lo que sea que nos juntó,
Y le pido que nunca dejes de darme tu luz.

Me duele no haber estado antes en tu vida
Te podría haber ahorrado tantos dolores,
Quizá mi forma de amar tampoco es perfecta
Pero daré todo de mi para que no me llores.

Si me echas volveré una y otra vez
De mi, tan fácil no te desprendes,
Te construiré la vida con la que siempre soñaste
Daré todo de mi hasta que la muerte me lleve.

Sé que otros te hicieron dudar de ti misma,
Que te dejaron cicatrices que siguen marcadas,
Pero quiero que las dejes a mi vista
Y te juro Carmen que te ayudaré a curarlas.

Enamorado de ti, mi niña, de todo lo que eres,
De lo que fuiste y de lo que serás,
Que estés a mi lado es todo lo que quiero,
Y que ni una lagrima te vuelva a tocar.`
        }
    ];

    // 2. ELEMENTOS DEL DOM
    const tracklistContainer = document.getElementById('tracklist-container');
    const songModalEl = document.getElementById('songModal');
    const songModal = new bootstrap.Modal(songModalEl);
    const modalTitle = document.getElementById('modalSongTitleLabel');
    const modalAudioPlayer = document.getElementById('modalAudioPlayer');
    const modalDownloadBtn = document.getElementById('modalDownloadBtn');
    const modalLyricsContainer = document.getElementById('modalLyricsContainer');

    // 3. RENDERIZADO DINÁMICO
    function renderTracklist() {
        tracklistContainer.innerHTML = ''; // Limpiamos el spinner de carga
        songs.forEach(song => {
            const songCardHTML = `
                <div class="col-12">
                    <div class="song-card shadow-sm mb-5" role="button" tabindex="0" data-song-id="${song.id}">
                        <div class="row g-0 align-items-center">
                            <div class="col-md-3 text-center p-3">
                                <a href="${song.youtubeUrl || '#'}" target="_blank" rel="noopener noreferrer" class="image-link" aria-label="Ver video de ${song.title} en YouTube" onclick="event.stopPropagation()">
                                    <img src="${song.coverSrc}" alt="Portada de ${song.title}" class="song-cover img-fluid" loading="lazy">
                                </a>
                            </div>
                            <div class="col-md-9">
                                <div class="card-body">
                                    <h2 class="card-title">${song.id}. ${song.title}</h2>
                                    <p class="card-text song-inspiration">${song.inspiration}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            tracklistContainer.insertAdjacentHTML('beforeend', songCardHTML);
        });
    }

    // 4. MANEJO DE EVENTOS
    tracklistContainer.addEventListener('click', (event) => {
        const songCard = event.target.closest('.song-card');
        if (!songCard) return;

        const songId = songCard.dataset.songId;
        const selectedSong = songs.find(s => s.id == songId);

        if (selectedSong) {
            modalTitle.textContent = `${selectedSong.id}. ${selectedSong.title}`;
            modalAudioPlayer.src = selectedSong.audioSrc;
            modalDownloadBtn.href = selectedSong.audioSrc;
            modalDownloadBtn.download = `${selectedSong.id}. ${selectedSong.title}.mp3`;
            modalLyricsContainer.textContent = selectedSong.lyrics;
            songModal.show();
        }
    });

    // Evento para detener el audio cuando el modal se cierra
    songModalEl.addEventListener('hidden.bs.modal', () => {
        modalAudioPlayer.pause();
        modalAudioPlayer.currentTime = 0;
    });

    // 5. INICIALIZACIÓN
    renderTracklist();
});