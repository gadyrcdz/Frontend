export interface Country {
  code: string;
  dial_code: string;
  flag: string;
  name: string;
}

const countryData: Country[] = [
  { code: 'AF', dial_code: '+93', flag: '🇦🇫', name: 'Afghanistan' },
  { code: 'AL', dial_code: '+355', flag: '🇦🇱', name: 'Albania' },
  { code: 'DZ', dial_code: '+213', flag: '🇩🇿', name: 'Algeria' },
  { code: 'AS', dial_code: '+1-684', flag: '🇦🇸', name: 'American Samoa' },
  { code: 'AD', dial_code: '+376', flag: '🇦🇩', name: 'Andorra' },
  { code: 'AO', dial_code: '+244', flag: '🇦🇴', name: 'Angola' },
  { code: 'AI', dial_code: '+1-264', flag: '🇦🇮', name: 'Anguilla' },
  { code: 'AG', dial_code: '+1-268', flag: '🇦🇬', name: 'Antigua and Barbuda' },
  { code: 'AR', dial_code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: 'AM', dial_code: '+374', flag: '🇦🇲', name: 'Armenia' },
  { code: 'AW', dial_code: '+297', flag: '🇦🇼', name: 'Aruba' },
  { code: 'AU', dial_code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'AT', dial_code: '+43', flag: '🇦🇹', name: 'Austria' },
  { code: 'AZ', dial_code: '+994', flag: '🇦🇿', name: 'Azerbaijan' },
  { code: 'BS', dial_code: '+1-242', flag: '🇧🇸', name: 'Bahamas' },
  { code: 'BH', dial_code: '+973', flag: '🇧🇭', name: 'Bahrain' },
  { code: 'BD', dial_code: '+880', flag: '🇧🇩', name: 'Bangladesh' },
  { code: 'BB', dial_code: '+1-246', flag: '🇧🇧', name: 'Barbados' },
  { code: 'BY', dial_code: '+375', flag: '🇧🇾', name: 'Belarus' },
  { code: 'BE', dial_code: '+32', flag: '🇧🇪', name: 'Belgium' },
  { code: 'BZ', dial_code: '+501', flag: '🇧🇿', name: 'Belize' },
  { code: 'BJ', dial_code: '+229', flag: '🇧🇯', name: 'Benin' },
  { code: 'BM', dial_code: '+1-441', flag: '🇧🇲', name: 'Bermuda' },
  { code: 'BT', dial_code: '+975', flag: '🇧🇹', name: 'Bhutan' },
  { code: 'BO', dial_code: '+591', flag: '🇧🇴', name: 'Bolivia' },
  { code: 'BA', dial_code: '+387', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
  { code: 'BW', dial_code: '+267', flag: '🇧🇼', name: 'Botswana' },
  { code: 'BR', dial_code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: 'BN', dial_code: '+673', flag: '🇧🇳', name: 'Brunei Darussalam' },
  { code: 'BG', dial_code: '+359', flag: '🇧🇬', name: 'Bulgaria' },
  { code: 'BF', dial_code: '+226', flag: '🇧🇫', name: 'Burkina Faso' },
  { code: 'BI', dial_code: '+257', flag: '🇧🇮', name: 'Burundi' },
  { code: 'KH', dial_code: '+855', flag: '🇰🇭', name: 'Cambodia' },
  { code: 'CM', dial_code: '+237', flag: '🇨🇲', name: 'Cameroon' },
  { code: 'CA', dial_code: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'CV', dial_code: '+238', flag: '🇨🇻', name: 'Cape Verde' },
  {
    code: 'CF',
    dial_code: '+236',
    flag: '🇨🇫',
    name: 'Central African Republic',
  },
  { code: 'TD', dial_code: '+235', flag: '🇹🇩', name: 'Chad' },
  { code: 'CL', dial_code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: 'CN', dial_code: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'CO', dial_code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: 'KM', dial_code: '+269', flag: '🇰🇲', name: 'Comoros' },
  { code: 'CG', dial_code: '+242', flag: '🇨🇬', name: 'Congo' },
  {
    code: 'CD',
    dial_code: '+243',
    flag: '🇨🇩',
    name: 'Congo, Democratic Republic',
  },
  { code: 'CR', dial_code: '+506', flag: '🇨🇷', name: 'Costa Rica' },
  { code: 'CI', dial_code: '+225', flag: '🇨🇮', name: "Cote d'Ivoire" },
  { code: 'HR', dial_code: '+385', flag: '🇭🇷', name: 'Croatia' },
  { code: 'CU', dial_code: '+53', flag: '🇨🇺', name: 'Cuba' },
  { code: 'CY', dial_code: '+357', flag: '🇨🇾', name: 'Cyprus' },
  { code: 'CZ', dial_code: '+420', flag: '🇨🇿', name: 'Czech Republic' },
  { code: 'DK', dial_code: '+45', flag: '🇩🇰', name: 'Denmark' },
  { code: 'DJ', dial_code: '+253', flag: '🇩🇯', name: 'Djibouti' },
  { code: 'DM', dial_code: '+1-767', flag: '🇩🇲', name: 'Dominica' },
  { code: 'DO', dial_code: '+1-809', flag: '🇩🇴', name: 'Dominican Republic' },
  { code: 'EC', dial_code: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: 'EG', dial_code: '+20', flag: '🇪🇬', name: 'Egypt' },
  { code: 'SV', dial_code: '+503', flag: '🇸🇻', name: 'El Salvador' },
  { code: 'GQ', dial_code: '+240', flag: '🇬🇶', name: 'Equatorial Guinea' },
  { code: 'ER', dial_code: '+291', flag: '🇪🇷', name: 'Eritrea' },
  { code: 'EE', dial_code: '+372', flag: '🇪🇪', name: 'Estonia' },
  { code: 'SZ', dial_code: '+268', flag: '🇸🇿', name: 'Eswatini' },
  { code: 'ET', dial_code: '+251', flag: '🇪🇹', name: 'Ethiopia' },
  { code: 'FJ', dial_code: '+679', flag: '🇫🇯', name: 'Fiji' },
  { code: 'FI', dial_code: '+358', flag: '🇫🇮', name: 'Finland' },
  { code: 'FR', dial_code: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'GA', dial_code: '+241', flag: '🇬🇦', name: 'Gabon' },
  { code: 'GM', dial_code: '+220', flag: '🇬🇲', name: 'Gambia' },
  { code: 'GE', dial_code: '+995', flag: '🇬🇪', name: 'Georgia' },
  { code: 'DE', dial_code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'GH', dial_code: '+233', flag: '🇬🇭', name: 'Ghana' },
  { code: 'GR', dial_code: '+30', flag: '🇬🇷', name: 'Greece' },
  { code: 'GD', dial_code: '+1-473', flag: '🇬🇩', name: 'Grenada' },
  { code: 'GU', dial_code: '+1-671', flag: '🇬🇺', name: 'Guam' },
  { code: 'GT', dial_code: '+502', flag: '🇬🇹', name: 'Guatemala' },
  { code: 'GN', dial_code: '+224', flag: '🇬🇳', name: 'Guinea' },
  { code: 'GW', dial_code: '+245', flag: '🇬🇼', name: 'Guinea-Bissau' },
  { code: 'GY', dial_code: '+592', flag: '🇬🇾', name: 'Guyana' },
  { code: 'HT', dial_code: '+509', flag: '🇭🇹', name: 'Haiti' },
  { code: 'HN', dial_code: '+504', flag: '🇭🇳', name: 'Honduras' },
  { code: 'HK', dial_code: '+852', flag: '🇭🇰', name: 'Hong Kong' },
  { code: 'HU', dial_code: '+36', flag: '🇭🇺', name: 'Hungary' },
  { code: 'IS', dial_code: '+354', flag: '🇮🇸', name: 'Iceland' },
  { code: 'IN', dial_code: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'ID', dial_code: '+62', flag: '🇮🇩', name: 'Indonesia' },
  { code: 'IR', dial_code: '+98', flag: '🇮🇷', name: 'Iran' },
  { code: 'IQ', dial_code: '+964', flag: '🇮🇶', name: 'Iraq' },
  { code: 'IE', dial_code: '+353', flag: '🇮🇪', name: 'Ireland' },
  { code: 'IL', dial_code: '+972', flag: '🇮🇱', name: 'Israel' },
  { code: 'IT', dial_code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: 'JM', dial_code: '+1-876', flag: '🇯🇲', name: 'Jamaica' },
  { code: 'JP', dial_code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: 'JO', dial_code: '+962', flag: '🇯🇴', name: 'Jordan' },
  { code: 'KZ', dial_code: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
  { code: 'KE', dial_code: '+254', flag: '🇰🇪', name: 'Kenya' },
  { code: 'KI', dial_code: '+686', flag: '🇰🇮', name: 'Kiribati' },
  { code: 'KP', dial_code: '+850', flag: '🇰🇵', name: 'Korea (North)' },
  { code: 'KR', dial_code: '+82', flag: '🇰🇷', name: 'Korea (South)' },
  { code: 'KW', dial_code: '+965', flag: '🇰🇼', name: 'Kuwait' },
  { code: 'KG', dial_code: '+996', flag: '🇰🇬', name: 'Kyrgyzstan' },
  { code: 'LA', dial_code: '+856', flag: '🇱🇦', name: 'Laos' },
  { code: 'LV', dial_code: '+371', flag: '🇱🇻', name: 'Latvia' },
  { code: 'LB', dial_code: '+961', flag: '🇱🇧', name: 'Lebanon' },
  { code: 'LS', dial_code: '+266', flag: '🇱🇸', name: 'Lesotho' },
  { code: 'LR', dial_code: '+231', flag: '🇱🇷', name: 'Liberia' },
  { code: 'LY', dial_code: '+218', flag: '🇱🇾', name: 'Libya' },
  { code: 'LI', dial_code: '+423', flag: '🇱🇮', name: 'Liechtenstein' },
  { code: 'LT', dial_code: '+370', flag: '🇱🇹', name: 'Lithuania' },
  { code: 'LU', dial_code: '+352', flag: '🇱🇺', name: 'Luxembourg' },
  { code: 'MG', dial_code: '+261', flag: '🇲🇬', name: 'Madagascar' },
  { code: 'MW', dial_code: '+265', flag: '🇲🇼', name: 'Malawi' },
  { code: 'MY', dial_code: '+60', flag: '🇲🇾', name: 'Malaysia' },
  { code: 'MV', dial_code: '+960', flag: '🇲🇻', name: 'Maldives' },
  { code: 'ML', dial_code: '+223', flag: '🇲🇱', name: 'Mali' },
  { code: 'MT', dial_code: '+356', flag: '🇲🇹', name: 'Malta' },
  { code: 'MH', dial_code: '+692', flag: '🇲🇭', name: 'Marshall Islands' },
  { code: 'MR', dial_code: '+222', flag: '🇲🇷', name: 'Mauritania' },
  { code: 'MU', dial_code: '+230', flag: '🇲🇺', name: 'Mauritius' },
  { code: 'MX', dial_code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: 'FM', dial_code: '+691', flag: '🇫🇲', name: 'Micronesia' },
  { code: 'MD', dial_code: '+373', flag: '🇲🇩', name: 'Moldova' },
  { code: 'MC', dial_code: '+377', flag: '🇲🇨', name: 'Monaco' },
  { code: 'MN', dial_code: '+976', flag: '🇲🇳', name: 'Mongolia' },
  { code: 'ME', dial_code: '+382', flag: '🇲🇪', name: 'Montenegro' },
  { code: 'MA', dial_code: '+212', flag: '🇲🇦', name: 'Morocco' },
  { code: 'MZ', dial_code: '+258', flag: '🇲🇿', name: 'Mozambique' },
  { code: 'MM', dial_code: '+95', flag: '🇲🇲', name: 'Myanmar' },
  { code: 'NA', dial_code: '+264', flag: '🇳🇦', name: 'Namibia' },
  { code: 'NR', dial_code: '+674', flag: '🇳🇷', name: 'Nauru' },
  { code: 'NP', dial_code: '+977', flag: '🇳🇵', name: 'Nepal' },
  { code: 'NL', dial_code: '+31', flag: '🇳🇱', name: 'Netherlands' },
  { code: 'NZ', dial_code: '+64', flag: '🇳🇿', name: 'New Zealand' },
  { code: 'NI', dial_code: '+505', flag: '🇳🇮', name: 'Nicaragua' },
  { code: 'NE', dial_code: '+227', flag: '🇳🇪', name: 'Niger' },
  { code: 'NG', dial_code: '+234', flag: '🇳🇬', name: 'Nigeria' },
  { code: 'NO', dial_code: '+47', flag: '🇳🇴', name: 'Norway' },
  { code: 'OM', dial_code: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: 'PK', dial_code: '+92', flag: '🇵🇰', name: 'Pakistan' },
  { code: 'PW', dial_code: '+680', flag: '🇵🇼', name: 'Palau' },
  { code: 'PA', dial_code: '+507', flag: '🇵🇦', name: 'Panama' },
  { code: 'PG', dial_code: '+675', flag: '🇵🇬', name: 'Papua New Guinea' },
  { code: 'PY', dial_code: '+595', flag: '🇵🇾', name: 'Paraguay' },
  { code: 'PE', dial_code: '+51', flag: '🇵🇪', name: 'Peru' },
  { code: 'PH', dial_code: '+63', flag: '🇵🇭', name: 'Philippines' },
  { code: 'PL', dial_code: '+48', flag: '🇵🇱', name: 'Poland' },
  { code: 'PT', dial_code: '+351', flag: '🇵🇹', name: 'Portugal' },
  { code: 'QA', dial_code: '+974', flag: '🇶🇦', name: 'Qatar' },
  { code: 'RO', dial_code: '+40', flag: '🇷🇴', name: 'Romania' },
  { code: 'RU', dial_code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: 'RW', dial_code: '+250', flag: '🇷🇼', name: 'Rwanda' },
  {
    code: 'KN',
    dial_code: '+1-869',
    flag: '🇰🇳',
    name: 'Saint Kitts and Nevis',
  },
  { code: 'LC', dial_code: '+1-758', flag: '🇱🇨', name: 'Saint Lucia' },
  {
    code: 'VC',
    dial_code: '+1-784',
    flag: '🇻🇨',
    name: 'Saint Vincent and the Grenadines',
  },
  { code: 'WS', dial_code: '+685', flag: '🇼🇸', name: 'Samoa' },
  { code: 'SM', dial_code: '+378', flag: '🇸🇲', name: 'San Marino' },
  { code: 'ST', dial_code: '+239', flag: '🇸🇹', name: 'Sao Tome and Principe' },
  { code: 'SA', dial_code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
  { code: 'SN', dial_code: '+221', flag: '🇸🇳', name: 'Senegal' },
  { code: 'RS', dial_code: '+381', flag: '🇷🇸', name: 'Serbia' },
  { code: 'SC', dial_code: '+248', flag: '🇸🇨', name: 'Seychelles' },
  { code: 'SL', dial_code: '+232', flag: '🇸🇱', name: 'Sierra Leone' },
  { code: 'SG', dial_code: '+65', flag: '🇸🇬', name: 'Singapore' },
  { code: 'SK', dial_code: '+421', flag: '🇸🇰', name: 'Slovakia' },
  { code: 'SI', dial_code: '+386', flag: '🇸🇮', name: 'Slovenia' },
  { code: 'SB', dial_code: '+677', flag: '🇸🇧', name: 'Solomon Islands' },
  { code: 'SO', dial_code: '+252', flag: '🇸🇴', name: 'Somalia' },
  { code: 'ZA', dial_code: '+27', flag: '🇿🇦', name: 'South Africa' },
  { code: 'SS', dial_code: '+211', flag: '🇸🇸', name: 'South Sudan' },
  { code: 'ES', dial_code: '+34', flag: '🇪🇸', name: 'Spain' },
  { code: 'LK', dial_code: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
  { code: 'SD', dial_code: '+249', flag: '🇸🇩', name: 'Sudan' },
  { code: 'SR', dial_code: '+597', flag: '🇸🇷', name: 'Suriname' },
  { code: 'SE', dial_code: '+46', flag: '🇸🇪', name: 'Sweden' },
  { code: 'CH', dial_code: '+41', flag: '🇨🇭', name: 'Switzerland' },
  { code: 'SY', dial_code: '+963', flag: '🇸🇾', name: 'Syria' },
  { code: 'TW', dial_code: '+886', flag: '🇹🇼', name: 'Taiwan' },
  { code: 'TJ', dial_code: '+992', flag: '🇹🇯', name: 'Tajikistan' },
  { code: 'TZ', dial_code: '+255', flag: '🇹🇿', name: 'Tanzania' },
  { code: 'TH', dial_code: '+66', flag: '🇹🇭', name: 'Thailand' },
  { code: 'TL', dial_code: '+670', flag: '🇹🇱', name: 'Timor-Leste' },
  { code: 'TG', dial_code: '+228', flag: '🇹🇬', name: 'Togo' },
  { code: 'TO', dial_code: '+676', flag: '🇹🇴', name: 'Tonga' },
  { code: 'TT', dial_code: '+1-868', flag: '🇹🇹', name: 'Trinidad and Tobago' },
  { code: 'TN', dial_code: '+216', flag: '🇹🇳', name: 'Tunisia' },
  { code: 'TR', dial_code: '+90', flag: '🇹🇷', name: 'Turkey' },
  { code: 'TM', dial_code: '+993', flag: '🇹🇲', name: 'Turkmenistan' },
  { code: 'TV', dial_code: '+688', flag: '🇹🇻', name: 'Tuvalu' },
  { code: 'UG', dial_code: '+256', flag: '🇺🇬', name: 'Uganda' },
  { code: 'UA', dial_code: '+380', flag: '🇺🇦', name: 'Ukraine' },
  { code: 'AE', dial_code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: 'GB', dial_code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'US', dial_code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'UY', dial_code: '+598', flag: '🇺🇾', name: 'Uruguay' },
  { code: 'UZ', dial_code: '+998', flag: '🇺🇿', name: 'Uzbekistan' },
  { code: 'VU', dial_code: '+678', flag: '🇻🇺', name: 'Vanuatu' },
  { code: 'VE', dial_code: '+58', flag: '🇻🇪', name: 'Venezuela' },
  { code: 'VN', dial_code: '+84', flag: '🇻🇳', name: 'Vietnam' },
  { code: 'YE', dial_code: '+967', flag: '🇾🇪', name: 'Yemen' },
  { code: 'ZM', dial_code: '+260', flag: '🇿🇲', name: 'Zambia' },
  { code: 'ZW', dial_code: '+263', flag: '🇿🇼', name: 'Zimbabwe' },
];

export default countryData;
