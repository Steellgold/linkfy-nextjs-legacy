type Plan = "FREE" | "CREATOR" | "BULK";
type Features = {
  maxUsers: number;
  linkTree: {
    customImageBackground: boolean;
    imageBackground: {
      onlyDefaults: boolean;
      canImport: boolean;
    };
    customColorBackground: boolean;
    colorBackground: {
      onlyDefaults: boolean;
      canChoose: boolean;
    };
    customLogo: boolean;
    statistics: boolean;
  };
  customDomain: {
    freeCanHave: boolean;
    freeMax: number;
    // canBuyMore: boolean; : If user want to buy more domains ? 
  };
  subDomain: {
    freeCanHave: boolean;
    freeMax: number;
    // canBuyMore: boolean; : If user want to buy more subdomains ?
  };
};

export const plans: Record<Plan, Features> = {
  FREE: {
    maxUsers: 4,
    linkTree: {
      customImageBackground: false,
      imageBackground: {
        onlyDefaults: true,
        canImport: false,
      },
      customColorBackground: true,
      colorBackground: {
        onlyDefaults: true,
        canChoose: false,
      },
      customLogo: false,
      statistics: false,
    },
    customDomain: {
      freeCanHave: true,
      freeMax: 1,
    },
    subDomain: {
      freeCanHave: true,
      freeMax: 1,
    },
  },
  CREATOR: {
    maxUsers: 10,
    linkTree: {
      customImageBackground: true,
      imageBackground: {
        onlyDefaults: false, // Can import image so not only defaults
        canImport: true,
      },
      customColorBackground: true,
      colorBackground: {
        onlyDefaults: false, // Can choose color so not only defaults
        canChoose: true,
      },
      customLogo: true,
      statistics: true,
    },
    customDomain: {
      freeCanHave: true,
      freeMax: 3,
    },
    subDomain: {
      freeCanHave: true,
      freeMax: 3,
    },
  },
  BULK: {
    maxUsers: 100,
    linkTree: {
      customImageBackground: true,
      imageBackground: {
        onlyDefaults: false, // Can import image so not only defaults
        canImport: true,
      },
      customColorBackground: true,
      colorBackground: {
        onlyDefaults: false, // Can choose color so not only defaults
        canChoose: true,
      },
      customLogo: true,
      statistics: true,
    },
    customDomain: {
      freeCanHave: true,
      freeMax: 10,
    },
    subDomain: {
      freeCanHave: true,
      freeMax: 10,
    },
  },
};
