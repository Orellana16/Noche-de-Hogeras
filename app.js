// Se ejecuta cuando el DOM (la estructura de la página) está completamente cargado.
document.addEventListener('DOMContentLoaded', () => {

    // 1. DATA: Toda la información de las canciones en un solo lugar.
    const songs = [
        {
            id: 1,
            title: "¿Quién?",
            audioSrc: "Audio/¿Quién.mp3",
            coverSrc: "Portadas/¿Quien.png",
            youtubeUrl: "URL_YOUTUBE_QUIEN",
            inspiration: "Esta canción la escribi antes de esta contigo. La he modificado un poco para que este mas chuli, pero basicamente la he escrito pensando en cuando aun no eramos novios y yo estaba deseando lanzarme pero no me atrevia, solo te queria decir que nadie te iba a quere como yo te queria y te quiero. He intentado darle un estilo de Paulo Londra porque se lo que te gusta la escena argentina.",
            lyrics: `(Yeah)
¿Dime, quién?
Dime, ¿quién?

En un millón de caras, te reconozco por la risa
Se que has entrado al local solo por la brisa,
Quiero estar de tu mano siempre que tú pisas
Di que sí, que como camarón me parto la camisa.

Y puede que haya otros con más labia y mejor pinta
Pero parece que ninguno ve que eres distinta,
Yo no busco cambiarte ni una pieza de tu puzzle
Me gustas completa, to mis requisitos tú los cumples.

Así que piénsalo y verás
Que esta historia justo va a empezar
Deja que esta melodía te convenza
No será un error, te lo puedo jurar...

Dime quién, quién, quién te ve la magia dentro,
Y quién te besa hasta los defectos.
Yo no te cambio un trazo, perfecta en mi universo,
Dime, ¿quién?
Nadie como yooo
Nena, nadie, eh-eh, nadie como yo.
oh-oh-oh-oh, yeh

Yo no sé cómo pasó, no me atreví a planearlo
Eras tal obra de arte que me daba miedo intentarlo,
El miedo no me dejó actuar y me quise conformar
Con tenerte de amiga y verte solo en algún bar.

Veo una notificación y rezo pa que salga tu nombre
Le digo a mi corazón que sea discreto pero no se esconde,
Se quiere meter en tu pecho ni que sea una noche
Quiere contarte to lo que siente pero es muy torpe.

Así que piénsalo y verás
Que esta historia justo va a empezar
Deja que esta melodía te convenza
No será un error, te lo puedo jurar...

Dime quién, quién, quién te ve la magia dentro,
Y quién te besa hasta los defectos.
Yo no te cambio un trazo, perfecta en mi universo,
Dime, ¿quién?
Nadie como yooo
Nena, nadie, eh-eh, nadie como yo.
oh-oh-oh-oh, yeh

Y no, no te ofrezco un cuento de hadas, ni un final de película
Solo te ofrezco mis días y esta vibra ridícula
Pero no me puedes negar que tenemos química
No puedo negar que de tu embrujo soy victima.

Tómate tu tiempo, no hay prisa si es para siempre
Solo quiero que sepas que estoy aquí, pa' tenerte.
(Nadie como yo, oh-oh)
Porque contigo, mami, no hay plan B.
(Nadie como yo, ye-yeh)
Dime, ¿quién? ¿Quién te va a querer así?`
        },
        {
            id: 2,
            title: "Niégalo",
            audioSrc: "Audio/Niégalo.mp3",
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

Dime que te atreves,
Vente conmigo, sé que tu quieres.
Por mucho que nuestra historia sea breve,
Mi enamoramiento no es leve.
Deja que te lleve.

Niegaloo, pero mee he dado cuentaaa...`
        },
                {
            id: 3,
            title: "El Niño de los Claveles",
            audioSrc: "Audio/El Niño de los Claveles.mp3",
            coverSrc: "Portadas/ElNiñoDeLosClaveles.png",
            youtubeUrl: "URL_YOUTUBE_NIÑOCLAVELES",
            inspiration: "Esta es completamente nueva menos alguna parte. Queria hacer esta cancion tipo los delinqüentes y con la tematica de los claveles para hacer referencia a las pequenas cosas que me gustan de ti y de estar contigo y hacer tambien referencia a la feria en la que empezamos a ser algo.",
            lyrics: `Hoy me he levantao con las sábanas pegás,
Con el gusto de tu pelo enredao en mi boca.
El sol se deja ver por los huecos de la persiana,
Y ahí me tienes, con la sonrisilla tonta.

Por su culpa estoy fuera de mis cabales,
Que voy vestio de carnavales pa la feria.
Esa niña me ha cambiao to los planes,
Ahora solo quiero ser, surfista de sus mareas.

Voy a jartá a esa niña de claveles por ser la más bonita,
voy a darle la vuelta al sol por darle lo que me pida.
Es que me tiene enchochao, to el día a su verita,
soy el niño de los claveles y ella mi favorita.

Me encanta cómo te pierdes haciendo cositas pa mí,
y cuando te pones el lipcombo antes de salir,
aunque sabes perfectamente que poco va aguantar
te quito a besos lo que tenias de arreglá.
Las noches de parque y mandalas bajo la luna
buscar en el cielo constelacione y cometas,
cada momento contigo supera to mis sueños
por eso quiero mil noches más de estas.

Voy a jartá a esa niña de claveles por ser la más bonita,
voy a darle la vuelta al sol por darle lo que me pida.
Es que me tiene enchochao, to el día a su verita,
soy el niño de los claveles y ella mi favorita.

¡Ay, mi niña de los ojitos café!
Me tiene sin dormir hasta el amanecer,
la que sonríe y empieza a florecer
¡a ti, que nunca te falte un clavel!

Que venga, que venga, que venga a bailar,
que esta noche la mar se va a enamorar,
de esa niña y su movimiento de pies,
¡de esa que siempre lleva un clavel!

Ahora grito por las aceras que eres mía,
nos peleamos por quién quiere más al otro.
Tengo un trato, dime qué te parecería:
ni tú ni yo, ¿mejor un nosotros?

Voy a jartá a esa niña de claveles por ser la más bonita,
voy a darle la vuelta al sol por darle lo que me pida.
Es que me tiene enchochao, to el día a su verita,
soy el niño de los claveles y ella mi favorita.

Voy a jartá a esa niña de claveles por ser la más bonita,
voy a darle la vuelta al sol por darle lo que me pida.
Es que me tiene enchochao, to el día a su verita,
soy el niño de los claveles y ella mi favorita.`
        },
        {
            id: 4,
            title: "300PPS",
            audioSrc: "Audio/300PPS.mp3",
            coverSrc: "Portadas/300PPS.png",
            youtubeUrl: "URL_YOUTUBE_300PPS",
            inspiration: "Esta si es completamente nueva, fue de las primera que he hecho. Queria hablar y representar como la vida es mucho mas emocionante cuando estoy contigo, como me aceleras el corazon, y lo bien que me lo paso contigo. Queria un ritmo divertido y que te haga bailar asi que me acorde de la pelicula de los moteros y los surferos cuando cantan en el bar (bruisin for a cruisin)",
            lyrics: `Eeeeestoy que exploto niña vente ya pa acá
Como te despistes te saco a bailar,
¡Vente ya que no aguanto más!
Te vía a dar hasta pa merendar.
Todos los besos posibles que te pueda imaginar
Un besito por aquí y besito por allá
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

¡Para!
Que no me dejas pensar
Me tienes el coco frito con tu forma de andar,
Quito la cara y no te paro de mirar 
Cierro los ojos y no te paro de pensar.

Hoy me he despertado dando un salto mortal
Me acicalo y me perfumo, es un día especial
Hoy veo a mi niña una vez más
Me la via comer y a los demás no les via dejar,
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
Supongo que me acabaré estrellandooo.

Trescientas pulsaciones por segundo
No sé si eres tú o yo me confundo
Pero eres lo más bonito de este mundo
Hagamos de dama y vagabundo.
Que te veo y me desmayo
Te huelo y me vuelvo a levantar,
Me tienes con las patas colgando.
¡Y el pecho me ha reventao ya!

(nananananannananaa)
¡Trescientas por segundooooo!
¡Voy a explotar!`
        },
        {
            id: 5,
            title: "Esa Niña",
            audioSrc: "Audio/Esa Niña.mp3",
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
y una vida es, to lo que le pido al cielo,
niña déjame, ser el único y primero
te despertaré, con un beso y un te quiero.

Cruzaré todas mis líneas rojas
por darte to lo que se te antoja,
callaré lo que digan esas bocas
y seguiré aquí aunque me rompas.

conmigo no lloras mi niña bella
aunque seas una diosa y yo un pieza,
me parto el alma por tenerte cerca
y comerte de los pies a la cabeza.

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

Esa niña, niña,
Esa niña es para mí.
A esa niña, niña,
A esa niña todo sí.
Esa niña, niña,
Esa niña es para mí.
Niña, niña,
Nadie se iguala a ti.
(Niña, vente conmigo...)`
        },
        {
            id: 6,
            title: "No Me Basta",
            audioSrc: "Audio/No Me Basta.mp3",
            coverSrc: "Portadas/NoMeBasta.png",
            youtubeUrl: "URL_YOUTUBE_NOMEBASTA",
            inspiration: "Esta cancion es completamente nueva tambien. Queria hacer una tipo Pablo Alboran o Benson Boone, de esas que te encanta cantar a toda voz, y ha salido esto. Habla de cuanto te quiero y de que no me basta con tenerte para siempre aunque sean todos los segundos del dia porque siempre quiero mas de ti.",
            lyrics: `Náufrago en tierra de nadie,
a un universo de la orilla.
De repente, todo arde,
pues lo aguardan tus caricias.

De todos los extraños que he sido,
me quedo con el hombre en tu reflejo.
Me devuelves sin querer los latidos,
y haces que se detenga mi tiempo.

Si te marcharas, mi mundo se hace añicos,
yo, que antes era un reino independiente.
Pero llegó tu asedio y plantaste la bandera
y ahora no soy capaz de vivir sin tenerte.

Se me olvidan promesas y otros tratos,
mi viejo mundo se detuvo para mí.
Sin ti pierdo la cordura a ratos,
mi norte es la curva de tu espalda al dormir.

Se me ha clavado tu eco en las venas,
y tu ausencia me atormenta en las noches.
Quiero de ese milagro que me envenena,
quiero mis apellidos junto a tu nombre.
¡SOY ADICTO...!

¡A ESTA FORMA DE QUERERTE, Y QUERERTE MATAR!
¡QUE SE ROMPA EL MAR, QUE NO ME BASTA!
¡Y NO ME BASTA, NO ME BASTA, POR FAVOR DAME MÁS!
¡QUE TE QUIERO A MI LADO AUN HABIENDO ROBADO TODAS LAS HORAS POSIBLES AL SOL...!
...y aún así ¡NO ME BASTA!

Yo era un perseguidor de futuros rotos
Buscaba algo que ahora noto
Llegaste tú y me abriste los ojos
Creaste catedrales de mis escombros.

Y POR ESO AHORA... ¡SOY ADICTO...!

¡A ESTA FORMA DE QUERERTE, Y QUERERTE MATAR!
¡QUE SE ROMPA EL MAR, QUE NO ME BASTA!
¡Y NO ME BASTA, NO ME BASTA, POR FAVOR DAME MÁS!
¡QUE TE QUIERO A MI LADO AUN HABIENDO ROBADO TODAS LAS HORAS POSIBLES AL SOL...!
...y aún así ¡NO ME BASTA!`
        },
        {
            id: 7,
            title: "Polilla en Zapatillas",
            audioSrc: "Audio/Polilla en Zapatillas.mp3",
            coverSrc: "Portadas/PolillaEnZapatillas.png",
            youtubeUrl: "URL_YOUTUBE_POLILLAENZAPATILLAS",
            inspiration: "Totalmente nueva y la segunda que mas me gusta del album. Me inspire claramente en Space Surimi porque me acuerdo de ti y esos conciertos y esa feria juntos, ademas, es super divertida y tiene un ritmazo, es justo lo que queria plasmar. Espero que tambien te guste.",
            lyrics: `"A vé, que no me aclaro... ponle ahí el beat de los marcianitos"

Me matan sus acai y yo masoquista
ella es franca, y a mi me dicta-mina,
que no me acerque a las niñas
porque ella es una vampira
y como me descuide me asesina
Me va a chupa la sangre, me voa queda fiambre,
caperucita soy tu abuela, abre
me dice mientra muerde mis carne.
¿Tiene hambre?, 
tranquila que pido dos kilos ramen.

Complejo de chino, búscame en el zapato
to el día a lo mío, complejo de gato
Complejo de bicho ganando la chámpion.
soy mas feli, no hice bachillerato.

Voy con la cara de rambo y el pelaito guapo,
la peluquera esta de infarto
no tengo voz, pero le canto
pa camelarla, ¡yo le canto!

Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla?
pues yo una polilla en zapatillas.
Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla?
pues yo una polilla en zapatillas.

Mi carmen es una muakasita...
Y yo soy una polilla...
Dentro de poco tendremos una familia.
si, la familia muakasita...

Asi que mas vale que ni uno se te arrime
cuando te acérque por el lidel.
o me convierto en TAZ, looney tun
que se asegure las piernas, prosegur
que os huele el sobaco a ambipur
soy yo el que le da (BUM BUM BUM!)

sufren mas que Gaza
traigo mordaza y gasa
eso te pasa por superar la tasa,
ella fácil te rechaza
a mi me abraza y nos vamo a la terraza,
dame la llave de tu casa
que conmigo tu te casa, por la raza,
tengo la taza por el asa
lo sabe hasta Mufasa
le pongo tu nombre a la plaza.

donde los niños corretean
veo el partio desde la azotea
son felices no tienen ni idea

"Anda ya, me he puesto flamenco" jajaja

Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla?
pues yo una polilla en zapatillas.
Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla?
pues yo una polilla en zapatillas.

"Oye, Carmen... que se me ha olvida'o... ¿el ramen lo querías de pollo o de ternera? Es que en el Glovo no me sale el de pistacho. Bueno, da igual, te pido el de pollo. Venga, hasta ahora, un besito guapa"

Los muakasitos hacen mua ka ka, ka ka kaka
(mua ka ka, ka ka kaka).
Las polillas hacen ch ch ch, ch ch tch
(ch ch ch, ch ch tch).
y la familia muakasita como hace?!
y la familia muakasita como hace?!
(muakach, ch ch tch).
(muakach, ch ch tch).

"La ultima, la ultima"

Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla?
pues yo una polilla en zapatillas.
Ay que maravilla mas sencilla esa chiquilla como brilla
¿Es una bombilla?
pues yo una polilla en zapatillas.
`
        },
                {
            id: 8,
            title: "Conexión Celestial",
            audioSrc: "Audio/Conexion Celestial.mp3",
            coverSrc: "Portadas/ConexionCelestial.png",
            youtubeUrl: "URL_YOUTUBE_CONEXIONCELESTIAL",
            inspiration: "Esta cancion es completamente nueva tambien, queria hacerla con estilo rockstar/modo diablo por que se que te encanta, pero al final ha salido esta mezcal rara, la verdad es que me gusta, ademas es un dueto asi que podemos cantarla los dos. La cancion es un fronteo de que somos los mejores y nuestra relacion esta muy por encima de cualquier otra, es decir, tenemos una conexion celestial.",
            lyrics: `Mírenla cuando pasa, descalza en el asfalto
Fuego en sus huellas, el que la toca se vuelve santo
Si algo le pasa, entro como Akaza sin guantes
La gravedad se quiebra, ella rompe las constantes.

Reina del sol, rezan por un segundo a su lao’
Yo soy su amor, estamos predestinaos
Si tengo cuatro, cinco son para ella
Si quiere la luna, le entrego to' las estrellas.

Esto no es química, mami, es un cataclismo
El fin del mundo cuando juntamos ombligos
Ella mi Valquiria me lleva al Valhalla
Perfección absoluta, ningún dios nos iguala.

Nacida del fruto del edén (edén)
Criada por la serpiente del diablo
Que te reciten en mi réquiem (réquiem)
Y con mi sangre te pinten un retablo.

Que miren, que miren, no pueden tocar
Esto es otro nivel, conexión celestial
Somos una diosa y un inmortal
Se abre el puto cielo cuando vamos a pasar
Que miren, que miren, no pueden tocar
Esto es otro nivel, conexión celestial
Somos una diosa y un inmortal
Se abre el puto cielo cuando vamos a pasar

Me juzgan los del barro
Y no me alcanza el disparo
Que sigan mirando fijo hacia el sol
No solo ciegos, se vuelven carbón.

Camino sobre espinas, no me sangran los pies
Soy veneno sagrado, me prueban una vez
Y ya no hay vuelta atrás, ya no hay después
El ocaso de los dioses nace en mi piel.

Te crees muy bueno, pero date cuenta
Este ajedrez se acaba si muere la reina,
Peones devotos de mis anhelos
No pueden con nosotros, somos perfectos.

Sin ley. Sin Dios. Solo dos. Solo yo.
(Sin ley. Sin Dios. Solo dos. Solo yo.)
Sin ley. Sin Dios. Solo dos. Solo yo.
(Sin ley. Sin Dios. Solo dos. Solo yo.)
Sin ley. Sin Dios. Solo dos. Solo yo.

Por ti que se caiga el cielo…

Por ti no le temo al fuego…

¡Que se caiga el cielo…
no temo al fuego!

¡POR TI QUE CAIGA EL OLIMPO Y SUS MANDATOS!
¡SOY TU ÚNICA...!

Que miren, que miren, no pueden tocar
(¡SKRRT!)
¡CONEXIÓN CELESTIAL!
¡DIOSA E INMORTAL!
¡SE ABRE EL CIELO CUANDO VAMOS A PASAR!
¡CUANDO VAMOS A PASAR!

…celestial…`
        },
        {
            id: 9,
            title: "Qué Guapa Estás",
            audioSrc: "Audio/Que Guapa Estas.mp3",
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

Qué guapa estás, recién duchá,
despeiná, arreglá, o con la bata suelta.
Cuando te peinas el butterfly cat
y me miras con cara de gata hambrienta.
Joder, eres peor que la coca,
me tienes en vilo, enganchao a tu boca.
Tengo mono de ti, de esa loca,
de hacerte esas cositas que no se nombran.
Y aunque no digas na', tu cuerpo habla,
me dice:
ven pa' acá, vamos pa la cama...

Y yo digo síii, porque no me puedo aguantar,
es ver tus curvas me pongo a delirar.
De resistir no soy capaz,
a la tentación de verte pasar,
esa sustancia la necesito catar
necesito un bocado de ese manjar.

siendo sincero, uno de cada dos sueños contigo es obsceno
no lo niego, te imagino delante desvistiéndote lento.
acercándome lento, besandote lento
apretando tu cuello mientras te siento.

el otro sueño sin embargo son unos niños correteando
nos miramos, y sin palabras sabemos lo que pensamos.
que siempre estuvimos predestinados
dos putos locos que se encontraron.

Puff... qué guapa estás.
Ven, que te voy a comer, to' lo de atrás.
Va, mírame, que te quiero ver al final...
Esa cara de diosa que pones cuando la ma...
Qué guapa estás, joder, qué guapa estás,
(Qué guapa estás, joder, qué guapa estás.)

Quiero despertar y ver tu cara
manchada del sol que entra por la ventana.
Quiero despertar con cicatrices en la espalda
por tus colmillos en la madrugada.
Después que la noche nos desvistiera,
solo quedan sábanas, tu olor y ojeras.
Querías hacerlo a oscuras pa' que no te viera,
pero cuando te miro solo pienso...
Qué guapa estás, joder, qué guapa estás,
(Qué guapa estás, joder, qué guapa estás.)

Para mí eres todo, mi vicio y mi pecado,
cada noche, un regalo envenenado.
Tu mano en mi pelo, tu gloss en mi piel
Moratones y besos, cuerpo ajedrez,
Me escogió el diablo y probé su miel
Rechacé el trato pero es mi rehén.
Qué guapa está cuando se entrega entera,
Qué guapa mi loba

shhh… otra vez…`
        },
        {
            id: 10,
            title: "Me Duele",
            audioSrc: "Audio/Me Duele.mp3",
            coverSrc: "Portadas/MeDuele.jpg",
            youtubeUrl: "URL_YOUTUBE_MEDUELE",
            inspiration: "Completamente nueva, es la mas personal, queria hablar de como me molesta que otros te hayan tenido y no te hayan valorado, y de que si hubiese llegado un poco antes podria haberte ahorrado esos dolores. Espero que te guste.",
            lyrics: `Me duele saber todo lo que te hicieron
las veces que lloraste y nadie lo vio,
como otros te tuvieron y no te quisieron,
pero tranquila que eso lo cambio yo.

Me duele que no vieran lo que veo cada día,
todo lo que vales y lo poco que te dieron.
Pero juro sanarte cada herida,
darte el triple de lo que los demás no pudieron.

Después de ver lo que perdieron te querrán reclamar
pero ya estas conmigo y eso no va cambiar,
Vales mucho más de lo que te hicieron creer
Eres fácil de amar, aún mas de querer.

Si me paso de intenso avísame,
pero tengo planeados veinte años junto a tu piel
No soy perfecto, nena lo sé
pero daré todo porque tengas una vida de diez.

me he enamorado mas con cada canción que te hice
porque quise mostrarte todo lo que llevo dentro,
quiero decir lo que me callé y gritar lo que dije
expresarte de mil y una formas lo que te quiero.

En los días buenos, malos, grises o de sol,
no importa el clima mientras estés tú,
cada noche le agradezco a lo que sea que nos juntó,
y le pido que nunca dejes de darme tu luz.

Me duele no haber estado antes en tu vida
te podría haber ahorrado tantos dolores,
Quizá mi forma de amar tampoco es perfecta
Pero daré todo de mi para que no me llores.

Si me echas volveré una y otra vez
de mi, tan fácil no te desprendes,
Te construiré la vida con la que siempre soñaste
Daré todo de mi hasta que la muerte me lleve.

Siento que te hicieron dudar de ti misma,
que te dejaron cicatrices que siguen marcadas,
pero quiero que las dejes a mi vista
y te juro Carmen que te ayudaré a curarlas.

Enamorado de ti, mi niña, de todo lo que eres,
de lo que fuiste y de lo que serás,
que estés a mi lado es todo lo que quiero,
y que ni una lagrima te vuelva a tocar.`
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