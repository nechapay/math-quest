const app = new Vue({
  el: '#app',
  data() {
    return {
      questions: [
        // 1
        {
          id: 1,
          text: `<div>16 июля 1819 года из Кронштадта отправилась морская экспедиция.  Император Александр I выделил
                 на реализацию этого проекта 100 000 рублей. В качестве подарков предводителям племён подготовили ножи,
                 украшения и специально отчеканили медали из серебра и бронзы с изображением императора. Руководили 
                 экспедицией Михаил Лазарев и Фаддей Беллинсгаузен. Что было открыто во время этой экспедиции?</div>`,
          category: 'Кругозор',
          answer: 'Антарктида',
          completed: false
        },
        // 2
        {
          id: 2,
          text: 'Собирая или коллекционируя те или иные предметы, люди ставят на них определённые знаки. ' +
            'Эти знаки указывают принадлежность предмета владельцу. Одним из таких знаков является экслибрис. ' +
            'На каких предметах ставится экслибрис?',
          category: '',
          answer: 'На книгах',
          completed: false
        },
        // 3
        {
          id: 3,
          text: 'О происхождении этого атрибута военной формы существует много версий. Самая правдоподобная теория идет из рыцарских времен. Рыцари крепили наруч с правой стороны шнуром к своей одежде. Часть шнура была видна снаружи. Каким атрибутом в военной форме стал рыцарский шнур?',
          category: 'Кругозор',
          answer: 'Аксельбантом',
          completed: false
        },
        // 4
        {
          id: 4,
          text: 'На Руси до появления постоянной армии не было единой униформы. Только с возникновением этих полков в XVII веке парадная форма приобрела определенные отличительные характеристики, хоть и одевалась она только по большим праздникам. Форма состояла из красного или алого кафтана, шапки с опушкой, массивных сапог. Какие полки одевались в такую форму?',
          category: 'Кругозор',
          answer: 'Стрелецкие',
          completed: false
        },
        // 5
        {
          id: 5,
          text: 'Погоны алого цвета с 1809 года были у всех гвардейских полков. Погоны желтого цвета с 1814 года стали носить гренадерские полки. Около 100 лет погоны выполняли две задачи: 1. Отличие солдат одного полка от солдат другого полка. Какую вторую задачу выполняли погоны?',
          category: 'Кругозор',
          answer: 'Служили средством удержания лямки сумки и оружейного ремня',
          completed: false
        },
        // 6
        {
          id: 6,
          text: 'В 1930 году под Воронежем впервые десантировался отряд с парашютами, который состоял из 12 человек. С этого дня началась история военного праздника. О каком военном празднике идёт речь?',
          category: 'Кругозор',
          answer: 'День ВДВ',
          completed: false
        },
        // 7
        {
          id: 7,
          text: 'Император Николай II 1909 году впервые в мировой истории наградил этим титулом победителей мирового шахматного конгресса. Большой любитель шахмат Николай II оказал содействие в создании в 1914 году Всероссийского шахматного союза. Каким титулом наградил чемпионов император?',
          category: 'Кругозор',
          answer: 'Гроссмейстер',
          completed: false
        },
        // 8
        {
          id: 8,
          text: 'В 1891 году 22-летний цесаревич Николай Романов путешествовал по странам Востока в образовательных целях. В Японии он сделал себе татуировку в память о поездке. В то время как раз вошла мода на татуировки в лучших монарших домах. Какую татуировку набил цесаревич Николай в Нагасаки?',
          category: 'Кругозор',
          answer: 'Дракона',
          completed: false
        },
        // 9
        {
          id: 9,
          text: 'Всем известен жест «ОК». Пресса предлагает несколько версий возникновения этого знака. Но существует государство у жителей которого этот знак вызывает ярость и считается неуважительным. В каком государстве жест «ОК» носит оскорбительный характер?',
          category: 'Кругозор',
          answer: 'В Бразилии',
          completed: false
        },
        // 10
        {
          id: 10,
          text: 'В какой стране воинская честь отдается левой рукой?',
          category: 'Кругозор',
          answer: 'Ни в какой',
          completed: false
        },
        // 11
        {
          id: 11,
          text: 'Фраза "Точность - вежливость королей" принадлежит французскому монарху Людовику XVIII, младшему брату казненного в период Великой французской революции Людовика XVI.  Людовик XVIII правил государством в период 1814 -1825 гг. Но эта фраза целиком звучит иначе. Продолжите фразу: «Точность - вежливость королей, но …»',
          category: 'Кругозор',
          answer: '…, но обязанность для их подданных',
          completed: false
        },
        // 12
        {
          id: 12,
          text: 'Все знают, что Болонский университет расположен в Италии и основан в 1088 году. Он никогда не прекращал работу и по праву называется старейшим высшим учебным заведением мира. Оксфордский университет основан в 1096 году и находится в Великобритании. Это не только один из самых старых университетов, но и один из самых дорогих. В каком году был основан Московский государственный университет?',
          category: 'Кругозор',
          answer: 'В 1755 году',
          completed: false
        },
        // 13
        {
          id: 13,
          text: 'Все знают, что Тула в 16 веке стала главной оружейной мастерской России. В 19 веке здесь зародилось самоварное дело. Далеко за границей России известны тульские пряники. Тульский умелец Левша подковал английскую блоху. Но, кроме всего, Тула знаменита музыкальным инструментом. Какой музыкальный инструмент прославил Тулу наряду с оружием, самоваром и пряником?',
          category: 'Кругозор',
          answer: 'Гармонь',
          completed: false
        },
        // 14
        {
          id: 14,
          text: `<div>Туляк Николай Алдунин, стал первым в мире мастером, который подковал живую блоху. Каждая из шести подковок весит лишь 0,00000004419 грамма! Николай Алдунин мало прожил, умер в 2009 году в возрасте 53 лет, но оставил потомкам:
                  <ul>
                    <li>караван верблюдов в игольном ушке;</li> 
                    <li>тульский самовар высотой чуть более одного миллиметра;</li>
                    <li>портрет А. С. Пушкина на рисовом зернышке;</li>
                    <li>Останкинская телебашня на яблочном семечке;</li>
                    <li>велосипед длиной два миллиметра.</li>  
                  </ul>
                 Однако лучшей своей работой он считал микрокопию настоящего танка Т-34, водруженную на постамент. Что служило постаментом для микрокопии танка?
                 </div>`,
          category: 'Кругозор',
          answer: 'Яблочное семечко',
          completed: false
        },
        // 15
        {
          id: 15,
          text: 'Самый активный вулкан Гекла находится в Исландии. С 874 года вулкан извергался более 20 раз. В средневековье исландцы называли его «Ворота в ад». В чилийскиx Андaх расположен высочайший вулкан нашей планеты, Охос-дель Саладо, высота которого 6887 м. Уникален он ещё и тем, что на его восточном склоне, на высоте 6390 м раскинулось зеркало самого высокого в мире озера. А в России находится самый большой в мире действующий вулкан. Его высота 4 километра 850 метров. Он выбрасывает столбы пепла на восемь километров вверх. С каждым извержением он становится всё выше. Какой самый большой вулкан находится в России?',
          category: 'Кругозор',
          answer: 'Ключевская Сопка',
          completed: false
        },
        // 16
        {
          id: 16,
          text: 'В каком из городов  России находится 2000 библиотек, 221 музей, 100 концертных организаций, больше 80 театров, 80 клубов и домов культуры, 62 кинотеатра, 45 картинных галерей.',
          category: 'Кругозор',
          answer: 'В Санкт-Петербурге',
          completed: false
        },
        // 17
        {
          id: 17,
          text: `<div>
                  В России разработаны и действуют «семейные туристические маршруты». Самые известные:
                  <ul>
                    <li>Золотое кольцо России (Сергиев Посад, Переславль-Залесский, Ростов Великий, Ярославль, Кострома, Иваново, Суздаль, Владимир);</li>
                    <li>Серебряное кольцо России (Санкт – Петербург, Великий Новгород, Старая Русса, Великие Луки, Псков, Череповец, Вологда, …);</li>
                    <li>Большое Уральское кольцо.</li>
                  </ul>
                  Какие два региона России охватывает тур по Большому Уральскому кольцу?
                </div>`,
          category: 'Кругозор',
          answer: 'Пермскую и Свердловскую области',
          completed: false
        },
        // 18
        {
          id: 18,
          text: 'Гольф — олимпийский вид спорта, где игроки стараются закатить небольшой мяч при помощи специальных клюшек в лунки на травяном поле. Сделать это необходимо за минимальное количество ударов. Отличие этой спортивной игры от всех остальных состоит в том, что противник игрока - это он сам и то, что его окружает. В России появился новый вид гольфа, связанный с транспортом. В каждой команде по пять человек. Играют 4-метровыми клюшками и двумя шарами диаметром в метр. Какой вид транспорта используется для этого способа игры в гольф?',
          category: 'Кругозор',
          answer: 'Вертолёты',
          completed: false
        },
        // 19
        {
          id: 19,
          text: 'В Новосибирском Институте цитологии и генетики СО РАН вывели новый вид домашних животных, ласковых, дружелюбных и преданных, как собаки, и независимых, как кошки. Эксперимент по одомашниванию этих диких животных начал в 1959 году академик Дмитрий Беляев, а в 1970-х году к нему присоединилась тогда еще студентка биологического факультета МГУ Людмила Трут, а сегодня признанный во всем мире российский ученый. Каких домашних животных вывели Новосибирские генетики?',
          category: 'Кругозор',
          answer: 'Домашних лисиц',
          completed: false
        },
        // 20
        {
          id: 20,
          text: 'Дача – сугубо русское явление, во многих европейских языках она так и называется – dacha. Первые загородные дома, предназначенные для летнего отдыха, появились в России в XVIII веке под Санкт-Петербургом.\n' +
            'Русский царь давал подданным загородные участки, чтобы те экспериментировали в архитектуре. Какой русский царь жаловал своим подданным земли, чтобы удержать их летом вблизи от города и не дать разъехаться по отдаленным поместьям и «заграницам»?',
          category: 'Кругозор',
          answer: 'Пётр Первый',
          completed: false
        },
        // 21
        {
          id: 21,
          text: 'Это персональное воинское звание заимствовано из голландского языка и переводится как "товарищ по койке". Какое это звание?',
          category: 'Кругозор',
          answer: 'Матрос',
          completed: false
        },
        // 22
        {
          id: 22,
          text: 'Тетрис — игра, ставшая культовой во всём мире. Первый полностью законченный тетрис запустили 6 июня 1984 года. Однако вычислительных мощностей тогдашнего оборудования хватало только на операции с четырёхклеточными фигурами — тетрамино, что и определило название игры. В тех опытах и родилась основная идея тетриса. Изобретённый в 1984 году, тетрис уже в середине 90х годов прошлого столетия захватил весь мир от Китая и Америки до Европы и России. В какой стране изобрели тетрис?',
          category: 'Кругозор',
          answer: 'В России',
          completed: false
        },
        // 23
        {
          id: 23,
          text: 'Россия – единственная страна, которая нашла самый дешевый из всех возможных способ исследования Арктики. Учёные имеют возможность заниматься  измерением глубин океана, метеонаблюдениями, ледовыми, ионосферными и магнитными наблюдениями круглогодично. Как называются исследовательские платформы на базе которых проводятся исследования Арктики?',
          category: 'Кругозор',
          answer: 'Дрейфующие станции «Северный полюс»',
          completed: false
        },
        // 24
        {
          id: 24,
          text: 'Благодаря какому северному созвездию Арктика получила своё название?',
          category: 'Кругозор',
          answer: 'Большой медведице',
          completed: false
        },
        // 25
        {
          id: 25,
          text: 'Берингов пролив так называется в честь моряка, который по нему проплыл, именами первооткрывателей названы: море Лазарева у берегов Антарктиды, пролив Санникова, гора Амундсена и т д. Но есть арктический остров, названный в честь человека, который на нем никогда не был. Кто этот исследователь и что это за остров?',
          category: 'Кругозор',
          answer: 'Русский мореплаватель, адмирал, один из членов-учредителей Русского Географического общества – Фердинанд (Федор) Петрович Врангель не был на острове Врангель. ',
          completed: false
        },
        // 26
        {
          id: 26,
          text: 'О Пижемской росписи известно с XVII века. Выполнялась она обычно акварелью — красной, зеленой, желтой, черной.  В Липецкой росписи часто встречаются изображения бабочек, птиц, рыб, представителей флоры и фауны южнорусской природы, а также сказочных животных. Характер орнамента называют «парчевым», а еще один важный элемент росписи — колосок пшеницы. Онежской росписью украшали прялки и другую домашнюю утварь. Синий, зеленый и красный тона обычно складывались в необычный цветочный букет, яблоки и птиц. На каком фоне выполнялась Петербургская роспись?',
          category: 'Кругозор',
          answer: 'На чёрном. Изысканные белые цветы с золотыми листьями на черном фоне — это Петербургская школа росписи. Листья и цветы пишут нежными полупрозрачными мазками, напоминающими о туманах и белых ночах Санкт-Петербурга.',
          completed: false
        },
        // 27
        {
          id: 27,
          text: 'Родиной этого русского сувенира можно назвать Сергиев-Посад. Крупный русский промышленник Савва Мамонтов, в своей подмосковной усадьбе «Абрамцево», собрал вокруг себя известных русских художников и мастеров. \n' +
            'Токарь по фамилии Звёздочкин выточил из дерева первый сувенир, а художник Сергей Малютин его разрисовал. Какой национальный символ России мог родиться в подмосковье и стать одним из самых популярных среди иностранных туристов?',
          category: 'Кругозор',
          answer: 'Матрёшка',
          completed: false
        },
        // 28
        {
          id: 28,
          text: 'В казачьей станице Зимовейская с разницей в сто десять лет родились атаманы донского казачества, организовавшие Крестьянские войны 1670-1671 года и 1773-1775 года. После последнего восстания станицу перенесли на новое место, а при Сталине и вовсе залили водами Цимлянского водохранилища. Кто эти предводители широкого крестьянского выступления?',
          category: 'Кругозор',
          answer: 'Степан Разин и Емельян Пугачёв',
          completed: false
        },
        // 29
        {
          id: 29,
          text: 'Сегодня Статуя Свободы (полное название Свобода, озаряющая мир) – одна из самых знаменитых американских скульптур. Общий вес меди, использованной для отлива Статуи составляет 31 тонну. Высота Статуи от земли до кончика факела 93 метра. Что может быть общего у Статуи Свободы из Нью-Йорка и нашим Нижним Тагилом?',
          category: 'Кругозор',
          answer: 'Медные листы для изготовления статуи были отлиты на Тагильских заводах уральских промышленников Демидовых.',
          completed: false
        },
        // 30
        {
          id: 30,
          text: 'Самое большое метро в мире, выбранное по критерию протяженности — Шанхайское (660 км), больше всего станций (470) в метро Нью-Йорка. В каком городе находится самое глубокое метро в мире? Глубина метро 100 метров.',
          category: 'Кругозор',
          answer: 'В Санкт-Петербурге',
          completed: false
        },
        // 31
        {
          id: 31,
          text: 'Транссибирская железнодорожная магистраль – самая длинная железная дорога в мире. Великий Сибирский Путь, соединяющий Москву с Владивостоком, в длину имеет 9298 километров, пересекает 8 часовых поясов, проходит через 87 городов и населенных пунктов и пересекает 16 рек, включая Волгу. При каком императоре началось строительство магистрали?',
          category: 'Кругозор',
          answer: 'Идея строительства принадлежала Александру III, воплотил идею Николай II.',
          completed: false
        },
        // 32
        {
          id: 32,
          text: 'Появление этого аппарата в 20 веке изменило развитие медицины: в ней появились новые отрасли диагностики и анализа. На сегодняшний день устройство позволило спасти миллионы жизней. Так что в случаях, когда упоминаются выдающиеся ученые, стоит обязательно называть фамилию ученого которую носит этот аппарат. Назовите эту фамилию. ',
          category: 'Великие открытия',
          answer: 'Рентген',
          completed: false
        },
        // 33
        {
          id: 33,
          text: 'В 1907 году русский физик Борис Розинг запатентовал новый способ распространения информации. Он использовал для этого электронно-лучевую трубку. Возможно, другие открытия ученых 20 века были более значимы в научном плане, но нельзя отрицать воздействие этой новинки на жизнь людей. Что открыл Розинг?',
          category: 'Великие открытия',
          answer: 'Телевизор',
          completed: false
        },
        // 34
        {
          id: 34,
          text: 'Сейчас представить жизнь без смартфона кажется почти невозможным.  В каком году была изобретена беспроводная связь?',
          category: 'Великие открытия',
          answer: '1973 году. Мартин Купер',
          completed: false
        },
        // 35
        {
          id: 35,
          text: 'Далеко не все открытия последнего столетия используются людьми каждый день. Этот универсальный источник коммуникации представлен публике 1972-м с тех пор он завоевал мир, сейчас мы пользуемся им каждый день. Назовите его.',
          category: 'Великие открытия',
          answer: 'Интернет',
          completed: false
        },
        // 36
        {
          id: 36,
          text: 'Этот швед эксперементально доказал,  что температура таяния льда практически не зависит от давления. Назовите его фамилию.',
          category: 'Великие открытия',
          answer: 'Андерс Цельсий',
          completed: false
        },
        // 37
        {
          id: 37,
          text: 'В середине 19 века российский предприниматель Франц Сан-Гали изобрёл первый  радиатор из чугуна и предложил называть его этим словом. Каким словом называется изобретение Франц Сан-Гали?',
          category: 'Великие открытия',
          answer: 'Батарея',
          completed: false
        },
        // 38
        {
          id: 38,
          text: 'Смешав Бертолетовую соль, белый фосфор и клей, юный француз Шарль Сориа  изобрёл новую их разновидность - без неприятного запаха. Что изобрёл юный француз?',
          category: 'Великие открытия',
          answer: 'Спички',
          completed: false
        },
        // 39
        {
          id: 39,
          text: 'В 1830 году патент на какое устройство был выдан на имя портного Тимонье и инженера Феррана?',
          category: 'Великие открытия',
          answer: 'Швейная машинка',
          completed: false
        },
        // 40
        {
          id: 40,
          text: 'Каждый из нас хоть раз в жизни пробовал изобретение японца Андо Момофуки. Это  изобретение позволило изменить ситуацию в  послевоенной Японии когда страна нуждалась в продовольствии, и доступная еда без особых сложностей в приготовлении в условиях отсутствия кухни или на рабочем месте  было серьезным достижением., а сегодня ежегодно употребляется более сорока миллиардов порций этого изобретения. Назовите это изобретение.',
          category: 'Великие открытия',
          answer: 'Лапша быстрого приготовления',
          completed: false
        },
        // 41
        {
          id: 41,
          text: 'В каком году человечество узнало, что пространство между планетами преодолимо, и в космосе могут спокойно находиться бактерии, животные и даже человек?',
          category: 'Великие открытия',
          answer: '1961',
          completed: false
        },
        // 42
        {
          id: 42,
          text: 'Что было открыто раньше интернет или беспроводная связь?',
          category: 'Великие открытия',
          answer: 'Беспроводная связь',
          completed: false
        },
        // 43
        {
          id: 43,
          text: 'Плесневый гриб, попадая к культуре бактерий, вызывает полную их гибель – это было доказано Александром Флеммингом. В 40-х годах было начато производство лекарственного препарата на  основе этого гриба. Назовите производство какого лекарства было начато .',
          category: 'Великие открытия',
          answer: 'Пенициллин',
          completed: false
        },
        // 44
        {
          id: 44,
          text: 'Привычная всем шариковая ручка появилась лишь в 1943 году. И первыми её использовать стали одни из войск вооружённых сил. Какие?',
          category: 'Великие открытия',
          answer: 'Летчики',
          completed: false
        },
        // 45
        {
          id: 45,
          text: 'В лаборатории можно вырастить бактерии, кристалы. А можно ли вырастить в лаборатории гамбургер?',
          category: 'Великие открытия',
          answer: 'Ученые достигли важного результата: в 2013 году в лаборатории был выращен первый гамбургер.',
          completed: false
        },
        // 46
        {
          id: 46,
          text: 'Кто из российских математиков в 2002году доказал одну из задач тысячелетия - теорему Пуанкаре?',
          category: 'Великие открытия',
          answer: 'Григорий Перельман',
          completed: false
        },
        // 47
        {
          id: 47,
          text: 'Какое изобретение сделал в 723 году нашей эры китайский монах и математик Ай Ксинг (I-Hsing) которое позволило нам измерять время.',
          category: 'Великие открытия',
          answer: 'Часы',
          completed: false
        },
        // 48
        {
          id: 48,
          text: 'Благодаря какому событию произошедшему с Исааком Ньютоном в 1664 мы впервые узнали, почему предметы падают вниз, и почему планеты вращаются вокруг Солнца?',
          category: 'Великие открытия',
          answer: 'На голову упало яблоко',
          completed: false
        },
        // 49
        {
          id: 49,
          text: 'Кому из английских учёных судьбоносное открытие электричества?',
          category: 'Великие открытия',
          answer: 'Майклу Фарадею',
          completed: false
        },
        // 50
        {
          id: 50,
          text: '1869 году русский химик упорядочил химические элементы. Что в результате получилось?',
          category: 'Великие открытия',
          answer: 'Таблица Менделеева',
          completed: false
        },
        // 51
        {
          id: 51,
          text: 'Если бы австрийский ботаник и физиолог Фридрих Райницер (Friedrich Reinitzer) не открыл жидкие кристаллы во время проверки физико-химических свойств различных производных холестерина в 1888 году, то чего бы у нас с вами сейчас не было?',
          category: 'Великие открытия',
          answer: 'телевизоры с жидкокристаллическими экранами или плоские LCD мониторы.',
          completed: false
        },
        // 52
        {
          id: 52,
          text: 'Микроволновые излучатели (магнетроны) работали на радарах союзников во время Второй мировой войны. Новые возможности применения обнаружились в 1946 году, когда магнетрон расплавил шоколадку в кармане Перси Спенсера, одного из инженеров американской компании. Какой бытовой прибор изобрели на основе этого?',
          category: 'Великие открытия',
          answer: 'Микроволновая печь',
          completed: false
        },
        // 53
        {
          id: 53,
          text: 'Будучи в пешеходной экскурсии в 1941 году швейцарский инженер Жорж де Местраль обнаружил репейники, цепляющиеся за его штаны, и понял, что крючки репейника будут цепляться за что угодно в форме петли. Всё, что ему нужно было сделать - это воссоздать петли.Что он изобрёл?',
          category: 'Великие открытия',
          answer: 'Застёжку липучку',
          completed: false
        },
        // 54
        {
          id: 54,
          text: 'Глеб Евгеньевич Котельников был актером труппы Народного дома на Петербургской стороне. Тогда же, под впечатлением от гибели летчика, Котельников занялся разработкой парашюта. Свой законченный проект ранцевого парашюта Глеб Евгеньевич предложил в 1911 году. Но начать широкое производство парашютов в России не получилось. Почему?',
          category: 'Великие открытия',
          answer: 'Из-за опасений начальника российских воздушных сил, великого князя Александра Михайловича, что при малейшей неисправности авиаторы будут покидать аэроплан.',
          completed: false
        },
        // 55
        {
          id: 55,
          text: 'В каком году появились первые социальные сети?',
          category: 'Великие открытия',
          answer: '2006',
          completed: false
        },
        // 56
        {
          id: 56,
          text: 'Дата выступления по теме «Сжатое изложение основ геометрии со строгим доказательством теоремы о параллельных» Считается датой рождения какого открытия?',
          category: 'Великие открытия',
          answer: 'Геометрии Лобачевского',
          completed: false
        },
        // 57
        {
          id: 57,
          text: 'Изобрел эту зеленоватую субстанцию с характерным запахом дёгтя военный хирург .Изобретенная в 1927 году, она прошла с Красной Армией дорогами Великой Отечественной войны и до сих пор продается по всему СНГ и в соседних государствах. Вы её то же знаете.Что это за мазь?',
          category: 'Великие открытия',
          answer: 'Мазь Вишневского',
          completed: false
        },
        // 58
        {
          id: 58,
          text: 'Русский ученый ,сделал немало открытий в разных областях науки, в частности, впервые сформулировал всеобщий закон сохранения материи и движения (1760 год), создал молекулярно-кинетическую теорию тепла, основал науку о стекле. Разработал проект первого в России классического университета – Московского университета (1755 год). Назовите фамилию этого учёного.',
          category: 'Великие открытия',
          answer: 'Ломоносов М.В.',
          completed: false
        },
        // 59
        {
          id: 59,
          text: 'Назовите название первого космического аппарата, поднявшего человека на околоземную орбиту.',
          category: 'Великие открытия',
          answer: '«Восток-1» или «Восток»',
          completed: false
        },
        // 60
        {
          id: 60,
          text: 'В 1942 году американский химик Гарри Кувер экспериментировал с новыми материалами для прицелов в боевом оружии и создал вещество цианоакрилат, которое было забраковано из-за излишней клейкости .Однако в 1951 году американские исследователи во время поисков термостойкого покрытия для кабин истребителей случайно обнаружили свойство цианоакрилата прочно склеивать различные поверхности. Под каким названием  в 1955 году разработка была запатентована и поступила в продажу?',
          category: 'Великие открытия',
          answer: 'Суперклей',
          completed: false
        },
        // 61
        {
          id: 61,
          text: 'В 2020 году практически каждый из нас познал все прелести онлайн-шопинга. Но в 1999 о таком  еще никто не мог мечтать. Никто, кроме автора платежной системы  PayPal. Кому пренадлежит идея онлайн платежей?',
          category: 'Великие открытия',
          answer: 'Илона Маска',
          completed: false
        },
        // 62
        {
          id: 62,
          text: 'Демонстрацией единства советского народа можно считать парады. Сколько военных парадов прошло на Красной площади Москвы в период с 1941 по 1945 год?',
          category: 'Победа',
          answer: '3 (7 ноября 1941 года,  1 мая 1945 года, московский Парад Победы 24 июня 1945 года)',
          completed: false
        },
        // 63
        {
          id: 63,
          text: 'Кто принимал парад на Красной Площади 7 ноября 1941 г.?',
          category: 'Победа',
          answer: 'Семён Будённый',
          completed: false
        },
        // 64
        {
          id: 64,
          text: 'Кто стал первым Трижды Героем Советского Союза?',
          category: 'Победа',
          answer: 'Александр Покрышкин',
          completed: false
        },
        // 65
        {
          id: 65,
          text: 'По какому озеру проходила "дорога жизни"?',
          category: 'Победа',
          answer: 'Ладожское',
          completed: false
        },
        // 66
        {
          id: 66,
          text: 'В честь Победы в какой битве был дан первый салют в Москве?',
          category: 'Победа',
          answer: 'Курская дуга',
          completed: false
        },
        // 67
        {
          id: 67,
          text: 'Как называлась пограничная застава, которая одной из первых приняла на себя удар фашистских полчищ?',
          category: 'Победа',
          answer: 'Брестская крепость',
          completed: false
        },
        // 68
        {
          id: 68,
          text: 'Сколько дней длилась оборона Брестской крепости?',
          category: 'Победа',
          answer: '30 дней',
          completed: false
        },
        // 69
        {
          id: 69,
          text: 'В каком городе можно посетить Мамаев курган, на котором расположен памятник-ансамбль «Героям Сталинградской битвы»?',
          category: 'Победа',
          answer: 'Волгоград',
          completed: false
        },
        // 70
        {
          id: 70,
          text: 'Когда был открыт мемориал «Могила Неизвестного Солдата»',
          category: 'Победа',
          answer: '8 мая 1967 года',
          completed: false
        },
        // 71
        {
          id: 71,
          text: 'Сколько дней продолжалась блокада Ленинграда?',
          category: 'Победа',
          answer: '900 дней',
          completed: false
        },
        // 72
        {
          id: 72,
          text: 'Кто командовал парадом Победы и кто его принимал 24 июня 1945 года?',
          category: 'Победа',
          answer: 'Командовал Маршал Рокоссовский, а принимал Маршал Жуков.',
          completed: false
        },
        // 73
        {
          id: 73,
          text: 'Что означают цвета георгиевской ленточки?',
          category: 'Победа',
          answer: 'Черный – дым, оранжевый – пламя',
          completed: false
        },
        // 74
        {
          id: 74,
          text: 'Назовите город-герой, который ни разу за всю историю своего существования не был захвачен вражескими войсками.',
          category: 'Победа',
          answer: 'Ленинград',
          completed: false
        },
        // 75
        {
          id: 75,
          text: 'Беспримерный подвиг лётчика положен в основу художественного произведения советского писателя Б. Полевого. Лишившись после ранения ног, этот пилот вернулся в строй и сбил ещё 11 вражеских самолётов.',
          category: 'Победа',
          answer: 'Герой Советского Союза Маресьев А.П.',
          completed: false
        },
        // 76
        {
          id: 76,
          text: 'В годы Великой Отечественной войны немцы называли «чёрной смертью».',
          category: 'Победа',
          answer: 'Советских морских пехотинцев',
          completed: false
        },
        // 77
        {
          id: 77,
          text: 'Кто стал Четырежды Героем Советского Союза?',
          category: 'Победа',
          answer: 'Г.К. Жуков',
          completed: false
        },
        // 78
        {
          id: 78,
          text: 'Самый молодой лётчик Великой Отечественной, начал летать самостоятельно в 15 лет, в авиационном корпусе его прозвали Летунком.',
          category: 'Победа',
          answer: 'Аркадий Каманин (1928-1947)',
          completed: false
        },
        // 79
        {
          id: 79,
          text: 'Как называлось сражение, после окончания которого, был развеян миф о непобедимости немецкой армии?',
          category: 'Победа',
          answer: 'Битва под Москвой',
          completed: false
        },
        // 80
        {
          id: 80,
          text: 'Самый северный город-герой?',
          category: 'Победа',
          answer: 'Мурманск',
          completed: false
        },
        // 81
        {
          id: 81,
          text: 'Первый победный салют в Москве был дан 5 августа 1943 года в честь освобождения каких городов?',
          category: 'Победа',
          answer: 'Белгорода и Орла',
          completed: false
        },
        // 82
        {
          id: 82,
          text: 'Фашистские войска в 1941-1942 году потратили на захват этого города 250 дней, а советские войска освободили его в 1944 году за 5 дней. Что это за город?',
          category: 'Победа',
          answer: 'Севастополь',
          completed: false
        },
        // 83
        {
          id: 83,
          text: 'Эта оборона длилась с 29 июня 1941 по 1 ноября 1944. Назовите ее.',
          category: 'Победа',
          answer: 'Оборона Заполярья',
          completed: false
        },
        // 84
        {
          id: 84,
          text: 'Какой элемент формы русских знаменосцев 24 июня 1945 года на Параде Победы был сожжен вместе с фашистскими знаменами.',
          category: 'Победа',
          answer: 'Перчатки',
          completed: false
        },
        // 85
        {
          id: 85,
          text: 'В истории Великой Отечественной войны этот «хвойный» город Советского Союза стал первым городом, откуда выгнали немцев. Назовите его.',
          category: 'Победа',
          answer: 'Ельня',
          completed: false
        },
        // 86
        {
          id: 86,
          text: 'В госпитальной палате в 1943 году родилось это стрелковое оружие, стоящее сейчас на вооружении 55 стран мира.',
          category: 'Победа',
          answer: 'Автомат (Основное стрелковое оружие российской пехоты — автомат Калашникова. Разработка начата в 1943 году сержантом Калашниковым в госпитальной палате. Принят АК-47 на вооружение Советской армии в 1949 году)',
          completed: false
        },
        // 87
        {
          id: 87,
          text: 'В Великой Отечественной войне в состав наших войск входила 28‑я резервная армия, в которой тягловой силой для пушек были эти необычные животные.',
          category: 'Победа',
          answer: 'Верблюды (Один из них по имени Яшка дошел до Берлина)',
          completed: false
        },
        // 88
        {
          id: 88,
          text: 'Эта собака обнаружила при разминировании участков в европейских странах в последний год войны 7468 мин и более 150 снарядов. Незадолго до Парада Победы в Москве 24 июня пес получил ранение и не мог пройти в составе школы военных собак. Тогда Сталин приказал нести его по Красной площади на своей шинели.',
          category: 'Победа',
          answer: 'Джульбарс',
          completed: false
        },
        // 89
        {
          id: 89,
          text: 'В начале войны СССР испытывал большую нехватку танков, в связи с чем, было принято решение в экстренных случаях переоборудовать их в танки.',
          category: 'Победа',
          answer: 'Тракторы (Во время обороны Одессы были брошены в бой 20 подобных «танков» (обычных тракторов), обшитых листами брони)',
          completed: false
        },
        // 90
        {
          id: 90,
          text: 'За героизм, проявленный при преодолении этой преграды, 2 438 воинов были удостоены звания Героя Советского Союза. ',
          category: 'Победа',
          answer: 'Форсирование Днепра',
          completed: false
        },
        // 91
        {
          id: 91,
          text: '«Полями воинской славы России» Военная энциклопедия называет Куликово, Полтавское и это, на котором в годы Великой Отечественной войны произошло крупнейшее встречное танковое сражение. Как называется это поле?',
          category: 'Победа',
          answer: 'Прохоровское',
          completed: false
        }
      ],
      classes: {
        startPage: {
          hide: false
        },
        answerButton: {
          hide: true
        }
      },
      categories: {
        one: 'Кругозор',
        two: 'Великие открытия',
        three: 'Победа'
      },
      startPageVisible: true,
      question: {
        id: 0,
        text: '',
        category: '',
        answer: '',
        completed: false
      },
      answer: '',
      idx: 0,
      answerVisible: false
    }
  },
  computed: {
    isStartPageVisible: function () {
      return this.startPageVisible
    },
    isAnswerVisible: function () {
      return this.answerVisible
    }
  },
  methods: {
    startHandle() {
      this.startPageVisible = false
    },
    categoryClickHandle(category) {
      console.log(category)
      this.classes.answerButton.hide = false
      this.answerVisible = false
      if (this.idx < this.questions.length - 1) {
        let it = {}
        let arr = _.shuffle(this.questions)
        if (category !== 'random') {
          console.log(this.questions)
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].category === category && !arr[i].completed) {
              it = _.cloneDeep(arr[i])
              break
            }
          }
        } else {
          for (let i = 0; i < arr.length; i++) {
            if (!arr[i].completed) {
              it = _.cloneDeep(arr[i])
              break
            }
          }
        }
        this.question = it
      }
    },
    answerHandle(id) {
      if(!this.question.completed) {
        this.answerVisible = true
        this.idx++
        this.question.completed = true
        this.questions[this.questions.findIndex(i => i.id === id)].completed = true
      }
    }
  }
})
