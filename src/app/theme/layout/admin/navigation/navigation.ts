export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: '',
    type: 'group',
    icon: 'feather icon-home',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard',
        icon: 'feather icon-home'
      }
    ]
  },
  {
    id: 'mastersID',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'masters',
        title: 'Masters',
        type: 'collapse',
        icon: 'feather icon-settings',
        children: [
          {
            id: 'modulemaster',
            title: 'Module Master',
            type: 'item',
            url: '/moduleMaster',
            external: true
          },
          {
            id: 'usergroupmaster',
            title: 'User Group Master',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'rolemaster',
            title: 'Role Master',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'usermaster',
            title: 'User  Master',
            type: 'item',
            url: '/userMaster',
            external: true
          }
        ]
        }
       
    ]
        
  },
  {
    id: 'coreID',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'menu-level',
        title: 'Core Modules',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'CustomerManagement',
            title: 'Customer Management',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'CurrencyExchange',
            title: 'Currency Exchange',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'RemittanceManagement',
            title: 'Remittance Management',
            type: 'collapse',
            url: '/remitanceDashboard',
            children: [
              {
                id: 'RemittanceDashBoard',
                title: 'Remittance DashBoard',
                type: 'item',
                url: '/remittanceDashboard',
                external: true
              },
              {
                id: 'RemittanceInitiation',
                title: 'Remittance Initiation',
                type: 'item',
                url: '/remittanceInitiation',
                external: true
              },
              {
                id: 'ReceiverManagement',
                title: 'Receiver Management',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'TransactionHistory',
                title: 'Transaction History',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'BeneficiaryManagement',
                title: 'Beneficiary Management',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'RemittanceRateQuotation',
                title: 'Remittance Rate Quotation',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'RemittanceTracking',
                title: 'Remittance Tracking',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'BulkRemittanceProcessing',
                title: 'Bulk Remittance Processing',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'ComplianceandAMLScreening',
                title: 'Compliance and AML Screening',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'RemittanceLimitsManagement',
                title: 'Remittance Limits Management',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'RemittanceFeeConfiguration',
                title: 'Remittance Fee Configuration',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'RemittanceReconciliation',
                title: 'Remittance Reconciliation',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'CustomerSupportandInquiry',
                title: 'Customer Support and Inquiry',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'RemittanceAuditLog',
                title: 'Remittance Audit Log',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'RemittancePartnerManagement',
                title: 'Remittance Partner Management',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'RemittanceReportGeneration',
                title: 'Remittance Report Generation',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'AutomatedNotifications',
                title: 'Automated Notifications',
                type: 'item',
                url: 'javascript:',
                external: true
              }
            ]
          },
          {
            id: 'ComplianceandRiskManagement',
            title: 'Compliance and Risk Management',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'TransactionManagement',
            title: 'Transaction Management',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'UserManagement',
            title: 'User Management',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'FinancialManagement',
            title: 'Financial Management',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'Integrationid',
            title: 'Integration',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'BranchManagement',
            title: 'Branch Management',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'MobileandInternetBanking',
            title: 'Mobile and Internet Banking',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'CustomerSupport',
            title: 'Customer Support',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'ReportingandAnalytics',
            title: 'Reporting and Analytics',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'AuditandComplianceManagement',
            title: 'Audit and Compliance Management',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'SecurityManagement',
            title: 'Security Management',
            type: 'item',
            url: 'javascript:',
            external: true
          }
        ]
      }
    ]
  },
  {
    id: 'cuexchange',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'exchanges',
        title: 'Currency Exchange',
        type: 'item',
        url: '/currencyExchange',

        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
  },

  {
    id: 'chart',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'swichart',
        title: 'Charts',
        type: 'item',
        url: '/chart',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
  },
  {
    id: 'remittancescreen',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'remit',
        title: 'Remittance',
        type: 'item',
        url: '/forms',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      }
    ]
  },
  {
    id: 'history',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'historytab',
        title: 'History',
        type: 'item',
        url: '/page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }
    ]
  },
  {
    id: 'managment',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'custmanage',
        title: 'Customer Managment',
        type: 'item',
        url: '/page',
        classes: 'nav-item',
        icon: 'feather icon-box'
      }
    ]
  },
  {
    id: 'complmanagment',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'complienceManag',
        title: 'Complience Managment',
        type: 'item',

        url: '/page',
        classes: 'nav-item',
        icon: 'feather icon-box'
      }
    ]
  },
  {
    id: 'custmersupp',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'custsup',
        title: 'Customer Support',
        type: 'item',

        icon: 'feather icon-box',
        classes: 'nav-item'
      }
    ]
  }
];
