// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-today-i-presented-my-upcoming-work-a-comparison-principle-based-on-couplings-of-partial-integro-differential-operators-at-the-fdm-seminar-of-universität-freiburg",
          title: 'Today, I presented my upcoming work A comparison principle based on couplings of...',
          description: "",
          section: "News",},{id: "news-the-preprint-a-comparison-principle-based-on-couplings-of-partial-integro-differential-operators-with-serena-della-corte-richard-kraaij-and-max-nendel-is-online-now",
          title: 'The preprint A comparison principle based on couplings of partial integro-differential operators with...',
          description: "",
          section: "News",},{id: "news-today-we-concluded-the-19th-bigsem-workshop-in-which-21-young-researchers-from-all-over-europe-and-north-america-presented-their-work-in-economics-management-and-finance-check-out-the-recap-here",
          title: 'Today, we concluded the 19th BiGSEM Workshop, in which 21 young researchers from...',
          description: "",
          section: "News",},{id: "news-the-preprint-existence-of-viscosity-solutions-to-abstract-cauchy-problems-via-nonlinear-semigroups-with-max-nendel-is-online-now",
          title: 'The preprint Existence of Viscosity Solutions to Abstract Cauchy Problems via Nonlinear Semigroups...',
          description: "",
          section: "News",},{id: "news-today-i-presented-my-work-on-a-comparison-principle-for-partial-integro-differential-operators-at-the-17th-german-probability-and-statistics-days-gpsd",
          title: 'Today, I presented my work on a comparison principle for partial integro-differential operators...',
          description: "",
          section: "News",},{id: "news-today-i-presented-my-work-on-a-comparison-principle-for-partial-integro-differential-operators-at-rufe-ii-hosted-by-the-university-of-johannesburg",
          title: 'Today, I presented my work on a comparison principle for partial integro-differential operators...',
          description: "",
          section: "News",},{id: "news-today-i-presented-my-work-on-an-existence-result-for-viscosity-solutions-at-the-mathematics-of-uncertain-systems-for-economics-and-finance-conference-in-rimini",
          title: 'Today, I presented my work on an existence result for viscosity solutions at...',
          description: "",
          section: "News",},{id: "news-from-today-june-09-until-june-19-i-visit-the-department-of-statistics-amp-amp-actuarial-science-at-the-university-of-waterloo-as-a-researcher-as-part-of-the-global-skills-strategy-program",
          title: 'From today, June 09 until June 19, I visit the Department of Statistics...',
          description: "",
          section: "News",},{id: "news-today-i-presented-my-works-on-a-comparison-principle-for-partial-integro-differential-operators-at-the-12th-general-amamef-conference-in-verona",
          title: 'Today, I presented my works on a comparison principle for partial integro-differential operators...',
          description: "",
          section: "News",},{id: "news-today-i-presented-an-existence-result-for-viscosity-solutions-at-isipta-2025-at-zif-in-bielefeld",
          title: 'Today, I presented an existence result for viscosity solutions at ISIPTA 2025 at...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%62%69%61%6E.%66%75%63%68%73@%75%6E%69-%62%69%65%6C%65%66%65%6C%64.%64%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/fabian-m-fuchs", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-2819-585X", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
