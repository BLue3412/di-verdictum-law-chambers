import mohitPhoto from '../assets/team-mohit.jpg'
import utpalPhoto from '../assets/team-utpal.jpg'

export const TEAM = [
  {
    slug: 'mohit-hitendra-bobade',
    name: 'Adv. Mohit Hitendra Bobade',
    shortName: 'Adv. Mohit Bobade',
    credentials: 'B.B.A., LL.B. | Advocate | Author | Legal Educator',
    role: 'Advocate',
    photo: mohitPhoto,
    quote: {
      original: '\u0939\u0947\u092f\u0902 \u0926\u0941\u0903\u0916\u092e\u0928\u093e\u0917\u0924\u092e\u094d',
      translation: '"Future suffering can be prevented by today\u2019s wisdom."',
      attribution: 'Patanjali\u2019s Yoga Sutras',
    },
    practicesBefore: [
      'Bombay High Court, Nagpur Bench',
      'District and Sessions Courts',
      'Various judicial and quasi-judicial authorities across Maharashtra',
    ],
    practiceAreas: [
      'Civil, Criminal & Commercial Law',
      'Constitutional Law',
      'Property & Matrimonial Law',
      'Succession Law',
      'Legal Risk Management',
      'Succession & Business Structuring Planning',
      'Contract Drafting & Asset Protection',
      'Regulatory Compliance',
    ],
    highlights: [
      'Trained Mediator, encouraging negotiated settlement wherever appropriate',
      'Government-certified Yoga Trainer under the Ministry of AYUSH',
      'Regularly conducts legal awareness programmes, lectures, and writings on succession planning and preventive legal strategy',
    ],
    bio: [
      'This timeless wisdom from Patanjali\u2019s Yoga Sutras is more than a philosophical ideal\u2014it is the guiding principle of Adv. Mohit Hitendra Bobade\u2019s approach to the practice of law.',
      'He believes that the highest purpose of legal counsel is not merely to win cases but to help clients avoid unnecessary disputes altogether. Effective legal advice is about recognising risks before they become crises, preserving relationships wherever possible, protecting family and business assets, and enabling clients to make informed decisions with confidence. Whether through succession planning, business structuring, strategic legal advisory, or courtroom advocacy, his objective is to provide legal solutions that create lasting security rather than temporary relief.',
      'Adv. Mohit Hitendra Bobade practises before the Bombay High Court, Nagpur Bench, District and Sessions Courts, and various judicial and quasi-judicial authorities across Maharashtra. His areas of practice include civil, criminal, commercial, constitutional, property, matrimonial, and succession law, where he advises individuals, families, entrepreneurs, and business organisations.',
      'His approach combines rigorous legal analysis with practical thinking. He understands that legal advice should not exist in isolation from a client\u2019s personal, financial, or commercial objectives. Every strategy is therefore developed with a long-term perspective, balancing legal rights with practical realities.',
      'Alongside litigation, Adv. Bobade advises clients on legal risk management, succession planning, business structuring, contract drafting, asset protection, and regulatory compliance. He believes that thoughtful planning today can prevent years of uncertainty, expense, and avoidable litigation in the future.',
      'As a trained Mediator, he also recognises that not every dispute should end in a courtroom. Wherever appropriate, he encourages constructive dialogue and negotiated settlements that preserve relationships without compromising his clients\u2019 interests. When litigation becomes unavoidable, he remains a determined and committed advocate.',
      'Beyond his professional practice, Adv. Bobade is passionate about legal education. He regularly conducts awareness programmes, delivers lectures, and writes on subjects relating to law, succession planning, asset protection, and preventive legal strategy. His objective is to make legal knowledge practical, accessible, and relevant to everyday life.',
      'He is also a Government-certified Yoga Trainer under the Ministry of AYUSH. The discipline of yoga has profoundly influenced his professional outlook, reinforcing the values of clarity, patience, self-discipline, and thoughtful decision-making\u2014qualities that he brings to every client engagement.',
      'For Adv. Mohit Hitendra Bobade, advocacy is not simply about arguing cases; it is about earning trust, protecting what matters most, and helping people navigate the law with wisdom, confidence, and foresight.',
    ],
  },
  {
    slug: 'utpal-mohan-mahajan',
    name: 'Adv. Utpal Mohan Mahajan',
    shortName: 'Adv. Utpal Mahajan',
    credentials: 'Senior Partner | Advocate | Trained High Court Mediator | Notary',
    role: 'Senior Partner',
    photo: utpalPhoto,
    quote: {
    original: 'न्याय',  
    translation: '"Advocacy is not merely speaking for clients; it is safeguarding their future."',
    attribution: 'Adv. Utpal Mohan Mahajan',
},
    practiceAreas: [
      'Civil Litigation',
      'Revenue Matters',
      'Consumer Disputes',
      'Maharashtra Revenue Tribunal (MRT) Matters',
      'Negotiable Instruments Act Cases',
      'Drafting & Vetting of Agreements',
      'Legal Advisory Services',
    ],
    highlights: [
      'Over 20 years of distinguished experience in the legal profession',
      'Trained mediator certified by the Main Mediation Centre, Bombay High Court',
      'Appointed as a Notary by the Government of India',
      'Has represented leading financial institutions, including COSMOS Bank, in complex civil litigation',
      'Mentors the litigation team and oversees complex matters at the firm',
    ],
    bio: [
      'Advocate Utpal Mohan Mahajan is the Senior Partner of the firm, bringing over 20 years of distinguished experience in the legal profession. Throughout his career, he has earned a reputation for his practical legal acumen, ethical advocacy, and client-centric approach, successfully representing individuals, businesses, financial institutions, and public bodies across a wide spectrum of civil and commercial disputes.',
      'A trained mediator certified by the Main Mediation Centre, Bombay High Court, Adv. Mahajan firmly believes that the most effective legal solutions are those that resolve disputes efficiently while preserving relationships wherever possible. His mediation training complements his extensive courtroom experience, enabling him to offer strategic, balanced, and result-oriented legal advice.',
      'His core areas of practice include Civil Litigation, Revenue Matters, Consumer Disputes, Maharashtra Revenue Tribunal (MRT) matters, Negotiable Instruments Act cases, drafting and vetting of agreements, and legal advisory services. He has also been appointed as a Notary by the Government of India and has represented leading financial institutions, including COSMOS Bank, in complex civil litigation.',
      'Known for his meticulous preparation, persuasive advocacy, and unwavering commitment to justice, Adv. Mahajan combines deep legal knowledge with practical commercial insight to provide comprehensive legal solutions. His focus is not merely on resolving disputes but on protecting clients\u2019 rights, minimizing legal risks, and securing long-term outcomes.',
      'At the firm, he mentors the litigation team, oversees complex matters, and continues to uphold the highest standards of professionalism, integrity, and excellence in legal practice.',
    ],
  },
]

export function getTeamMember(slug) {
  return TEAM.find((member) => member.slug === slug)
}
