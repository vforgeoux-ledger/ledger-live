import React, { useEffect, useState, FC } from 'react';
import Ledger from './icons/ledger';
import * as Icons from './icons/crypto-icons';

interface IconComponent {
  default: FC<React.SVGProps<SVGSVGElement>>;
}

// Function to dynamically import the icons
const importIcon = async (iconName: string): Promise<FC<React.SVGProps<SVGSVGElement>> | null> => {
    const name = iconName.toLowerCase().replace(/^.{1}/g, iconName[0].toUpperCase())
    try {
      const iconComponent = Icons[name] || Icons['Svg' + name];

      if (iconComponent) {
        return iconComponent as FC<React.SVGProps<SVGSVGElement>>;
      } else {
        console.error(`Icon '${iconName}' not found`);
        return null;
      }
    } catch (error) {
      console.error(`Failed to import icon component: ${error}`);
      return null;
    }
  };
  
interface CryptoIconProps {
  iconName: string;
}

const CryptoIcon: FC<CryptoIconProps> = ({ iconName }) => {
  const [IconComponent, setIconComponent] = useState<FC<React.SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    importIcon(iconName).then(setIconComponent);
  }, [iconName]);
  

//   return <Ledger/>;

  return IconComponent ? IconComponent : <Ledger/>;
};

export default CryptoIcon;