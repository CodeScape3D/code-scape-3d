import { ContextMenuItem } from './ContextMenuItem';
import SettingsIcon from '../assets/settings.png';

export const UserContextMenu = () => {
  return (
    <div className="context-menu">
      <ContextMenuItem text="Configuración" icon={SettingsIcon} />
    </div>
  );
};
