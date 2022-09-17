// Return hero items - image, text and button link
export const heroQuery = /* GraphQL */ `
  query {
    heroSectionCollection {
      items {
        heroTitle
        heroSubTitle
        heroButtonText
        heroImage {
          url
        }
        imageAltText
      }
    }
  }
`;

// Return items for homepage slider for services offered
export const servicesQuery = /* GraphQL */ `
  query {
    servicesOfferedCollection {
      items {
        serviceName
        serviceImage {
          url
        }
        imageAltDescription
      }
    }
  }
`;

// Return header items - title, links
export const headerQuery = /* GraphQL */ `
  query {
    headerCollection {
      items {
        name
        navLinksCollection {
          items {
            linkText
            navLink
          }
        }
      }
    }
  }
`;

// Return Footer items - links, text
export const footerQuery = /* GraphQL */ `
  query {
    footerCollection {
      items {
        name
        navLinksCollection {
          items {
            navLink
            linkText
          }
        }
        email
        phoneNumber
        facebookLink
      }
    }
  }
`;
