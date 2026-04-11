import PageHeader from "../components/pages/PageHeader";
import SectionHeader from "../components/pages/SectionHeader";
import TeamRoles from "../components/deliverables/TeamRoles";
import TeamContact from "../components/deliverables/TeamContact";
import TeamOperations from "../components/deliverables/TeamOperations";
import { PDS } from "../components/deliverables/PDS";
import BackButton from "../components/pages/BackButton";

export default function Deliverables() {
    return (
        <div className="m-10 flex flex-col gap-20">
            <PageHeader title="Deliverables" />

            <div>
                <SectionHeader title="Roles" />
                <TeamRoles />
            </div>

            <div>
                <SectionHeader title="Contact" />
                <TeamContact />
            </div>

            <div>
                <SectionHeader title="Operations" />
                <TeamOperations />
            </div>

            <div>
                <SectionHeader title="PDS" />
                <PDS />
            </div>

            <BackButton />
        </div>
    );
}
