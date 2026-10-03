// Isipho Media Group Corporate Website Router & Views

const subsidiaries = [
    {
        id: "office-agents",
        name: "IMG Office Agents",
        category: "Business Process Outsourcing",
        desc: "IMG's dedicated office-based BPO and customer operations capability.",
        details: "Provides scalable, professional customer support, acquisition, lead generation, retention, onboarding, live chat, email support, and operational customer-facing assistance.",
        serves: "Corporates, digital platforms, financial institutions, and growing enterprises requiring reliable customer operations.",
        connection: "Operates as the core telephony and office BPO backbone of IMG's service group."
    },
    {
        id: "field-force",
        name: "IMG FieldForce",
        category: "Physical Operations",
        desc: "On-the-ground field agents operating directly in communities and physical markets.",
        details: "Specialises in field marketing, consumer surveys, direct product activations, community engagement, structured data collection, and physical customer acquisition.",
        serves: "FMCG brands, telecom operators, research agencies, and brands requiring direct grassroots market reach.",
        connection: "Complements office-based operations by bridging digital strategy with physical community presence."
    },
    {
        id: "fincrime-analysts",
        name: "IMG FinCrime Analysts",
        category: "Financial Compliance & Risk",
        desc: "Specialised financial-crime and due-diligence analyst capability.",
        details: "Delivers meticulous financial-crime analysis, background due diligence, investigative analysis, alert investigation support, and quality-focused compliance operations.",
        serves: "Fintechs, remittance operators, MTOs, and regulated financial institutions.",
        connection: "Leverages proprietary technology tools such as EvidencePack to eliminate repetitive investigative overhead."
    },
    {
        id: "media-advertising",
        name: "Isipho Media Advertising",
        category: "Media & Marketing",
        desc: "Comprehensive advertising and brand promotion capability.",
        details: "Executes targeted advertising campaigns, brand promotion, strategic marketing services, audience development, and measurable reach across multiple channels.",
        serves: "Brands, corporate advertisers, and enterprises seeking authentic market visibility.",
        connection: "Directly monetises and amplifies audiences generated across Isipho Media News and our publishing ecosystem."
    },
    {
        id: "media-news",
        name: "Isipho Media News & Times",
        category: "Publishing & Journalism",
        desc: "Independent news publishing and editorial media ecosystem.",
        details: "Produces factual editorial content, investigative journalism, and daily news updates through Isipho Media News and Isipho Media Times.",
        serves: "General public, readers, civic stakeholders, and advertisers seeking engaged audiences.",
        connection: "Forms the journalistic cornerstone of IMG's wider media and advertising ecosystem."
    },
    {
        id: "img-radio",
        name: "IMG Radio",
        category: "Audio & Broadcasting",
        desc: "Audio media and talk radio capability.",
        details: "Broadcasts talk shows, curated news, audio advertising, podcasts, and community-focused engagement.",
        serves: "Audio listeners, advertisers, and community stakeholders.",
        connection: "Integrates with Isipho Media Talent and our broader media distribution channels."
    },
    {
        id: "img-tv",
        name: "IMG 1, 2 & 3",
        category: "Content Distribution",
        desc: "Television and visual content distribution platforms.",
        details: "Structured platforms designed for future television broadcasting, visual entertainment, and corporate brand positioning.",
        serves: "Viewers, sponsors, and content creators.",
        connection: "Amplifies original content produced by IMG Production across screens."
    },
    {
        id: "img-digital",
        name: "IMG Digital",
        category: "Digital Technology",
        desc: "Digital development and technical infrastructure services.",
        details: "Builds high-performance websites, mobile applications, social media management frameworks, SEO strategies, and automated AI chatbot deployments.",
        serves: "Businesses seeking robust digital transformation and web presence.",
        connection: "Provides technical infrastructure across IMG group ventures and external clients."
    },
    {
        id: "img-studios",
        name: "IMG Studios",
        category: "Creative Facilities",
        desc: "Physical creative production and studio spaces.",
        details: "Equipped podcast studios, video production spaces, photography facilities, and corporate content creation suites available for internal and external rental.",
        serves: "Podcasters, filmmakers, corporate communications teams, and digital creators.",
        connection: "Works hand-in-hand with IMG Production and IMG Talent."
    },
    {
        id: "img-talent",
        name: "IMG Talent",
        category: "Talent Management",
        desc: "Representation for media professionals and creatives.",
        details: "Commission-based representation for presenters, influencers, actors, journalists, podcasters, and voice artists.",
        serves: "Media personalities and brands seeking professional endorsement.",
        connection: "Feeds talent directly into IMG Production, Radio, and TV platforms."
    },
    {
        id: "img-training",
        name: "IMG Training Academy",
        category: "Skills Development",
        desc: "Professional training and development academy.",
        details: "Conducts rigorous training programmes for call-centre agents, sales representatives, customer service staff, field marketers, journalists, and presenters.",
        serves: "Aspiring professionals and corporate teams seeking operational excellence.",
        connection: "Ensures an elite talent pipeline for IMG Office Agents and FieldForce."
    },
    {
        id: "img-production",
        name: "IMG Production",
        category: "Content Creation",
        desc: "Full-scale film, television, and commercial production.",
        details: "Produces original content including drama series, soapies, telenovelas, reality shows, corporate videos, documentaries, and commercials.",
        serves: "Broadcasters, streaming platforms, and corporate clients.",
        connection: "Collaborates with IMG Studios, Talent, and Scriptwriters across the group."
    },
    {
        id: "img-shopshop",
        name: "IMG Shop Shop",
        category: "Luxury Commerce",
        desc: "Online-first luxury import, sourcing, and resale venture.",
        details: "Connects international luxury brands with South African corporate and private customers through wholesale, B2B sourcing, and exclusive distribution partnerships.",
        serves: "Hotels, restaurants, wine estates, interior designers, and hospitality businesses.",
        connection: "Operates as IMG's dedicated luxury commerce gateway."
    }
];

const router = {
    currentRoute: 'home',
    selectedSubsidiary: null,
    
    navigate(route, param = null) {
        this.currentRoute = route;
        this.selectedSubsidiary = param;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.render();
        this.updateActiveNav();
    },

    updateActiveNav() {
        document.querySelectorAll('.nav-link').forEach(el => {
            if(el.getAttribute('data-route') === this.currentRoute) {
                el.classList.add('active', 'text-imgBlue');
            } else {
                el.classList.remove('active', 'text-imgBlue');
            }
        });
    },

    render() {
        const container = document.getElementById('main-view');
        switch(this.currentRoute) {
            case 'home':
                container.innerHTML = renderHome();
                break;
            case 'businesses':
                container.innerHTML = renderBusinesses(this.selectedSubsidiary);
                break;
            case 'technology':
                container.innerHTML = renderTechnology();
                break;
            case 'about':
                container.innerHTML = renderAbout();
                break;
            case 'shopshop':
                container.innerHTML = renderShopShop();
                break;
            case 'contact':
                container.innerHTML = renderContact();
                break;
            default:
                container.innerHTML = renderHome();
        }
    }
};

// --- VIEWS ---

function renderHome() {
    return `
        <!-- Hero Section -->
        <section class="relative bg-slate-900 text-white py-24 px-6 lg:px-12 overflow-hidden border-b border-slate-800">
            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#0063DB_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-8 space-y-6">
                    <div class="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/60 px-4 py-2 rounded-full text-xs font-bold text-blue-400">
                        <span class="w-2 h-2 rounded-full bg-imgBlue animate-ping"></span>
                        Isipho Media Group (Pty) Ltd &bull; Reg. 2026/276471/07
                    </div>
                    <h1 class="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight">
                        Your Trusted <span class="text-imgBlue">BPO Partner</span> &amp; Diversified Enterprise.
                    </h1>
                    <p class="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                        Isipho Media Group builds robust operational capability across business process outsourcing, field operations, financial-crime analysis, media publishing, creative production, and digital technology.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
                        <button onclick="router.navigate('businesses')" class="bg-imgBlue hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition shadow-lg shadow-imgBlue/30 flex items-center gap-2">
                            Explore Our Businesses <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <button onclick="router.navigate('contact')" class="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl border border-slate-700 transition">
                            Partner with IMG via WhatsApp
                        </button>
                    </div>
                </div>

                <div class="lg:col-span-4 bg-slate-800/80 border border-slate-700 p-8 rounded-3xl backdrop-blur space-y-6 shadow-2xl">
                    <div class="space-y-2 border-b border-slate-700 pb-4">
                        <span class="text-[10px] uppercase tracking-widest text-imgBlue font-extrabold">Executive Leadership</span>
                        <h3 class="text-xl font-bold font-serif">Sipho Khumalo</h3>
                        <p class="text-xs text-slate-400">Founder & Managing Director</p>
                    </div>
                    <div class="space-y-3 text-xs text-slate-300">
                        <div class="flex items-start gap-3">
                            <i class="fa-solid fa-check text-imgBlue mt-0.5"></i>
                            <span>Multi-sector South African corporate group structure.</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <i class="fa-solid fa-check text-imgBlue mt-0.5"></i>
                            <span>Specialised BPO and FinCrime due diligence expertise.</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <i class="fa-solid fa-check text-imgBlue mt-0.5"></i>
                            <span>Integrated media, publishing, and digital ecosystems.</span>
                        </div>
                    </div>
                    <a href="https://wa.me/27774359005" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition">
                        <i class="fa-brands fa-whatsapp text-sm"><span>Direct WhatsApp Enquiry</span></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Core Group Pillars Preview -->
        <section class="py-20 px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
            <div class="text-center space-y-3 max-w-2xl mx-auto">
                <span class="text-xs uppercase tracking-widest text-imgBlue font-extrabold">Group Structure</span>
                <h2 class="text-3xl font-serif font-black text-slate-900">Interconnected Business Capabilities</h2>
                <p class="text-slate-600 text-sm">IMG operates specialized subsidiary ventures designed around specific client and industry needs, united by shared infrastructure.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="corporate-card p-8 rounded-3xl space-y-4">
                    <div class="w-14 h-14 rounded-2xl bg-blue-50 text-imgBlue flex items-center justify-center text-2xl font-bold">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <h3 class="text-xl font-serif font-bold text-slate-900">BPO &amp; Operations</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Featuring <strong class="text-slate-900">IMG Office Agents</strong> for scalable customer operations and <strong class="text-slate-900">IMG FieldForce</strong> for direct grassroots market activations and data collection.
                    </p>
                    <button onclick="router.navigate('businesses')" class="text-xs font-bold text-imgBlue hover:underline flex items-center gap-1">
                        View BPO Capabilities <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                </div>

                <div class="corporate-card p-8 rounded-3xl space-y-4">
                    <div class="w-14 h-14 rounded-2xl bg-blue-50 text-imgBlue flex items-center justify-center text-2xl font-bold">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <h3 class="text-xl font-serif font-bold text-slate-900">FinCrime &amp; Technology</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Specialised <strong class="text-slate-900">IMG FinCrime Analysts</strong> and our proprietary investigation-orchestration platform, <strong class="text-slate-900">EvidencePack</strong>, built to reduce analyst friction.
                    </p>
                    <button onclick="router.navigate('technology')" class="text-xs font-bold text-imgBlue hover:underline flex items-center gap-1">
                        Explore Technology <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                </div>

                <div class="corporate-card p-8 rounded-3xl space-y-4">
                    <div class="w-14 h-14 rounded-2xl bg-blue-50 text-imgBlue flex items-center justify-center text-2xl font-bold">
                        <i class="fa-solid fa-photo-film"></i>
                    </div>
                    <h3 class="text-xl font-serif font-bold text-slate-900">Media &amp; Commerce</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        An integrated publishing and broadcast ecosystem spanning <strong class="text-slate-900">Isipho Media News</strong>, <strong class="text-slate-900">IMG Production</strong>, <strong class="text-slate-900">Studios</strong>, and luxury sourcing via <strong class="text-slate-900">Shop Shop</strong>.
                    </p>
                    <button onclick="router.navigate('businesses')" class="text-xs font-bold text-imgBlue hover:underline flex items-center gap-1">
                        Discover Media Ecosystem <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                </div>
            </div>
        </section>
    `;
}

function renderBusinesses(selectedId = null) {
    const activeSub = subsidiaries.find(s => s.id === selectedId) || subsidiaries[0];
    return `
        <section class="py-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-10 w-full">
            <div class="bg-slate-900 text-white p-8 lg:p-12 rounded-3xl space-y-4 shadow-xl">
                <span class="text-xs uppercase tracking-widest text-imgBlue font-extrabold">Subsidiary Directory</span>
                <h1 class="text-3xl sm:text-4xl font-serif font-black">Our Businesses &amp; Group Capabilities</h1>
                <p class="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                    Explore the specialised operating units comprising Isipho Media Group. Each business operates around specific client needs while remaining connected through our broader corporate infrastructure.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <!-- Sidebar List of Subsidiaries -->
                <div class="lg:col-span-4 bg-white border border-slate-200 p-4 rounded-3xl shadow-md space-y-1 max-h-[700px] overflow-y-auto">
                    <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400 p-3">Select Subsidiary</p>
                    ${subsidiaries.map(sub => `
                        <button onclick="router.navigate('businesses', '${sub.id}')" class="w-full text-left p-3.5 rounded-2xl text-xs font-bold transition flex justify-between items-center ${activeSub.id === sub.id ? 'bg-imgBlue text-white shadow-md' : 'hover:bg-slate-50 text-slate-800'}">
                            <span>${sub.name}</span>
                            <i class="fa-solid fa-chevron-right text-[10px] ${activeSub.id === sub.id ? 'text-white' : 'text-slate-400'}"></i>
                        </button>
                    `).join('')}
                </div>

                <!-- Detailed Subsidiary View -->
                <div class="lg:col-span-8 bg-white border border-slate-200 p-8 lg:p-10 rounded-3xl shadow-xl space-y-8">
                    <div class="space-y-3 border-b border-slate-100 pb-6">
                        <span class="bg-blue-50 text-imgBlue font-bold text-[11px] px-3 py-1 rounded-full uppercase">${activeSub.category}</span>
                        <h2 class="text-3xl font-serif font-black text-slate-900">${activeSub.name}</h2>
                        <p class="text-sm font-semibold text-slate-700">${activeSub.desc}</p>
                    </div>

                    <div class="space-y-6 text-xs text-slate-600 leading-relaxed">
                        <div class="space-y-2">
                            <h4 class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Core Services &amp; Capabilities</h4>
                            <p class="bg-slate-50 border p-4 rounded-2xl text-slate-800 font-medium">${activeSub.details}</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl space-y-1">
                                <span class="font-bold text-slate-900 block text-xs">Who It Serves</span>
                                <p class="text-slate-700">${activeSub.serves}</p>
                            </div>
                            <div class="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-1">
                                <span class="font-bold text-slate-900 block text-xs">Group Connection</span>
                                <p class="text-slate-700">${activeSub.connection}</p>
                            </div>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p class="text-xs text-slate-500">Interested in engaging ${activeSub.name}?</p>
                        <button onclick="router.navigate('contact')" class="bg-imgBlue hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow">
                            Enquire via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderTechnology() {
    return `
        <section class="py-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-12 w-full">
            <div class="bg-slate-900 text-white p-8 lg:p-12 rounded-3xl space-y-4 shadow-xl">
                <span class="text-xs uppercase tracking-widest text-imgBlue font-extrabold">Technology &amp; Innovation</span>
                <h1 class="text-3xl sm:text-4xl font-serif font-black">IMG Technology &amp; EvidencePack</h1>
                <p class="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                    Building specialized enterprise software solutions designed to reduce repetitive manual overhead in financial-crime investigations and operational workflows.
                </p>
            </div>

            <div class="bg-white border border-slate-200 p-8 lg:p-12 rounded-3xl shadow-xl space-y-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <div class="inline-flex items-center gap-2 bg-blue-50 text-imgBlue border border-blue-200 px-3 py-1 rounded-full text-xs font-bold">
                            Featured Flagship Platform
                        </div>
                        <h2 class="text-3xl font-serif font-black text-slate-900">EvidencePack</h2>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            EvidencePack is an evidence-orchestration and investigation-assistance platform developed to reduce repetitive evidence-assembly work in financial-crime investigations.
                        </p>
                        
                        <div class="bg-slate-50 border p-5 rounded-2xl space-y-3 text-xs">
                            <p class="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Important Product Boundaries:</p>
                            <p class="text-slate-700">&bull; <strong class="text-slate-900">NOT</strong> an AML system, alert-generation engine, or automated decision-maker.</p>
                            <p class="text-slate-700">&bull; <strong class="text-slate-900">Analyst Control:</strong> The analyst retains 100% responsibility for interpretation and final disposition.</p>
                        </div>

                        <div class="pt-2">
                            <a href="https://evidencepack.isiphomediagroup.co.za" target="_blank" class="bg-imgBlue hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition shadow-lg shadow-imgBlue/20 inline-flex items-center gap-2">
                                Open EvidencePack Portal <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                            </a>
                        </div>
                    </div>

                    <div class="bg-slate-900 text-slate-300 p-8 rounded-3xl space-y-6 border border-slate-800 shadow-2xl">
                        <h3 class="text-lg font-serif font-bold text-white border-b border-slate-800 pb-3">Investigation Workflow</h3>
                        <div class="space-y-4 text-xs font-mono">
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full bg-blue-900 text-imgBlue flex items-center justify-center font-bold text-[10px]">1</span>
                                <span>Transaction Spreadsheet Upload</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full bg-blue-900 text-imgBlue flex items-center justify-center font-bold text-[10px]">2</span>
                                <span>Structured Data &amp; Field Analysis</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full bg-blue-900 text-imgBlue flex items-center justify-center font-bold text-[10px]">3</span>
                                <span>External Search Orchestration</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full bg-blue-900 text-imgBlue flex items-center justify-center font-bold text-[10px]">4</span>
                                <span>Analyst Review &amp; Final Sign-Off</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderAbout() {
    return `
        <section class="py-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-12 w-full">
            <div class="bg-slate-900 text-white p-8 lg:p-12 rounded-3xl space-y-4 shadow-xl">
                <span class="text-xs uppercase tracking-widest text-imgBlue font-extrabold">Corporate Overview</span>
                <h1 class="text-3xl sm:text-4xl font-serif font-black">About Isipho Media Group</h1>
                <p class="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                    Isipho Media Group (Pty) Ltd (Reg. 2026/276471/07) is a South African company building capability across business services, field operations, media, communications, digital services, financial-crime analysis, creative production, talent development and luxury commerce.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="corporate-card p-8 rounded-3xl space-y-4">
                    <h3 class="text-xl font-serif font-bold text-slate-900">The Group Model</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Our group structure allows different subsidiary businesses to operate independently around specific customer needs while remaining connected through the broader IMG infrastructure. This ensures agility, specialised expertise, and scalable execution.
                    </p>
                </div>
                <div class="corporate-card p-8 rounded-3xl space-y-4">
                    <h3 class="text-xl font-serif font-bold text-slate-900">Ambition &amp; Growth</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        IMG is a young, ambitious enterprise building toward international reach and operational excellence. We focus on delivering real value and practical solutions without pretending to be a legacy multinational corporation.
                    </p>
                </div>
            </div>
        </section>
    `;
}

function renderShopShop() {
    return `
        <section class="py-12 px-6 lg:px-12 max-w-7xl mx-auto space-y-12 w-full">
            <div class="bg-slate-900 text-white p-8 lg:p-12 rounded-3xl space-y-4 shadow-xl">
                <span class="text-xs uppercase tracking-widest text-imgBlue font-extrabold">IMG Shop Shop</span>
                <h1 class="text-3xl sm:text-4xl font-serif font-black">Luxury Import, Sourcing &amp; B2B Ventures</h1>
                <p class="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                    IMG Shop Shop is an online-first luxury import, sourcing, and resale venture connecting international luxury brands with South African customers and businesses.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="corporate-card p-8 rounded-3xl space-y-4">
                    <h3 class="text-xl font-serif font-bold text-slate-900">B2B Hospitality &amp; Corporate Sourcing</h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        We partner with hotels, restaurants, wine estates, event organisers, interior designers, and hospitality businesses to source and supply exclusive luxury items and provisions.
                    </p>
                    <div class="text-[11px] text-slate-500 font-mono pt-2">Note: IMG Shop Shop is not currently a physical retail store. We focus on structured wholesale and distribution partnerships.</div>
                </div>

                <div class="bg-blue-50 border border-blue-200 p-8 rounded-3xl space-y-6">
                    <h3 class="text-xl font-serif font-bold text-slate-900">Partner With Us</h3>
                    <p class="text-xs text-slate-700 leading-relaxed">
                        Are you an international luxury brand seeking South African distribution, or a hospitality business looking for curation partnerships?
                    </p>
                    <button onclick="router.navigate('contact')" class="bg-imgBlue hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow">
                        Initiate Partnership Enquiry
                    </button>
                </div>
            </div>
        </section>
    `;
}

function renderContact() {
    return `
        <section class="py-12 px-6 lg:px-12 max-w-4xl mx-auto space-y-8 w-full">
            <div class="text-center space-y-3">
                <span class="text-xs uppercase tracking-widest text-imgBlue font-extrabold">Direct Communication</span>
                <h1 class="text-3xl font-serif font-black text-slate-900">Partner with Isipho Media Group</h1>
                <p class="text-slate-600 text-xs">IMG does not use traditional company email addresses. All enquiries are processed securely through WhatsApp.</p>
            </div>

            <div class="bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
                <form onsubmit="handleWhatsAppEnquiry(event)" class="space-y-4 text-xs">
                    <div>
                        <label class="block font-bold uppercase tracking-wider text-slate-700 mb-1">Your Name</label>
                        <input type="text" id="enquiry-name" required placeholder="e.g., Jane Doe" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-imgBlue">
                    </div>
                    <div>
                        <label class="block font-bold uppercase tracking-wider text-slate-700 mb-1">Company / Organisation</label>
                        <input type="text" id="enquiry-company" required placeholder="e.g., Acme Corporation" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-imgBlue">
                    </div>
                    <div>
                        <label class="block font-bold uppercase tracking-wider text-slate-700 mb-1">Contact Number</label>
                        <input type="text" id="enquiry-contact" required placeholder="e.g., +27 82 123 4567" class="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-imgBlue">
                    </div>
                    <div>
                        <label class="block font-bold uppercase tracking-wider text-slate-700 mb-1">Enquiry Details</label>
                        <textarea id="enquiry-text" rows="4" required placeholder="Describe your project, BPO requirements, or partnership interest..." class="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-imgBlue"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl uppercase tracking-wider transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2">
                        <i class="fa-brands fa-whatsapp text-lg"></i> Send Enquiry via WhatsApp (+27 77 435 9005)
                    </button>
                </form>
            </div>
        </section>
    `;
}

function handleWhatsAppEnquiry(e) {
    e.preventDefault();
    const name = document.getElementById('enquiry-name').value;
    const company = document.getElementById('enquiry-company').value;
    const contact = document.getElementById('enquiry-contact').value;
    const enquiry = document.getElementById('enquiry-text').value;

    const message = `Hello IMG, I would like to make an enquiry.\nName: ${name}\nCompany: ${company}\nContact: ${contact}\nEnquiry: ${enquiry}`;
    const url = `https://wa.me/27774359005?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Initialise Router on Page Load
document.addEventListener('DOMContentLoaded', () => {
    router.navigate('home');
});