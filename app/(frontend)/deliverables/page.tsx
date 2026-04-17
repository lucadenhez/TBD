import PageHeader from "../components/pages/PageHeader";
import SectionHeader from "../components/pages/SectionHeader";
import PDS from "../components/deliverables/PDS";
import BackButton from "../components/pages/BackButton";
import TeamRoster from "../components/deliverables/TeamRoster";
import TeamCharter from "../components/deliverables/TeamCharter";

export default function Deliverables() {
    return (
        <div className="min-h-full sm:mx-20 mx-7 sm:my-20 my-10 flex flex-col gap-20">
            <PageHeader title="Deliverables" />

            <div>
                <SectionHeader title="Team Roster" />
                <TeamRoster />
            </div>

            <div>
                <SectionHeader title="Team Charter" />
                <TeamCharter />
            </div>

            <div>
                <SectionHeader title="PDS" />
                <PDS />
            </div>

            <BackButton />
        </div>
    );
}
