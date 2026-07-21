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
        },{id: "nav-other",
          title: "other",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/other/";
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
          section: "News",},{id: "news-today-i-presented-at-the-workshop-mathematical-models-for-the-impact-of-human-activities-on-the-environment-and-economic-decision-making-at-luiss-in-rome",
          title: 'Today, I presented at the workshop Mathematical Models for the Impact of Human...',
          description: "",
          section: "News",},{id: "news-the-preprint-a-strict-comparison-principle-for-integro-differential-hamilton-jacobi-bellman-equations-on-domains-with-boundary-with-serena-della-corte-richard-kraaij-and-max-nendel-is-now-online",
          title: 'The preprint A Strict Comparison Principle for Integro-Differential Hamilton-Jacobi-Bellman Equations on Domains with...',
          description: "",
          section: "News",},{id: "news-today-my-first-paper-a-comparison-principle-based-on-couplings-of-partial-integro-differential-operators-with-serena-della-corte-richard-kraaij-and-max-nendel-has-been-published-in-journal-de-mathématiques-pures-et-appliquées",
          title: 'Today, my first paper A comparison principle based on couplings of partial integro-differential...',
          description: "",
          section: "News",},{id: "news-today-i-successfully-defended-my-thesis-titled-new-perspectives-on-existence-and-uniqueness-of-viscosity-solutions",
          title: 'Today, I successfully defended my thesis titled New Perspectives on Existence and Uniqueness...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20260417_defense/";
            },},{id: "news-the-preprint-projected-evolutionary-lifting-and-well-posedness-of-stationary-hamilton-jacobi-bellman-equations-in-infinite-dimensions-with-gabriele-bolli-is-now-online",
          title: 'The preprint Projected Evolutionary Lifting and Well-Posedness of Stationary Hamilton-Jacobi-Bellman Equations in Infinite...',
          description: "",
          section: "News",},{id: "news-my-paper-existence-of-viscosity-solutions-to-abstract-cauchy-problems-via-nonlinear-semigroups-with-max-nendel-has-been-published-in-bulletin-of-the-london-mathematical-society",
          title: 'My paper Existence of viscosity solutions to abstract Cauchy problems via nonlinear semigroups...',
          description: "",
          section: "News",},{id: "news-today-i-presented-comparison-for-hjb-equations-in-the-strict-topology-at-the-oberseminar-stochastik-of-universität-freiburg",
          title: 'Today, I presented Comparison for HJB equations in the strict topology at the...',
          description: "",
          section: "News",},{id: "news-today-i-presented-a-strict-comparison-principle-for-integro-differential-hamilton-jacobi-bellman-equations-on-domains-with-boundary-at-the-xiii-bachelier-world-congress-in-bologna",
          title: 'Today, I presented A Strict Comparison Principle for Integro-Differential Hamilton-Jacobi-Bellman Equations on Domains...',
          description: "",
          section: "News",},{id: "news-today-i-gave-a-presentation-titled-comparison-principles-for-hjbi-equations-in-the-strict-topology-at-the-fields-institute-s-mathematical-ai-seminar",
          title: 'Today, I gave a presentation titled Comparison principles for HJBI equations in the...',
          description: "",
          section: "News",},{id: "news-my-new-preprint-risk-sensitive-exit-time-control-for-stochastic-differential-equations-with-path-dependent-coefficients-with-david-criens-is-now-online",
          title: 'My new preprint Risk-sensitive exit-time control for stochastic differential equations with path-dependent coefficients...',
          description: "",
          section: "News",},{id: "projects-beamer-varboxes",
          title: 'beamer-varboxes',
          description: "A LaTeX package",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beamer-varbox/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%66%75%63%68%73@%6C%75%69%73%73.%69%74", "_blank");
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
