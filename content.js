

document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
        on: false,

        toggle() {
            this.on = ! this.on
        }
    })

    Alpine.store('content', {
        lang: 'en',
     
        menu: {
            en:{
                homepage:'homepage',
                about:'about me',
                services:'services',
                work:'work',
                contact:'contact'
            },
            it:{
                homepage:'inizio',
                about:'io',
                services:'servizi',
                work:'lavoro',
                contact:'contatto'
            },
            pt:{
                homepage:'início',
                about:'sobre',
                services:'serviços',
                work:'trabalho',
                contact:'contato'
            },
        },

        hero: {
            en:{
                hello:"Hi, I'm <fa-br1zz10/>!",
                intro:"I am an software engineer. The guiding star of my journey is working with people to achieve success on building solutions that leverage best-practice technologies to deliver a top user experience. I love all around the development process, mainly learning together with my peers.",
                btn:'hire me',
               
            },
            it:{
                hello:"Ciao, sono <fa-br1zz10/>!",
                intro:"Sono un ingegnere del software. La stella guida del mio viaggio è lavorare con le persone per raggiungere il successo nella creazione di soluzioni che sfruttino le tecnologie delle migliori pratiche per offrire un'esperienza utente eccezionale. Amo tutto il processo di sviluppo, principalmente imparare insieme ai miei colleghi.",
                btn:'contrattami',
               
            },
            pt:{
                hello:"Olá, eu sou o <fa-br1zz10/>!",
                intro:"Eu sou um engenheiro de software. A estrela guia da minha jornada é trabalhar com pessoas para alcançar o sucesso na criação de soluções que aproveitam as tecnologias de melhores práticas para oferecer uma experiência de usuário de primeira. Adoro todo o processo de desenvolvimento, principalmente aprendendo junto com meus colegas.",
                btn:'me contrate!',
               
            },
        },

        about: {
            en:{
                title:"About me",
                title2:"I build things for the web,",
                para1:"as a multi-disciplinary maker with over 10 years of experiences specialized in refined digital web experiences with powerfull back-end plus a focus on animated, responsive, and interactive content.",
                para2:"Partnering with agencies and brands that value design and development integrity.Delivering highly executed front-end user experiences by paying close attention to the nuances of design, optimization, and performance.",
               
               
            },
            it:{
                title:"Su di me",
                title2:"Io construisco cose per la web,",
                para1:"come produttore multidisciplinare con oltre 10 anni di esperienza specializzato in raffinate esperienze web digitali con un potente back-end oltre a un focus su contenuti animati, reattivi e interattivi.",
                para2:"Collaborazione con agenzie e marchi che apprezzano l'integrità del design e dello sviluppo. Fornire esperienze utente front-end altamente eseguite prestando molta attenzione alle sfumature di design, ottimizzazione e prestazioni.",
                
               
            },
            pt:{
                title:"Sobre mim",
                title2:"Eu crio coisas para a web,",
                para1:"como um criador multidisciplinar com mais de 10 anos de experiência especializado em refinadas experiências digitais da web com back-end poderoso, além de foco em conteúdo animado, responsivo e interativo.",
                para2:"Parceria com agências e marcas que valorizam a integridade do design e do desenvolvimento. Oferecendo experiências de usuário de front-end altamente executadas, prestando muita atenção às nuances de design, otimização e desempenho.",
               
            },
        },
        services: {
            en:{
                title:"Services",
                title2:"What do I offer?",
                para1:"I design and build digital products to help and engage in growing companies like yours make more by combining your goals with your user’s needs. My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use andsimplicity for your audience.",
            },
            it:{
                title:"Servizi",
                title2:"Cosa offro?",
                para1:"Progetto e realizzo prodotti digitali per aiutare e coinvolgere aziende in crescita come la tua per ottenere di più combinando i tuoi obiettivi con le esigenze dei tuoi utenti. Il mio approccio alla progettazione di siti Web è creare un sito Web che rafforzi il marchio della tua azienda garantendo al contempo facilità d'uso e semplicità per il tuo pubblico.",
            },
            pt:{
                title:"Serviços",
                title2:"O que vamos construir hoje?",
                para1:"Eu projeto e construo produtos digitais para ajudar e engajar empresas em crescimento como a sua a fazer mais, combinando seus objetivos com as necessidades do seu usuário. Minha abordagem para o design do site é criar um site que fortaleça a marca da sua empresa, garantindo facilidade de uso e simplicidade para o seu público",               
            },
        },

        w_dev_card:{
            en:{
                title:"Web Development",
                body: "As a full stack developer I  build and maintain websites. I work for clients who are looking to get their product or service onto the web. My  work is very project focused and involves collaborating with a team that helps to coordinate the client’s needs into the end product both  for tech companies, or organizations.",
                btn:"read more"
            },
            it:{
                title:"Ingegneria di Software",
                body: "In qualità di sviluppatore full stack, costruisco e gestisco siti web.  Lavoro per clienti che cercano di portare il loro prodotto o servizio sul web. Il mio lavoro è molto focalizzato sul progetto e prevede la collaborazione con un team che aiuta a coordinare le esigenze del cliente nel prodotto finale sia per le aziende tecnologiche che per le organizzazioni.",
                btn:"Scopri di piú"
            },
            pt:{
                title:"Desenvolvimento Web",
                body: "Como desenvolvedor full stack, construo e mantenho sites. Eu trabalho para clientes que desejam colocar seu produto ou serviço na web. Meu trabalho é muito focado em projetos e envolve a colaboração com uma equipe que ajuda a coordenar as necessidades do cliente no produto final, tanto para empresas de tecnologia quanto para organizações.",
                btn:"Saiba Mais"
            }
        },

        f_end_card:{
            en:{
                title:"Web Front-end Design and user experience",
                body: "I´m specialized in  different areas of web design including  web graphic design; user interface design (UI design); authoring, including standardised code and proprietary software; user experience design (UX design); and search engine optimization, with an awareness of usability and be up to date with web accessibility guidelines.",
                description:`I´m specialized in  different areas of web design including  web graphic design; user interface design (UI design); authoring, including standardised code and proprietary software; user experience design (UX design); and search engine optimization. Often many individuals will work in teams covering different aspects of the design process, although some designers will cover them all.[1] The term "web design" is normally used to describe the design process relating to the front-end (client side) design of a website including writing markup. Web design partially overlaps web engineering in the broader scope of web development. Web designers are expected to have an awareness of usability and be up to date with web accessibility guidelines.`,
                btn:"Read More"
            },
            it:{
                title:"Design front-end ed esperienza utente",
                body: "Sono specializzato in diverse aree del web design incluso il web graphic design; progettazione dell'interfaccia utente (progettazione dell'interfaccia utente); authoring, inclusi codice standardizzato e software proprietario; progettazione dell'esperienza utente (progettazione UX); e ottimizzazione dei motori di ricerca, con consapevolezza dell'usabilità ed essere aggiornati con le linee guida per l'accessibilità al web.",
                btn:"Scopri di piú"
            },
            pt:{
                title:"Design front-end e experiência do usuário",
                body: "Sou especializado em diferentes áreas de web design incluindo web design gráfico; design de interface do usuário (design de interface do usuário); autoria, incluindo código padronizado e software proprietário; design de experiência do usuário (design UX); e otimização de mecanismos de busca, com consciência de usabilidade e estar atualizado com as diretrizes de acessibilidade na web.",
                btn:"Saiba Mais"
            }
        },

        cms_card:{
            en:{
                title:"CMS Solutions",
                body: "My professional skills are available to develop the company's brand and establishing its online presence.  I can provide solutions in overseeing marketing strategies that engage customers and ensuring they are happy with what the company’s products or services offer them.",
                description:`My professional skills are available to develop the company's brand and establishing its online presence.  I can provide solutions in overseeing marketing strategies that engage customers and ensuring they are happy with what the company’s products or services offer them.

                to be responsible for creating, improving and maintaining content to achieve the business goals. including sharing content to raise brand awareness and monitoring web traffic and metrics to identify best practices.
                
                I' am an experienced professional with demonstrable creative writing skills. I perform well under deadlines and be detail-oriented.
                
                I' am able to oversee all marketing content initiatives to ensure customer engagement, brand consistency and a positive customer experience.
                
                CMS solutions


                Content in multiple languages

                Cloud-based content storage

                Cloud-based content storage

                Fast integration with Gatsby

                Split content into local and production environments

                Possibility to have your own editing controls for managing content integrated into the CMS

                Fetch and manipulate content via API

                Give a friend/family member/dog/cat access to collaborate on content

                
                `,
                btn:"Read More"
            },
            it:{
                title:"CMS - soluzioni per sistemi di gestione dei contenuti",
                body: "Le mie competenze professionali sono a disposizione per sviluppare il marchio dell'azienda e stabilirne la presenza online. Posso fornire soluzioni nella supervisione delle strategie di marketing che coinvolgono i clienti e assicurando che siano soddisfatti di ciò che i prodotti o servizi dell'azienda offrono loro.",
                btn:"Scopri di piú"
            },
            pt:{
                title:"CMS - soluções de sistema de gerenciamento de conteúdo",
                body: "Minhas habilidades profissionais estão disponíveis para desenvolver a marca da empresa e estabelecer sua presença online. Posso fornecer soluções na supervisão de estratégias de marketing que envolvem os clientes e garantindo que eles estejam satisfeitos com o que os produtos ou serviços da empresa oferecem.",
                btn:"Saiba Mais"
            }
        },

        consult_card:{
            en:{
                title:"Development Consulting",
                body: "I' am able to provide deep expertise and knowledge regarding software development that satisfy an organizations specific needs. Generally, I provide services designed specifically to improve software development workflows that result in better business decisions, regardless of the technology, software, or additional tools required, achieving an improved and customized solution that creates long lasting value  upon delivery.",
                btn:"read more"
            },
            it:{
                title:"consulenza per lo sviluppo di software",
                body: "Sono in grado di fornire una profonda esperienza e conoscenza per quanto riguarda lo sviluppo di software che soddisfano le esigenze specifiche di un'organizzazione. In generale, fornisco servizi progettati specificamente per migliorare i flussi di lavoro di sviluppo software che si traducono in migliori decisioni aziendali, indipendentemente dalla tecnologia, dal software o dagli strumenti aggiuntivi richiesti, ottenendo una soluzione migliorata e personalizzata che crea un valore duraturo al momento della consegna.",
                btn:"Scopri di piú"
            },
            pt:{
                title:"consultoria de desenvolvimento de software",
                body: "Sou capaz de fornecer profundo conhecimento e experiência em desenvolvimento de software que satisfaça as necessidades específicas de uma organização. Geralmente, forneço serviços projetados especificamente para melhorar os fluxos de trabalho de desenvolvimento de software que resultam em melhores decisões de negócios, independentemente da tecnologia, software ou ferramentas adicionais necessárias, obtendo uma solução aprimorada e personalizada que cria valor duradouro na entrega.",
                btn:"Saiba Mais"
            }
        },

        prom_card:{
            en:{
                title:"Project Management",
                body: "My Project management skills matches the organization needs in order to effectively coordinate a project from start to finish. I  leads a projects team using good communication, interpersonal skills, motivational skills, and organization. That includes planning projects, mapping out timelines, and executing each phase of the project.",
                btn:"read more"
            },
            it:{
                title:"consulenza per lo sviluppo di software",
                body: "Minhas habilidades de gerenciamento de projetos correspondem às necessidades da organização para coordenar efetivamente um projeto do início ao fim. Lidero uma equipe de projetos usando boa comunicação, habilidades interpessoais, habilidades motivacionais e organização. Isso inclui planejar projetos, mapear cronogramas e executar cada fase do projeto.",
                btn:"Scopri di piú"
            },
            pt:{
                title:"Gerenciamento de Projetos",
                body: "Minhas habilidades de gerenciamento de projetos correspondem às necessidades da organização para coordenar efetivamente um projeto do início ao fim. Lidero uma equipe de projetos usando boa comunicação, habilidades interpessoais, habilidades motivacionais e organização. Isso inclui planejar projetos, mapear cronogramas e executar cada fase do projeto.",
                btn:"Saiba Mais"
            }
        },

        bigd_card:{
            en:{
                title:"Big Data, Database Architecture, Data Flow Integrations",
                body: "I ' am a Customer-Facing Data Scientist and Database Architect. In my prior roles, I  spent time with companies understanding and architecting solutions for both business analytics and data science platforms. I also focus on technical ecosystem integrations, particularly the challenges of enterprise-grade deployments (security, availability, and scalability).",
                btn:"read more"
            },
            it:{
                title:"Big Data, architettura di database, integrazioni di flussi di dati",
                body: "Sono un Data Scientist e un Database Architect a contatto con il cliente. Nei miei ruoli precedenti, ho trascorso del tempo con le aziende comprendendo e progettando soluzioni sia per l'analisi aziendale che per le piattaforme di scienza dei dati.Mi concentro anche sulle integrazioni tecniche dell'ecosistema, in particolare sulle sfide delle implementazioni di livello aziendale (sicurezza, disponibilità e scalabilità).",
                btn:"Scopri di piú"
            },
            pt:{
                title:"Big Data, arquitetura de banco de dados, integrações de fluxo de dados",
                body: "Sou um Cientista de Dados e Arquiteto de Banco de Dados voltado para o cliente. Em minhas funções anteriores, passei um tempo com empresas entendendo e arquitetando soluções para plataformas de análise de negócios e ciência de dados.Também me concentro em integrações técnicas de ecossistemas, particularmente os desafios de implantações de nível empresarial (segurança, disponibilidade e escalabilidade).",
                btn:"Saiba Mais"
            }
        },

        portfolio: {
            en:{
                title:"PORTFOLIO",
                title2:"Works & Projects",
                para1:"I help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and coffee, I turn your requirements into a well-designed websites",
            },
            it:{
                title:"PORTFOLIO",
                title2:"Progetti Realizzati",
                para1:"Aiuto designer, piccole agenzie e aziende a dare vita alle loro idee. Alimentato da Figma, VS Code e caffè, trasformo le tue esigenze in siti Web ben progettati",
            },
            pt:{
                title:"PORTFOLIO",
                title2:"Projetos Realizados e Estudos",
                para1:"Ajudo designers, pequenas agências e empresas a dar vida às suas ideias. Desenvolvido por Figma, VS Code e café, transformo seus requisitos em sites bem projetados",               
            },
        },
        
    })
    
})









