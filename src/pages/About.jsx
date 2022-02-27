function About() {
    return (
        <div className="flex flex-col justify-between">
            <h1 className="text-4xl">Github Finder Project</h1>
            <p className="pr-36 my-5">This is a react application developed by Arkadipta Das for searching profiles and repos from Github. It is developed wth Tailwind CSS and Daisy UI. It makes use of React Router DOM for navigating between pages.</p>
            <div className="flex text-sm">
                <p><span className="text-blue-600">Version: </span>0.1.0</p>
            </div>
        </div>
    )
}

export default About;