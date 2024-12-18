export interface PricingPlan {
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
  }
  
  export const pricingPlans: PricingPlan[] = [
    {
      name: 'Basic Plan',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Email & Communication Services',
        'Basic Data Backup And Storage',
        'Standard Security Measuresimg',
        'Limited Software Support',
        'Suitable For Small Businesses'
      ]
    },
    {
      name: 'Professional Plan',
      monthlyPrice: 44,
      yearlyPrice: 440,
      features: [
        'Email & Communication Services',
        'Basic Data Backup And Storage',
        'Standard Security Measuresimg',
        'Limited Software Support',
        'Suitable For Small Businesses'
      ]
    },
    {
      name: 'Enterprise Plan',
      monthlyPrice: 89,
      yearlyPrice: 890,
      features: [
        'Email & Communication Services',
        'Basic Data Backup And Storage',
        'Standard Security Measuresimg',
        'Limited Software Support',
        'Suitable For Small Businesses'
      ]
    }
  ];