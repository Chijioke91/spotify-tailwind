import React from 'react';

const Spotify = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex overflow-hidden">
        <div className="bg-gray-900-spotify flex-none w-48  flex flex-col justify-between font-semibold">
          <ul className="py-6">
            <li className="border-l-4 border-green-600">
              <a href="#! " className="flex items-center mx-4 mt-4 group">
                <svg
                  className="fill-current text-white group-hover:text-white h-6 w-6"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M13 20v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.59l-.3.3a1 1 0 11-1.4-1.42l9-9a1 1 0 011.4 0l9 9a1 1 0 01-1.4 1.42l-.3-.3V20a2 2 0 01-2 2h-3a2 2 0 01-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 012 2v5h3z" />
                </svg>
                <span className="ml-2 text-white group-hover:text-white">
                  Home
                </span>
              </a>
            </li>
            <li className="border-l-4 border-transparent">
              <a
                href="#!"
                className="flex items-center hover:text-white mx-4 mt-4 group"
              >
                <svg
                  className="fill-current text-gray-400 h-6 w-6 group-hover:text-white"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M15 5.414V7h1.586z" />
                  <path fill="none" d="M14 9a1 1 0 01-1-1V4H9v12h9V9h-4z" />
                  <path d="M20 17V8h-.009a.996.996 0 00-.284-.707l-5-5A.99.99 0 0014 2.01V2H8a1 1 0 00-1 1v14a1 1 0 001 1h11a1 1 0 001-1zM15 5.414L16.586 7H15V5.414zM9 16V4h4v4a1 1 0 001 1h4v7H9z" />
                  <path d="M3 8v13a1 1 0 001 1h12v-2H5V8H3z" />
                </svg>
                <span className="ml-2 group-hover:text-white">Browse</span>
              </a>
            </li>
            <li className="border-l-4 border-transparent">
              <a
                href="#!"
                className="flex items-center hover:text-white mx-4 mt-4 group"
              >
                <svg
                  className="fill-current text-gray-400 h-6 w-6 group-hover:text-white"
                  viewBox="0 0 24 24"
                >
                  <g data-name="Layer 2">
                    <g data-name="radio">
                      <path d="M12 8a3 3 0 00-1 5.83 1 1 0 000 .17v6a1 1 0 002 0v-6a1 1 0 000-.17A3 3 0 0012 8zm0 4a1 1 0 111-1 1 1 0 01-1 1zM3.5 11a6.87 6.87 0 012.64-5.23 1 1 0 10-1.28-1.54A8.84 8.84 0 001.5 11a8.84 8.84 0 003.36 6.77 1 1 0 101.28-1.54A6.87 6.87 0 013.5 11z" />
                      <path d="M16.64 6.24a1 1 0 00-1.28 1.52A4.28 4.28 0 0117 11a4.28 4.28 0 01-1.64 3.24A1 1 0 0016 16a1 1 0 00.64-.24A6.2 6.2 0 0019 11a6.2 6.2 0 00-2.36-4.76zM8.76 6.36a1 1 0 00-1.4-.12A6.2 6.2 0 005 11a6.2 6.2 0 002.36 4.76 1 1 0 001.4-.12 1 1 0 00-.12-1.4A4.28 4.28 0 017 11a4.28 4.28 0 011.64-3.24 1 1 0 00.12-1.4z" />
                      <path d="M19.14 4.23a1 1 0 10-1.28 1.54A6.87 6.87 0 0120.5 11a6.87 6.87 0 01-2.64 5.23 1 1 0 001.28 1.54A8.84 8.84 0 0022.5 11a8.84 8.84 0 00-3.36-6.77z" />
                    </g>
                  </g>
                </svg>
                <span className="ml-2 group-hover:text-white2">Radio</span>
              </a>
            </li>
          </ul>

          <div className="sidebar-spotify overflow-y-auto px-5 mt-2">
            <h3 className="uppercase tracking-widest text-gray-500 font-normal text-xs">
              Your Library
            </h3>
            <ul className="leading-extra-loose">
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Made For You
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Recently Played
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Liked Songs
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Albums
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Artists
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Podcasts
                </a>
              </li>
            </ul>

            <h3 className="uppercase tracking-widest text-gray-500 font-normal text-xs mt-6">
              Playlists
            </h3>
            <ul className="leading-extra-loose mb-6">
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Acoustic Hits
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Acoustic Covers
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Discover Weekly
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Hot Hits Canada
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  90's Hip-Hop Don't Stop Long Text
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  90s Smash Hits
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  TGIF
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  mint Canada
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Hip-Hop Central
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  R&amp;B Right Now
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  I Love My '90s R&amp;B
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Are &amp; Be
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Today's Top Hits
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  Get Turnt
                </a>
              </li>
              <li className="truncate">
                <a href="#!" className="hover:text-white">
                  iTunes
                </a>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-800 h-16 px-4 py-2 cursor-pointer flex items-center group">
            <svg
              className="fill-current text-gray-600 w-8 h-8 group-hover:text-white"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className="heroicon-ui"
                d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"
              />
            </svg>
            <a
              href="#!"
              className="font-normal text-gray-500 ml-2 group-hover:text-white"
            >
              New Playlist
            </a>
          </div>
        </div>
        <div className="content-spotify flex-1 bg-gray-800-spotify overflow-y-auto">
          Content Area. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Nam nostrum nisi accusantium officia, fugiat quaerat. Beatae,
          inventore numquam deserunt quaerat atque dolorem alias itaque, est,
          nobis commodi tempora amet illum perferendis aut? Quis cupiditate
          quasi atque dicta illo saepe ut libero et natus rerum fuga repellendus
          deleniti laudantium, maxime quidem suscipit. Debitis vitae harum
          cumque fugiat, pariatur ea veritatis magnam consequatur. Veritatis ut
          mollitia eius beatae voluptatibus. Cupiditate ad illum soluta aperiam
          neque ut atque aliquam delectus dignissimos totam rem hic repudiandae
          nostrum quaerat sit repellat tenetur minus, nesciunt consequuntur qui
          porro, officiis facilis exercitationem. Temporibus odio ratione minima
          optio voluptatum culpa corrupti eum soluta ipsam porro. Numquam ad
          voluptas facere, in deleniti debitis placeat earum quidem ea repellat
          obcaecati iusto molestias dicta! Iure eligendi vitae ab magnam
          incidunt quisquam corporis officiis nam fugit! Necessitatibus unde
          optio voluptas tempora asperiores vero, blanditiis consequatur quae.
          Voluptatem eaque quidem fugiat sequi distinctio maiores blanditiis
          facere, cum corporis numquam odit ut modi! Nemo necessitatibus qui
          suscipit autem sint alias velit nihil dolore doloribus, magnam
          molestias adipisci modi placeat deserunt in quas soluta quidem impedit
          nulla. Ex fuga hic molestiae maiores! Cum, eligendi porro tempore
          repellat illum est quisquam voluptatum dolore! Velit illum quasi
          laudantium, quos libero minus porro ducimus. Nesciunt facilis quam
          repudiandae optio ullam at doloremque? Dolorem beatae tempora in
          veritatis odio, modi nostrum dolore quas accusantium? Porro eveniet
          quidem nisi dolores laborum tempore, neque molestias saepe, amet unde
          aspernatur! Itaque nesciunt, a esse rerum quis aliquid expedita
          necessitatibus exercitationem molestias. Molestias, odio ullam maiores
          repudiandae cum fugiat unde dolor assumenda iste eius animi corrupti
          asperiores delectus sequi quod sunt iure. Ducimus id tenetur,
          voluptatum laudantium quaerat ipsam velit fugiat officiis qui non sed
          soluta delectus iusto, perspiciatis, adipisci assumenda dicta ad vel.
          Modi pariatur ipsam quidem labore? Similique ipsam nisi odio
          consequuntur dolorum consectetur enim, alias nostrum voluptatum, quam
          aliquam, voluptatibus illum sequi mollitia ratione praesentium maiores
          suscipit! Deserunt facilis obcaecati harum unde quae? Iure, numquam
          voluptates. Voluptatem quae incidunt esse aliquam nihil qui impedit
          itaque voluptas eius quas laborum officia expedita earum consequuntur
          repellendus, necessitatibus sequi doloribus odio asperiores minima eos
          obcaecati ex, error tenetur! Exercitationem tenetur qui facere atque!
          Esse recusandae iure earum porro eos libero numquam quasi tenetur
          ducimus! Eum sequi molestias, temporibus veritatis sit animi deserunt
          dolor voluptatem excepturi laudantium accusamus pariatur culpa
          cupiditate quod consequuntur maxime asperiores? Aperiam unde explicabo
          quidem sed ut iusto incidunt architecto inventore ad nam assumenda
          natus, labore atque sequi, officiis dolorem porro rem tenetur
          excepturi debitis dignissimos. Aspernatur magnam saepe officia in
          necessitatibus expedita quasi ducimus ea voluptas doloribus ratione
          autem iste iure dignissimos voluptate, quidem totam id modi?
          Praesentium deleniti quasi ab minus dolores illo eum, atque quas.
          Pariatur maiores error aut deleniti sequi iure doloremque debitis iste
          dicta ipsum excepturi qui laborum ipsam molestiae ut dignissimos ad
          et, consequatur autem. Sint quod vel voluptas aperiam beatae delectus
          perspiciatis quos velit enim nisi facere accusantium vitae dignissimos
          maxime ipsam consectetur, totam ratione autem ipsum quisquam! Nesciunt
          quae placeat saepe! At illum ea numquam provident aliquid laborum
          fugit quam, consequuntur soluta quisquam dolorum nam molestiae
          accusamus atque? Nemo adipisci quae cupiditate, aperiam ducimus id!
          Ullam magni nisi libero illum ex quod commodi rem unde. Earum id ab ea
          natus aspernatur, facilis, tempora non, minima laudantium temporibus
          esse architecto recusandae nam ipsa quia reiciendis. Tenetur sed illum
          ad quia quasi non nisi, veniam ex laborum. Dolore iusto natus libero
          possimus, et id assumenda nulla, in, accusamus repellendus culpa
          sapiente accusantium! Rerum aspernatur inventore adipisci nemo ut!
          Pariatur ipsum aliquid esse doloremque, aliquam incidunt? Tenetur
          magni omnis sit praesentium id, libero facilis explicabo ipsa laborum
          minima, nemo beatae impedit alias. Temporibus similique illum
          molestias aspernatur explicabo ex eos, dignissimos ab eum nostrum,
          itaque veritatis quo rem. Suscipit voluptatem sed placeat vitae
          temporibus veniam sequi non voluptas nobis architecto laudantium et
          ratione similique quas cum nulla alias molestiae illum ad labore qui
          libero corporis, rem blanditiis? Quis excepturi blanditiis vero quos
          quaerat pariatur veniam temporibus earum debitis officia aliquid odio
          eveniet voluptate incidunt fuga vitae, dolores officiis velit ipsum,
          impedit esse modi totam rerum! Pariatur adipisci voluptas distinctio
          odit ullam incidunt voluptatem mollitia! Deleniti debitis ipsa tempora
          pariatur alias deserunt, et culpa qui officiis rem autem incidunt
          possimus libero omnis expedita! Distinctio, temporibus. Illo, impedit
          libero rerum quas assumenda perspiciatis labore placeat cupiditate
          laboriosam sed saepe fuga, consequatur deserunt expedita, debitis esse
          nesciunt! Aliquam nesciunt omnis quisquam, totam vitae cumque
          voluptate illo alias commodi iure incidunt dolorum voluptatibus
          tempore obcaecati pariatur neque esse, ab ut doloribus? Voluptate sint
          quae nisi iste corrupti magni, quia quidem expedita, reprehenderit
          aliquid maiores eius necessitatibus ipsam mollitia perspiciatis
          architecto, voluptatibus cum id ipsum laborum tempore doloribus amet!
          Quam rerum natus deleniti animi. Tempora dolore ipsum iste
          repellendus. Sed est mollitia reiciendis, odio consequatur natus
          soluta blanditiis, aspernatur nesciunt tenetur obcaecati odit
          cupiditate ex illo cumque adipisci! Dolorem iste tempore obcaecati,
          tenetur voluptates maxime molestias dolorum quidem quibusdam delectus
          natus quia vero voluptatem laborum eius, ut facere autem, animi rerum
          quasi fugiat! Eos provident quam corrupti debitis ea, ullam in a
          corporis hic sed voluptatem vero nostrum itaque id omnis veritatis
          harum quasi, voluptates consequuntur commodi. Dolorum, atque? Labore
          libero minima placeat autem sit veniam corrupti odio? Mollitia
          aliquid, natus debitis eum hic repudiandae saepe quos ratione quaerat
          minima neque ea officia? Unde, dolor ipsam distinctio consequatur
          voluptate consequuntur corporis totam tenetur doloribus qui nesciunt
          error voluptatem dolorem nostrum, iste omnis amet accusantium ullam
          libero! Assumenda, porro similique a eum reprehenderit ipsa inventore
          ipsam cupiditate animi quidem blanditiis non voluptate. Voluptatibus
          incidunt nemo amet asperiores eos molestias repudiandae possimus,
          fugit non hic architecto saepe sapiente blanditiis magnam, sed,
          eligendi ipsa voluptatum similique vero velit delectus pariatur
          necessitatibus! Officiis voluptatibus facere, aliquam laborum nobis
          quia vitae doloribus! Eos ex itaque quibusdam quisquam enim tempore
          ipsa aliquid quod asperiores. Eius unde est a harum voluptas quaerat,
          quis beatae qui esse neque sed. Id, blanditiis. Est accusamus,
          quibusdam repellat quo, omnis exercitationem architecto delectus
          dolorem non ipsa sed rem placeat similique! Ipsam expedita dolorum
          voluptas quis soluta iure eaque architecto, accusantium sit porro rem,
          deleniti, reiciendis dicta recusandae ipsa quae rerum pariatur ut nam
          fuga libero. Labore, aliquid animi. Doloribus expedita voluptatum
          blanditiis similique. Rerum reiciendis ad aspernatur omnis! Mollitia
          voluptate cupiditate odit sequi, cum itaque asperiores. Error, non id.
          Veritatis magni, unde totam eum hic eligendi aut, ut voluptate
          sapiente, recusandae sed! Magni quod pariatur enim, maiores deserunt
          delectus a fuga. Voluptas corrupti eveniet iusto. Velit numquam
          consectetur ut voluptatibus, hic debitis. Quis corrupti natus nihil
          quam, quas velit obcaecati officia accusamus ipsum? Sed earum
          accusamus veniam in, veritatis laboriosam, nam, fuga tempora
          distinctio illum deleniti minima! Quis sint, asperiores ullam
          blanditiis explicabo autem necessitatibus vero distinctio officia
          fuga, dolores facere totam et sunt? Ut suscipit beatae numquam,
          aliquam nihil illo laborum sapiente culpa velit id quod nam quas eaque
          ullam commodi illum ea corporis, sed blanditiis animi vel magnam nobis
          officia cumque. Quae magnam autem cupiditate, commodi at repellat nemo
          tempora, nam reiciendis, laudantium neque ad dolore asperiores unde
          harum cumque exercitationem officiis facilis dicta molestias
          repellendus? Fugiat repudiandae consequuntur facilis, provident
          inventore laudantium eaque totam cumque expedita aliquid delectus
          mollitia. Nobis, beatae, corrupti quae rem cupiditate nostrum quasi
          aspernatur error sunt illo id vel nihil sit. Error saepe, quia ipsa
          officiis aliquid repellat officia quod autem commodi assumenda quae,
          suscipit est nam, eligendi a adipisci aspernatur odio enim non ad
          dolorum deleniti facilis quibusdam. Laborum quis officia quia itaque
          quibusdam soluta, placeat dolorem iure saepe debitis odit porro, modi
          ducimus eius consectetur praesentium excepturi voluptatibus totam!
          Libero maiores consequatur, eos voluptatibus eius nobis ratione veniam
          quod, ipsam provident quo dignissimos reiciendis incidunt sed adipisci
          suscipit excepturi recusandae tenetur, blanditiis voluptas autem
          temporibus vero illo! Repudiandae laboriosam quidem obcaecati minus
          sit necessitatibus commodi veritatis quibusdam, fugit, dignissimos eum
          ipsam quisquam suscipit quia, inventore voluptatem nihil recusandae?
          Veniam quam assumenda accusantium reiciendis cum, adipisci non fuga,
          voluptate odio neque eum sunt molestias voluptatum culpa similique?
          Quos expedita iusto minus, aliquid illo eius sit reiciendis similique
          ab accusantium optio, sunt itaque distinctio excepturi deserunt
          aliquam deleniti debitis quo. Sed deserunt voluptatem repudiandae quam
          esse, saepe explicabo veritatis iste eveniet vitae libero magnam,
          fugiat dolore facere atque consectetur deleniti, provident quaerat
          doloribus perspiciatis praesentium asperiores obcaecati reprehenderit!
          Adipisci facilis accusantium dolores pariatur eos repudiandae commodi
          id, praesentium omnis, numquam sint debitis totam minima laudantium
          quam corrupti voluptatum laboriosam laborum inventore modi eaque iusto
          alias provident. Doloribus totam natus nihil a, esse quaerat laborum
          omnis cumque sapiente voluptate iste consectetur! Optio error facere
          laborum, ab amet praesentium, numquam ea quas temporibus, esse nobis
          obcaecati. Tempore cumque quisquam vero. Rem enim vero nam!
          Consectetur ea eius ipsam sint laborum iusto sequi molestias voluptas,
          expedita possimus quisquam velit aliquam quae at saepe! Beatae sit
          recusandae autem expedita maiores natus placeat. Impedit rem
          voluptates ex, earum neque dolorum ut animi obcaecati quisquam
          perferendis vel quos maiores nulla quae. Ratione eius corporis quam
          reiciendis consectetur voluptates eaque aut eum debitis? Earum
          corporis soluta ea nostrum obcaecati aliquam ex, accusamus aspernatur
          quisquam laudantium est cumque vel. Deleniti, optio iure excepturi,
          earum nostrum, distinctio magni officiis consequatur incidunt non eum
          mollitia unde maxime error? Recusandae ratione, nulla, assumenda
          laboriosam aut, nesciunt officiis nostrum consectetur quia culpa in?
          Reiciendis mollitia sed corrupti cum aut, minima dolorum aperiam
          quibusdam numquam temporibus ipsam repellendus enim dolore quis
          doloribus eius asperiores exercitationem eaque ad ex similique
          accusamus eum? Sed accusamus doloremque dicta perspiciatis omnis culpa
          totam, modi ut autem odit voluptatem magni pariatur id accusantium
          deleniti tempore quisquam. Culpa, exercitationem hic! Placeat, aperiam
          aliquid voluptatibus nulla similique voluptatem ea, reiciendis ipsum
          illo ut quia quas impedit vel itaque alias sit. Molestiae ad, repellat
          facilis ratione autem, explicabo, quisquam corporis eligendi
          doloremque sed tempora debitis. Odit quis dicta ipsam earum harum
          beatae saepe fugit tempore. Minima repellat facilis aliquid eos magni
          enim obcaecati ipsum alias aliquam, facere vel quos cumque hic
          tenetur, nemo nam dolores reiciendis at et doloremque? Corporis eum
          fugit magni laboriosam nesciunt, ab ipsa doloremque culpa placeat
          veniam sit maiores quis quo possimus magnam suscipit incidunt quia?
          Quam facilis maxime, obcaecati numquam accusantium beatae adipisci
          voluptatibus sapiente esse! Excepturi labore rerum, debitis veniam
          voluptatum expedita distinctio culpa eum quos praesentium architecto
          suscipit, dolorum veritatis fugiat nihil perspiciatis, numquam quis
          facere sint nulla? Adipisci nisi dignissimos consequatur molestias
          amet quod, veritatis sed eum sequi sit obcaecati, repudiandae aliquam
          laboriosam, dicta accusamus ducimus? Eum quo sunt architecto nesciunt
          neque odit, voluptas ipsam nemo maiores hic consectetur ratione
          consequatur magnam molestiae corporis earum magni expedita quasi
          dolores ad amet repudiandae! Itaque optio cupiditate excepturi est
          modi inventore natus nesciunt aperiam alias necessitatibus quisquam
          soluta, harum pariatur unde fugit explicabo cumque incidunt hic earum
          cum laborum nam voluptatibus. Quo beatae magni enim, autem, aliquid
          eos minima quis repellat, iure asperiores sint dolor tempora
          perspiciatis voluptatibus sunt. Quae exercitationem aut obcaecati
          similique a perferendis praesentium. Iusto praesentium, voluptate esse
          voluptatibus, aliquid doloribus temporibus maxime perspiciatis non
          incidunt tempore magni quia porro. Asperiores repellat inventore
          doloribus ab saepe quos dolor enim omnis itaque, odit, dicta, maxime
          laborum quod. Numquam minus ad eligendi asperiores recusandae ducimus
          dolorem cum eos veritatis a rerum saepe vel aut, esse at tempora
          voluptates aspernatur nisi? Deserunt reprehenderit eum quae obcaecati
          eos veritatis id doloremque! Delectus, iusto voluptates aut
          voluptatibus, corrupti dolorem accusantium temporibus ipsum, optio
          expedita enim repellat amet ex mollitia qui totam sapiente? Autem
          nesciunt aspernatur, labore illo optio deleniti fuga vitae excepturi
          non perferendis corporis, voluptatibus mollitia dolores, ullam
          eligendi id quod dolorem deserunt! Ullam ipsam perferendis voluptas
          quaerat enim nostrum doloribus. Numquam, totam? Praesentium optio,
          itaque earum hic pariatur voluptatibus, eos iusto, velit deleniti
          suscipit assumenda ab neque? Harum hic est, quod doloremque soluta
          dolorum dolor. Rerum doloremque fugiat qui id, in quasi. Repudiandae
          ducimus perspiciatis quia? Sequi, tempora perspiciatis est quibusdam
          nobis eum asperiores voluptas nihil debitis autem porro maiores? Neque
          itaque autem quam eaque magni praesentium! Et praesentium tempore
          molestias, laudantium voluptatum nostrum nesciunt est facere eius
          suscipit doloribus, nemo provident itaque totam accusantium harum odit
          dolore aspernatur?
        </div>
      </div>
      <div className="bg-gray-700-spotify">Bottom</div>
    </div>
  );
};

export default Spotify;
