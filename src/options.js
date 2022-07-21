import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers'
import { isClickableInput } from '@testing-library/user-event/dist/utils'
import AED from '../src/assets/images/flags/AED.svg'
import AFN from '../src/assets/images/flags/AFN.svg'
import ALL from '../src/assets/images/flags/ALL.svg'
import AMD from '../src/assets/images/flags/AMD.svg'
import ANG from '../src/assets/images/flags/ANG.svg'
import AOA from '../src/assets/images/flags/AOA.svg'
import ARS from '../src/assets/images/flags/ARS.svg'
import AUD from '../src/assets/images/flags/AUD.svg'
import AWG from '../src/assets/images/flags/AWG.svg'
import AZN from '../src/assets/images/flags/AZN.svg'
import BAM from '../src/assets/images/flags/BAM.svg'
import BBD from '../src/assets/images/flags/BBD.svg'
import BDT from '../src/assets/images/flags/BDT.svg'
import BGN from '../src/assets/images/flags/BGN.svg'
import BHD from '../src/assets/images/flags/BHD.svg'
import BIF from '../src/assets/images/flags/BIF.svg'
import BMD from '../src/assets/images/flags/BMD.svg'
import BND from '../src/assets/images/flags/BND.svg'
import BOB from '../src/assets/images/flags/BOB.svg'
import BRL from '../src/assets/images/flags/BRL.svg'
import BSB from '../src/assets/images/flags/BSB.svg'
import BTN from '../src/assets/images/flags/BTN.svg'
import BWP from '../src/assets/images/flags/BWP.svg'
import BYN from '../src/assets/images/flags/BYN.svg'
import BYR from '../src/assets/images/flags/BYR.svg'
import BZD from '../src/assets/images/flags/BZD.svg'
import CAD from '../src/assets/images/flags/CAD.svg'
import CDF from '../src/assets/images/flags/CDF.svg'
import CHF from '../src/assets/images/flags/CHF.svg'
import CLF from '../src/assets/images/flags/CLF.svg'
import CLP from '../src/assets/images/flags/CLP.svg'
import CNY from '../src/assets/images/flags/CNY.svg'
import COP from '../src/assets/images/flags/COP.svg'
import CRC from '../src/assets/images/flags/CRC.svg'
import CUC from '../src/assets/images/flags/CUC.svg'
import CUP from '../src/assets/images/flags/CUP.svg'
import CVE from '../src/assets/images/flags/CVE.svg'
import CZK from '../src/assets/images/flags/CZK.svg'
import DJF from '../src/assets/images/flags/DJF.svg'
import DKK from '../src/assets/images/flags/DKK.svg'
import DOP from '../src/assets/images/flags/DOP.svg'
import DZD from '../src/assets/images/flags/DZD.svg'
import EGP from '../src/assets/images/flags/EGP.svg'
import ERN from '../src/assets/images/flags/ERN.svg'
import ETB from '../src/assets/images/flags/ETB.svg'
import EUR from '../src/assets/images/flags/EUR.svg'
import FJD from '../src/assets/images/flags/FJD.svg'
import FKP from '../src/assets/images/flags/FKP.svg'
import GBP from '../src/assets/images/flags/GBP.svg'
import GEL from '../src/assets/images/flags/GEL.svg'
import GGP from '../src/assets/images/flags/GGP.svg'
import GHS from '../src/assets/images/flags/GHS.svg'
import GIP from '../src/assets/images/flags/GIP.svg'
import GMD from '../src/assets/images/flags/GMD.svg'
import GNF from '../src/assets/images/flags/GNF.svg'
import GTQ from '../src/assets/images/flags/GTQ.svg'
import GYD from '../src/assets/images/flags/GYD.svg'
import HKD from '../src/assets/images/flags/HKD.svg'
import HNL from '../src/assets/images/flags/HNL.svg'
import HRK from '../src/assets/images/flags/HRK.svg'
import HTG from '../src/assets/images/flags/HTG.svg'
import HUF from '../src/assets/images/flags/HUF.svg'
import IDR from '../src/assets/images/flags/IDR.svg'
import ILS from '../src/assets/images/flags/ILS.svg'
import IMP from '../src/assets/images/flags/IMP.svg'
import INR from '../src/assets/images/flags/INR.svg'
import IQD from '../src/assets/images/flags/IQD.svg'
import IRR from '../src/assets/images/flags/IRR.svg'
import USD from '../src/assets/images/flags/USD.svg'

const options = [
  {
    value: 'AED',
    label: 'AED - United Arab Emirates Dirham',
    flag: AED,
  },
  {
    value: 'AFN',
    label: 'AFN - Afghan Afghani',
    flag: AFN,
  },
  {
    value: 'ALL',
    label: 'ALL - Albanian Lek',
    flag: ALL,
  },
  {
    value: 'AMD',
    label: 'AMD - Armenian Dram',
    flag: AMD,
  },
  {
    value: 'ANG',
    label: 'ANG - Netherlands Antillean Guilder',
    flag: ANG,
  },
  {
    value: 'AOA',
    label: 'AOA - Angolan Kwanza',
    flag: AOA,
  },
  {
    value: 'ARS',
    label: 'ARS - Argentine Peso',
    flag: ARS,
  },
  {
    value: 'AUD',
    label: 'AUD - Australian Dollar',
    flag: AUD,
  },
  {
    value: 'AWG',
    label: 'AWG - Aruban Florin',
    flag: AWG,
  },
  {
    value: 'AZN',
    label: 'AZN - Azerbaijani Manat',
    flag: AZN,
  },
  {
    value: 'BAM',
    label: 'BAM - Bosnia-Herzegovina Convertible Mark',
    flag: BAM,
  },
  {
    value: 'BBD',
    label: 'BBD - Barbadian Dollar',
    flag: BBD,
  },
  {
    value: 'BDT',
    label: 'BDT - Bangladeshi Taka',
    flag: BDT,
  },
  {
    value: 'BGN',
    label: 'BGN - Bulgarian Lev',
    flag: BGN,
  },
  {
    value: 'BHD',
    label: 'BHD - Bahraini Dinar',
    flag: BHD,
  },
  {
    value: 'BIF',
    label: 'BIF - Burundian Franc',
    flag: BIF,
  },
  {
    value: 'BMD',
    label: 'BMD - Bermudan Dollar',
    flag: BMD,
  },
  {
    value: 'BND',
    label: 'BND - Brunei Dollar',
    flag: BND,
  },
  {
    value: 'BOB',
    label: 'BOB - Bolivian Boliviano',
    flag: BOB,
  },
  {
    value: 'BRL',
    label: 'BRL - Brazilian Real',
    flag: BRL,
  },
  {
    value: 'BSD',
    label: 'BSD - Bahamian Dollar',
    flag: BSB,
  },
  {
    value: 'BTN',
    label: 'BTN - Bhutanese Ngultrum',
    flag: BTN,
  },
  {
    value: 'BWP',
    label: 'BWP - Botswanan Pula',
    flag: BWP,
  },
  {
    value: 'BYN',
    label: 'BYN - New Belarusian Ruble',
    flag: BYN,
  },
  {
    value: 'BYR',
    label: 'BYR - Belarusian Ruble',
    flag: BYR,
  },
  {
    value: 'BZD',
    label: 'BZD - Belize Dollar',
    flag: BZD,
  },
  {
    value: 'CAD',
    label: 'CAD - Canadian Dollar',
    flag: CAD,
  },
  {
    value: 'CDF',
    label: 'CDF - Congolese Franc',
    flag: CDF,
  },
  {
    value: 'CHF',
    label: 'CHF - Swiss Franc',
    flag: CHF,
  },
  {
    value: 'CLF',
    label: 'CLF - Chilean Unit of Account (UF)',
    flag: CLF,
  },
  {
    value: 'CLP',
    label: 'CLP - Chilean Peso',
    flag: CLP,
  },
  {
    value: 'CNY',
    label: 'CNY - Chinese Yuan',
    flag: CNY,
  },
  {
    value: 'COP',
    label: 'COP - Colombian Peso',
    flag: COP,
  },
  {
    value: 'CRC',
    label: 'CRC - Costa Rican Colón',
    flag: CRC,
  },
  {
    value: 'CUC',
    label: 'CUC - Cuban Convertible Peso',
    flag: CUC,
  },
  {
    value: 'CUP',
    label: 'CUP - Cuban Peso',
    flag: CUP,
  },
  {
    value: 'CVE',
    label: 'CVE - Cape Verdean Escudo',
    flag: CVE,
  },
  {
    value: 'CZK',
    label: 'CZK - Czech Republic Koruna',
    flag: CZK,
  },
  {
    value: 'DJF',
    label: 'DJF - Djiboutian Franc',
    flag: DJF,
  },
  {
    value: 'DKK',
    label: 'DKK - Danish Krone',
    flag: DKK,
  },
  {
    value: 'DOP',
    label: 'DOP - Dominican Peso',
    flag: DOP,
  },
  {
    value: 'DZD',
    label: 'DZD - Algerian Dinar',
    flag: DZD,
  },
  {
    value: 'EGP',
    label: 'EGP - Egyptian Pound',
    flag: EGP,
  },
  {
    value: 'ERN',
    label: 'ERN - Eritrean Nakfa',
    flag: ERN,
  },
  {
    value: 'ETB',
    label: 'ETB - Ethiopian Birr',
    flag: ETB,
  },
  {
    value: 'EUR',
    label: 'EUR - Euro',
    flag: EUR,
  },
  {
    value: 'FJD',
    label: 'FJD - Fijian Dollar',
    flag: FJD,
  },
  {
    value: 'FKP',
    label: 'FKP - Falkland Islands Pound',
    flag: FKP,
  },
  {
    value: 'GBP',
    label: 'GBP - British Pound Sterling',
    flag: GBP,
  },
  {
    value: 'GEL',
    label: 'GEL - Georgian Lari',
    flag: GEL,
  },
  {
    value: 'GGP',
    label: 'GGP - Guernsey Pound',
    flag: GGP,
  },
  {
    value: 'GHS',
    label: 'GHS - Ghanaian Cedi',
    flag: GHS,
  },
  {
    value: 'GIP',
    label: 'GIP - Gibraltar Pound',
    flag: GIP,
  },
  {
    value: 'GMD',
    label: 'GMD - Gambian Dalasi',
    flag: GMD,
  },
  {
    value: 'GNF',
    label: 'GNF - Guinean Franc',
    flag: GNF,
  },
  {
    value: 'GTQ',
    label: 'GTQ - Guatemalan Quetzal',
    flag: GTQ,
  },
  {
    value: 'GYD',
    label: 'GYD - Guyanaese Dollar',
    flag: GYD,
  },
  {
    value: 'HKD',
    label: 'HKD - Hong Kong Dollar',
    flag: HKD,
  },
  {
    value: 'HNL',
    label: 'HNL - Honduran Lempira',
    flag: HNL,
  },
  {
    value: 'HRK',
    label: 'HRK - Croatian Kuna',
    flag: HRK,
  },
  {
    value: 'HTG',
    label: 'HTG - Haitian Gourde',
    flag: HTG,
  },
  {
    value: 'HUF',
    label: 'HUF - Hungarian Forint',
    flag: HUF,
  },
  {
    value: 'IDR',
    label: 'IDR - Indonesian Rupiah',
    flag: IDR,
  },
  {
    value: 'ILS',
    label: 'ILS - Israeli New Sheqel',
    flag: ILS,
  },
  {
    value: 'IMP',
    label: 'IMP - Manx pound',
    flag: IMP,
  },
  {
    value: 'INR',
    label: 'INR - Indian Rupee',
    flag: INR,
  },
  {
    value: 'IQD',
    label: 'IQD - Iraqi Dinar',
    flag: IQD,
  },
  {
    value: 'IRR',
    label: 'IRR - Iranian Rial',
    flag: IRR,
  },
  {
    value: 'ISK',
    label: 'ISK - Icelandic Króna',
    flag: '',
  },
  {
    value: 'JEP',
    label: 'JEP - Jersey Pound',
    flag: '',
  },
  {
    value: 'JMD',
    label: 'JMD - Jamaican Dollar',
    flag: '',
  },
  {
    value: 'JOD',
    label: 'JOD - Jordanian Dinar',
    flag: '',
  },
  {
    value: 'JPY',
    label: 'JPY - Japanese Yen',
    flag: '',
  },
  {
    value: 'KES',
    label: 'KES - Kenyan Shilling',
    flag: '',
  },
  {
    value: 'KGS',
    label: 'KGS - Kyrgystani Som',
    flag: '',
  },
  {
    value: 'KHR',
    label: 'KHR - Cambodian Riel',
    flag: '',
  },
  {
    value: 'KMF',
    label: 'KMF - Comorian Franc',
    flag: '',
  },
  {
    value: 'KPW',
    label: 'KPW - North Korean Won',
    flag: '',
  },
  {
    value: 'KRW',
    label: 'KRW - South Korean Won',
    flag: '',
  },
  {
    value: 'KWD',
    label: 'KWD - Kuwaiti Dinar',
    flag: '',
  },
  {
    value: 'KYD',
    label: 'KYD - Cayman Islands Dollar',
    flag: '',
  },
  {
    value: 'KZT',
    label: 'KZT - Kazakhstani Tenge',
    flag: '',
  },
  {
    value: 'LAK',
    label: 'LAK - Laotian Kip',
    flag: '',
  },
  {
    value: 'LBP',
    label: 'LBP - Lebanese Pound',
    flag: '',
  },
  {
    value: 'LKR',
    label: 'LKR - Sri Lankan Rupee',
    flag: '',
  },
  {
    value: 'LRD',
    label: 'LRD - Liberian Dollar',
    flag: '',
  },
  {
    value: 'LSL',
    label: 'LSL - Lesotho Loti',
    flag: '',
  },
  {
    value: 'LTL',
    label: 'LTL - Lithuanian Litas',
    flag: '',
  },
  {
    value: 'LVL',
    label: 'LVL - Latvian Lats',
    flag: '',
  },
  {
    value: 'LYD',
    label: 'LYD - Libyan Dinar',
    flag: '',
  },
  {
    value: 'MAD',
    label: 'MAD - Moroccan Dirham',
    flag: '',
  },
  {
    value: 'MDL',
    label: 'MDL - Moldovan Leu',
    flag: '',
  },
  {
    value: 'MGA',
    label: 'MGA - Malagasy Ariary',
    flag: '',
  },
  {
    value: 'MKD',
    label: 'MKD - Macedonian Denar',
    flag: '',
  },
  {
    value: 'MMK',
    label: 'MMK - Myanma Kyat',
    flag: '',
  },
  {
    value: 'MNT',
    label: 'MNT - Mongolian Tugrik',
    flag: '',
  },
  {
    value: 'MOP',
    label: 'MOP - Macanese Pataca',
    flag: '',
  },
  {
    value: 'MRO',
    label: 'MRO - Mauritanian Ouguiya',
    flag: '',
  },
  {
    value: 'MUR',
    label: 'MUR - Mauritian Rupee',
    flag: '',
  },
  {
    value: 'MVR',
    label: 'MVR - Maldivian Rufiyaa',
    flag: '',
  },
  {
    value: 'MWK',
    label: 'MWK - Malawian Kwacha',
    flag: '',
  },
  {
    value: 'MXN',
    label: 'MXN - Mexican Peso',
    flag: '',
  },
  {
    value: 'MYR',
    label: 'MYR - Malaysian Ringgit',
    flag: '',
  },
  {
    value: 'MZN',
    label: 'MZN - Mozambican Metical',
    flag: '',
  },
  {
    value: 'NAD',
    label: 'NAD - Namibian Dollar',
    flag: '',
  },
  {
    value: 'NGN',
    label: 'NGN - Nigerian Naira',
    flag: '',
  },
  {
    value: 'NIO',
    label: 'NIO - Nicaraguan Córdoba',
    flag: '',
  },
  {
    value: 'NOK',
    label: 'NOK - Norwegian Krone',
    flag: '',
  },
  {
    value: 'NPR',
    label: 'NPR - Nepalese Rupee',
    flag: '',
  },
  {
    value: 'NZD',
    label: 'NZD - New Zealand Dollar',
    flag: '',
  },
  {
    value: 'OMR',
    label: 'OMR - Omani Rial',
    flag: '',
  },
  {
    value: 'PAB',
    label: 'PAB - Panamanian Balboa',
    flag: '',
  },
  {
    value: 'PEN',
    label: 'PEN - Peruvian Nuevo Sol',
    flag: '',
  },
  {
    value: 'PGK',
    label: 'PGK - Papua New Guinean Kina',
    flag: '',
  },
  {
    value: 'PHP',
    label: 'PHP - Philippine Peso',
    flag: '',
  },
  {
    value: 'PKR',
    label: 'PKR - Pakistani Rupee',
    flag: '',
  },
  {
    value: 'PLN',
    label: 'PLN - Polish Zloty',
    flag: '',
  },
  {
    value: 'PYG',
    label: 'PYG - Paraguayan Guarani',
    flag: '',
  },
  {
    value: 'QAR',
    label: 'QAR - Qatari Rial',
    flag: '',
  },
  {
    value: 'RON',
    label: 'RON - Romanian Leu',
    flag: '',
  },
  {
    value: 'RSD',
    label: 'RSD - Serbian Dinar',
    flag: '',
  },
  {
    value: 'RUB',
    label: 'RUB - Russian Ruble',
    flag: '',
  },
  {
    value: 'RWF',
    label: 'RWF - Rwandan Franc',
    flag: '',
  },
  {
    value: 'SAR',
    label: 'SAR - Saudi Riyal',
    flag: '',
  },
  {
    value: 'SBD',
    label: 'SBD - Solomon Islands Dollar',
    flag: '',
  },
  {
    value: 'SCR',
    label: 'SCR - Seychellois Rupee',
    flag: '',
  },
  {
    value: 'SDG',
    label: 'SDG - Sudanese Pound',
    flag: '',
  },
  {
    value: 'SEK',
    label: 'SEK - Swedish Krona',
    flag: '',
  },
  {
    value: 'SGD',
    label: 'SGD - Singapore Dollar',
    flag: '',
  },
  {
    value: 'SHP',
    label: 'SHP -Saint Helena Pound',
    flag: '',
  },
  {
    value: 'SLL',
    label: 'SLL - Sierra Leonean Leone',
    flag: '',
  },
  {
    value: 'SOS',
    label: 'SOS - Somali Shilling',
    flag: '',
  },
  {
    value: 'SRD',
    label: 'SRD - Surinamese Dollar',
    flag: '',
  },
  {
    value: 'STD',
    label: 'STD - São Tomé and Príncipe Dobra',
    flag: '',
  },
  {
    value: 'SVC',
    label: 'SVC - Salvadoran Colón',
    flag: '',
  },
  {
    value: 'SYP',
    label: 'SYP - Syrian Pound',
    flag: '',
  },
  {
    value: 'SZL',
    label: 'SZL - Swazi Lilangeni',
    flag: '',
  },
  {
    value: 'THB',
    label: 'THB - Thai Baht',
    flag: '',
  },
  {
    value: 'TJS',
    label: 'TJS - Tajikistani Somoni',
    flag: '',
  },
  {
    value: 'TMT',
    label: 'TMT - Turkmenistani Manat',
    flag: '',
  },
  {
    value: 'TND',
    label: 'TND - Tunisian Dinar',
    flag: '',
  },
  {
    value: 'TOP',
    label: 'TOP - Tongan Paʻanga',
    flag: '',
  },
  {
    value: 'TRY',
    label: 'TRY - Turkish Lira',
    flag: '',
  },
  {
    value: 'TTD',
    label: 'TTD - Trinidad and Tobago Dollar',
    flag: '',
  },
  {
    value: 'TWD',
    label: 'TWD - New Taiwan Dollar',
    flag: '',
  },
  {
    value: 'TZS',
    label: 'TZS - Tanzanian Shilling',
    flag: '',
  },
  {
    value: 'UAH',
    label: 'UAH - Ukrainian Hryvnia',
    flag: '',
  },
  {
    value: 'UGX',
    label: 'UGX - Ugandan Shilling',
    flag: '',
  },
  {
    value: 'USD',
    label: 'USD - United States Dollar',
    flag: USD,
  },
  {
    value: 'UYU',
    label: 'UYU - Uruguayan Peso',
    flag: '',
  },
  {
    value: 'UZS',
    label: 'UZS - Uzbekistan Som',
    flag: '',
  },
  {
    value: 'VEF',
    label: 'VEF - Venezuelan Bolívar Fuerte',
    flag: '',
  },
  {
    value: 'VND',
    label: 'VND - Vietnamese Dong',
    flag: '',
  },
  {
    value: 'VUV',
    label: 'VUV - Vanuatu Vatu',
    flag: '',
  },
  {
    value: 'WST',
    label: 'WST - Samoan Tala',
    flag: '',
  },
  {
    value: 'XAF',
    label: 'XAF - CFA Franc BEAC',
    flag: '',
  },
  {
    value: 'XAG',
    label: 'XAG - Silver (troy ounce)',
    flag: '',
  },
  {
    value: 'XAU',
    label: 'XAU - Gold (troy ounce)',
    flag: '',
  },
  {
    value: 'XCD',
    label: 'East Caribbean Dollar',
    flag: '',
  },
  {
    value: 'XDR',
    label: 'XDR - Special Drawing Rights',
    flag: '',
  },
  {
    value: 'XOF',
    label: 'XOF - CFA Franc BCEAO',
    flag: '',
  },
  {
    value: 'XPF',
    label: 'XPF - CFP Franc',
    flag: '',
  },
  {
    value: 'YER',
    label: 'YER - Yemeni Rial',
    flag: '',
  },
  {
    value: 'ZAR',
    label: 'ZAR - South African Rand',
    flag: '',
  },
  {
    value: 'ZMK',
    label: 'ZMK - Zambian Kwacha (pre-2013)',
    flag: '',
  },
  {
    value: 'ZMW',
    label: 'ZMW - Zambian Kwacha',
    flag: '',
  },
  {
    value: 'ZWL',
    label: 'ZWL - Zimbabwean Dollar',
    flag: '',
  },
]

// const options = [
//   {
//     value: 'USD',
//     label: 'USD - United States Dollar',
//     flag: usa,
//   },
//   {
//     value: 'AED',
//     label: 'AED - United Arab Emirates Dirham',
//     flag: usa,
//   },
// ]
export default options
