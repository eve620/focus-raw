import ProjectList from "@/app/(container)/project/ProjectList";
import OperationBar from "@/app/(container)/project/OperationBar";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getProjectList from "@/app/actions/getProjectList";

export type Project = {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    job: string;
    stacks: string;
    describe: string;
    highlight: string;
    imageUrl: string;
    createdById: number;
}
export default async function Page() {
    const currentUser = await getCurrentUser()
    const projectList: Project[] = await getProjectList() || []
    return (
        <>
            {currentUser && <OperationBar/>}
            <ProjectList projectList={projectList}/>
        </>
    );
}
