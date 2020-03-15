import React from "react";
import { ReactComponent as WindowInstallationIcon } from "../../assets/images/window-installation.svg";
import { ReactComponent as DoorIcon } from "../../assets/images/door.svg";
import { ReactComponent as WindowSashIcon } from "../../assets/images/window-sash.svg";
import { ReactComponent as SillMullionIcon } from "../../assets/images/sill-mullion.svg";
import { ReactComponent as GlassReplacementIcon } from "../../assets/images/glass-replacement.svg";
import { ReactComponent as SashCordIcon } from "../../assets/images/sash-cord.svg";
import { ReactComponent as SpiralBalanceIcon } from "../../assets/images/spiral-balance.svg";
import { ReactComponent as WindowHardwareIcon } from "../../assets/images/window-hardware.svg";
import { ReactComponent as WindowSecurityIcon } from "../../assets/images/window-security.svg";
import { ReactComponent as WindowSurveyIcon } from "../../assets/images/window-survey.svg";
import { ReactComponent as SteelWindowsIcon } from "../../assets/images/steel-windows.svg";

const servicesData = [
  {
    id: 1,
    name: "Supply and installation of windows",
    icon: WindowInstallationIcon
  },
  {
    id: 2,
    name: "Supply and installation of doors",
    icon: DoorIcon
  },
  {
    id: 3,
    name: "Window sash replacement",
    icon: WindowSashIcon
  },
  {
    id: 4,
    name: "Sill mullion replacement",
    icon: SillMullionIcon
  },
  {
    id: 5,
    name: "Glass replacement (commercial)",
    icon: GlassReplacementIcon
  },
  {
    id: 6,
    name: "Sash cord replacement",
    icon: SashCordIcon
  },
  {
    id: 7,
    name: "Spiral balance replacement",
    icon: SpiralBalanceIcon
  },
  {
    id: 8,
    name: "Window hardware",
    icon: WindowHardwareIcon
  },
  {
    id: 9,
    name: "Window security",
    icon: WindowSecurityIcon
  },
  {
    id: 10,
    name: "Window survey reports",
    icon: WindowSurveyIcon
  },
  {
    id: 11,
    name: "Steel windows (commercial)",
    icon: SteelWindowsIcon
  }
];

const ServicesSummary = () => {
  return (
    <div className="service-card-container">
      {servicesData.map(item => (
        <div key={item.id} className="service-card">
          <div className="service-card-icon">
            <item.icon />
          </div>
          <div className="service-card-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSummary;
