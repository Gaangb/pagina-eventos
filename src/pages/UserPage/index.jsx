import { useEffect } from "react";
import { MyEvents } from "../../components/MyEvents";
import { SideBar } from "../../components/Side_Bar";
import { UserAccount } from "../../components/UserAccount";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import styles from "./styles.module.css";




export function UserPage() {


    const { showComponentsUserPage } = useEventsBuilder();
    const renderComponent = () => {
        if (showComponentsUserPage === "UserAccount") {
            return <UserAccount />;
        } else if (showComponentsUserPage === "MyEvents") {
            return <MyEvents />
        }
    }

    return (
        <div className={styles.container_geral}>
            < SideBar />
            {renderComponent()}
        </div>
    );
}