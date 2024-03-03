import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MyEvents } from "../../components/MyEvents";
import { SideBar } from "../../components/SideBar";
import { UserAccount } from "../../components/UserAccount";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import DehazeIcon from '@mui/icons-material/Dehaze';
import styles from "./styles.module.css";

export function UserPage() {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Define o limite para dispositivos móveis
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const { showComponentsUserPage, setCustomClassNavBar } = useEventsBuilder();

  useEffect(() => {
    setCustomClassNavBar("no_show_navbar");
  }, []);

  const renderComponent = () => {
    if (showComponentsUserPage === "UserAccount") {
      return <UserAccount />;
    } else if (showComponentsUserPage === "MyEvents") {
      return <MyEvents />;
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={styles.container_geral}>

      {sidebarVisible && <SideBar isMobile={isMobile} onClick={toggleSidebar}/>}
      {isMobile && (
        <button onClick={toggleSidebar} className={styles.button_sidebar}>
          {sidebarVisible ? <DehazeIcon /> : <DehazeIcon />}
        </button>
      )}
      {renderComponent()}
    </div>
  );
}
