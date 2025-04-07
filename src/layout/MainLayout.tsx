import { useEffect, useState } from "react";
import YouTrackIssues from "./components/YouTrackProjects";
import { fetchProjects } from "@/api/YoutrackApi";

const MainLayout = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const data = await fetchProjects();
            setProjects(data);
        }
        loadProjects();
    }, [])

    return (
        <div className="h-full p-6">
            <YouTrackIssues />
        </div>
    )
}

export default MainLayout