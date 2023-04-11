import {useState} from "react";
import data from "./data";
import ProjectCategories from "./ProjectCategories";
import Projects from "./Projects";

const Portfolio = () =>{


    const [projects, setProjects] =useState(data);

    const categories = data.map(item => item.category);

    const uniqueCategories =["all", ...new Set(categories)];

    const filterProjectsHandler =(category) =>{

        if (category === "all")
        {
            setProjects(data);
            return;
        }

        const filterProjects =data.filter(project =>project.category === category);
        setProjects(filterProjects);

    }

    return(
        <>
        <section>
            <h2>Recent Projects</h2>
            <p>Check out some of the project which I created.</p>

            <div className="container portfolio_container">
                <ProjectCategories categories ={uniqueCategories} 
                onFilterProjects={filterProjectsHandler} />
                
                <Projects projects ={projects} />
            </div>
        </section>
        </>
    )
}

export default Portfolio;