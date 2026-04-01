import type { Investor } from '../types'

export const primeTime: Investor = {
  id: 'prime-time',
  name: 'Prime Time (Verus)',
  nmls: '',
  effectiveDate: '2026',
  sourceDocuments: [
    'Prime Time - Standard Doc and Alt Doc.pdf',
  ],
  programs: [
    {
      id: 'prime-time-standard-alt-doc',
      name: 'Prime Time Standard & Alt Doc',
      category: 'Full Doc & Alt-Doc Primary Residence',
      docTypes: ['Full Doc', 'Bank Statement (12)', 'Bank Statement (24)', '1099', 'P&L', 'WVOE', 'Asset Utilization'],
      occupancyTypes: ['Primary', 'Second Home', 'Investment'],
      propertyTypes: ['SFR', 'PUD', 'Condo', 'Condotel', '2-4 Unit', 'Rural'],
      minLoanAmount: 150000,
      maxLoanAmount: 4000000,
      minFico: 620,
      citizenshipTypes: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'],
      ltvMatrix: [
        // Primary — Standard/Bank Statement/1099 — Purchase
        { minFico: 720, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 90 },
        { minFico: 720, maxLoanAmount: 1500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 90 },
        { minFico: 720, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 720, maxLoanAmount: 2500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 720, maxLoanAmount: 3000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 75 },
        { minFico: 720, maxLoanAmount: 3500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70 },
        { minFico: 720, maxLoanAmount: 4000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70 },

        { minFico: 700, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 90 },
        { minFico: 700, maxLoanAmount: 1500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 90 },
        { minFico: 700, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 700, maxLoanAmount: 2500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 75 },
        { minFico: 700, maxLoanAmount: 3000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 75 },
        { minFico: 700, maxLoanAmount: 3500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70 },

        { minFico: 680, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 90 },
        { minFico: 680, maxLoanAmount: 1500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 680, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 680, maxLoanAmount: 2500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 75 },
        { minFico: 680, maxLoanAmount: 3000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70 },

        { minFico: 660, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 660, maxLoanAmount: 1500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 660, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 75 },
        { minFico: 660, maxLoanAmount: 2500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70 },

        { minFico: 640, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 640, maxLoanAmount: 1500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70 },
        { minFico: 640, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 65 },

        { minFico: 620, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70 },

        // Primary — Rate/Term
        { minFico: 720, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 85 },
        { minFico: 720, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 80 },
        { minFico: 720, maxLoanAmount: 3000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 70 },
        { minFico: 700, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 85 },
        { minFico: 700, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 75 },
        { minFico: 680, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 85 },
        { minFico: 680, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 75 },
        { minFico: 660, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 80 },
        { minFico: 640, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Rate/Term Refinance', maxLtv: 75 },

        // Primary — Cash-Out
        { minFico: 720, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 80 },
        { minFico: 720, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 80 },
        { minFico: 720, maxLoanAmount: 3000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 70 },
        { minFico: 700, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 80 },
        { minFico: 700, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 70 },
        { minFico: 680, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 75 },
        { minFico: 680, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 70 },
        { minFico: 660, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 75 },
        { minFico: 640, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Cash-Out Refinance', maxLtv: 70 },

        // Second Home/Investment — Standard/Bank Statement/1099 — Purchase
        { minFico: 720, maxLoanAmount: 1000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 720, maxLoanAmount: 1500000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 720, maxLoanAmount: 2000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 720, maxLoanAmount: 2500000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 720, maxLoanAmount: 3000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 75 },
        { minFico: 720, maxLoanAmount: 3500000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 70 },

        { minFico: 700, maxLoanAmount: 1000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 700, maxLoanAmount: 2000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 700, maxLoanAmount: 2500000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 75 },
        { minFico: 700, maxLoanAmount: 3000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 75 },
        { minFico: 700, maxLoanAmount: 3500000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 70 },

        { minFico: 680, maxLoanAmount: 1000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 85 },
        { minFico: 680, maxLoanAmount: 2000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 680, maxLoanAmount: 3000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 70 },

        { minFico: 660, maxLoanAmount: 1000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 660, maxLoanAmount: 2000000, occupancyType: 'Second Home', loanPurpose: 'Purchase', maxLtv: 75 },

        { minFico: 640, maxLoanAmount: 1000000, occupancyType: 'Investment', loanPurpose: 'Purchase', maxLtv: 80 },
        { minFico: 640, maxLoanAmount: 1500000, occupancyType: 'Investment', loanPurpose: 'Purchase', maxLtv: 70 },
        { minFico: 640, maxLoanAmount: 2000000, occupancyType: 'Investment', loanPurpose: 'Purchase', maxLtv: 65 },

        { minFico: 620, maxLoanAmount: 1000000, occupancyType: 'Investment', loanPurpose: 'Purchase', maxLtv: 70 },

        // P&L/WVOE/Asset Utilization — Primary — Purchase (reduced LTV)
        { minFico: 720, maxLoanAmount: 1000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 80, docType: 'P&L/WVOE/Asset Utilization' },
        { minFico: 720, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 80, docType: 'P&L/WVOE/Asset Utilization' },
        { minFico: 720, maxLoanAmount: 2500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 75, docType: 'P&L/WVOE/Asset Utilization' },
        { minFico: 720, maxLoanAmount: 3000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70, docType: 'P&L/WVOE/Asset Utilization' },
        { minFico: 700, maxLoanAmount: 2500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 75, docType: 'P&L/WVOE/Asset Utilization' },
        { minFico: 680, maxLoanAmount: 2000000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 75, docType: 'P&L/WVOE/Asset Utilization' },
        { minFico: 680, maxLoanAmount: 2500000, occupancyType: 'Primary', loanPurpose: 'Purchase', maxLtv: 70, docType: 'P&L/WVOE/Asset Utilization' },
      ],
      creditEventSeasoning: '>= 36 months; 24-35 months: max 80% purchase, 75% refi, max $1.5M; 12-23 months: max 70% purchase, max $1M',
      housingHistory: '1x30x12 allowed; 0x60x12: max 80% purchase, 75% refi, max $1.5M; 0x90x12: max 70% purchase, max $1M',
      notes: [
        'STR: Not mentioned — consult guidelines',
        'Rural allowed: max 80% purchase, 75% refi; max 20 acres',
        '2-4 Units and Condos: max 85% LTV',
        'Condotel: max 85% LTV; max $2.5M',
        'IO: min 660 FICO; max 90% LTV (40yr ARM IO eligible)',
        'State overlays CT/FL/IL/NJ/NY: max 85% purchase, 80% refi, max $2M',
        'Declining market: max 85% purchase, 80% refi, max $2M',
        'DTI: max 50%; primary up to 55% with: min $3,500 residual income, max 80% LTV, 2yr Standard Doc, 6 months reserves, not FTHB, min 660 FICO',
        'Reserves: LTV <=80%: 3 months; 80-85%: 6 months; >85%: 12 months; >$1.5M: 9 months; >$2.5M: 12 months',
        'Gift funds: primary/2nd home 5% borrower contribution; investment 10%',
        'Products: 15/30/40yr Fixed; 5/6/7/6/10/6 ARM; IO available',
        'PPP: investment only; max 5 years; not allowed AK/KS/MI/MN/NM/RI',
        'P&L/WVOE/Asset Utilization: max $3M purchase; min 680 FICO for P&L; reduced LTV vs standard',
      ],
    },
  ],
  strRequirements: {
    allowed: false,
    allowedPrograms: [],
    notes: [
      'STR requirements not specified in Prime Time guidelines',
      'Consult current product guidelines for STR eligibility',
    ],
  },
  ruralPropertyRules: {
    allowed: true,
    allowedPrograms: ['Prime Time Standard & Alt Doc'],
    maxLtv: 80,
    acreageLimit: '20 acres',
    notes: [
      'Rural allowed: max 80% purchase, 75% refi',
      'Max 20 acres',
      'All occupancy types eligible',
    ],
  },
  generalGuidelines: {
    minFico: 620,
    maxLoanAmount: 4000000,
    maxProperties: 'Unlimited',
    citizenshipTypes: ['US Citizen', 'Permanent Resident', 'Non-Permanent Resident'],
    occupancyTypes: ['Primary', 'Second Home', 'Investment'],
    loanPurposes: ['Purchase', 'Rate/Term Refinance', 'Cash-Out Refinance'],
    creditEventSeasoning: '12-36 months depending on tier',
    notes: [
      'Standard Doc, Bank Statement, 1099, P&L, WVOE, Asset Utilization',
      'Asset Utilization: eligible assets / 84 = monthly income stream',
      '1099: 1 or 2 years; 10% fixed expense ratio',
      'P&L: must be prepared by CPA/EA/CTEC; 1x30x12 max; 36mo credit event seasoning min',
      'Cash-in-hand: unlimited',
    ],
  },
}
