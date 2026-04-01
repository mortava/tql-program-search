/**
 * TQL Program Search — Enterprise Data Model
 *
 * Comprehensive type system for Non-QM investor guidelines covering:
 * - LTV matrices by FICO, loan amount, property type, citizenship, occupancy
 * - Income documentation methods (Full Doc, Alt-Doc, DSCR, STR, Rural breakouts)
 * - Short Term Rental (STR) requirements per investor
 * - Rural property rules per investor
 */

// ─── Enums & Constants ──────────────────────────────────────────────

export const DOC_TYPES = [
  'Full Doc',
  'Alt-Doc',
  'Bank Statement (Personal)',
  'Bank Statement (Business)',
  'P&L Only',
  '1099 Only',
  'Asset Depletion',
  'DSCR',
  'DSCR STR',
  'W2 Only',
  'WVOE',
  'No Doc / No Ratio',
] as const
export type DocType = (typeof DOC_TYPES)[number]

export const PROPERTY_TYPES = [
  'SFR',
  'Condo (Warrantable)',
  'Condo (Non-Warrantable)',
  'Condotel',
  '2-4 Unit',
  '5-8 Unit',
  '9+ Unit',
  'Mixed Use',
  'PUD',
  'Co-op',
  'Manufactured',
  'Rural',
  'Modular',
] as const
export type PropertyType = (typeof PROPERTY_TYPES)[number]

export const OCCUPANCY_TYPES = [
  'Primary Residence',
  'Second Home',
  'Investment',
] as const
export type OccupancyType = (typeof OCCUPANCY_TYPES)[number]

export const CITIZENSHIP_TYPES = [
  'US Citizen',
  'Permanent Resident',
  'Non-Permanent Resident',
  'Foreign National',
  'ITIN',
] as const
export type CitizenshipType = (typeof CITIZENSHIP_TYPES)[number]

export const LOAN_PURPOSE_TYPES = [
  'Purchase',
  'Rate/Term Refinance',
  'Cash-Out Refinance',
] as const
export type LoanPurpose = (typeof LOAN_PURPOSE_TYPES)[number]

export const PROGRAM_CATEGORIES = [
  'Full Doc & Alt-Doc Primary Residence',
  'Full Doc & Alt-Doc Second Home',
  'Full Doc & Alt-Doc Investment',
  'DSCR Standard',
  'DSCR Short Term Rental (STR)',
  'Full Doc & Alt-Doc STR',
  'Full Doc & Alt-Doc Rural',
  'DSCR Rural',
  'STR Rural',
  'Closed End Second',
  'HELOC / Second Mortgage',
  'Bridge / Fix & Flip',
  '5-8 Unit / Mixed Use',
] as const
export type ProgramCategory = (typeof PROGRAM_CATEGORIES)[number]

export const STR_RENT_PROOF_METHODS = [
  'AirDNA Report Only',
  'Rent Survey Only',
  'Rent Survey + AirDNA Report',
  '1007 with Short Term Rents Listed',
  'Actual Proof of Prior 6 Months Rents',
  'Actual Proof of Prior 12 Months Rents',
  'Actuals + AirDNA Report',
  'Actuals + Rent Survey',
  'Market Rent Analysis (Form 1007/1025)',
  'Lease Agreements Required',
  'Not Allowed',
] as const
export type STRRentProofMethod = (typeof STR_RENT_PROOF_METHODS)[number]

// ─── LTV Matrix Entry ───────────────────────────────────────────────

export interface LtvMatrixEntry {
  minFico: number
  maxFico: number
  maxLtv: number
  maxCltv?: number
  minLoanAmount: number
  maxLoanAmount: number
  propertyTypes: readonly PropertyType[]
  occupancy: readonly OccupancyType[]
  docTypes: readonly DocType[]
  citizenship: readonly CitizenshipType[]
  loanPurpose: readonly LoanPurpose[]
  maxDti?: number
  notes?: string
}

// ─── STR Requirements ───────────────────────────────────────────────

export interface STRRequirements {
  allowed: boolean
  allowedOnDSCR: boolean
  allowedOnFullDoc: boolean
  allowedOnAltDoc: boolean
  rentProofMethods: STRRentProofMethod[]
  minFico?: number
  maxLtv?: number
  maxLoanAmount?: number
  minDscr?: number
  propertyTypes: PropertyType[]
  additionalRequirements: string[]
  notes?: string
}

// ─── Rural Property Rules ───────────────────────────────────────────

export interface RuralPropertyRules {
  allowedOnDSCR: boolean
  allowedOnDSCR_STR: boolean
  allowedOnFullDoc: boolean
  allowedOnAltDoc: boolean
  maxLtv?: number
  minFico?: number
  maxLoanAmount?: number
  acreageLimit?: string
  additionalRestrictions: string[]
  notes?: string
}

// ─── Program Details per Category ───────────────────────────────────

export interface ProgramDetail {
  category: ProgramCategory
  available: boolean
  ltvMatrix: LtvMatrixEntry[]
  maxDti?: number
  interestOnly?: boolean
  interestOnlyTermMonths?: number
  prepaymentPenalty?: string
  minReserves?: string
  maxProperties?: number | 'Unlimited'
  minDscr?: number
  notes?: string
}

// ─── Investor (Top-Level Entity) ────────────────────────────────────

export interface Investor {
  id: string
  name: string
  shortName: string
  description: string

  // Programs offered by this investor
  programs: ProgramDetail[]

  // STR-specific rules
  strRequirements: STRRequirements

  // Rural-specific rules
  ruralPropertyRules: RuralPropertyRules

  // General guidelines
  generalGuidelines: {
    minFico: number
    maxLoanAmount: number
    minLoanAmount: number
    maxDti?: number
    maxProperties?: number | 'Unlimited'
    interestOnly: boolean
    prepaymentPenaltyOptions: string[]
    reserveRequirements: string
    seasoningRequirements?: string
    citizenshipAllowed: CitizenshipType[]
    entityVesting: boolean
    trustVesting: boolean
  }

  // Credit event seasoning
  creditEventSeasoning?: {
    bankruptcy?: string
    foreclosure?: string
    shortSale?: string
    deedInLieu?: string
    loanModification?: string
    forbearance?: string
    mortgageLates?: string
  }

  // Source document reference
  sourceDocuments: string[]
  lastUpdated: string
}

// ─── Search Filters ─────────────────────────────────────────────────

export interface SearchFilters {
  query: string
  investor: string | null
  category: ProgramCategory | null
  minFico: number | null
  maxLtv: number | null
  loanAmount: number | null
  propertyType: PropertyType | null
  occupancy: OccupancyType | null
  citizenship: CitizenshipType | null
  docType: DocType | null
  loanPurpose: LoanPurpose | null
  strOnly: boolean
  ruralOnly: boolean
}

// ─── Search Result ──────────────────────────────────────────────────

export interface SearchResult {
  investor: Investor
  matchingPrograms: ProgramDetail[]
  matchingLtvEntries: {
    program: ProgramDetail
    entries: LtvMatrixEntry[]
  }[]
  bestMaxLtv: number
  bestMinFico: number
  bestMaxLoanAmount: number
}
