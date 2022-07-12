import React from "react";

interface IContentfulContext {
  heroSection: any;
  servicesOffered: any;
  footerInformation: any;
  contactSubmissionTitle: any;
  contactSubmissionConfirm: any;
}

export const ContentfulContext = React.createContext<IContentfulContext | null>(
  null
);

const ContentfulProvider: React.FC<React.ReactNode> = ({ children }) => {
  return <>{children}</>;
};
