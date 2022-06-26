import React from "react";

import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PortraitIcon from "@mui/icons-material/Portrait";
import SchoolIcon from "@mui/icons-material/School";
import PetsIcon from "@mui/icons-material/Pets";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import DiamondIcon from "@mui/icons-material/Diamond";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

export const getServiceThumbnail = (type: string) => {
  switch (type) {
    case "Family":
      return <FamilyRestroomIcon sx={{ fontSize: 50 }} />;
    case "Portrait":
      return <PortraitIcon sx={{ fontSize: 50 }} />;
    case "Graduation":
      return <SchoolIcon sx={{ fontSize: 50 }} />;
    case "Couples & Engagement":
      return <DiamondIcon sx={{ fontSize: 50 }} />;
    case "Boudoir":
      return <PhotoCameraIcon sx={{ fontSize: 50 }} />;
    case "Pet":
      return <PetsIcon sx={{ fontSize: 50 }} />;
    case "Newborn":
      return <ChildFriendlyIcon sx={{ fontSize: 50 }} />;
    case "Maternity":
      return <PregnantWomanIcon sx={{ fontSize: 50 }} />;
    default:
      return null;
  }
};
