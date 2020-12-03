import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav class="main">
        <Link to="/">Python</Link>
        <span> | </span>
        <Link to="/cpp">C++</Link>
        <span> | </span>
        <Link to="/js">JavaScript</Link>
      </nav>
      <div class="main">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/js">
            <JavaScript />
          </Route>
          <Route path="/cpp">
            <Cpp />
          </Route>
          <Route path="/">
            <Python />
          </Route>
        </Switch>
      </div>
      <footer class="main">
        <p>|Автор сайта: Бойченко Михаил|</p>
        <a href="#">| Вверх |</a>
      </footer>
    </Router>
  );
}

function Python() {
  return (
    <React.Fragment>
      <h1>Python</h1>
      <img src="images/py.png" alt="python logo" />
      <p>
        Python — это высокоуровневый язык программирования, который используется
        в различных сферах IT, таких как машинное обучение, разработка
        приложений, web, парсинг и другие.
      </p>

      <p>
        В 2019 году Python стал самым популярным языком программирования,
        обогнав Java на 10%. Это обусловлено многими причинами, одна из которых
        — высокая оплата труда квалифицированных специалистов (около 100 тысяч
        долларов в год).
      </p>

      <h2>Язык программирования Python</h2>
      <p>
        Различные языки программирования обычно доминируют в какой-то отрасли
        (или нескольких), для работы в которой они хорошо подходят. Но это не
        значит, что программист ограничен использовать строго определённый
        инструмент, поэтому любой язык общего назначения, такой как Python,
        может применять для создания чего-угодно.
      </p>

      <p>
        Python смог захватить малую часть рынка веб-разработки, иногда
        используется для написания десктопных приложений и, конечно, тотально
        доминирует в сфере машинного обучения. Кроме того, на нём создаётся
        много прототипов, которые позволяют быстро набросать функционал и
        внешний вид будущего проекта.
      </p>

      <h2>Происхождение названия</h2>
      <p>
        <strong>
          Автор языка Python назвал его в честь британского комедийного шоу
          &#8220;Monty Python&#8221;
        </strong>
        , которое было популярно в начале 1970-х годов.
      </p>
      <p>
        Это телешоу позволяло автору расслабиться и отвлечься от разработки
        языка. Однако, несмотря на настоящее происхождение названия, для людей
        более очевидно связывать Python со словом &#8220;змея&#8221;. Этому
        также способствует логотип, на котором изображена рептилия.
      </p>
      <p>
        И хотя создатель языка не раз говорил, что название никак не связано со
        змеями, повлиять на мнение общества так и не удалось.
      </p>
      <h3>Питон или Пайтон?</h3>
      <p>
        Будь то название британского телешоу или английское звучание слова
        &#8220;змея&#8221;,{" "}
        <strong>Python правильно произносить, как Пайтон</strong>. Однако, около
        80% Российского сообщества привыкли использовать слово
        &#8220;Питон&#8221;.
      </p>
      <p>
        Нельзя сказать, что однозначно правильно использовать один из вариантов,
        многие названия адаптируются под произношения конкретного языка, а
        изменить сложившиеся привычки общества очень сложно. Однако, вариант
        названия &#8220;Питон&#8221; уместно употреблять только в разговоре с
        русскоязычными собеседниками, потому что на любой международной
        конференции значение слова &#8220;Питон&#8221; просто не поймут, ведь в
        английском языке его нет, есть только &#8220;Python (Пайтон)&#8221;.
      </p>
      <h2>История создания</h2>

      <p>
        Язык начал разрабатывать программист, Гвидо ван Россумом, в конце
        1980-х. На тот момент он работал в центре математики и информатике в
        Нидерландах.
      </p>
      <p>
        Гвидо ван Россум увлекался работой с «железками» ещё со школьных лет, и
        хотя он не находил поддержки и одобрения у своих сверстников, это не
        помешало ему самостоятельно разработать язык программирования.
      </p>
      <p>
        Россум работал над Python в свободное время, в качестве основы он взял
        язык программирования ABC, в разработке которого когда-то участвовал.
      </p>
      <p>
        <strong>Этапы истории языка программирования Python</strong>:
      </p>
      <ul>
        <li>
          <strong>
            В феврале 1991 исходный код языка был опубликован на alt.sources
          </strong>
          . Уже тогда язык придерживался объектно-ориентированного подхода, мог
          работать с классами, наследованием, функциями, обработкой исключений и
          всеми основными структурами данных.
        </li>
        <li>
          <strong>В 2000 году вышла в релиз вторая версия Python</strong>. В неё
          добавили много важных инструментов, включая поддержку Юникода и
          сборщик мусора.
        </li>
        <li>
          <strong>
            3 декабря 2008 в релиз вышла третья версия Python, которая является
            основной до сих пор
          </strong>
          . Многие особенности языка были переделаны и стали несовместимы с
          предыдущими версиями. И хотя функциональность третьей версии ничем не
          уступает второй, развитие языка разделилось на две ветки. Кто-то
          продолжал использовать Python 2, чтобы поддерживать старые проекты,
          кто-то полностью перешёл на третью версию.
        </li>
      </ul>
      <p>
        Дату смерти второй версии установили на 2015 год, однако, боясь не
        успеть перенести весь существующий код на Python 3,{" "}
        <strong>время жизни Python 2 продлили жизнь до 2020 года</strong>.
      </p>
      <h2>Python — простой язык</h2>
      <p>
        Синтаксис Питона всегда выделял его на фоне других языков
        программирования. Он не страдает избыточностью, схожесть синтаксиса с
        обычным английским позволяет понять код даже обычному пользователю,
        кроме того, программист пишет меньше строк кода. Вложенность
        обозначается отступами, что повышает читаемость кода и приучает новичков
        к правильному оформлению.
      </p>
      <p>
        <strong>
          Python упрощает написание кода и делает разработку быстрой, всё потому
          что он обладает следующими особенностями
        </strong>
        :
      </p>
      <ul>
        <li>
          <strong>Динамическая типизация</strong>. Программисту не нужно
          указывать тип переменных, язык присвоит его сам. Операнды разных
          типов, участвующие в одной операции, автоматически приводится к
          нужному по определённым правилам.
        </li>
        <li>
          <strong>Удобный возврат нескольких значений функцией</strong>. Их
          можно перечислить через запятую и они автоматически преобразуются в
          список. Чтобы вернуть массив из функции, достаточно написать &#8220;
          <code>return имя_массива</code>&#8220;. Не нужно выделять память и
          передавать указатели в функцию.
        </li>
        <li>
          <strong>Автоматическое выделение памяти</strong>. Программисту не
          нужно самостоятельно выделять память под что-либо. С одной стороны это
          уменьшает контроль программиста над программой, с другой, разработка
          значительно ускоряется.
        </li>
        <li>
          <strong>Сборщик мусора</strong>. Если объект становится бесполезным
          (на него перестаёт что-либо ссылаться), он автоматически удаляется
          сборщиком мусора. Сборщик мусора позволяет оптимизировано использовать
          память и не удалять бесполезные объекты вручную.
        </li>
        <li>
          <strong>a, b = b, a</strong>. Эта строка меняет местами значения
          переменных, теперь то, что было в a, находится в b и наоборот. Такое
          возможно, потому что Питон сначала рассматривает переменные справа от
          знака &#8220;=&#8221; и помещает их в список, то же он делает с
          элементами слева от &#8220;=&#8221;, затем он связывает каждый элемент
          правого списка с левым. Таким способом можно обменивать значения не
          только двух переменных, но и трёх, пяти и так далее.
        </li>
        <li>
          <strong>Привязка типа данных</strong>. Тип данных привязан к значению,
          а не к переменной. То есть значение — это какой-то объект с
          атрибутами, которые определяют его тип и другие характеристики, а
          переменная — просто ссылка на этот объект. Такой подход позволил
          обойтись без явного определения типов и значительно упростил повторное
          присваивание значения переменной (особенно, если тип нового значения
          отличен от начального).
        </li>
        <li>
          <strong>Цикл for</strong>. Работать с массивами, списками и другими
          контейнерами в Питоне просто и удобно. Когда необходимо перебрать все
          его элементы, конструкция выглядит так: &#8220;
          <code>for x in контейнер:</code>&#8221; (перебор идёт от 0 до
          последнего элемента, его индекс можно обозначить как -1). Если нужно,
          чтобы прошло определённое количество циклов, пишут так: &#8220;
          <code>for x in range(1,9):</code>&#8221; (цикл будет выполняться со
          значениями <code>x</code> от 1 до 8).
        </li>
        <li>
          <strong>Интерпретируемый язык</strong>. Написанный код не нужно
          компилировать, достаточно запустить его и получить результат. Более
          того, можно работать в интерактивном режиме и получать результат
          буквально после каждой операции.
        </li>
      </ul>
      <div>
        Python сочетает в себе и простоту и мощный инструментарий. Его можно
        использовать для создания прототипа практически любой программы.
      </div>
      <p>
        Чтобы ускорить разработку, часть программы (обычно не сильно влияющую на
        скорость работы) пишут на Питоне.
      </p>
      <p>
        Именно благодаря простоте этот язык программирования смог занять
        доминирующее место в сфере машинного обучения. Люди, так или иначе
        связанные с наукой, предпочитают не тратить много времени на такие вещи,
        как написание кода, поэтому Python отлично подошёл для реализации
        поставленных перед ними задач.
      </p>

      <h2>Популярность</h2>
      <p>
        Несмотря на то что языку уже более 29 лет, он популярен среди
        программистов всего мира. Python используется почти в каждом среднем или
        крупном проекте, если не как основной инструмент разработки, то как
        инструмент для создания прототипа или написания какой-то его части.
      </p>
      <p>
        Он собрал вокруг себя огромное сообщество разработчиков, по результатам
        опроса на Stackoverflow Python занял 7 место с почти 39% голосов.
      </p>
    </React.Fragment>
  );
}

function JavaScript() {
  return (
    <React.Fragment>
      <h1>JavaScript</h1>
      <img src="images/js.png" alt="js logo" />
      <p>
        JavaScript – это интерпретируемый язык программирования (операторы
        языка, синтаксические элементы программы транслируются друг за другом и
        сразу выполняются – интерпретируются), если говорить проще, программа
        написанная на JavaScript читается так как она и написана, поступательно
        последовательно. Данный язык может создавать конструкции, позволяющие
        реализовывать динамические изменения, именно поэтому JavaScript
        используются при создании веб-сайтов в разработке интерактивных,
        динамических страниц. Весь анимированный контент, который нам приходится
        видеть на большинстве сайтов, различные слайдеры, карусели, всплывающие
        окна, параллакс эффекты и множество других интересных функций – все они
        реализованы на JavaScript, и это не самая большая часть возможностей
        данной технологии. Да, изначально язык JavaScript как раз и
        разрабатывался для добавления динамики, интерактивности, анимированных
        эффектов на web-страницах, работая в этом случае в плотной связке с HTML
        и CSS, и являясь при этом одним из трех базовых языков во frontend
        разработке. Но, JavaScript, так-же может создавать десктопные и
        мобильные приложения для различных операционных систем. И что самое
        интересное и важное, JavaScript может создавать серверную часть
        web-приложения, таким образом реализуя себя как полноценный серверный
        язык программирования.
      </p>
      <p>
        В настоящее время JavaScript интенсивно развивается и совершенствуется,
        становясь глобальной технологической платформой для создания большинства
        интернет-проектов и приложений для различных систем, устройств и
        технологий. Можно сказать, что JavaScript – это язык будущего и поэтому
        следует сосредоточить свое внимание на изучении данного направления.
        Ниже приведены особенности данного языка. Если вы уже изучали
        программирование, то вам будет полезно и интересно об этом узнать. Итак,
        кратко о JavaScript:
      </p>
      <p>
        Существует несколько общих синтаксических правил, которые следует
        помнить, изучая язык JavaScript. Важно знать, что он чувствителен к
        регистру. Переменные с именем «myVariable», «myvariable» и «MYVariable»
        будут рассматриваться как три различных объекта. Кроме того, пробельные
        символы, такие как отступы и пробелы, игнорируются, если они не являются
        частью строки текста и не заключены в кавычки.
      </p>
      <p>
        <h2>Инструкции и комментарии</h2>. В программном коде JavaScript, как и
        в прочих высокоуровневых языках программирования, можно выделить
        инструкции и комментарии. Сценарий состоит из ряда инструкций.
        Инструкция — это команда, которая сообщает браузеру, что делать. Ниже
        представлена простая инструкция, указывающая браузеру отобразить
        уведомление с фразой «Спасибо». alert("Спасибо."); Точка с запятой в
        конце инструкции сообщает JavaScript, что это конец команды, подобно
        тому, как точка завершает предложение. Согласно стандарту JavaScript
        конец строки также приведет к концу команды, но лучшим вариантом
        считается завершение каждой инструкции точкой с запятой. В современном
        JavaScript точка с запятой является элементом не обязательным.
        Комментарии являются вспомогательным (необязательным) компонентом
        программного кода. Язык JavaScript позволяет оставлять комментарии,
        которые будут игнорироваться при выполнении сценария, так что вы можете
        оставить напоминания и разъяснения в своем коде. Это особенно полезно,
        если в будущем его будет редактировать другой разработчик.
      </p>
      <p>
        <h2>Существует два способа использования комментариев.</h2> Для
        однострочных комментариев используйте два слеша (//) в начале строки.
        Однострочный комментарии можно размещать на одной строке с инструкцией,
        если он располагается после нее. Его не обязательно закрывать, так как
        конец строки эффективно это сделает за вас. // Это однострочный
        комментарий. Многострочные комментарии используют тот же синтаксис,
        который вам встречался в CSS. Все, что находится между символами /**/,
        игнорируется браузером. Их можно использовать, чтобы «комментировать»
        заметки и даже фрагменты сценария при поиске ошибок в коде. /* Это
        многострочный комментарий. Все, что находится между этими наборами
        символов, будет полностью игнорироваться при выполнении сценария. Такой
        вид комментария необходимо закрывать. */ Однострочные комментарии удобны
        для добавления кратких пояснений к примерам программного кода, и часто
        используются начинающими программистами при выполнении простых заданий,
        позволяющих быстро увидеть результаты работы сценариев JavaScript.
      </p>
      <p>
        <h2>Циклы в JavaScript.</h2> Бывают случаи, когда необходимо пройтись по
        всем элементам в массиве и с каждым совершить действие, но не хочется
        выписывать все элементы в список и повторяться десять раз и более. Здесь
        на помощь программисту приходят циклы. Циклы позволяют легко работать с
        огромными наборами данных. Скажем, у нас есть форма, в которой ни одно
        из полей не должно оставаться пустым. Если мы используем DOM для всех
        случаев ввода текста на странице, она предоставит массив для каждого
        элемента ввода текста. Конечно, можно проверять каждое значение,
        сохраненное в этом массиве поочередно, но тогда код будет очень длинным,
        а его поддержка превратится в кошмар. Если мы используем цикл для
        проверки каждого значения, нам не придется изменять сценарий, независимо
        от того, сколько полей добавлены на страницу или удалены с нее. Циклы
        позволяют применить действие к каждому элементу в массиве, независимо от
        размера этого массива.
      </p>
      <p>
        <h2>Идиоматический JavaScript.</h2> В сообществе пользователей
        JavaScript предпринимаются усилия по созданию пособия по стилям для
        написания кода JavaScript. В документе «Принципы написания
        согласованного, идиоматического JavaScript» говорится следующее: "Весь
        код программы должен выглядеть так, будто он набран одним человеком,
        независимо от того, сколько людей участвовали в ее «разработке». Для
        достижения этой цели группа разработчиков составила Манифест
        идиоматического стиля, в котором описывается, как следует прописывать
        пробельные символы, переводы строк, кавычки, функции, переменные и
        прочее для создания «прекрасного кода».
      </p>
    </React.Fragment>
  );
}

function Cpp() {
  return (
    <React.Fragment>
      <h1>С++</h1>
      <img src="images/cpp.png" alt="cpp logo" />
      <p>
        C++ (читается си-плюс-плюс) — компилируемый, статически типизированный
        язык программирования общего назначения, на котором можно создавать
        программы любого уровня сложности. Более 20 лет этот язык находится в
        тройке самых популярных и востребованных языков программирования. Язык
        возник в начале 1980-х годов, когда сотрудник фирмы Bell Labs Бьёрн
        Страуструп придумал ряд усовершенствований к языку C под собственные
        нужды.
      </p>
      <p>
        Страуструп решил дополнить язык C возможностями, имеющимися в языке
        Симула. Язык C, будучи базовым языком системы UNIX, на которой работали
        компьютеры Bell, является быстрым, многофункциональным и переносимым.
        Страуструп добавил к нему возможность работы с классами и объектами. В
        результате практические задачи моделирования оказались доступными для
        решения как с точки зрения времени разработки (благодаря использованию
        Симула-подобных классов), так и с точки зрения времени вычислений
        (благодаря быстродействию C).
        <br />
        Вот как об этом говорит сам разработчик языка: В 1998 году был
        опубликован первый стандарт языка, известный как C++98, разработанный
        комитетом по стандартизации. C++ продолжает развиваться, чтобы отвечать
        современным требованиям. Одна из групп, разрабатывающих язык C++ и
        направляющих комитету по стандартизации C++ предложения по его улучшению
        — это <strong>Boost</strong>, которая занимается, в том числе,
        совершенствованием возможностей языка путём добавления в него
        особенностей метапрограммирования. Последний стандарт вышел в 2017 году
        и носит наименование <strong>С++17</strong>. Следующий стандарт не
        заставит себя долго ждать и появится, как ожидают, в 2020 году.
        <br />
        Никто не обладает правами на язык C++, он является свободным. В марте
        2016 года в России была создана рабочая группа РГ21 С++. Группа была
        организована для сбора предложений к стандарту C++, отправки их в
        комитет и защиты на общих собраниях Международной организации по
        стандартизации.
        <br />
        С++ &#8211; это мультипарадигмальный язык (от слова парадигма &#8211;
        стиль написания компьютерных программ), включающий широкий спектр
        различных стилей и технологий программирования. Часто его причисляют к
        объектно-ориентированным языкам, но, строго говоря, это не так. В
        процессе работы разработчик получает абсолютную свободу в выборе
        инструментов для того, чтобы задача, решаемая с помощью того или иного
        подхода, была решена максимально эффективно. Иными словами, С++ не
        понуждает программиста придерживаться только одного стиля разработки
        программы (например, объектно-ориентированного).
        <br />
        Синтаксис C++ унаследован от языка C. Одним из принципов разработки было
        сохранение совместимости с C. Тем не менее, C++ не является в строгом
        смысле надмножеством C. Со временем, практическая совместимость между
        языками C и C++ постепенно будет утрачиваться, так как языки
        разрабатывают разные группы по стандартизации, не взаимодействующие друг
        с другом.
        <br />
        C++ повлиял на многие языки программирования, в их числе: Java, C#, D.
        <br />
        C++ имеет богатую стандартную библиотеку, которая включает в себя
        распространённые контейнеры и алгоритмы, ввод-вывод, регулярные
        выражения, поддержку многопоточности и другие возможности.
        <br />
        За время своего существования за языком С++ закрепились устойчивые мифы,
        которые легко опровергаются
      </p>
      <h2>Алфавит языка</h2>
      <p>
        Алфавит языка C++ составляют символы включенные в 7-битную кодировку ISO
        646/ECMA-6: space, <code>!</code>, <code>"</code>, <code>%</code>,{" "}
        <code>&amp;</code>, <code>(</code>, <code>)</code>, <code>*</code>,{" "}
        <code>+</code>, <code>-</code>, <code>.</code>, <code>/</code>,{" "}
        <code>0..9</code>, <code>:</code>, <code>;</code>, <code>&lt;</code>,{" "}
        <code>=</code>, <code>&gt;</code>, <code>?</code>, <code>A..Z</code>,{" "}
        <code>_</code>, <code>a..z</code>.<br />
        Тем не менее, часть символов, используемых в алфавите C++, не входит в
        кодовую базу этой кодировки: <code>&#123;</code>, <code>&#125;</code>,{" "}
        <code>[</code>, <code>]</code>, <code>#</code>, <code>\</code>,{" "}
        <code>^</code>, <code>|</code>, <code>~</code>.
      </p>
      <h2>Лексема</h2>
      <p>
        Символы алфавита образуют лексемы. <strong>Лексема</strong> (token)
        &#8211; это минимальная единица языка, имеющая самостоятельный смысл.
        Лексемы &#8211; формируют базовый словарь языка, понятный компилятору.
        Всего существует пять видов лексем:
        <br />
        <div>
          <ul>
            <li>
              {" "}
              <strong>Ключевые слова</strong> (keywords)
            </li>
            <li>
              <strong>Идентификаторы</strong> (identifiers)
            </li>
            <li>
              {" "}
              <strong>Литералы</strong> (literals)
            </li>
            <li>
              {" "}
              <strong>Операции</strong> (operators)
            </li>
            <li>
              <strong>Знаки пунктуации</strong> (разделители, punctuators)
            </li>
          </ul>
        </div>
        Лексемы (как и слова в естественном языке) разделяются непечатаемыми
        (пробельными) символами (пробел, символы табуляции, перевода строки,
        возврат каретки, перевода страницы) и знаками пунктуации: <code>[</code>
        , <code>]</code>, <code>(</code>, <code>)</code>, <code>&#123;</code>,{" "}
        <code>&#125;</code>, <code>*</code>, <code>,</code>, <code>:</code>,{" "}
        <code>=</code>, <code>;</code>, <code>...</code>, <code>#</code>.
      </p>
      <h2>Ключевые слова</h2>
      <p>
        <strong>Ключевые слова</strong> (уч. &#8211; служебные слова) &#8211;
        это лексемы специального назначения. Они зарезервированы, использовать
        их в качестве идентификаторов (имен объектов программы) запрещено.{" "}
      </p>
      <h2>Идентификаторы</h2>
      <p>
        <strong>Идентификатор</strong> &#8211; это имя программного объекта:
        переменной, константы, массива, функции, класса и т. п. В
        идентификаторах могут использоваться латинские буквы, цифры и знак
        нижнего подчеркивания ( <code>_</code> ). В C++ различаются строчные и
        прописные буквы (т. е. имена регистро-зависимы), так: Name, name и NAME
        &#8211; это разные идентификаторы. Правила использования
        идентификаторов:
      </p>
      <ol>
        <li>можно использовать латинские символы: A..Z, a..z;</li>
        <li>
          можно использовать арабские цифры: 0..9 и символ нижнего
          подчеркивания, но не в начале;
        </li>
        <li>пробелы в имени не допускаются;</li>
        <li>
          не рекомендуется начинать с нижнего подчеркивания или с двух нижних
          подчеркиваний и заглавной буквы, например: _S (такие идентификаторы
          имеют специальное назначение);
        </li>
        <li>
          двойное подчеркивание используется только для служебных целей to__boo
        </li>
        <li>не допускается использования ключевых слов;</li>
        <li>
          необходимо воздерживаться от использования ключевых слов, как части
          имени, например: <code>for_and_if</code> (за исключением наименования
          типов)
        </li>
      </ol>
      <p>
        При составлении имен желательно придерживаться какого-либо стиля,
        например, стиля <code>CamelCase</code>: имена пишутся слитно, каждое
        слово, описывающее назначение идентификатора, пишется с заглавной буквы.
        Этот стиль используется в двух вариантах: <code>UpperCamelCase</code> и{" "}
        <code>lowerCamelCase</code>. Первый используется для именования классов,
        второй для прочего: переменных, методов и т.п.
      </p>
      <h2>Литералы</h2>
      <p>
        <strong>Литералы</strong>, иначе константы &#8211; это неизменяемые
        величины. Примеры различных констант:
      </p>
      <h3>Целые</h3>
      <p>
        <code>0</code>, <code>-1</code>, <code>10000</code>
        <br />
        По умолчанию целочисленные лексемы имеют тип <code>int</code>.<br />
        <strong>
          Представление целых литералов в различных системах счисления
        </strong>
        :<br />
        <strong>Двоичной</strong>: <code>0b1010</code>, <code>0B111100111</code>
        <br />
        <strong>Восьмеричной</strong>: <code>01</code>, <code>020</code>,{" "}
        <code>07155</code>
        <br />
        <strong>Шестнадцатеричной</strong>: <code>0xA</code>, <code>0x1B8</code>
        , <code>0X00FF</code>
      </p>
      <h3>Действительные</h3>
      <p>
        <strong>С фиксированной точкой</strong>: <code>5.7</code>,{" "}
        <code>.001</code>, <code>-35.</code>, <code>0.0</code>
        <br />
        <strong>С плавающей точкой (экспоненциальный)</strong>:
        <code> -0.2E6</code>, <code>.11e-3</code>, <code>5E10</code>,{" "}
        <code>2.e-10</code>
        <br />
        По умолчанию они имеют тип <code>double</code>.
      </p>
      <h6>Символьные</h6>
      <p>
        Один или два символа заключенные в апострофы: <code>'S'</code>,{" "}
        <code>'щ'</code>, <code>'\t'</code>, <code>'\012'</code>,{" "}
        <code>'\x07\x07'</code>, <code>'db'</code>
      </p>
      <div>
        Примечание: к символьным константам относятся специальные управляющие
        символы (escape-последовательности).
      </div>
      <h3>Escape-последовательности</h3>
      <p>
        <strong>Escape-последовательности</strong> (или управляющие
        последовательности) используются для описания определённых специальных
        символов <em>внутри строковых литералов</em>, то есть внутри
        ограничителей <code>""</code>. Вот некоторые из них:
        <code>\n</code> &#8211; новая строка
        <code>\t</code> &#8211; горизонтальная табуляция
        <code>\v</code> &#8211; вертикальная табуляция
        <code>\0</code> &#8211; нулевой символ Например:{" "}
        <code>
          "Ветер на море гуляет\nИ кораблик подгоняет;\nОн бежит себе в
          волнах\nНа раздутых парусах."
        </code>
      </p>
      <h3>Строковые</h3>
      <p>
        Последовательность символов, заключенные в кавычки:
        <code>"Hello world!"</code>, <code>"Здесь был Вася :-))"</code>
      </p>
      <div>
        Примечание: к строковому литералу автоматически добавляется признак
        конца строки (<code>'\0'</code>).
      </div>
      <h3>Прочие</h3>
      <p>
        <strong>Булевские</strong> (логические): <code>false</code>,{" "}
        <code>true</code>и другие, с которыми мы познакомимся позднее. В
        заключение добавим, что целые, действительные и строковые литералы
        используют специальные суффиксы, приказывающие компилятору изменить
        представление типов данных (используемых по умолчанию), примеры
        использования суффиксов мы покажем во время более близкого знакомства с
        типами данных.
      </p>
      <h2>Комментарии</h2>
      <p>
        <strong>Комментарии</strong> служат для описания и документирования
        исходного кода. В C++ применяются два вида комментариев: многострочный и
        однострочный.
      </p>

      <p>
        В комментариях можно использовать любые, доступные в среде, символы
        &#8211; компилятор игнорирует содержимое закомментированного блока или
        строки.
      </p>
    </React.Fragment>
  );
}
